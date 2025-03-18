import { Navigation, Providers } from "@/components";
import { Breadcrumbs } from "@/components/Breadcrumbs";
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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactNode {
  const locale = "en";

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <Providers
          locale={locale}
          themeProps={{ attribute: "class", defaultTheme: "dark" }}
        >
          <Navigation />

          <main className="flex w-full h-auto items-center justify-center">
            <div className="flex px-6 gap-4 w-full flex-col flex-nowrap items-center justify-between max-w-[1280px]">
              <Breadcrumbs className="mt-2" />

              <div className="mt-5">{children}</div>
            </div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
