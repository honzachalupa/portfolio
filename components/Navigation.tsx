"use client";

import hygraph, { HygraphGetPagesData } from "@/hygraph";
import { Button } from "@heroui/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/dropdown";
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
import { ButtonVariantProps } from "@heroui/theme";
import { User } from "@heroui/user";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { ThemeSwitcher } from "./ThemeSwitcher";

function Items({
  variant = "desktop",
  closeMenu,
}: {
  variant?: "desktop" | "mobile";
  closeMenu?: () => void;
}) {
  const currentSlug = usePathname();
  const [pages, setPages] = useState<HygraphGetPagesData | null>();

  const getPages = async () => {
    const pages = await hygraph.getPages();

    setPages(pages?.filter(({ isHidden }) => !isHidden));
  };

  const getActiveButtonStyle = (isActive: boolean): ButtonVariantProps => ({
    color: isActive ? "primary" : "default",
    variant: isActive ? "flat" : "light",
  });

  useEffect(() => {
    getPages();
  }, []);

  const ItemComponent = variant === "desktop" ? NavbarItem : NavbarMenuItem;

  return pages?.map(({ slug, title, nestedPages }) => {
    const isActive = currentSlug === slug;

    if (nestedPages?.length) {
      return (
        <Dropdown key={title}>
          <ItemComponent isActive={isActive}>
            <DropdownTrigger>
              <Button
                {...getActiveButtonStyle(isActive)}
                as={Link}
                endContent={<FaChevronDown />}
                variant="light"
              >
                {title}
              </Button>
            </DropdownTrigger>
          </ItemComponent>

          <DropdownMenu>
            {nestedPages.map(({ slug, title }) => {
              const isActive = currentSlug === slug;

              return (
                <DropdownItem key={slug!}>
                  <Link
                    href={slug!}
                    color={isActive ? "primary" : "foreground"}
                    size="sm"
                    onPress={closeMenu}
                  >
                    {title}
                  </Link>
                </DropdownItem>
              );
            })}
          </DropdownMenu>
        </Dropdown>
      );
    }

    return (
      <NavbarMenuItem key={title} isActive={isActive}>
        <Button
          {...getActiveButtonStyle(isActive)}
          as={Link}
          href={slug!}
          onPress={closeMenu}
        >
          {title}
        </Button>
      </NavbarMenuItem>
    );
  });
}

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const closeMenu = () => {
    console.log("closeMenu");
    setIsMenuOpen(false);
  };

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
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

      <NavbarContent className="hidden sm:flex gap-1" justify="center">
        <Items />
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Popover backdrop="blur">
            <PopoverTrigger>
              <Button color="primary" variant="solid">
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
        <Items variant="mobile" closeMenu={closeMenu} />
      </NavbarMenu>
    </Navbar>
  );
}
