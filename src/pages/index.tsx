import { GetServerSideProps } from "next/types";
import { CMSLocalesActions, CMSPagesActions } from "../actions/cms";
import { ContentRenderer } from "../components/ContentRenderer";
import { Page } from "../types/cms";
import { Context, ILocalization } from "../utils/context";

const Index = ({
    page,
    localization,
    cmsLocales,
}: {
    page: Page;
    localization: ILocalization;
    cmsLocales: string[];
}) => (
    <Context.Provider value={{ localization }}>
        <ContentRenderer page={page} cmsLocales={cmsLocales} />
    </Context.Provider>
);

export const getServerSideProps = (async ({
    locale,
    locales,
    defaultLocale,
}) => {
    const localization = {
        locale: locale!,
        locales: locales!,
        defaultLocale: defaultLocale!,
    };

    const page = await CMSPagesActions.findBySlug("/", localization);
    const cmsLocales = await CMSLocalesActions.getAll();

    return {
        props: {
            page,
            localization,
            cmsLocales,
        },
    };
}) satisfies GetServerSideProps<{
    page: Page | null;
    localization: ILocalization;
    cmsLocales: string[];
}>;

export default Index;
