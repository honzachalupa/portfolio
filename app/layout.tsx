import hygraphApi from "@/actions/hygraph";
import { Navigation, Providers } from "@/components";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { Viewport } from "next";
import { cache } from "react";
import "./globals.css";

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

const getConfig = cache(hygraphApi.getConfig);
const getPages = cache(hygraphApi.getPages);

export const preload = (): void => {
  void getConfig();
  void getPages();
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): Promise<React.ReactNode> {
  const locale = "en";

  const config = await getConfig();
  const pages = await getPages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <Providers locale={locale} themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="flex flex-col min-h-screen">
            <Navigation config={config} pages={pages} />

            <main className="flex-grow w-full py-4 flex flex-col">
              <div className="w-full max-w-[1280px] mx-auto px-6 flex flex-col">
                <Breadcrumbs className="mb-4" />

                {children}
              </div>
            </main>

            <Footer className="mt-auto" />
          </div>
        </Providers>
      </body>
    </html>
  );
}
