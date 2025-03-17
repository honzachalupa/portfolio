import hygraphApi from "@/actions/hygraph";
import { Footer as FooterProps } from "@/actions/hygraph/_generated/graphql";
import dayjs from "dayjs";
import { SvgIcon } from "../SvgIcon";

export async function Footer({ text }: FooterProps): Promise<React.ReactNode> {
  const config = await hygraphApi.getConfig();

  const years = [2008, dayjs().year()].join(" - ");

  return (
    <>
      <footer>
        <div className="flex flex-row justify-center gap-2">
          {config?.socialNetworks.map(({ name, url, icon }) => (
            <a key={name} href={url} title={name}>
              <SvgIcon icon={icon} className="h-[60px]" />
            </a>
          ))}
        </div>

        <p className="opacity-75">Copyright © {years} Jan Chalupa</p>

        {text && <p className="opacity-30">{text}</p>}
      </footer>
    </>
  );
}
