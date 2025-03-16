import { Statistics as StatisticsProps } from "@/hygraph/_generated/graphql";
import { Container } from "../Container";

export function Statistics({ headline }: StatisticsProps) {
  return (
    <Container headline={headline}>
      <p>Content</p>
    </Container>
  );
}
