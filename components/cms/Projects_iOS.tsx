import appleAppStoreApi from "@/actions/appleAppStore";
import { Projects_IOs as Projects_iOSProps } from "@/actions/hygraph/_generated/graphql";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { Link } from "@heroui/link";
import { cache } from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { GrSwift } from "react-icons/gr";
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
            footer={
              <div className="flex flex-wrap gap-2 mt-2 mb-1">
                <Chip
                  as={Link}
                  href="https://www.swift.org/"
                  variant="flat"
                  startContent={<GrSwift />}
                  className="text-[rgb(240,81,56)]"
                >
                  Swift
                </Chip>

                <Chip
                  as={Link}
                  href="https://developer.apple.com/xcode/swiftui/"
                  variant="flat"
                  startContent={<GrSwift />}
                  className="text-[#00adfe]"
                >
                  Swift UI
                </Chip>

                <Chip
                  as={Link}
                  href="https://developer.apple.com/xcode/swiftdata/"
                  variant="flat"
                  startContent={<GrSwift />}
                  className="text-[#9dafb9]"
                >
                  Swift Data
                </Chip>
              </div>
            }
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
          variant="faded"
          href="https://apps.apple.com/cz/developer/jan-chalupa/id1557529575"
          target="_blank"
          startContent={<FaAppStoreIos />}
        >
          Show more
        </Button>
      </div>
    </Container>
  );
}
