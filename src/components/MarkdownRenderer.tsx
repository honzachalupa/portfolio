import ReactMarkdown from "react-markdown";
import { SpecialComponents } from "react-markdown/lib/ast-to-react";
import { NormalComponents } from "react-markdown/lib/complex-types";
import rehypeRaw from "rehype-raw";
import gfm from "remark-gfm";

interface IProps {
    components?: Partial<
        Omit<NormalComponents, keyof SpecialComponents> & SpecialComponents
    >;
    children: string;
}

export const MarkdownRenderer: React.FC<IProps> = ({
    components,
    children,
}) => (
    <div>
        <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[gfm]}
            components={components}
        >
            {children}
        </ReactMarkdown>
    </div>
);
