import { About as AboutProps } from "@/actions/hygraph/_generated/graphql";
import { Container } from "../Container";
import { MarkdownRenderer } from "../MarkdownRenderer";

export async function About({ headline, content }: AboutProps): Promise<React.ReactNode> {
  return (
    <Container headline={headline}>
      <MarkdownRenderer classNames={{ p: "md:text-lg" }}>{content.markdown}</MarkdownRenderer>
    </Container>
  );
}

export default About;
