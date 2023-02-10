import { IBlock_Jobs } from "../../../types/hygraph";
import { AnimationFadeIn } from "../../AnimationFadeIn";
import { SectionContainer } from "../layouts/Primary";
import { ViewDesktop } from "./Jobs.desktop";
import { ViewMobile } from "./Jobs.mobile";

export const Block_Jobs: React.FC<IBlock_Jobs> = ({ jobs }) => (
    <AnimationFadeIn>
        <SectionContainer headline="Where I've Worked">
            <ViewDesktop jobs={jobs} />
            <ViewMobile jobs={jobs} />
        </SectionContainer>
    </AnimationFadeIn>
);
