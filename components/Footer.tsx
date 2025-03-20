import dayjs from "dayjs";
import { SocialNetworks } from "./SocialNetworks";

export async function Footer(): Promise<React.ReactNode> {
  const years = [2008, dayjs().year()].join(" - ");

  return (
    <>
      <footer className="w-full flex flex-col items-center justify-center">
        <SocialNetworks />

        <p>
          <span className="opacity-75">© {years} Jan Chalupa</span>
          <span className="opacity-30 ml-5">All rights reserved</span>
        </p>
      </footer>
    </>
  );
}
