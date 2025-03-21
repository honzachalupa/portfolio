import hygraphApi from "@/actions/hygraph";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { cache, createElement } from "react";
import * as FaIcons from "react-icons/fa6";

const getConfig = cache(async () => {
  return await hygraphApi.getConfig();
});

export const preload = (): void => {
  void getConfig();
};

function SocialNetworkIcon({ name }: { name: string }): React.ReactNode {
  const IconComponent = FaIcons[name as keyof typeof FaIcons];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in FaIcons`);

    return null;
  }

  return createElement(IconComponent, { className: "w-full h-full" });
}

export async function SocialNetworks(): Promise<React.ReactNode> {
  const config = await getConfig();

  return (
    <div className="xl:fixed bottom-0 right-0 flex xl:flex-col justify-center gap-5 m-5">
      {config?.socialNetworks.map(({ name, url, iconName }) => (
        <Button
          as={Link}
          key={name}
          href={url}
          title={name}
          variant="light"
          color="primary"
          className="w-[50px] h-[50px] p-2"
          isIconOnly
        >
          <SocialNetworkIcon name={iconName} />
        </Button>
      ))}
    </div>
  );
}
