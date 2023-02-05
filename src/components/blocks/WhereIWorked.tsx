import { TJob } from "../../actions/job";
import { SectionContainer } from "../../layouts/Primary";
import { AnimationFadeIn } from "../AnimationFadeIn";
import { ViewDesktop } from "./WhereIWorked.desktop";
import { ViewMobile } from "./WhereIWorked.mobile";

interface IProps {
    jobs: TJob[];
}

export const WhereIWorkedBlock: React.FC<IProps> = ({ jobs }) => (
    <AnimationFadeIn>
        <SectionContainer headline="Where I've Worked">
            <ViewDesktop jobs={jobs} />
            <ViewMobile jobs={jobs} />
        </SectionContainer>
    </AnimationFadeIn>
);
