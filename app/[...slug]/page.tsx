import { ContentRenderer } from "@/components/ContentRenderer";
import hygraph from "@/actions/hygraph";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const parseSlug = (slug: string | string[]): string => {
  if (typeof slug === "string") {
    return slug;
  }

  return "/" + slug.join("/");
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const page = await hygraph.getPage(parseSlug(slug));

  return {
    title: ["Jan Chalupa portfolio", page?.title].filter(Boolean).join(" | "),
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<React.ReactNode> {
  const paramsList = await params;
  const slug = parseSlug(paramsList.slug);
  const page = await hygraph.getPage(slug);

  if (!page) {
    return (
      <div className="w-full h-[40vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl">Not Found</h2>
          <p className="text-sm">Could not find requested resource</p>

          <br />

          <Button as={Link} color="primary" variant="solid" href="/">
            Return home
          </Button>
        </div>
      </div>
    );
  }

  return <ContentRenderer page={page} />;
}
