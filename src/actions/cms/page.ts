import { gql } from "@apollo/client";
import { Page } from "../../types/cms";
import { apollo } from "../../utils/apollo";

export const getAll = async () => {
    const response = await apollo.query<{ pages: Page[] }>({
        query: gql`
            query PageIds {
                pages {
                    id
                    slug
                    title
                }
            }
        `,
    });

    console.log(666, response);

    return response.data.pages;
};

export const findBySlug = async (slug: string) => {
    const { data } = await apollo.query<{ pages: Page[] }>({
        variables: {
            slug,
        },
        query: gql`
            query PageBySlug($slug: String!) {
                pages(where: { slug: $slug }) {
                    slug
                    title
                    layout {
                        content {
                            ... on Hero {
                                content {
                                    markdown
                                }
                            }
                            ... on Block_About {
                                image {
                                    url
                                    width
                                    mimeType
                                }
                                headline
                                content {
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
                                    description {
                                        markdown
                                    }
                                    topics
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
                                }
                            }
                            ... on Block_Repositories {
                                headline
                                limit
                            }
                        }
                    }
                }
            }
        `,
    });

    return data.pages[0];
};
