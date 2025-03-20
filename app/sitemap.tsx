import hygraphApi from "@/actions/hygraph";
import { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = await hygraphApi.getPages();

  if (!baseUrl) {
    console.error("Variable NEXT_PUBLIC_SITE_URL is not defined");

    return [];
  }

  return (
    pages?.map((page) => ({
      url: baseUrl + page.slug,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
    })) ?? []
  );
}
