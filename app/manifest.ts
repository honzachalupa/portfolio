import hygraphApi from "@/actions/hygraph";
import type { MetadataRoute } from "next";

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const config = await hygraphApi.getConfig();

  return {
    name: config?.seo?.name,
    short_name: config?.seo?.name.replace("portfolio", "").trim(),
    description: config?.seo?.description,
    start_url: "/",
    display: "standalone",
    background_color: "#000",
    theme_color: "#FFF",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
