import type { PageContentQuery } from "./_generated/graphql";

type Content = NonNullable<PageContentQuery["page"]>["components"]["content"][number];
export type About = Extract<Content, { __typename: "About" }>;
export type ContactForm = Extract<Content, { __typename: "ContactForm" }>;
export type GitHubRepositories = Extract<Content, { __typename: "GitHubRepositories" }>;
export type Jobs = Extract<Content, { __typename: "Jobs" }>;
export type Projects_IOs = Extract<Content, { __typename: "Projects_iOS" }>;
export type Projects_Web = Extract<Content, { __typename: "Projects_web" }>;
export type Statistics = Extract<Content, { __typename: "Statistics" }>;
export type TechStack = Extract<Content, { __typename: "TechStack" }>;
