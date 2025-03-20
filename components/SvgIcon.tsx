"use client";

import { ReactSVG } from "react-svg";

interface SvgIconProps {
  icon: { url: string };
  className?: string;
}

export function SvgIcon({ icon, className }: SvgIconProps): React.ReactNode {
  return <ReactSVG src={icon.url} className={className} />;
}
