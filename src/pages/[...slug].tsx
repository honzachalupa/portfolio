import { GetStaticPaths, GetStaticProps } from "next";
import { CMSLocalesActions, CMSPagesActions } from "../actions/cms";
import { ContentRenderer } from "../components/ContentRenderer";
import { Page } from "../types/cms";
import { Context, ILocalization } from "../utils/context";
import { formatSlug, getPagesParams } from "../utils/slug";

const Slug = ({
    page,
    localization,
    cmsLocales,
}: {
    page: Page;
    localization: ILocalization;
    cmsLocales: string[];
}) => (
    <Context.Provider value={{ localization }}>
        {page ? <ContentRenderer page={page} cmsLocales={cmsLocales} /> : null}
    </Context.Provider>
);

export const getStaticPaths: GetStaticPaths = async () => {
    const pages = await CMSPagesActions.getAll();

    return {
        paths: getPagesParams(pages),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({
    params,
    locale,
    locales,
    defaultLocale,
}) => {
    const localization = {
        locale: locale!,
        locales: locales!,
        defaultLocale: defaultLocale!,
    };

    const slug = formatSlug(params!.slug);

    if (slug) {
        const page = await CMSPagesActions.findBySlug(slug, localization);
        const cmsLocales = await CMSLocalesActions.getAll();

        return {
            props: {
                page,
                localization,
                cmsLocales,
            },
            revalidate: 1,
        };
    }

    return {
        props: {
            page: null,
            localization,
        },
        revalidate: 1,
    };
};

export default Slug;
