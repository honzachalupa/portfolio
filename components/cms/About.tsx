import { About as AboutProps } from "@/actions/hygraph/_generated/graphql";
import { Container } from "../Container";
import { MarkdownRenderer } from "../MarkdownRenderer";

export function About({ headline, content }: AboutProps): React.ReactNode {
  return (
    <Container headline={headline}>
      <MarkdownRenderer
        components={{
          p: (props) => <p className="pb-5 md:text-lg" {...props} />,
        }}
      >
        {content.markdown}
      </MarkdownRenderer>
    </Container>
  );
}
