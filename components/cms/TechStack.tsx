import hygraphApi from "@/actions/hygraph";
import { TechStack as TechStackProps } from "@/actions/hygraph/_generated/graphql";
import { Card } from "@heroui/card";
import { Link } from "@heroui/link";
import { Container } from "../Container";
import { Icon } from "../Icon";

export async function TechStack({
  headline,
}: TechStackProps): Promise<React.ReactNode> {
  const technologies = await hygraphApi.getTechnologies();

  return (
    <Container headline={headline}>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {technologies
          ?.sort((a, b) => a.name.localeCompare(b.name))
          ?.map(({ name, url, color, iconName }) => (
            <Card
              key={name}
              className="p-3"
              style={{ boxShadow: `0 0 16px -8px ${color?.hex} inset` }}
            >
              <Link
                href={url}
                className="w-full h-full flex justify-around"
                isExternal
                style={{ color: color?.hex }}
              >
                <div className="flex items-center">
                  {iconName && <Icon name={iconName} className="!w-6 mr-3" />}

                  <p>{name}</p>
                </div>
              </Link>
            </Card>
          ))}
      </div>
    </Container>
  );
}
