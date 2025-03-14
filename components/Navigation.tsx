"use client";

import hygraph, { HygraphGetPagesData } from "@/hygraph";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/navbar";
import { Popover, PopoverContent, PopoverTrigger } from "@heroui/popover";
import { User } from "@heroui/user";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function Navigation() {
  const currentSlug = usePathname();

  const [pages, setPages] = useState<HygraphGetPagesData | null>();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const getPages = async () => {
    setPages(await hygraph.getPages());
  };

  useEffect(() => {
    getPages();
  }, []);

  return (
    <Navbar isBordered shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          title={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />

        <NavbarBrand>
          <User
            avatarProps={{
              src: "https://gravatar.com/avatar/a63559a63e80a9f5b311aa7e66aea50c",
            }}
            description="Full-stack Developer"
            name="Jan Chalupa"
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {pages?.map(({ slug, title }) => {
          const isActive = currentSlug === slug;

          return (
            <NavbarItem key={title} isActive={isActive}>
              <Link href={slug!} color={isActive ? "primary" : "foreground"}>
                {title}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Popover backdrop="blur">
            <PopoverTrigger>
              <Button color="primary" variant="flat">
                Contact me
              </Button>
            </PopoverTrigger>

            <PopoverContent className="w-[240px]">
              <div className="px-1 py-2 w-full">
                <h3>Contact me</h3>

                <Link
                  as={Button}
                  variant="flat"
                  size="sm"
                  href="mailto:janchalupa@outlook.cz"
                >
                  janchalupa@outlook.cz
                </Link>

                <Link
                  as={Button}
                  variant="flat"
                  size="sm"
                  href="tel:+420606789910"
                >
                  +420 606 789 910
                </Link>
              </div>
            </PopoverContent>
          </Popover>
        </NavbarItem>

        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {pages?.map(({ slug, title }) => {
          const isActive = currentSlug === slug;

          return (
            <NavbarMenuItem key={title} isActive={isActive}>
              <Link
                href={slug!}
                color={isActive ? "primary" : "foreground"}
                size="lg"
                className="w-full"
              >
                {title}
              </Link>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </Navbar>
  );
}
