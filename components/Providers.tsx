"use client";

import { HeroUIProvider } from "@heroui/system";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from "next-themes";

interface ProvidersProps {
  children: React.ReactNode;
  locale: string;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, locale, themeProps }: ProvidersProps): React.ReactNode {
  const router = useRouter();

  return (
    <>
      <VercelAnalytics />

      <HeroUIProvider locale={locale} navigate={router.push}>
        <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
      </HeroUIProvider>
    </>
  );
}
