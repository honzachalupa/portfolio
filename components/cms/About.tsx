import { About as AboutProps } from "@/hygraph/_generated/graphql";
import Image from "next/image";
import { Container } from "../Container";
import { MarkdownRenderer } from "../MarkdownRenderer";

export function About({ headline, content, image }: AboutProps) {
  return (
    <Container headline={headline}>
      <div className="group flex">
        <MarkdownRenderer
          components={{
            p: (props) => <p className="pb-5 md:text-lg" {...props} />,
            ul: (props) => (
              <ul
                className="columns-2"
                {...props}
                // @ts-ignore
                ordered={undefined}
              />
            ),
            li: (props) => <li className="mb-2" {...props} />,
          }}
        >
          {content.markdown}
        </MarkdownRenderer>

        <Image
          src={image!.url}
          className="!relative hidden min-w-[40%] rounded-md pl-10 opacity-60 transition-all group-hover:opacity-100 md:inline"
          alt="Photo of myself"
          fill
        />
      </div>
    </Container>
  );
}
