import { GetServerSideProps, InferGetServerSidePropsType } from "next";
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

const getPageId = async (slug: string) => {
    console.log(1, { slug });

    const response = await apollo.query<{ pages: Page[] }>({
        query: GET_PAGES,
    });

    console.log(2, JSON.stringify(response));

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
