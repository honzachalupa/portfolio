import Head from "next/head";
import { ReactNode, useEffect, useState } from "react";
import { config } from "../../../config";
import { TidioChat } from "../../components/TidioChat";
import { SectionContainer } from "./components/Container";
import { Footer } from "./components/Footer";

interface IProps {
    headline?: string;
    children: ReactNode;
}

const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState<{
        distance: number;
        progress: number;
    }>({
        distance: 0,
        progress: 0,
    });

    useEffect(() => {
        const updatePosition = () => {
            setScrollPosition({
                distance: window.pageYOffset,
                progress: Math.round(
                    (100 /
                        (document.body.scrollHeight -
                            document.documentElement.clientHeight)) *
                        window.pageYOffset
                ),
            });
        };

        window.addEventListener("scroll", updatePosition);

        updatePosition();

        return () => window.removeEventListener("scroll", updatePosition);
    }, []);

    return scrollPosition;
};

export const LayoutPrimary: React.FC<IProps> = ({ headline, children }) => {
    const { progress } = useScrollPosition();

    const scrollProgress = Math.round(progress * 10) / 10;

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

            <div
                className="fixed left-0 top-0 h-screen w-screen bg-[#0a192f]"
                style={{ opacity: scrollProgress / 100 }}
            />

            <div className="z-1 relative">{children}</div>

            <Footer />

            <TidioChat />
        </div>
    );
};

export { SectionContainer };
