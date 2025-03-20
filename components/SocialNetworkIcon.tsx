import { createElement } from "react";
import * as FaIcons from "react-icons/fa6";

export function SocialNetworkIcon({ name }: { name: string }): React.ReactNode {
  const IconComponent = FaIcons[name as keyof typeof FaIcons];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in FaIcons`);

    return null;
  }

  return createElement(IconComponent, { className: "w-full h-full" });
}
