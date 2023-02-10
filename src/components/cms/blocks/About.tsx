import Image from "next/image";
import { IBlock_About } from "../../../types/hygraph";
import { AnimationFadeIn } from "../../AnimationFadeIn";
import { ListItemWithIcon } from "../../ListItemWithIcon";
import { MarkdownRenderer } from "../../MarkdownRenderer";
import { SectionContainer } from "../layouts/Primary";

export const Block_About: React.FC<IBlock_About> = ({
    headline,
    content,
    image,
}) => (
    <AnimationFadeIn>
        <SectionContainer headline={headline}>
            <div className="group flex">
                <MarkdownRenderer
                    components={{
                        p: ({ node, ...props }) => (
                            <p className="pb-5 md:text-lg" {...props} />
                        ),
                        ul: ({ node, ...props }) => (
                            <ul
                                className="columns-2"
                                {...props}
                                // @ts-ignore
                                ordered={undefined}
                            />
                        ),
                        li: ({ node, ...props }) => (
                            <ListItemWithIcon className="mb-2" {...props} />
                        ),
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
        </SectionContainer>
    </AnimationFadeIn>
);
