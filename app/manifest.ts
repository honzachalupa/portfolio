import hygraphApi from "@/actions/hygraph";
import type { MetadataRoute } from "next";

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const config = await hygraphApi.getConfig();

  return {
    name: config?.seo?.name,
    short_name: config?.seo?.name,
    description: config?.seo?.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  };
}
