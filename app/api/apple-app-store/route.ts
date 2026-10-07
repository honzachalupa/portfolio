import { getCachedApps } from "@/actions/appleAppStore";

export async function GET(): Promise<Response> {
  try {
    return Response.json(await getCachedApps());
  } catch (error) {
    console.error("[apple-app-store API] Upstream request failed:", error);
    return Response.json({ error: "Failed to fetch app information" }, { status: 502 });
  }
}
