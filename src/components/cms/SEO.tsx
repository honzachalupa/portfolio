import { NextSeo } from "next-seo";
import config from "../../../config";
import { ISEO, Maybe } from "../../types/cms";

interface IProps extends ISEO {
    title: Maybe<string> | undefined;
}

export const SEO: React.FC<IProps> = ({ title, description, keywords }) => {
    title = [title, config.name].filter(Boolean).join(" | ");

    return (
        <NextSeo
            title={title}
            description={description}
            additionalMetaTags={[
                {
                    property: "viewport",
                    content: "width=device-width, initial-scale=1",
                },
                {
                    property: "mobile-web-app-capable",
                    content: "yes",
                },
                {
                    property: "apple-mobile-web-app-status-bar-style",
                    content: "black-translucent",
                },
                {
                    property: "keywords",
                    content: keywords,
                },
                {
                    property: "author",
                    content: "Jan Chalupa",
                },
            ]}
        />
    );
};
