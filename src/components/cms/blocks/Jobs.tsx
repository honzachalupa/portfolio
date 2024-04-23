import { IBlock_Jobs } from "../../../types/cms";
import { AnimationFadeIn } from "../../AnimationFadeIn";
import { SectionContainer } from "../layouts/Primary";
import { ViewDesktop } from "./Jobs.desktop";
import { ViewMobile } from "./Jobs.mobile";

export const Block_Jobs: React.FC<IBlock_Jobs> = ({ headline, jobs }) => {
    const jobsSorted = [...jobs].sort((a, b) => {
        if (a.dateTo < b.dateTo) return 1;
        if (a.dateTo > b.dateTo) return -1;
        return 0;
    });

    return (
        <AnimationFadeIn>
            <SectionContainer headline={headline}>
                <ViewDesktop jobs={jobsSorted} />
                <ViewMobile jobs={jobsSorted} />
            </SectionContainer>
        </AnimationFadeIn>
    );
};
