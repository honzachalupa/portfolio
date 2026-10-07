import { Viewport } from "next";
import hygraphApi from "@/actions/hygraph";
import { Navigation, Providers } from "@/components";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const viewport: Viewport = {
  minimumScale: 1,
  initialScale: 1,
  width: "device-width",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): Promise<React.ReactNode> {
  const locale = "en";

  const [config, pages] = await Promise.all([hygraphApi.getConfig(), hygraphApi.getPages()]);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <Providers locale={locale} themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="flex flex-col min-h-screen">
            <Navigation
              config={
                config
                  ? {
                      jobDescription: config.jobDescription,
                      photo: config.photo,
                      cvFile: config.cvFile,
                    }
                  : null
              }
              pages={pages}
            />

            <main className="grow w-full py-4 flex flex-col">
              <div className="w-full max-w-[1280px] mx-auto px-6 flex flex-col">
                <Breadcrumbs className="mb-4" pages={pages} />

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
