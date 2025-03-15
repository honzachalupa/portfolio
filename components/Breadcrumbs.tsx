"use client";

import hygraph from "@/hygraph";
import {
  BreadcrumbItem,
  Breadcrumbs as HeroBreadcrumbs,
} from "@heroui/breadcrumbs";
import { Link } from "@heroui/link";
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

export function Breadcrumbs({ className }: BreadcrumbsProps) {
  const currentSlug = usePathname();
  const [breadcrumbs, setBreadcrumb] = useState<Breadcrumb[]>();

  const getBreadcrumb = async () => {
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
    <HeroBreadcrumbs
      itemClasses={{
        separator: "px-2",
      }}
      separator="/"
      className={clsx("self-start", className)}
    >
      {breadcrumbs?.map(({ slug, title }) => (
        <BreadcrumbItem key={slug}>
          <Link href={slug}>{title}</Link>
        </BreadcrumbItem>
      ))}
    </HeroBreadcrumbs>
  ) : null;
}
