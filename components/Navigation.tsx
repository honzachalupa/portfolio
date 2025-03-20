"use client";

import hygraph from "@/actions/hygraph";
import { HygraphGetPagesData } from "@/actions/hygraph/pages";
import { Group, NavLink, ScrollArea } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconGauge } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Navigation(): React.ReactNode {
  const currentSlug = usePathname();
  const [pages, setPages] = useState<HygraphGetPagesData | null>();
  const [opened, { toggle }] = useDisclosure(false);

  const getPages = async (): Promise<void> => {
    const pages = await hygraph.getPages();

    setPages(pages?.filter(({ isHidden }) => !isHidden));
  };

  useEffect(() => {
    getPages();
  }, []);

  function Items({ items }: { items: HygraphGetPagesData }): React.ReactNode {
    return items.map(({ title, slug, nestedPages }) => (
      <NavLink
        key={title}
        component={Link}
        label={title}
        href={slug!}
        leftSection={<IconGauge size={16} stroke={1.5} />}
        defaultOpened
        active={currentSlug === slug}
      >
        {nestedPages?.length > 0 && <Items items={nestedPages} />}
      </NavLink>
    ));
  }

  return (
    <nav>
      <div>
        <Group justify="space-between">
          <p>Logo</p>
          <p>Jan Chalupa</p>
        </Group>
      </div>

      <ScrollArea>{pages && <Items items={pages} />}</ScrollArea>
    </nav>
  );
}
