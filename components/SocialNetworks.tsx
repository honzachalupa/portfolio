import hygraphApi from "@/actions/hygraph";
import { Link } from "@heroui/link";
import { cache } from "react";
import { SocialNetworkIcon } from "./SocialNetworkIcon";

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
      {config?.socialNetworks.map(({ name, url, iconName }) => (
        <Link
          key={name}
          href={url}
          title={name}
          className="w-[40px] h-[40px] opacity-40"
        >
          <SocialNetworkIcon name={iconName} />
        </Link>
      ))}
    </div>
  );
}
