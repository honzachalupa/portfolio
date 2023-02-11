import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { ContentRenderer } from "../components/ContentRenderer";
import { GET_PAGE, GET_PAGES } from "../queries/page";
import { apolloClient } from "../utils/apollo";
import { Page } from "../utils/codegen/graphql";

export default function Index({
    page,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return <ContentRenderer page={page} />;
}

const getSlug = (query: any) =>
    (typeof query.slug === "object" ? query.slug.join("/") : query.slug) || "/";

const getPageId = async (slug: string) => {
    const response = await apolloClient.query<{ pages: Page[] }>({
        query: GET_PAGES,
    });

    console.log(666, JSON.stringify(response));

    return response.data.pages.find((page) => page.slug === slug)!;
};

const getPageById = async (id: string) => {
    const { data } = await apolloClient.query<{ page: Page }>({
        query: GET_PAGE,
        variables: {
            id,
        },
    });

    return data.page;
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
