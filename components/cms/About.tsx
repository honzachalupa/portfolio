import hygraphApi from "@/actions/hygraph";
import { About as AboutProps } from "@/actions/hygraph/_generated/graphql";
import { Button } from "@mantine/core";
import { Container } from "../Container";
import { MarkdownRenderer } from "../MarkdownRenderer";

export async function About({
  headline,
  content,
}: AboutProps): Promise<React.ReactNode> {
  const config = await hygraphApi.getConfig();

  return (
    <Container headline={headline}>
      <MarkdownRenderer classNames={{ p: "md:text-lg" }}>
        {content.markdown}
      </MarkdownRenderer>

      <Button
        component="a"
        // @ts-ignore
        href={config?.cvFile?.url}
        variant="bordered"
        color="primary"
      >
        Download my CV
      </Button>
    </Container>
  );
}
