import clsx from "clsx";
import { createElement } from "react";
import type { IconType } from "react-icons";
import { FaCode } from "react-icons/fa";
import { GrSwift } from "react-icons/gr";
import { IoLogoFirebase, IoLogoPwa } from "react-icons/io5";
import { RiNextjsFill, RiReactjsFill, RiSupabaseFill, RiTailwindCssFill } from "react-icons/ri";
import { SiPrimereact, SiStrapi } from "react-icons/si";

// Explicit imports keep entire icon catalogs out of the browser bundle.
const icons: Record<string, IconType> = {
  "ri.RiReactjsFill": RiReactjsFill,
  "si.SiPrimereact": SiPrimereact,
  "io5.IoLogoPwa": IoLogoPwa,
  "si.SiStrapi": SiStrapi,
  "io5.IoLogoFirebase": IoLogoFirebase,
  "gr.GrSwift": GrSwift,
  "ri.RiNextjsFill": RiNextjsFill,
  "ri.RiTailwindCssFill": RiTailwindCssFill,
  "ri.RiSupabaseFill": RiSupabaseFill,
};

export function Icon({ name, className }: { name: string; className?: string }): React.ReactNode {
  return createElement(icons[name] ?? FaCode, { className: clsx("w-full h-full", className) });
}
