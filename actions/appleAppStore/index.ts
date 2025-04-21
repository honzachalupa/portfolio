import { AppleAppStoreApp } from "@/app/api/apple-app-store/route";
import { get } from "@/utils/api";

async function getApps(
  options:
    | {
        limit?: number;
      }
    | undefined = undefined
): Promise<AppleAppStoreApp[] | undefined> {
  const { data, error } = await get<AppleAppStoreApp[]>("/api/apple-app-store", {
    tags: ["apple-app-store"],
  });

  if (error) {
    console.error("Failed to fetch apps:", error);
    return [];
  }

  return data ? data.slice(0, options?.limit ?? 100) : [];
}

const appleAppStoreApi = {
  getApps,
};

export default appleAppStoreApi;
