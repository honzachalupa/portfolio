import hygraphApi from "@/actions/hygraph";
import { Navigation, Providers } from "@/components";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { Metadata, Viewport } from "next";
import { cache } from "react";
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

const getConfig = cache(async () => {
  return await hygraphApi.getConfig();
});

const getPages = cache(async () => {
  return await hygraphApi.getPages();
});

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
        <Providers
          locale={locale}
          themeProps={{ attribute: "class", defaultTheme: "dark" }}
        >
          <Navigation config={config} pages={pages} />

          <main className="flex w-full h-auto items-center justify-center">
            <div className="flex px-6 gap-4 w-full flex-col flex-nowrap items-center justify-between max-w-[1280px]">
              <Breadcrumbs className="mt-2" />

              <div className="mt-5">
                {children}

                <Footer />
              </div>
            </div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
