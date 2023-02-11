import { CMSActions } from "../actions/cms";
import { ContentRenderer } from "../components/ContentRenderer";
import { Page } from "../types/cms";

export default function Index({ page }: { page: Page }) {
    return <ContentRenderer page={page} />;
}

export const getStaticProps = async () => {
    const page = await CMSActions.findBySlug("/");

    return {
        props: {
            page,
        },
        revalidate: 1,
    };
};
