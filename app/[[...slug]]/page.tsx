import hygraphApi from "@/actions/hygraph";
import { LoadingIndicator } from "@/components/LoadingIndicator";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import type { Metadata } from "next";
import { Suspense, lazy } from "react";

// Dynamically import the ContentRenderer
const ContentRenderer = lazy(() => import("@/components/ContentRenderer"));

interface PageProps {
  params: Promise<{ slug: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const parseSlug = (slug: string | string[] | undefined): string => {
  if (typeof slug === "string") {
    return slug;
  }

  return "/" + slug?.join("/");
};

// Generate static params for all pages at build time
export async function generateStaticParams(): Promise<{ slug: string[] }[]> {
  const pages = await hygraphApi.getPages();

  const paths =
    pages?.map((page) => ({
      slug: page.slug?.split("/").filter(Boolean) || [],
    })) || [];

  // Add root path with empty array
  paths.unshift({ slug: [] });

  return paths;
}

export const revalidate = 3600; // Revalidate every hour

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const parsedSlug = parseSlug(slug);

  const config = await hygraphApi.getConfig();
  const page = await hygraphApi.getPage(parsedSlug);

  return {
    title: [config?.seo?.name, page?.title].filter(Boolean).join(" | "),
    description: config?.seo?.description,
  };
}

// Separate component for the main content to enable streaming
async function PageContent({ slug }: { slug: string }): Promise<React.ReactNode> {
  const page = await hygraphApi.getPage(slug);

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

export default async function Page({ params }: PageProps): Promise<React.ReactNode> {
  const { slug } = await params;
  const parsedSlug = parseSlug(slug);

  return (
    <Suspense fallback={<LoadingIndicator />}>
      <PageContent slug={parsedSlug} />
    </Suspense>
  );
}
