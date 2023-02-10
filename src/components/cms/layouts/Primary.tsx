import { ReactNode } from "react";
import { config } from "../../../../config";
import { Maybe } from "../../../types/hygraph";
import { TidioChat } from "../../TidioChat";
import { ColorOverlay } from "./components/ColorOverlay";
import { SectionContainer } from "./components/Container";
import { Footer } from "./components/Footer";
import { Head } from "./components/Head";

interface IProps {
    title?: Maybe<string> | undefined;
    children: ReactNode;
}

export const Layout_Primary: React.FC<IProps> = ({ children, ...props }) => {
    const title = [props.title, config.appName].filter(Boolean).join(" | ");

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
