import ReactMarkdown, { Components } from "react-markdown";
// import rehypeRaw from "rehype-raw";
// import gfm from "remark-gfm";

interface MarkdownRendererProps {
  components?: Components;
  children: string;
  className?: string;
}

export function MarkdownRenderer({
  components,
  children,
  className,
}: MarkdownRendererProps): React.ReactNode {
  return (
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
}
