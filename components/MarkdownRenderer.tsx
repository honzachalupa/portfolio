import ReactMarkdown, { Components } from "react-markdown";
// import rehypeRaw from "rehype-raw";
// import gfm from "remark-gfm";

interface MarkdownRendererProps {
  components?: Components;
  children: string;
  className?: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  components,
  children,
  className,
}) => (
  <div className={className}>
    <ReactMarkdown
      // rehypePlugins={[rehypeRaw]}
      // remarkPlugins={[gfm]}
      components={components}
    >
      {children}
    </ReactMarkdown>
  </div>
);
