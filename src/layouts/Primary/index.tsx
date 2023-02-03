import Head from "next/head";
import { ReactNode } from "react";
import { config } from "../../../config";
import { TidioChat } from "../../components/TidioChat";
import { ColorOverlay } from "./components/ColorOverlay";
import { SectionContainer } from "./components/Container";
import { Footer } from "./components/Footer";

interface IProps {
    headline?: string;
    children: ReactNode;
}

export const LayoutPrimary: React.FC<IProps> = ({ headline, children }) => {
    const title = [headline, config.appName].filter(Boolean).join(" | ");

    return (
        <div className="overflow-hidden tracking-wider">
            <Head>
                <title>{title}</title>

                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />

                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta
                    name="apple-mobile-web-app-status-bar-style"
                    content="black-translucent"
                />
            </Head>

            {children}

            <Footer />
            <ColorOverlay />
            <TidioChat />
        </div>
    );
};

export { SectionContainer };
