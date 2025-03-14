import { ContentRenderer } from "@/components/ContentRenderer";
import hygraph from "@/hygraph";

const parseSlug = (slug: string | string[]): string => {
  if (typeof slug === "string") {
    return slug;
  }

  return "/" + slug.join("/");
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const paramsList = await params;
  const slug = parseSlug(paramsList.slug);
  const page = await hygraph.getPage(slug);

  console.log("Page data:", page);

  if (!page) {
    return <p>Page not found</p>;
  }

  return <ContentRenderer page={page} />;
}
