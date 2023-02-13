import { Page } from "../types/cms";

export const getPagesParams = (pages: Page[]) => {
    const pathsFiltered = pages.filter(({ slug }) => slug !== "/");

    return pathsFiltered.map(({ slug }) => ({
        params: {
            slug: slug.replace("/", "").split("/"),
        },
    }));
};

export const formatSlug = (slug: string | string[] | undefined) =>
    slug ? "/" + (typeof slug === "object" ? slug.join("/") : slug) : null;
