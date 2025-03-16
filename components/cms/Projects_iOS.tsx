import appleAppStoreApi from "@/actions/appleAppStore";
import { Projects_IOs as Projects_iOSProps } from "@/actions/hygraph/_generated/graphql";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { FaAppStoreIos } from "react-icons/fa";
import "server-only";
import { Container } from "../Container";
import { MarkdownRenderer } from "../MarkdownRenderer";
import { ProjectCard, ProjectCardLink } from "../ProjectCard";

export function preload(): void {
  void appleAppStoreApi.getApps({ limit: 6 });
}

export async function Projects_iOS({
  headline,
}: Projects_iOSProps): Promise<React.ReactNode> {
  const apps = await appleAppStoreApi.getApps({ limit: 6 });

  return (
    <Container headline={headline}>
      <div className="flex flex-wrap gap-[12px]">
        {apps?.map(({ id, name, description, keywords, url }) => (
          <ProjectCard
            key={id}
            title={name}
            subtitle={keywords.join(", ")}
            description={<MarkdownRenderer>{description}</MarkdownRenderer>}
            links={
              [
                url && {
                  label: "View in App Store",
                  icon: <FaAppStoreIos />,
                  url,
                },
              ].filter(Boolean) as ProjectCardLink[]
            }
            className="basis-[calc(50%-(12px)/2)]"
          />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Button
          as={Link}
          variant="solid"
          color="primary"
          href="https://apps.apple.com/cz/developer/jan-chalupa/id1557529575"
          target="_blank"
        >
          Show more
        </Button>
      </div>
    </Container>
  );
}
