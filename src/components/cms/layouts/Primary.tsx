import { ReactNode } from "react";
import config from "../../../../config";
import { Maybe } from "../../../types/cms";
import { TidioChat } from "../../TidioChat";
import { ColorOverlay } from "./components/ColorOverlay";
import { SectionContainer } from "./components/Container";

interface IProps {
    title?: Maybe<string> | undefined;
    children: ReactNode;
}

export const Layout_Primary: React.FC<IProps> = ({ title, children }) => {
    title = [title, config.name].filter(Boolean).join(" | ");

    return (
        <div className="overflow-hidden tracking-wider">
            {children}

            <ColorOverlay />
            <TidioChat />
        </div>
    );
};

export { SectionContainer };
