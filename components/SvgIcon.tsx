"use client";

import { ReactSVG } from "react-svg";

export function SvgIcon({
  icon,
  className,
}: {
  icon: { url: string };
  className?: string;
}): React.ReactNode {
  return <ReactSVG src={icon.url} className={className} />;
}
