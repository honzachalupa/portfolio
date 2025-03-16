import { AppleAppStoreApp } from "@/app/api/apple-app-store/route";

async function getApps(
  options:
    | {
        limit?: number;
      }
    | undefined = undefined
): Promise<AppleAppStoreApp[] | undefined> {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/api/apple-app-store"
    );

    if (!response.ok) {
      console.error(
        "Error fetching apps:",
        response.status,
        response.statusText
      );

      return [];
    }

    const data = (await response.json()) as AppleAppStoreApp[];

    return data
      .filter(({ description }) => description)
      .slice(0, options?.limit ?? 100);
  } catch (error) {
    console.error("Failed to fetch apps:", error);
  }
}

const appleAppStoreApi = {
  getApps,
};

export default appleAppStoreApi;
