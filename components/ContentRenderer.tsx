import { HygraphGetPageData } from "@/actions/hygraph/page";
import dynamic from "next/dynamic";
import { Fragment, Suspense } from "react";
import { LoadingIndicator } from "./LoadingIndicator";

// Dynamically import all CMS components with loading states
const About = dynamic(() => import("./cms/About"), {
  loading: () => <LoadingIndicator />,
  ssr: true,
});

const ContactForm = dynamic(() => import("./cms/ContactForm"), {
  loading: () => <LoadingIndicator />,
  ssr: true,
});

const GitHubRepositories = dynamic(() => import("./cms/GitHubRepositories"), {
  loading: () => <LoadingIndicator />,
  ssr: true,
});

const Jobs = dynamic(() => import("./cms/Jobs"), {
  loading: () => <LoadingIndicator />,
  ssr: true,
});

const Projects_iOS = dynamic(() => import("./cms/Projects_iOS"), {
  loading: () => <LoadingIndicator />,
  ssr: true,
});

const Projects_web = dynamic(() => import("./cms/Projects_web"), {
  loading: () => <LoadingIndicator />,
  ssr: true,
});

const Statistics = dynamic(() => import("./cms/Statistics"), {
  loading: () => <LoadingIndicator />,
  ssr: true,
});

const TechStack = dynamic(() => import("./cms/TechStack"), {
  loading: () => <LoadingIndicator />,
  ssr: true,
});

interface ContentRendererProps {
  page: HygraphGetPageData;
}

// Separate component for each content type to enable streaming
function ContentComponent({ data }: { data: HygraphGetPageData["components"]["content"][number] }): React.ReactNode {
  switch (data.__typename) {
    case "About":
      return <About {...data} />;
    case "ContactForm":
      return <ContactForm {...data} />;
    case "Statistics":
      return <Statistics {...data} />;
    case "TechStack":
      return <TechStack {...data} />;
    case "Jobs":
      return <Jobs {...data} />;
    case "Projects_web":
      return <Projects_web {...data} />;
    case "Projects_iOS":
      return <Projects_iOS {...data} />;
    case "GitHubRepositories":
      return <GitHubRepositories {...data} />;
    default:
      console.warn("Component not found:", data);
      return null;
  }
}

export function ContentRenderer({ page }: ContentRendererProps): React.ReactNode {
  const {
    components: { content },
  } = page;

  return (
    <section className="w-full">
      {content.map((data, i) => (
        <Fragment key={i}>
          <Suspense
            fallback={
              <div className="w-full h-32 flex items-center justify-center">
                <LoadingIndicator />
              </div>
            }
          >
            <ContentComponent data={data} />
          </Suspense>
        </Fragment>
      ))}
    </section>
  );
}

export default ContentRenderer;
