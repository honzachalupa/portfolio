import { ContentRenderer } from "@/components/ContentRenderer";
import hygraph from "@/hygraph";

export default async function Page() {
  const page = await hygraph.getPage("/");

  console.log("Page data:", page);

  if (!page) {
    return <p>Page not found</p>;
  }

  return <ContentRenderer page={page} />;
}
