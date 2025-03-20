import hygraphApi from "@/actions/hygraph";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { cache } from "react";
import { SvgIcon } from "./SvgIcon";

const getConfig = cache(async () => {
  return await hygraphApi.getConfig();
});

export const preload = (): void => {
  void getConfig();
};

export async function SocialNetworks(): Promise<React.ReactNode> {
  const config = await getConfig();

  return (
    <div className="fixed bottom-0 right-0 flex flex-col justify-center gap-5 m-5">
      {config?.socialNetworks.map(({ name, url, icon }) => (
        <Button
          key={name}
          as={Link}
          href={url}
          title={name}
          variant="light"
          color="primary"
          className="block w-[80px] h-[80px]"
        >
          <SvgIcon icon={icon} className="w-[40px] opacity-70" />
        </Button>
      ))}
    </div>
  );
}
