import jwt from "jsonwebtoken";
import fetch from "node-fetch";

export interface AppleAppStoreAppInfo {
  description: string;
  keywords: string[];
}

export interface AppleAppStoreApp extends AppleAppStoreAppInfo {
  id: string;
  name: string;
  // icon: string;
  // screenshots: string[];
  url: string;
}

const ISSUER_ID = process.env.APPLE_ISSUER_ID;
const KEY_ID = process.env.APPLE_KEY_ID;
const privateKey = process.env.APPLE_PRIVATE_KEY!.replace(/\\n/g, "\n"); // Make sure the private key is properly formatted with newlines

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
  const response = await fetch(
    `https://api.appstoreconnect.apple.com/v1${endpoint}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  const { data } = (await response.json()) as { data: T };

  return data;
}

async function getApps(): Promise<AppleAppStoreApp[]> {
  try {
    const apps = await fetchApi<
      {
        id: string;
        attributes: {
          name: string;
        };
      }[]
    >("/apps");

    return apps.map(({ id, attributes: { name } }) => ({
      id,
      name,
      description: "",
      keywords: [],
      url: `https://apps.apple.com/app/id/${id}`,
    }));
  } catch (error) {
    console.error("Error fetching apps:", error);

    return [];
  }
}

async function getAppStoreVersions(
  appId: string
): Promise<AppleAppStoreAppInfo> {
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

    const appStoreVersionLocalizationsId =
      data[0].relationships.appStoreVersionLocalizations.data[0].id;

    const {
      attributes: { description, keywords },
    } = await fetchApi<{
      attributes: {
        description: string;
        keywords: string;
      };
    }>(`/appStoreVersionLocalizations/${appStoreVersionLocalizationsId}`);

    return { description, keywords: keywords?.split(", ") };
  } catch (error) {
    console.error("Error fetching version:", error);

    return { description: "", keywords: [] };
  }
}

export async function GET(): Promise<Response> {
  let apps = await getApps();

  apps = await Promise.all(
    apps.map(async (app) => {
      const { description, keywords } = await getAppStoreVersions(app.id);

      return {
        ...app,
        description,
        keywords,
      };
    })
  );

  return Response.json(apps);
}
