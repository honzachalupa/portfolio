import { IBlock_Jobs } from "../../../types/cms";
import { AnimationFadeIn } from "../../AnimationFadeIn";
import { SectionContainer } from "../layouts/Primary";
import { ViewDesktop } from "./Jobs.desktop";
import { ViewMobile } from "./Jobs.mobile";

export const Block_Jobs: React.FC<IBlock_Jobs> = ({ headline, jobs }) => (
    <AnimationFadeIn>
        <SectionContainer headline={headline}>
            <ViewDesktop jobs={jobs} />
            <ViewMobile jobs={jobs} />
        </SectionContainer>
    </AnimationFadeIn>
);
