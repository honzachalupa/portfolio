import { gql } from "@apollo/client";

export const GET_PAGES = gql`
    query PageIds {
        pages {
            id
            slug
            title
        }
    }
`;

export const GET_PAGE = gql`
    query PageById($id: ID!) {
        page(where: { id: $id }) {
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
`;
