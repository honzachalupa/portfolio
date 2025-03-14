import { ContentRenderer } from "@/components/ContentRenderer";
import hygraph from "@/hygraph";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

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
