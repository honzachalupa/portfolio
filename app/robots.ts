import type { MetadataRoute } from "next";
import { SITE_URL } from "@/utils/site";

export default function robots(): MetadataRoute.Robots {
  const sitemap = SITE_URL + "/sitemap.xml";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap,
  };
}
