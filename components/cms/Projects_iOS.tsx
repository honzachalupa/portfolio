import { AppleAppStoreApp } from "@/app/api/apple-app-store/route";
import { Block_Projects_IOs } from "@/hygraph/_generated/graphql";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { cache } from "react";
import { FaAppStoreIos } from "react-icons/fa";
import "server-only";
import { Container } from "../Container";
import { MarkdownRenderer } from "../MarkdownRenderer";
import { ProjectCard, ProjectCardLink } from "../ProjectCard";

export const preload = () => {
  void fetchApps();
};

const fetchApps = cache(async () => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/api/apple-app-store"
    );

    if (!response.ok) {
      console.error(
        "Error fetching apps:",
        response.status,
        response.statusText
      );

      return [];
    }

    const data = (await response.json()) as AppleAppStoreApp[];

    return data.filter(({ description }) => description);
  } catch (error) {
    console.error("Failed to fetch apps:", error);
  }
});

export async function Projects_iOS({ headline }: Block_Projects_IOs) {
  const apps = await fetchApps();

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
