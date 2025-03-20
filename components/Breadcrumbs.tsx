"use client";

import hygraph from "@/actions/hygraph";
import { Anchor, Breadcrumbs as MantineBreadcrumbs } from "@mantine/core";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface BreadcrumbsProps {
  className?: string;
}

interface Breadcrumb {
  title: string;
  slug: string;
}

export function Breadcrumbs({ className }: BreadcrumbsProps): React.ReactNode {
  const currentSlug = usePathname();
  const [breadcrumbs, setBreadcrumb] = useState<Breadcrumb[]>();

  const getBreadcrumb = async (): Promise<void> => {
    const pages = await hygraph.getPages();

    const breadcrumbs = pages
      ?.map(({ slug, title }) => ({
        slug: slug!,
        title: title!,
      }))
      .filter(({ slug }) => slug !== "/" && currentSlug.includes(slug))
      // Sort breadcrumbs by path depth (number of segments)
      .sort((a, b) => {
        // Count the number of segments in each path
        const segmentsA = a.slug.split("/").filter(Boolean).length;
        const segmentsB = b.slug.split("/").filter(Boolean).length;

        // Sort by segment count (ascending order)
        return segmentsA - segmentsB;
      });

    setBreadcrumb(breadcrumbs);
  };

  useEffect(() => {
    getBreadcrumb();
  }, [currentSlug]);

  return breadcrumbs && breadcrumbs.length > 1 ? (
    <MantineBreadcrumbs separator="/" className={clsx("self-start", className)}>
      {breadcrumbs?.map(({ slug, title }) => (
        <Anchor key={slug} href={slug}>
          {title}
        </Anchor>
      ))}
    </MantineBreadcrumbs>
  ) : null;
}
