import { ContentRenderer } from "@/components/ContentRenderer";
import hygraph from "@/hygraph";

export default async function Page() {
  const page = await hygraph.getPage("/");

  if (!page) {
    throw new Error("Page not found");
  }

  return <ContentRenderer page={page} />;
}
