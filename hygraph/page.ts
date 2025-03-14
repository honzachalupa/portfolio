import { HygraphGetPageData } from "@/app/api/hygraph/page/route";

export async function getPage(
  slug: string
): Promise<HygraphGetPageData | null> {
  const response = await fetch(
    `${
      process.env.NEXT_PUBLIC_API_URL
    }/api/hygraph/page?slug=${encodeURIComponent(slug)}`
  );

  if (!response.ok) {
    return null;
  }

  return response.json();
}
