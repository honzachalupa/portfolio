import { GetStaticPaths, InferGetServerSidePropsType } from "next";
import { CMSActions } from "../actions/cms";
import { ContentRenderer } from "../components/ContentRenderer";

export default function Index({
    page,
}: InferGetServerSidePropsType<typeof getStaticPaths>) {
    return page ? <ContentRenderer page={page} /> : null;
}

export const getStaticPaths: GetStaticPaths = async () => {
    const pages = await CMSActions.getAll();

    const paths = pages.map(({ slug }) => ({
        params: {
            slug: slug.replace("/", "").split("/").filter(Boolean),
        },
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async ({ params }: any) => {
    const formatSlug = (slug: string | string[] | undefined) =>
        slug ? "/" + (typeof slug === "object" ? slug.join("/") : slug) : null;

    const slug = formatSlug(params.slug) || "/";

    if (slug) {
        const page = await CMSActions.findBySlug(slug);

        return {
            props: {
                page,
            },
            revalidate: 1,
        };
    }

    return {
        props: {
            page: null,
        },
        revalidate: 1,
    };
};
