import type { Metadata } from "next";
import { notFound } from "next/navigation";
import hygraphApi from "@/actions/hygraph";
import { ContentRenderer } from "@/components/ContentRenderer";
import { SITE_URL } from "@/utils/site";

type Props = { params: Promise<{ slug?: string[] }> };
const parseSlug = (slug?: string[]): string => "/" + (slug?.join("/") ?? "");

export async function generateStaticParams(): Promise<{ slug: string[] }[]> {
  const pages = await hygraphApi.getPages();
  return pages.flatMap(({ slug }) => (slug ? [{ slug: slug.split("/").filter(Boolean) }] : []));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = parseSlug((await params).slug);
  const [config, page] = await Promise.all([hygraphApi.getConfig(), hygraphApi.getPage(slug)]);
  if (!page) notFound();
  const title = [config?.seo?.name, page.title].filter(Boolean).join(" | ");
  const description = config?.seo?.description;
  return {
    title,
    description,
    alternates: { canonical: new URL(slug, SITE_URL).href },
    openGraph: { title, description, url: new URL(slug, SITE_URL).href, type: "website" },
    twitter: { card: "summary", title, description },
  };
}

export default async function Page({ params }: Props): Promise<React.ReactNode> {
  const page = await hygraphApi.getPage(parseSlug((await params).slug));
  if (!page) notFound();
  return <ContentRenderer page={page} />;
}
