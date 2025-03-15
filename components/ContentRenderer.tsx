import { HygraphGetPageData } from "@/hygraph";
import { Fragment } from "react";
import { About } from "./cms/About";
import { Footer } from "./cms/Footer";
import { GitHubRepositories } from "./cms/GitHubRepositories";
import { Jobs } from "./cms/Jobs";
import { Projects_iOS } from "./cms/Projects_iOS";
import { Projects_web } from "./cms/Projects_web";

interface ContentRendererProps {
  page: HygraphGetPageData;
}

export function ContentRenderer({ page }: ContentRendererProps) {
  const renderComponent = (
    props: HygraphGetPageData["layout"]["content"][number]
  ) => {
    const { __typename } = props;

    if (__typename === "Footer") {
      return <Footer {...props} />;
    }

    if (__typename === "About") {
      return <About {...props} />;
    }

    if (__typename === "Jobs") {
      return <Jobs {...props} />;
    }

    if (__typename === "Projects_web") {
      return <Projects_web {...props} />;
    }

    if (__typename === "Projects_iOS") {
      return <Projects_iOS {...props} />;
    }

    if (__typename === "GitHubRepositories") {
      return <GitHubRepositories {...props} />;
    }

    console.warn("Component not found:", __typename);

    return null;
  };

  const renderLayout = ({
    /* title, */ layout: { content },
  }: HygraphGetPageData) => {
    const children = content.map((data, i) => (
      <Fragment key={i}>{renderComponent(data)}</Fragment>
    ));

    return children;
  };

  return <section className="w-full">{renderLayout(page)}</section>;
}
