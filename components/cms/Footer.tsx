"use client";

import { Footer as FooterProps } from "@/actions/hygraph/_generated/graphql";
import dayjs from "dayjs";
import { ReactSVG } from "react-svg";

export function Footer({ socialNetworks, text }: FooterProps): React.ReactNode {
  const years = [dayjs("2008-01-01").year(), dayjs().year()].join(" - ");

  return (
    <>
      <footer>
        <div className="flex flex-row justify-center">
          {socialNetworks.map(({ name, url, icon }) => (
            <a key={name} href={url} title={name}>
              <ReactSVG src={icon.url} className="w-10" />
            </a>
          ))}
        </div>

        <p className="opacity-75">Copyright © {years} Jan Chalupa</p>

        {text && <p className="opacity-30">{text}</p>}
      </footer>
    </>
  );
}
