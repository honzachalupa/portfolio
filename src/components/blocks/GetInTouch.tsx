import { SectionContainer } from "../../layouts/Primary";
import { AnimationFadeIn } from "../AnimationFadeIn";
import { ButtonsContainer } from "../Button";
import { LinkButton } from "../Button/Link";

export const GetInTouchBlock: React.FC = () => (
    <AnimationFadeIn>
        <SectionContainer className="text-center">
            <h2 className="pb-10 text-4xl font-medium text-white opacity-70">
                Get in touch
            </h2>

            <p>
                Although I&apos;m not currently looking for any new
                opportunities, my inbox is always open.
                <br />
                Whether you have a question or just want to say hi, I&apos;ll
                try my best to get back to you!
            </p>

            <ButtonsContainer className="mt-16">
                <LinkButton
                    label="Say Hello"
                    href="mailto:janchalupa@outlook.cz"
                />
            </ButtonsContainer>
        </SectionContainer>
    </AnimationFadeIn>
);
