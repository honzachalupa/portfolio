import { InferGetServerSidePropsType } from "next";
import { config } from "../../config";
import { GitHubRepositoryActions } from "../actions/github";
import { JobActions } from "../actions/job";
import { ProjectActions } from "../actions/project";
import { AboutMeBlock } from "../components/blocks/AboutMe";
import { GetInTouchBlock } from "../components/blocks/GetInTouch";
import { HeroBlock } from "../components/blocks/Hero";
import { OtherProjectsBlock } from "../components/blocks/OtherProjects";
import { SomeThingsIveBuiltBlock } from "../components/blocks/SomeThingsIveBuilt";
import { WhereIWorkedBlock } from "../components/blocks/WhereIWorked";
import { LayoutPrimary as Layout } from "../layouts/Primary";

export default function Index({
    jobs,
    repositories,
    projects,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <Layout>
            <h1 className="hidden">{config.appName}</h1>

            <HeroBlock />
            <AboutMeBlock />
            <WhereIWorkedBlock jobs={jobs} />
            <SomeThingsIveBuiltBlock projects={projects} />
            <OtherProjectsBlock repositories={repositories} />
            <GetInTouchBlock />
        </Layout>
    );
}

export const getServerSideProps = async () => ({
    props: {
        jobs: await JobActions.search(),
        projects: await ProjectActions.search(),
        repositories: await GitHubRepositoryActions.search(),
    },
});
