import "server-only";
import jwt from "jsonwebtoken";
import { type DeviceType, sortByDeviceType } from "@/utils/deviceTypes";
import type { AppleAppStoreApp, AppleAppStoreScreenshot } from "./types";

interface Resource<T> {
  id: string;
  attributes: T;
}
interface ApiPage<T> {
  data: T[];
  links?: { next?: string | null };
}
interface AppAttributes {
  name: string;
}
interface VersionAttributes {
  appStoreState: string;
  createdDate?: string;
}
interface LocalizationAttributes {
  locale: string;
  description: string;
  keywords?: string;
}
interface ScreenshotSetAttributes {
  screenshotDisplayType: string;
}
interface ScreenshotAttributes {
  imageAsset?: { templateUrl: string; width: number; height: number };
}
const API_ORIGIN = "https://api.appstoreconnect.apple.com";

function createToken(): string {
  const issuer = process.env.APPLE_ISSUER_ID;
  const keyId = process.env.APPLE_KEY_ID;
  const privateKey = process.env.APPLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
  if (!issuer || !keyId || !privateKey)
    throw new Error("App Store Connect credentials are missing");
  return jwt.sign({ iss: issuer, aud: "appstoreconnect-v1" }, privateKey, {
    algorithm: "ES256",
    expiresIn: "20m",
    keyid: keyId,
  });
}

async function fetchPages<T>(endpoint: string, token: string): Promise<Resource<T>[]> {
  let next: string | null = new URL(`/v1${endpoint}`, API_ORIGIN).href;
  const resources: Resource<T>[] = [];
  const visited = new Set<string>();
  while (next) {
    const url = new URL(next);
    if (url.origin !== API_ORIGIN || visited.has(url.href))
      throw new Error("Invalid App Store Connect pagination URL");
    visited.add(url.href);
    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
      cache: "no-store",
      signal: AbortSignal.timeout(15000),
    });
    if (!response.ok) throw new Error(`App Store Connect request failed (${response.status})`);
    const page = (await response.json()) as ApiPage<Resource<T>>;
    if (!Array.isArray(page.data)) throw new Error("Invalid App Store Connect response");
    resources.push(...page.data);
    next = page.links?.next ? new URL(page.links.next, url).href : null;
  }
  return resources;
}

function screenshotDevice(displayType: string): DeviceType {
  if (displayType.includes("IPAD")) return "iPad";
  if (displayType.includes("WATCH")) return "Apple Watch";
  if (displayType.includes("DESKTOP")) return "Mac";
  if (displayType.includes("APPLE_TV")) return "Apple TV";
  if (displayType.includes("VISION")) return "Apple Vision Pro";
  return "iPhone";
}

async function loadApp(
  app: Resource<AppAttributes>,
  token: string,
): Promise<AppleAppStoreApp | null> {
  const versions = await fetchPages<VersionAttributes>(
    `/apps/${app.id}/appStoreVersions?limit=200`,
    token,
  );
  const version = versions
    .filter(
      ({ attributes }) =>
        attributes.appStoreState === "READY_FOR_SALE" ||
        attributes.appStoreState === "READY_FOR_DISTRIBUTION",
    )
    .sort((a, b) =>
      (b.attributes.createdDate ?? "").localeCompare(a.attributes.createdDate ?? ""),
    )[0];
  // Unreleased and removed apps are not part of the public portfolio.
  if (!version) return null;
  const localizations = await fetchPages<LocalizationAttributes>(
    `/appStoreVersions/${version.id}/appStoreVersionLocalizations?limit=200`,
    token,
  );
  const preference = ["cs", "en-US", "en-GB"];
  const localization = localizations.sort((a, b) => {
    const rank = (locale: string): number => {
      const index = preference.indexOf(locale);
      return index < 0 ? preference.length : index;
    };
    return (
      rank(a.attributes.locale) - rank(b.attributes.locale) ||
      a.attributes.locale.localeCompare(b.attributes.locale)
    );
  })[0];
  if (!localization) throw new Error(`Published app ${app.id} has no localization`);
  const sets = await fetchPages<ScreenshotSetAttributes>(
    `/appStoreVersionLocalizations/${localization.id}/appScreenshotSets?limit=200`,
    token,
  );
  const screenshotGroups = await Promise.all(
    sets.map(async (set) => {
      const screenshots = await fetchPages<ScreenshotAttributes>(
        `/appScreenshotSets/${set.id}/appScreenshots?limit=200`,
        token,
      );
      return screenshots.flatMap(({ attributes }): AppleAppStoreScreenshot[] => {
        const image = attributes.imageAsset;
        if (!image) return [];
        return [
          {
            url: image.templateUrl
              .replace("{w}", String(image.width))
              .replace("{h}", String(image.height))
              .replace("{f}", "jpg"),
            width: image.width,
            height: image.height,
            deviceType: screenshotDevice(set.attributes.screenshotDisplayType),
          },
        ];
      });
    }),
  );
  const screenshots = sortByDeviceType(screenshotGroups.flat());
  const iconResponse = await fetch(`https://itunes.apple.com/lookup?id=${app.id}&country=cz`, {
    cache: "no-store",
    signal: AbortSignal.timeout(15000),
  });
  if (!iconResponse.ok) throw new Error(`iTunes lookup failed (${iconResponse.status})`);
  const iconData = (await iconResponse.json()) as {
    results?: { artworkUrl512?: string; artworkUrl100?: string }[];
  };
  return {
    id: app.id,
    name: app.attributes.name,
    description: localization.attributes.description,
    keywords: (localization.attributes.keywords ?? "")
      .split(",")
      .map((value) => value.trim())
      .filter(Boolean),
    url: `https://apps.apple.com/app/id${app.id}`,
    icon: iconData.results?.[0]?.artworkUrl512 ?? iconData.results?.[0]?.artworkUrl100,
    screenshots,
    supportedDevices: [...new Set(screenshots.map(({ deviceType }) => deviceType))],
  };
}

export async function fetchAppleApps(): Promise<AppleAppStoreApp[]> {
  // Each uncached operation receives a fresh token, including after a warm instance's previous token expires.
  const token = createToken();
  const apps = await fetchPages<AppAttributes>("/apps?limit=200", token);
  const results = await Promise.all(apps.map((app) => loadApp(app, token)));
  return results.filter((app): app is AppleAppStoreApp => app !== null);
}
