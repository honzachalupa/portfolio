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
import { FaRegEnvelope, FaRegFileLines } from "react-icons/fa6";
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
    <Navbar maxWidth="xl" isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle title="Toggle menu" className="md:hidden" />

        <NavbarBrand>
          <Link href="/" color="foreground">
            <User
              avatarProps={{
                src: config?.photo?.url,
              }}
              description={config?.jobDescription}
              name="Jan Chalupa"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-1" justify="center">
        <Items pages={pages} />
      </NavbarContent>

      <NavbarContent justify="end">
        {config?.cvFile && (
          <NavbarItem className="hidden md:inline">
            <Button
              as={Link}
              title="Download my CV"
              href={config.cvFile.url}
              variant="bordered"
              color="primary"
              startContent={<FaRegFileLines />}
            >
              <span className="hidden lg:inline">Download my CV</span>
              <span className="lg:hidden">CV</span>
            </Button>
          </NavbarItem>
        )}

        <NavbarItem className="inline lg:hidden">
          <Button
            as={Link}
            title="Contact me"
            href="/contact-me"
            color="primary"
            variant="solid"
            isIconOnly
            startContent={<FaRegEnvelope />}
          />
        </NavbarItem>

        <NavbarItem className="hidden lg:inline">
          <Button
            as={Link}
            title="Contact me"
            href="/contact-me"
            color="primary"
            variant="solid"
            startContent={<FaRegEnvelope />}
          >
            Contact me
          </Button>
        </NavbarItem>

        <NavbarItem className="hidden lg:inline">
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <Items pages={pages} variant="mobile" closeMenu={() => setIsMenuOpen(false)} />
      </NavbarMenu>
    </Navbar>
  );
}
