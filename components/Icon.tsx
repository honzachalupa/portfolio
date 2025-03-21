import clsx from "clsx";
import { createElement } from "react";
import * as FaIcons from "react-icons/fa";
import * as Fa6Icons from "react-icons/fa6";
import * as GrIcons from "react-icons/gr";
import * as IoIcons from "react-icons/io5";
import * as RiIcons from "react-icons/ri";
import * as SiIcons from "react-icons/si";

interface IconProps {
  name: string;
  className?: string;
}

function getIconsGroup(namespace: string): Record<string, any> {
  switch (namespace) {
    case "fa6":
      return Fa6Icons;
    case "fa":
      return FaIcons;
    case "ri":
      return RiIcons;
    case "io5":
      return IoIcons;
    case "si":
      return SiIcons;
    case "gr":
      return GrIcons;
    default:
      return {};
  }
}

export function Icon({ name, className }: IconProps): React.ReactNode {
  const [namespace, iconName] = name.split(".");

  if (!namespace || !iconName) {
    console.warn(`Invalid icon name: ${name}`);

    return null;
  }

  const iconsGroup = getIconsGroup(namespace);
  const IconComponent = iconsGroup[iconName];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in ${namespace}`);

    return null;
  }

  return createElement(IconComponent, {
    className: clsx("w-full h-full", className),
  });
}
