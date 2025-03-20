"use client";

import { HeroUIProvider } from "@heroui/system";
import {
  createTheme,
  MantineColorsTuple,
  MantineProvider,
} from "@mantine/core";
import "@mantine/core/styles.css";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps,
} from "next-themes";
import { useRouter } from "next/navigation";

interface ProvidersProps {
  children: React.ReactNode;
  locale: string;
  themeProps?: ThemeProviderProps;
}

const colors: MantineColorsTuple = [
  "#ffe9ff",
  "#fed1fd",
  "#faa1f6",
  "#f66ef1",
  "#f243eb",
  "#f028e9",
  "#f018e8",
  "#d609ce",
  "#bf00b9",
  "#a700a1",
];

const theme = createTheme({
  colors: {
    colors,
  },
});

export function Providers({
  children,
  locale,
  themeProps,
}: ProvidersProps): React.ReactNode {
  const router = useRouter();

  return (
    <>
      <VercelAnalytics />

      <MantineProvider theme={theme}>
        <HeroUIProvider locale={locale} navigate={router.push}>
          <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
        </HeroUIProvider>
      </MantineProvider>
    </>
  );
}
