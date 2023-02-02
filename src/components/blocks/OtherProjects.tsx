import { ButtonsContainer } from "../Button";
import { LinkButton } from "../Button/Link";
import { GitHubRepositoriesList } from "../GitHubRepositoriesList";

export const OtherProjectsBlock: React.FC = () => (
    <section className="mx-auto max-w-[60vw] py-36">
        <h2 className="pb-10 text-center text-4xl font-medium text-white opacity-70">
            Other noteworthy projects
        </h2>

        <GitHubRepositoriesList />

        <ButtonsContainer className="mt-16">
            <LinkButton
                label="Show more"
                href="https://github.com/honzachalupa"
            />
        </ButtonsContainer>
    </section>
);
