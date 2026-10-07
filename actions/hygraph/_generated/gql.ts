/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "query Clients {\n  clients {\n    name\n  }\n}": typeof types.ClientsDocument,
    "query PageContent($slug: String!) {\n  page(where: {slug: $slug}) {\n    slug\n    title\n    components {\n      content {\n        ... on About {\n          __typename\n          image {\n            url\n          }\n          headline\n          content {\n            text\n            markdown\n          }\n        }\n        ... on ContactForm {\n          __typename\n          headline\n          noreplyEmailAddress\n        }\n        ... on GitHubRepositories {\n          __typename\n          headline\n        }\n        ... on Jobs {\n          __typename\n          headline\n          jobs {\n            id\n            title\n            dateTo\n            dateFrom\n            description {\n              text\n              markdown\n            }\n            client {\n              name\n              url\n              logo {\n                url\n                width\n                height\n              }\n            }\n          }\n        }\n        ... on Projects_iOS {\n          __typename\n          headline\n        }\n        ... on Projects_web {\n          __typename\n          headline\n          projects {\n            id\n            name\n            url\n            description {\n              text\n              markdown\n            }\n            client {\n              name\n              url\n              logo {\n                url\n                width\n                height\n              }\n            }\n            technologies {\n              name\n              url\n              iconName\n              color {\n                hex\n              }\n            }\n          }\n        }\n        ... on Statistics {\n          __typename\n          headline\n          items {\n            key\n            description\n            tooltipDescription\n            unit\n          }\n        }\n        ... on TechStack {\n          __typename\n          headline\n        }\n      }\n    }\n  }\n}": typeof types.PageContentDocument,
    "query Pages {\n  pages(first: 100) {\n    updatedAt\n    title\n    slug\n    nestedPages {\n      title\n      slug\n    }\n    isHidden\n  }\n}": typeof types.PagesDocument,
    "query Projects {\n  projects {\n    name\n  }\n}": typeof types.ProjectsDocument,
    "query SiteConfig {\n  configs {\n    jobDescription\n    emailAddress\n    phoneNumber\n    photo {\n      url\n    }\n    cvFile {\n      url\n    }\n    socialNetworks {\n      name\n      iconName\n      url\n    }\n    seo {\n      name\n      description\n    }\n  }\n}": typeof types.SiteConfigDocument,
    "query Technologies {\n  technologyItems(first: 20) {\n    name\n    url\n    iconName\n    color {\n      hex\n    }\n  }\n}": typeof types.TechnologiesDocument,
    "query TechnologiesFeatured {\n  technologyItems(first: 14, where: {isFeatured: true}) {\n    name\n    url\n    iconName\n    color {\n      hex\n    }\n  }\n}": typeof types.TechnologiesFeaturedDocument,
};
const documents: Documents = {
    "query Clients {\n  clients {\n    name\n  }\n}": types.ClientsDocument,
    "query PageContent($slug: String!) {\n  page(where: {slug: $slug}) {\n    slug\n    title\n    components {\n      content {\n        ... on About {\n          __typename\n          image {\n            url\n          }\n          headline\n          content {\n            text\n            markdown\n          }\n        }\n        ... on ContactForm {\n          __typename\n          headline\n          noreplyEmailAddress\n        }\n        ... on GitHubRepositories {\n          __typename\n          headline\n        }\n        ... on Jobs {\n          __typename\n          headline\n          jobs {\n            id\n            title\n            dateTo\n            dateFrom\n            description {\n              text\n              markdown\n            }\n            client {\n              name\n              url\n              logo {\n                url\n                width\n                height\n              }\n            }\n          }\n        }\n        ... on Projects_iOS {\n          __typename\n          headline\n        }\n        ... on Projects_web {\n          __typename\n          headline\n          projects {\n            id\n            name\n            url\n            description {\n              text\n              markdown\n            }\n            client {\n              name\n              url\n              logo {\n                url\n                width\n                height\n              }\n            }\n            technologies {\n              name\n              url\n              iconName\n              color {\n                hex\n              }\n            }\n          }\n        }\n        ... on Statistics {\n          __typename\n          headline\n          items {\n            key\n            description\n            tooltipDescription\n            unit\n          }\n        }\n        ... on TechStack {\n          __typename\n          headline\n        }\n      }\n    }\n  }\n}": types.PageContentDocument,
    "query Pages {\n  pages(first: 100) {\n    updatedAt\n    title\n    slug\n    nestedPages {\n      title\n      slug\n    }\n    isHidden\n  }\n}": types.PagesDocument,
    "query Projects {\n  projects {\n    name\n  }\n}": types.ProjectsDocument,
    "query SiteConfig {\n  configs {\n    jobDescription\n    emailAddress\n    phoneNumber\n    photo {\n      url\n    }\n    cvFile {\n      url\n    }\n    socialNetworks {\n      name\n      iconName\n      url\n    }\n    seo {\n      name\n      description\n    }\n  }\n}": types.SiteConfigDocument,
    "query Technologies {\n  technologyItems(first: 20) {\n    name\n    url\n    iconName\n    color {\n      hex\n    }\n  }\n}": types.TechnologiesDocument,
    "query TechnologiesFeatured {\n  technologyItems(first: 14, where: {isFeatured: true}) {\n    name\n    url\n    iconName\n    color {\n      hex\n    }\n  }\n}": types.TechnologiesFeaturedDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Clients {\n  clients {\n    name\n  }\n}"): (typeof documents)["query Clients {\n  clients {\n    name\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query PageContent($slug: String!) {\n  page(where: {slug: $slug}) {\n    slug\n    title\n    components {\n      content {\n        ... on About {\n          __typename\n          image {\n            url\n          }\n          headline\n          content {\n            text\n            markdown\n          }\n        }\n        ... on ContactForm {\n          __typename\n          headline\n          noreplyEmailAddress\n        }\n        ... on GitHubRepositories {\n          __typename\n          headline\n        }\n        ... on Jobs {\n          __typename\n          headline\n          jobs {\n            id\n            title\n            dateTo\n            dateFrom\n            description {\n              text\n              markdown\n            }\n            client {\n              name\n              url\n              logo {\n                url\n                width\n                height\n              }\n            }\n          }\n        }\n        ... on Projects_iOS {\n          __typename\n          headline\n        }\n        ... on Projects_web {\n          __typename\n          headline\n          projects {\n            id\n            name\n            url\n            description {\n              text\n              markdown\n            }\n            client {\n              name\n              url\n              logo {\n                url\n                width\n                height\n              }\n            }\n            technologies {\n              name\n              url\n              iconName\n              color {\n                hex\n              }\n            }\n          }\n        }\n        ... on Statistics {\n          __typename\n          headline\n          items {\n            key\n            description\n            tooltipDescription\n            unit\n          }\n        }\n        ... on TechStack {\n          __typename\n          headline\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query PageContent($slug: String!) {\n  page(where: {slug: $slug}) {\n    slug\n    title\n    components {\n      content {\n        ... on About {\n          __typename\n          image {\n            url\n          }\n          headline\n          content {\n            text\n            markdown\n          }\n        }\n        ... on ContactForm {\n          __typename\n          headline\n          noreplyEmailAddress\n        }\n        ... on GitHubRepositories {\n          __typename\n          headline\n        }\n        ... on Jobs {\n          __typename\n          headline\n          jobs {\n            id\n            title\n            dateTo\n            dateFrom\n            description {\n              text\n              markdown\n            }\n            client {\n              name\n              url\n              logo {\n                url\n                width\n                height\n              }\n            }\n          }\n        }\n        ... on Projects_iOS {\n          __typename\n          headline\n        }\n        ... on Projects_web {\n          __typename\n          headline\n          projects {\n            id\n            name\n            url\n            description {\n              text\n              markdown\n            }\n            client {\n              name\n              url\n              logo {\n                url\n                width\n                height\n              }\n            }\n            technologies {\n              name\n              url\n              iconName\n              color {\n                hex\n              }\n            }\n          }\n        }\n        ... on Statistics {\n          __typename\n          headline\n          items {\n            key\n            description\n            tooltipDescription\n            unit\n          }\n        }\n        ... on TechStack {\n          __typename\n          headline\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Pages {\n  pages(first: 100) {\n    updatedAt\n    title\n    slug\n    nestedPages {\n      title\n      slug\n    }\n    isHidden\n  }\n}"): (typeof documents)["query Pages {\n  pages(first: 100) {\n    updatedAt\n    title\n    slug\n    nestedPages {\n      title\n      slug\n    }\n    isHidden\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Projects {\n  projects {\n    name\n  }\n}"): (typeof documents)["query Projects {\n  projects {\n    name\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query SiteConfig {\n  configs {\n    jobDescription\n    emailAddress\n    phoneNumber\n    photo {\n      url\n    }\n    cvFile {\n      url\n    }\n    socialNetworks {\n      name\n      iconName\n      url\n    }\n    seo {\n      name\n      description\n    }\n  }\n}"): (typeof documents)["query SiteConfig {\n  configs {\n    jobDescription\n    emailAddress\n    phoneNumber\n    photo {\n      url\n    }\n    cvFile {\n      url\n    }\n    socialNetworks {\n      name\n      iconName\n      url\n    }\n    seo {\n      name\n      description\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Technologies {\n  technologyItems(first: 20) {\n    name\n    url\n    iconName\n    color {\n      hex\n    }\n  }\n}"): (typeof documents)["query Technologies {\n  technologyItems(first: 20) {\n    name\n    url\n    iconName\n    color {\n      hex\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query TechnologiesFeatured {\n  technologyItems(first: 14, where: {isFeatured: true}) {\n    name\n    url\n    iconName\n    color {\n      hex\n    }\n  }\n}"): (typeof documents)["query TechnologiesFeatured {\n  technologyItems(first: 14, where: {isFeatured: true}) {\n    name\n    url\n    iconName\n    color {\n      hex\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;