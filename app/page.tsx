import hygraph from "@/actions/hygraph";
import { ContentRenderer } from "@/components/ContentRenderer";
import type { Metadata } from "next";
import { cache } from "react";

export const metadata: Metadata = {
  title: "Jan Chalupa portfolio",
};

export const preload = (): void => {
  void hygraph.getPage("/");
};

const fetchPage = cache(async () => {
  const data = await hygraph.getPage("/");

  return data;
});

export default async function Page(): Promise<React.ReactNode> {
  const page = await fetchPage();

  if (!page) {
    throw new Error("Page not found");
  }

  return <ContentRenderer page={page} />;
}
