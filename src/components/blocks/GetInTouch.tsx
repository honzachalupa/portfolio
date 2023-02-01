import { Button, ButtonsContainer } from "../Button";

export const GetInTouchBlock: React.FC = () => (
    <section className="py-36 text-center">
        <h2 className="pb-10 text-4xl font-medium text-white opacity-70">
            Get in touch
        </h2>

        <p>
            Although I&apos;m not currently looking for any new opportunities,
            my inbox is always open. Whether you have a question or just want to
            say hi, I&apos;ll try my best to get back to you!
        </p>

        <ButtonsContainer className="mt-16">
            <Button label="Say Hello" href="mailto:janchalupa@outlook.cz" />
        </ButtonsContainer>
    </section>
);
