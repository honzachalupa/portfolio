import appleAppStoreApi from "@/actions/appleAppStore";
import { Projects_IOs as Projects_iOSProps } from "@/actions/hygraph/_generated/graphql";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { cache } from "react";
import { FaAppStoreIos } from "react-icons/fa";
import "server-only";
import { Container } from "../Container";
import { ProjectCard, ProjectCardGrid } from "../ProjectCard";

const getIosApps = cache(
  async () => await appleAppStoreApi.getApps({ limit: 6 })
);

export function preload(): void {
  void getIosApps();
}

export async function Projects_iOS({
  headline,
}: Projects_iOSProps): Promise<React.ReactNode> {
  const apps = await getIosApps();

  return (
    <Container headline={headline}>
      <ProjectCardGrid>
        {apps?.map(({ id, name, description, keywords, url }) => (
          <ProjectCard
            key={id}
            title={name}
            subtitle={keywords.join(", ")}
            descriptionMarkdown={description}
            actions={[
              !!url && {
                label: "View in App Store",
                icon: <FaAppStoreIos />,
                url,
                variant: "solid",
              },
            ]}
            className="basis-[calc(50%-(12px)/2)]"
          />
        ))}
      </ProjectCardGrid>

      <div className="flex justify-center mt-10">
        <Button
          as={Link}
          variant="solid"
          color="primary"
          href="https://apps.apple.com/cz/developer/jan-chalupa/id1557529575"
          target="_blank"
          startContent={<FaAppStoreIos />}
          showAnchorIcon
        >
          Show more
        </Button>
      </div>
    </Container>
  );
}
