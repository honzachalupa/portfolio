import { Providers } from "@/components";
import { AppShell } from "@/components/AppShell";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ColorSchemeScript, mantineHtmlProps } from "@mantine/core";
import { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jan Chalupa portfolio",
  description: "",
};

export const viewport: Viewport = {
  minimumScale: 1,
  initialScale: 1,
  width: "device-width",
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactNode {
  const locale = "en";

  return (
    <html lang={locale} {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>

      <body>
        <Providers
          locale={locale}
          themeProps={{ attribute: "class", defaultTheme: "dark" }}
        >
          <AppShell>
            <Breadcrumbs className="mt-2" />

            {children}
          </AppShell>
        </Providers>
      </body>
    </html>
  );
}
