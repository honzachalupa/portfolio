import hygraphApi from "@/actions/hygraph";
import { About as AboutProps } from "@/actions/hygraph/_generated/graphql";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { cache } from "react";
import { Container } from "../Container";
import { MarkdownRenderer } from "../MarkdownRenderer";

const getConfig = cache(async () => {
  return await hygraphApi.getConfig();
});

export const preload = (): void => {
  void getConfig();
};

export async function About({
  headline,
  content,
}: AboutProps): Promise<React.ReactNode> {
  const config = await getConfig();

  return (
    <Container headline={headline}>
      <MarkdownRenderer classNames={{ p: "md:text-lg" }}>
        {content.markdown}
      </MarkdownRenderer>

      <Button
        as={Link}
        href={config?.cvFile?.url}
        variant="bordered"
        color="primary"
      >
        Download my CV
      </Button>
    </Container>
  );
}
