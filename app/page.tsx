import hygraph from "@/actions/hygraph";
import { ContentRenderer } from "@/components/ContentRenderer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jan Chalupa portfolio",
};

export default async function Page(): Promise<React.ReactNode> {
  const page = await hygraph.getPage("/");

  if (!page) {
    // Instead of throwing an error, render a fallback UI
    console.error("Page data not found for homepage");
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Content Unavailable</h1>
        <p>Unable to load page content. Please check your CMS connection.</p>
      </div>
    );
  }

  return <ContentRenderer page={page} />;
}
