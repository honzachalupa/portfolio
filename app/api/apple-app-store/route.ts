import { DEVICE_TYPE_ORDER, DeviceType, sortByDeviceType } from "@/utils/deviceTypes";
import jwt from "jsonwebtoken";
import fetch from "node-fetch";

export interface AppleAppStoreAppInfo {
  description: string;
  keywords?: string[];
}

interface InternalAppInfo extends AppleAppStoreAppInfo {
  localizationId: string;
}

interface ScreenshotSet {
  id: string;
  attributes: {
    screenshotDisplayType: string;
    locale: string;
  };
  relationships: {
    appScreenshots: {
      data: Array<{
        id: string;
        type: string;
      }>;
    };
  };
}

interface Screenshot {
  id: string;
  attributes: {
    imageAsset: {
      templateUrl: string;
      width: number;
      height: number;
    };
  };
}

export interface AppleAppStoreScreenshot {
  url: string;
  width: number;
  height: number;
  deviceType: DeviceType;
}

interface App {
  id: string;
  attributes: {
    name: string;
    iconAsset?: {
      templateUrl: string;
      width: number;
      height: number;
    };
  };
  relationships?: {
    appStoreVersions?: {
      data: Array<{
        id: string;
        type: string;
      }>;
    };
  };
}

export interface AppleAppStoreApp extends AppleAppStoreAppInfo {
  id: string;
  name: string;
  url: string;
  icon?: string;
  screenshots: AppleAppStoreScreenshot[];
  supportedDevices: string[];
}

const ISSUER_ID = process.env.APPLE_ISSUER_ID;
const KEY_ID = process.env.APPLE_KEY_ID;
// Make sure the private key is properly formatted with newlines
const privateKey = process.env.APPLE_PRIVATE_KEY!.replace(/\\n/g, "\n");

const token = jwt.sign(
  {
    iss: ISSUER_ID,
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 1200, // Max 20 minutes
    aud: "appstoreconnect-v1",
  },
  privateKey,
  {
    algorithm: "ES256",
    header: {
      alg: "ES256",
      kid: KEY_ID,
      typ: "JWT",
    },
  }
);

async function fetchApi<T>(endpoint: string): Promise<T> {
  const response = await fetch(`https://api.appstoreconnect.apple.com/v1${endpoint}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  const { data } = (await response.json()) as { data: T };

  return data;
}

async function getApps(): Promise<AppleAppStoreApp[]> {
  try {
    const apps = await fetchApi<App[]>("/apps?include=appStoreVersions");

    const appsWithIcons = await Promise.all(
      apps.map(async ({ id, attributes: { name } }) => {
        try {
          // Use the iTunes Search API to get app details including the icon
          const itunesResponse = await fetch(`https://itunes.apple.com/lookup?id=${id}`);
          const itunesData = (await itunesResponse.json()) as {
            results?: Array<{
              artworkUrl512?: string;
              artworkUrl100?: string;
            }>;
          };

          const appData = itunesData?.results?.[0];
          const iconUrl = appData?.artworkUrl512 || appData?.artworkUrl100 || undefined;

          return {
            id,
            name,
            description: "",
            keywords: [],
            url: `https://apps.apple.com/app/id/${id}`,
            icon: iconUrl,
            screenshots: [],
            supportedDevices: [],
          };
        } catch (error) {
          console.error(`Error fetching iTunes data for ${name}:`, error);

          return {
            id,
            name,
            description: "",
            keywords: [],
            url: `https://apps.apple.com/app/id/${id}`,
            screenshots: [],
            supportedDevices: [],
          };
        }
      })
    );

    return appsWithIcons;
  } catch (error) {
    console.error("Error fetching apps:", error);
    return [];
  }
}

async function getAppStoreVersions(appId: string): Promise<InternalAppInfo> {
  try {
    const data = await fetchApi<
      {
        relationships: {
          appStoreVersionLocalizations: {
            data: {
              id: string;
            }[];
          };
        };
      }[]
    >(`/apps/${appId}/appStoreVersions?include=appStoreVersionLocalizations`);

    const appStoreVersionLocalizationsId = data[0].relationships.appStoreVersionLocalizations.data[0].id;

    const response = await fetchApi<{
      attributes: {
        description: string;
        keywords: string;
      };
    }>(`/appStoreVersionLocalizations/${appStoreVersionLocalizationsId}`);

    const {
      attributes: { description, keywords },
    } = response;

    return {
      description,
      keywords: keywords?.split(", "),
      localizationId: appStoreVersionLocalizationsId,
    };
  } catch (error) {
    console.error("Error fetching version:", error);

    return { description: "", keywords: [], localizationId: "" };
  }
}

async function getAppScreenshots(appStoreVersionLocalizationId: string): Promise<Screenshot[]> {
  try {
    const screenshotSetsResponse = await fetchApi<{
      data: ScreenshotSet[];
    }>(`/appStoreVersionLocalizations/${appStoreVersionLocalizationId}/appScreenshotSets`);

    const allScreenshots: Screenshot[] = [];

    if (screenshotSetsResponse && Array.isArray(screenshotSetsResponse)) {
      for (const set of screenshotSetsResponse) {
        const screenshotsResponse = await fetchApi<{
          data: Screenshot[];
        }>(`/appScreenshotSets/${set.id}/appScreenshots`);

        if (screenshotsResponse && Array.isArray(screenshotsResponse)) {
          allScreenshots.push(...screenshotsResponse);
        }
      }
    }

    return allScreenshots;
  } catch (error) {
    console.error("[apple-app-store API] Error fetching screenshots:", error);
    return [];
  }
}

function processImageUrl(templateUrl: string, width: number, height: number): string {
  // Replace the placeholders with actual values
  return templateUrl.replace("{w}", width.toString()).replace("{h}", height.toString()).replace("{f}", "jpg"); // Using jpg as the default format
}

function getDeviceType(width: number, height: number): string {
  // iPhone dimensions (common aspect ratios)
  if (
    (width === 1170 && height === 2532) || // iPhone 13/14 portrait
    (width === 2532 && height === 1170) || // iPhone 13/14 landscape
    (width === 1179 && height === 2556) || // iPhone 14 Pro portrait
    (width === 2556 && height === 1179) || // iPhone 14 Pro landscape
    (width === 1290 && height === 2796) || // iPhone 14 Pro Max portrait
    (width === 2796 && height === 1290) || // iPhone 14 Pro Max landscape
    (width === 1125 && height === 2436) || // iPhone X/XS portrait
    (width === 2436 && height === 1125) || // iPhone X/XS landscape
    (width === 1242 && height === 2688) || // iPhone XS Max portrait
    (width === 2688 && height === 1242) || // iPhone XS Max landscape
    (width === 828 && height === 1792) || // iPhone XR portrait
    (width === 1792 && height === 828) || // iPhone XR landscape
    (width === 750 && height === 1334) || // iPhone 8 portrait
    (width === 1334 && height === 750) || // iPhone 8 landscape
    (width === 1242 && height === 2208) || // iPhone 8 Plus portrait
    (width === 2208 && height === 1242) || // iPhone 8 Plus landscape
    (width === 1320 && height === 2868) || // iPhone 12/13/14 Pro Max portrait
    (width === 2868 && height === 1320) // iPhone 12/13/14 Pro Max landscape
  ) {
    return "iPhone";
  }

  // iPad dimensions
  if (
    (width === 2048 && height === 2732) || // iPad Pro 12.9" portrait
    (width === 2732 && height === 2048) || // iPad Pro 12.9" landscape
    (width === 1668 && height === 2388) || // iPad Pro 11" portrait
    (width === 2388 && height === 1668) || // iPad Pro 11" landscape
    (width === 1640 && height === 2360) || // iPad Air portrait
    (width === 2360 && height === 1640) || // iPad Air landscape
    (width === 1620 && height === 2160) || // iPad portrait
    (width === 2160 && height === 1620) || // iPad landscape
    (width === 2064 && height === 2752) || // iPad Pro 13" portrait
    (width === 2752 && height === 2064) // iPad Pro 13" landscape
  ) {
    return "iPad";
  }

  // Apple Watch dimensions
  if (
    (width === 410 && height === 502) || // Apple Watch Ultra 2
    (width === 396 && height === 484) || // Apple Watch Series 8
    (width === 394 && height === 484) // Apple Watch SE
  ) {
    return "Apple Watch";
  }

  // Mac dimensions
  if (
    (width === 2560 && height === 1600) || // MacBook Pro 13"
    (width === 1600 && height === 2560) || // MacBook Pro 13" (rotated)
    (width === 3456 && height === 2234) || // MacBook Pro 16"
    (width === 2234 && height === 3456) || // MacBook Pro 16" (rotated)
    (width === 2880 && height === 1800) || // MacBook Pro Retina 15"
    (width === 1800 && height === 2880) || // MacBook Pro Retina 15" (rotated)
    (width === 3024 && height === 1964) || // MacBook Pro 14" M1/M2
    (width === 1964 && height === 3024) // MacBook Pro 14" M1/M2 (rotated)
  ) {
    return "Mac";
  }

  // If dimensions don't match known devices, try to guess based on aspect ratio
  const aspectRatio = width / height;
  if (aspectRatio >= 0.45 && aspectRatio <= 0.5) {
    return "Apple Watch";
  } else if (aspectRatio >= 0.45 && aspectRatio <= 0.55) {
    // Updated iPhone range
    return "iPhone";
  } else if (aspectRatio >= 0.7 && aspectRatio <= 0.8) {
    return "iPad";
  } else if (aspectRatio >= 0.6 && aspectRatio <= 0.7) {
    return "Mac";
  }

  return "iPhone";
}

function getSupportedDevices(screenshots: Screenshot[]): string[] {
  const devices = new Set<string>();

  screenshots.forEach((screenshot) => {
    const deviceType = getDeviceType(screenshot.attributes.imageAsset.width, screenshot.attributes.imageAsset.height);

    if (deviceType !== "Unknown") {
      devices.add(deviceType);
    }
  });

  // Sort devices according to the same order as screenshots
  return Array.from(devices).sort((a, b) => {
    const aIndex = DEVICE_TYPE_ORDER.indexOf(a as DeviceType);
    const bIndex = DEVICE_TYPE_ORDER.indexOf(b as DeviceType);

    // If both types are in our order list, sort by their index
    if (aIndex !== -1 && bIndex !== -1) {
      return aIndex - bIndex;
    }
    // If only a is in our order list, it comes first
    if (aIndex !== -1) {
      return -1;
    }
    // If only b is in our order list, it comes first
    if (bIndex !== -1) {
      return 1;
    }
    // If neither is in our order list, sort alphabetically
    return a.localeCompare(b);
  });
}

export async function GET(): Promise<Response> {
  try {
    const apps = await getApps();

    const appInfoPromises = apps.map(async (app) => {
      const versions = await getAppStoreVersions(app.id);
      const screenshots = await getAppScreenshots(versions.localizationId);

      const processedScreenshots = screenshots.map((screenshot) => {
        const width = screenshot.attributes.imageAsset.width;
        const height = screenshot.attributes.imageAsset.height;
        const deviceType = getDeviceType(width, height) as DeviceType;

        return {
          url: processImageUrl(screenshot.attributes.imageAsset.templateUrl, width, height),
          width,
          height,
          deviceType,
        };
      });

      return {
        ...app,
        ...versions,
        screenshots: sortByDeviceType(processedScreenshots),
        supportedDevices: getSupportedDevices(screenshots),
      };
    });

    const appsWithInfo = await Promise.all(appInfoPromises);

    return Response.json(appsWithInfo);
  } catch (error) {
    console.error("[apple-app-store API]:", error);

    return Response.json({ error: "Failed to fetch app information" }, { status: 500 });
  }
}
