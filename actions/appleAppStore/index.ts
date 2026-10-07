import "server-only";
import { unstable_cache } from "next/cache";
import { cache } from "react";
import { fetchAppleApps } from "./service";
import type { AppleAppStoreApp } from "./types";

const getCachedApps = cache(
  unstable_cache(fetchAppleApps, ["published-apple-apps-v1"], {
    revalidate: 3600,
    tags: ["apple-app-store"],
  }),
);

async function getApps(options?: { limit?: number }): Promise<AppleAppStoreApp[]> {
  const apps = await getCachedApps();
  return apps
    .filter(({ screenshots }) => screenshots.length > 0)
    .slice(0, options?.limit ?? apps.length);
}

export { getCachedApps };
export default { getApps };
