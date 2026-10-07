import { MetadataRoute } from "next";
import hygraphApi from "@/actions/hygraph";
import { SITE_URL } from "@/utils/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = await hygraphApi.getPages();

  return (
    pages
      ?.filter((page) => Boolean(page.slug))
      .map((page) => ({
        url: new URL(page.slug!, SITE_URL).href,
        lastModified: page.updatedAt,
        changeFrequency: "monthly",
      })) ?? []
  );
}
