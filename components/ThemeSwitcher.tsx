"use client";

import { Button } from "@heroui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { CgDarkMode } from "react-icons/cg";

export function ThemeSwitcher(): React.ReactNode {
  const [isClient, setIsClient] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggle = (): void => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <Button
      variant="light"
      size="lg"
      startContent={<CgDarkMode />}
      isIconOnly
      onPress={toggle}
    />
  );
}
