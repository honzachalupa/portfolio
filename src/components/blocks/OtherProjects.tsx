import { ButtonsContainer } from "../Button";
import { LinkButton } from "../Button/Link";
import {
    GitHubRepositoriesList,
    IGitHubRepository,
} from "../GitHubRepositoriesList";

interface IProps {
    data: IGitHubRepository[];
}

export const OtherProjectsBlock: React.FC<IProps> = ({ data }) => (
    <section className="mx-auto max-w-[60vw] py-36">
        <h2 className="pb-10 text-center text-4xl font-medium text-white opacity-70">
            Other noteworthy projects
        </h2>

        <GitHubRepositoriesList data={data} />

        <ButtonsContainer className="mt-16">
            <LinkButton
                label="Show more"
                href="https://github.com/honzachalupa"
                target="_blank"
            />
        </ButtonsContainer>
    </section>
);
