import { Button, ButtonsContainer } from "../Button";
import { GitHubRepositoriesList } from "../GitHubRepositoriesList";

export const OtherProjectsBlock: React.FC = () => (
    <section className="py-36">
        <h2 className="pb-10 text-center text-4xl font-medium text-white opacity-70">
            Other noteworthy projects
        </h2>

        <GitHubRepositoriesList />

        <ButtonsContainer className="mt-16">
            <Button label="Show more" href="https://github.com/honzachalupa" />
        </ButtonsContainer>
    </section>
);
