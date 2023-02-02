import { InferGetServerSidePropsType } from "next";
import { config } from "../../config";
import { JobActions } from "../actions/job";
import { ProjectActions } from "../actions/project";
import { AboutMeBlock } from "../components/blocks/AboutMe";
import { GetInTouchBlock } from "../components/blocks/GetInTouch";
import { OtherProjectsBlock } from "../components/blocks/OtherProjects";
import { SomeThingsIveBuiltBlock } from "../components/blocks/SomeThingsIveBuilt";
import { WhereIWorkedBlock } from "../components/blocks/WhereIWorked";
import { IGitHubRepository } from "../components/GitHubRepositoriesList";
import { Hero } from "../components/Hero";
import { LayoutPrimary as Layout } from "../layouts/Primary";

export default function Index({
    jobs,
    repositories,
    projects,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <Layout>
            <h1 className="hidden">{config.appName}</h1>

            <Hero />
            <AboutMeBlock />
            <WhereIWorkedBlock data={jobs} />
            <SomeThingsIveBuiltBlock data={projects} />
            <OtherProjectsBlock data={repositories} />
            <GetInTouchBlock />
        </Layout>
    );
}

export const getServerSideProps = async () => {
    const jobs = await JobActions.search();
    const projects = await ProjectActions.search();

    const repositories = await (async (): Promise<IGitHubRepository[]> => {
        const response = await fetch(
            "https://api.github.com/users/honzachalupa/repos",
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
                },
            }
        );
        const data = await response.json();

        return (
            data
                ?.sort(
                    (a: { updated_at: string }, b: { updated_at: string }) =>
                        new Date(b.updated_at).getTime() -
                        new Date(a.updated_at).getTime()
                )
                .slice(0, 4) || []
        );
    })();

    return {
        props: {
            jobs,
            projects,
            repositories,
        },
    };
};
