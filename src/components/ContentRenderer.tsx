import { Fragment } from "react";
import { ILayoutContent, Page } from "../types/hygraph";
import { Block_About } from "./cms/blocks/About";
import { Hero } from "./cms/blocks/Hero";
import { Block_Jobs } from "./cms/blocks/Jobs";
import { Block_Projects } from "./cms/blocks/Projects";
import { Block_Repositories } from "./cms/blocks/Repositories";
import { Layout_Primary } from "./cms/layouts/Primary";

interface IProps {
    page: Page;
}

export const ContentRenderer: React.FC<IProps> = ({ page }) => {
    const renderComponent = (props: ILayoutContent) => {
        const { __typename } = props;

        if (__typename === "Hero") {
            return <Hero {...props} />;
        }
        if (__typename === "Block_About") {
            return <Block_About {...props} />;
        }
        if (__typename === "Block_Jobs") {
            return <Block_Jobs {...props} />;
        }
        if (__typename === "Block_Projects") {
            return <Block_Projects {...props} />;
        }
        if (__typename === "Block_Repositories") {
            return <Block_Repositories {...props} />;
        }

        console.error("Component not found:", __typename);

        return null;
    };

    const renderLayout = ({ title, layout: { __typename, content } }: Page) => {
        const children = content.map((data, i) => (
            <Fragment key={i}>{renderComponent(data)}</Fragment>
        ));

        if (__typename === "Layout_Primary") {
            return <Layout_Primary title={title}>{children}</Layout_Primary>;
        }

        console.error("Layout not found:", __typename);
    };

    return <div>{renderLayout(page)}</div>;
};
