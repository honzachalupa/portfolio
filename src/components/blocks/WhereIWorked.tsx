import { Database } from "../../../supabase/types";
import { SectionContainer } from "../../layouts/Primary";
import { AnimationFadeIn } from "../AnimationFadeIn";
import { ViewDesktop } from "./WhereIWorked.desktop";
import { ViewMobile } from "./WhereIWorked.mobile";

interface IProps {
    data: Database["public"]["Tables"]["jobs"]["Row"][];
}

export const WhereIWorkedBlock: React.FC<IProps> = ({ data }) => (
    <AnimationFadeIn>
        <SectionContainer>
            <h2 className="pb-10 text-4xl font-medium text-white opacity-70">
                Where I&apos;ve worked
            </h2>

            <ViewDesktop data={data} />
            <ViewMobile data={data} />
        </SectionContainer>
    </AnimationFadeIn>
);
