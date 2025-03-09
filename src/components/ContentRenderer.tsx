import { Fragment, useContext } from "react";
import { ILayoutContentItem, Page } from "../types/cms";
import { Context } from "../utils/context";
import { checkMatchingLocales } from "../utils/locales";
import { Block_About } from "./cms/blocks/About";
import { Block_Contact } from "./cms/blocks/Contact";
import { Hero } from "./cms/blocks/Hero";
import { Block_Jobs } from "./cms/blocks/Jobs";
import { Block_Projects_iOS } from "./cms/blocks/Projects.iOS";
import { Block_Projects_web } from "./cms/blocks/Projects.web";
import { Block_Repositories } from "./cms/blocks/Repositories";
import { Footer } from "./cms/Footer";
import { Layout_Primary } from "./cms/layouts/Primary";
import { Navigation } from "./cms/Navigation";
import { SEO } from "./cms/SEO";

interface IProps {
    page: Page;
    cmsLocales: string[];
}

export const ContentRenderer: React.FC<IProps> = ({ page, cmsLocales }) => {
    const { localization } = useContext(Context);

    checkMatchingLocales(localization.locales, cmsLocales);

    const renderComponent = (props: ILayoutContentItem) => {
        const { __typename } = props;

        if (__typename === "Navigation") {
            return <Navigation {...props} />;
        }
        if (__typename === "Hero") {
            return <Hero {...props} />;
        }
        if (__typename === "Footer") {
            return <Footer {...props} />;
        }
        if (__typename === "SEO") {
            return <SEO title={page.title} {...props} />;
        }
        if (__typename === "Block_About") {
            return <Block_About {...props} />;
        }
        if (__typename === "Block_Jobs") {
            return <Block_Jobs {...props} />;
        }
        if (__typename === "Block_Projects") {
            return <Block_Projects_web {...props} />;
        }
        if (__typename === "Block_Projects_iOS") {
            return <Block_Projects_iOS {...props} />;
        }
        if (__typename === "Block_Repositories") {
            return <Block_Repositories {...props} />;
        }
        if (__typename === "Block_Contact") {
            return <Block_Contact {...props} />;
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

        return null;
    };

    return <div>{renderLayout(page)}</div>;
};
