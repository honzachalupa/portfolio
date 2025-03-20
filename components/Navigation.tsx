"use client";

import { HygraphGetConfigData } from "@/actions/hygraph/config";
import { HygraphGetPagesData } from "@/actions/hygraph/pages";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
} from "@heroui/navbar";
import { User } from "@heroui/user";
import { useState } from "react";
import { Items } from "./Navigation.Items";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function Navigation({
  config,
  pages,
}: {
  config: HygraphGetConfigData | null;
  pages: HygraphGetPagesData | null;
}): React.ReactNode {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <Navbar
      maxWidth="xl"
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          title={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />

        <NavbarBrand>
          <User
            avatarProps={{
              src: config?.photo?.url,
            }}
            description={config?.jobDescription}
            name="Jan Chalupa"
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-1" justify="center">
        <Items pages={pages} />
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            href={config?.cvFile?.url}
            variant="bordered"
            color="primary"
          >
            Download my CV
          </Button>
        </NavbarItem>

        <NavbarItem>
          <Button as={Link} href="/contact-me" color="primary" variant="solid">
            Contact me
          </Button>
        </NavbarItem>

        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <Items
          pages={pages}
          variant="mobile"
          closeMenu={() => setIsMenuOpen(false)}
        />
      </NavbarMenu>
    </Navbar>
  );
}
