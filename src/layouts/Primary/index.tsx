import { ReactNode } from "react";
import { config } from "../../../config";
import { TidioChat } from "../../components/TidioChat";
import { ColorOverlay } from "./components/ColorOverlay";
import { SectionContainer } from "./components/Container";
import { Footer } from "./components/Footer";
import { Head } from "./components/Head";

interface IProps {
    headline?: string;
    children: ReactNode;
}

export const LayoutPrimary: React.FC<IProps> = ({ headline, children }) => {
    const title = [headline, config.appName].filter(Boolean).join(" | ");

    return (
        <>
            <Head title={title} />

            <div className="overflow-hidden tracking-wider">
                {children}

                <Footer />
                <ColorOverlay />
                <TidioChat />
            </div>
        </>
    );
};

export { SectionContainer };
