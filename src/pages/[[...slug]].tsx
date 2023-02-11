import {
    GetServerSideProps,
    GetStaticPaths,
    InferGetServerSidePropsType,
} from "next";
import { ContentRenderer } from "../components/ContentRenderer";
import { GET_PAGE, GET_PAGES } from "../queries/page";
import { apollo } from "../utils/apollo";
import { Page } from "../utils/codegen/graphql";

export default function Index({
    page,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return <ContentRenderer page={page} />;
}

const getSlug = (query: any) =>
    (typeof query.slug === "object" ? query.slug.join("/") : query.slug) || "/";

const getPages = async () => {
    const response = await apollo.query<{ pages: Page[] }>({
        query: GET_PAGES,
    });

    console.log(1, JSON.stringify(response));

    return response.data.pages;
};

const getPageId = async (slug: string) => {
    console.log(2, { slug });

    const response = await apollo.query<{ pages: Page[] }>({
        query: GET_PAGES,
    });

    console.log(3, JSON.stringify(response));

    return response.data.pages.find((page) => page.slug === slug)!;
};

const getPageById = async (id: string) => {
    const { data } = await apollo.query<{ page: Page }>({
        query: GET_PAGE,
        variables: {
            id,
        },
    });

    return data.page;
};

export const getStaticPaths: GetStaticPaths = async () => {
    const pages = await getPages();
    const paths = pages.map(({ slug }) => slug);

    return {
        paths,
        fallback: false,
    };
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const slug = getSlug(context.query);

    const { id: pageId } = await getPageId(slug);
    const page = await getPageById(pageId);

    return {
        props: {
            page,
        },
    };
};
