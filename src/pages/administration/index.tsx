import { useRouter } from "next/router";
import { useEffect } from "react";
import { ProjectActions } from "../../actions/project";
import { ProjectsList } from "../../components/admin/ProjectsList";
import { useSupabaseAuth } from "../../hooks/useSupabaseAuth";
import { LayoutPrimary as Layout } from "../../layouts/Primary";

export default function Administration() {
    const router = useRouter();
    const { user, isLoading } = useSupabaseAuth();

    const createProject = () => {
        ProjectActions.create({
            id: "id",
            name: "Sample value.",
        });
    };

    useEffect(() => {
        if (!user && !isLoading) {
            router.push("/sign-in");
        }
    }, [router, user, isLoading]);

    return user ? (
        <Layout>
            <ProjectsList />
        </Layout>
    ) : null;
}
