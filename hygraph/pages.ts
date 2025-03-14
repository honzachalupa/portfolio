import { HygraphGetPagesData } from "@/app/api/hygraph/pages/route";

export async function getPages(): Promise<HygraphGetPagesData | null> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/hygraph/pages`
  );

  if (!response.ok) {
    return null;
  }

  return response.json();
}
