import { Code } from "@heroui/code";
import clsx from "clsx";
import ReactMarkdown, { Components } from "react-markdown";

interface MarkdownRendererProps {
  components?: Components;
  children: string;
  className?: string;
  classNames?: {
    h1?: string;
    h2?: string;
    h3?: string;
    h4?: string;
    h5?: string;
    h6?: string;
    p?: string;
    li?: string;
    pre?: string;
  };
}

export function MarkdownRenderer({
  components,
  children,
  className,
  classNames,
}: MarkdownRendererProps): React.ReactNode {
  return (
    <div className={className}>
      <ReactMarkdown
        components={{
          h1: (props) => (
            <h1
              className={clsx(
                "leading-6 pb-5 text-3xl font-medium text-primary",
                classNames?.h1
              )}
              {...props}
            />
          ),
          h2: (props) => (
            <h2
              className={clsx(
                "leading-6 pb-3 text-2xl font-medium",
                classNames?.h2
              )}
              {...props}
            />
          ),
          h3: (props) => (
            <h3
              className={clsx(
                "leading-6 pb-3 text-lg font-medium",
                classNames?.h3
              )}
              {...props}
            />
          ),
          h4: (props) => (
            <h4
              className={clsx("leading-6 pb-3 font-medium", classNames?.h4)}
              {...props}
            />
          ),
          h5: (props) => (
            <h5
              className={clsx("leading-6 pb-3 font-medium", classNames?.h5)}
              {...props}
            />
          ),
          h6: (props) => (
            <h6
              className={clsx("leading-6 pb-3 font-medium", classNames?.h6)}
              {...props}
            />
          ),
          p: (props) => (
            <p className={clsx("leading-6 pb-5", classNames?.p)} {...props} />
          ),
          li: ({ children, ...props }) => (
            <li
              className={clsx("text-sm pb-5 list-none", classNames?.li)}
              {...props}
            >
              <span className="text-primary font-bold mr-2">{`>`}</span>
              {children}
            </li>
          ),
          pre: (props) => (
            <Code className={clsx("w-full mb-5 p-3", classNames?.pre)}>
              <pre {...props}>{props.children}</pre>
            </Code>
          ),
          ...components,
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}
