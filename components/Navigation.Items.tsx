import { HygraphGetPagesData } from "@/actions/hygraph/pages";
import { Button } from "@heroui/button";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@heroui/dropdown";
import { Link } from "@heroui/link";
import { NavbarItem, NavbarMenuItem } from "@heroui/navbar";
import { ButtonVariantProps } from "@heroui/theme";
import { usePathname } from "next/navigation";
import { FaChevronDown } from "react-icons/fa6";

export function Items({
  pages,
  variant = "desktop",
  closeMenu,
}: {
  pages: HygraphGetPagesData | null;
  variant?: "desktop" | "mobile";
  closeMenu?: () => void;
}): React.ReactNode {
  const currentSlug = usePathname();

  const pagesFiltered = pages?.filter(({ isHidden }) => !isHidden);

  const getActiveButtonStyle = (isActive: boolean): ButtonVariantProps => ({
    color: isActive ? "primary" : "default",
    variant: isActive ? "flat" : "light",
  });

  const ItemComponent = variant === "desktop" ? NavbarItem : NavbarMenuItem;

  return pagesFiltered?.map(({ slug, title, nestedPages }) => {
    const isActive = currentSlug === slug;

    if (nestedPages?.length) {
      return (
        <Dropdown key={title} backdrop="blur">
          <ItemComponent isActive={isActive}>
            <DropdownTrigger>
              <Button
                {...getActiveButtonStyle(isActive)}
                title={title!}
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
                <DropdownItem key={slug!} textValue={title!}>
                  <Link
                    href={slug!}
                    title={title!}
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
          title={title!}
          onPress={closeMenu}
        >
          {title}
        </Button>
      </NavbarMenuItem>
    );
  });
}
