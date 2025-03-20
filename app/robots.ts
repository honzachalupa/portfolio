import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const sitemap = process.env.NEXT_PUBLIC_BASE_URL + "/sitemap.xml";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap,
  };
}
