"use client";

import { Button } from "@heroui/button";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { CgDarkMode } from "react-icons/cg";

const subscribe = (): (() => void) => () => {};
const getClientSnapshot = (): boolean => true;
const getServerSnapshot = (): boolean => false;

export function ThemeSwitcher(): React.ReactNode {
  const isClient = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
  const { theme, setTheme } = useTheme();

  const toggle = (): void => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (!isClient) {
    return null;
  }

  return (
    <Button
      variant="light"
      size="lg"
      startContent={<CgDarkMode />}
      title="Toggle theme"
      isIconOnly
      onPress={toggle}
    />
  );
}
