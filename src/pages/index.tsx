import { config } from "../../config";
import { AboutMeBlock } from "../components/blocks/AboutMe";
import { GetInTouchBlock } from "../components/blocks/GetInTouch";
import { OtherProjectsBlock } from "../components/blocks/OtherProjects";
import { SomeThingsIveBuiltBlock } from "../components/blocks/SomeThingsIveBuilt";
import { WhereIWorkedBlock } from "../components/blocks/WhereIWorked";
import { Hero } from "../components/Hero";
import { LayoutPrimary as Layout } from "../layouts/Primary";

export default function Index() {
    return (
        <Layout>
            <h1 className="hidden">{config.appName}</h1>

            <Hero />
            <AboutMeBlock />
            <WhereIWorkedBlock />
            <SomeThingsIveBuiltBlock />
            <OtherProjectsBlock />
            <GetInTouchBlock />
        </Layout>
    );
}
