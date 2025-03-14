import { HygraphGetPageData } from "@/app/api/hygraph/page/route";
import { Fragment } from "react";

interface ContentRendererProps {
  page: HygraphGetPageData;
}

export function ContentRenderer({ page }: ContentRendererProps) {
  const renderComponent = (
    props: HygraphGetPageData["layout"]["content"][number]
  ) => {
    console.log("Component props", props);

    const { __typename } = props;

    if (__typename === "Navigation") {
      return (
        <p data-x="Navigation" {...props}>
          Navigation
        </p>
      );
    }
    if (__typename === "Hero") {
      return (
        <p data-x="Hero" {...props}>
          Hero
        </p>
      );
    }
    if (__typename === "Footer") {
      return (
        <p data-x="Footer" {...props}>
          Footer
        </p>
      );
    }
    if (__typename === "SEO") {
      return (
        <p data-x="SEO" {...props} title={page.title}>
          SEO
        </p>
      );
    }
    if (__typename === "Block_About") {
      return (
        <p data-x="Block_About" {...props}>
          Block_About
        </p>
      );
    }
    if (__typename === "Block_Jobs") {
      return (
        <p data-x="Block_Jobs" {...props}>
          Block_Jobs
        </p>
      );
    }
    if (__typename === "Block_Projects") {
      return (
        <p data-x="Block_Projects_web" {...props}>
          Block_Projects_web
        </p>
      );
    }
    if (__typename === "Block_Projects_iOS") {
      return (
        <p data-x="Block_Projects_iOS" {...props}>
          Block_Projects_iOS
        </p>
      );
    }
    if (__typename === "Block_Repositories") {
      return (
        <p data-x="Block_Repositories" {...props}>
          Block_Repositories
        </p>
      );
    }
    if (__typename === "Block_Contact") {
      return (
        <p data-x="Block_Contact" {...props}>
          Block_Contact
        </p>
      );
    }

    console.error("Component not found:", __typename);

    return null;
  };

  const renderLayout = ({ title, layout: { content } }: HygraphGetPageData) => {
    const children = content.map((data, i) => (
      <Fragment key={i}>{renderComponent(data)}</Fragment>
    ));

    return (
      <>
        <h1>{title}</h1>
        {children}
      </>
    );
  };

  return <section>{renderLayout(page)}</section>;
}
