import { HygraphGetPageData } from "@/hygraph";
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
