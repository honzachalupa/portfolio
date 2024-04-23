import { gql } from "@apollo/client";
import { Page } from "../../types/cms";
import { apollo } from "../../utils/apollo";
import { ILocalization } from "../../utils/context";

export const getAll = async () => {
    const { data } = await apollo.query<{ pages: Page[] }>({
        query: gql`
            query {
                pages {
                    id
                    slug
                    title
                }
            }
        `,
    });

    return data.pages;
};

export const findBySlug = async (slug: string, localization: ILocalization) => {
    const { data } = await apollo.query<{ pages: Page[] }>({
        variables: {
            slug,
            locales: [localization.locale, localization.defaultLocale],
        },
        query: gql`
            query ($slug: String!, $locales: [Locale!]!) {
                pages(locales: $locales, where: { slug: $slug }) {
                    slug
                    title
                    layout {
                        content {
                            ... on SEO {
                                description
                                keywords
                            }
                            ... on Navigation {
                                indexTitleFallback
                                pages {
                                    title
                                    slug
                                }
                                isLanguageSelectorVisible
                            }
                            ... on Hero {
                                content {
                                    text
                                    markdown
                                }
                            }
                            ... on Footer {
                                yearFrom
                                socialNetworks {
                                    name
                                    url
                                    icon {
                                        url
                                        width
                                        mimeType
                                    }
                                }
                                text
                            }
                            ... on Block_About {
                                image {
                                    url
                                    width
                                    mimeType
                                }
                                headline
                                content {
                                    text
                                    markdown
                                }
                            }
                            ... on Block_Jobs {
                                headline
                                jobs {
                                    id
                                    title
                                    dateTo
                                    dateFrom
                                    description {
                                        text
                                        markdown
                                    }
                                    client {
                                        name
                                        url
                                        logo {
                                            url
                                            width
                                            mimeType
                                        }
                                    }
                                }
                            }
                            ... on Block_Projects {
                                headline
                                projects {
                                    id
                                    name
                                    slogan
                                    url
                                    topics
                                    description {
                                        text
                                        markdown
                                    }
                                    image {
                                        url
                                        width
                                        mimeType
                                    }
                                    client {
                                        name
                                        url
                                        logo {
                                            url
                                            width
                                            mimeType
                                        }
                                    }
                                    platform
                                }
                            }
                            ... on Block_Repositories {
                                headline
                                limit
                            }
                            ... on Block_Contact {
                                headline
                                phoneNumber
                                emailAddress
                            }
                        }
                    }
                }
            }
        `,
    });

    if (!data.pages.length) {
        throw new Error(
            `Page for slug "${slug}" and locale "${localization.locale}" not found.`
        );
    }

    return data.pages?.[0] || [];
};

export const CMSPagesActions = {
    getAll,
    findBySlug,
};
