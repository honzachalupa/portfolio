import { IBlock_Contact } from "../../../types/cms";
import { AnimationFadeIn } from "../../AnimationFadeIn";
import { SectionContainer } from "../layouts/Primary";

export const Block_Contact: React.FC<IBlock_Contact> = ({
    headline,
    phoneNumber,
    emailAddress,
}) => (
    <AnimationFadeIn>
        <SectionContainer headline={headline} headlineAlignment="center">
            <div className="flex justify-evenly">
                <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
                <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
            </div>
        </SectionContainer>
    </AnimationFadeIn>
);
