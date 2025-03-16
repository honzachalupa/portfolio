import hygraph from "@/actions/hygraph";
import { ContentRenderer } from "@/components/ContentRenderer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jan Chalupa portfolio",
};

export default async function Page(): Promise<React.ReactNode> {
  const page = await hygraph.getPage("/");

  if (!page) {
    return <p>Page not found</p>;
  }

  return <ContentRenderer page={page} />;
}
