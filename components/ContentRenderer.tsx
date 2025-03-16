import { HygraphGetPageData } from "@/hygraph/page";
import { Fragment } from "react";
import { About } from "./cms/About";
import { Footer } from "./cms/Footer";
import { GitHubRepositories } from "./cms/GitHubRepositories";
import { Jobs } from "./cms/Jobs";
import { Projects_iOS } from "./cms/Projects_iOS";
import { Projects_web } from "./cms/Projects_web";
import { Statistics } from "./cms/Statistics";

interface ContentRendererProps {
  page: HygraphGetPageData;
}

export function ContentRenderer({
  page,
}: ContentRendererProps): React.ReactNode {
  const renderComponent = (
    props: HygraphGetPageData["components"]["content"][number]
  ): React.ReactNode | null => {
    switch (props.__typename) {
      case "Footer":
        return <Footer {...props} />;
      case "About":
        return <About {...props} />;
      case "Statistics":
        return <Statistics {...props} />;
      case "Jobs":
        return <Jobs {...props} />;
      case "Projects_web":
        return <Projects_web {...props} />;
      case "Projects_iOS":
        return <Projects_iOS {...props} />;
      case "GitHubRepositories":
        return <GitHubRepositories {...props} />;
      default:
        console.warn("Component not found:", props.__typename);

        return null;
    }
  };

  const renderComponents = ({
    /* title, */ components: { content },
  }: HygraphGetPageData): React.ReactNode => {
    const children = content.map((data, i) => (
      <Fragment key={i}>{renderComponent(data)}</Fragment>
    ));

    return children;
  };

  return <section className="w-full">{renderComponents(page)}</section>;
}
