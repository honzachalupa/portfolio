"use client";

import { AppShell as MantineAppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Navigation } from "./Navigation";

export function AppShell({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  const [isOpen, { toggle }] = useDisclosure();

  return (
    <MantineAppShell
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !isOpen },
      }}
      padding="md"
    >
      <MantineAppShell.Navbar>
        <Navigation />
      </MantineAppShell.Navbar>

      <MantineAppShell.Main>{children}</MantineAppShell.Main>
    </MantineAppShell>
  );
}
