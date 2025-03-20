"use client";

import { Statistics as StatisticsProps } from "@/actions/hygraph/_generated/graphql";
import { Button, HoverCard, Text } from "@mantine/core";

export function StatisticsItem({
  item: { unit },
  value,
  description,
  tooltipDescription,
  tooltipAction,
}: {
  item: StatisticsProps["items"][number];
  value: number | undefined;
  description: string | undefined;
  tooltipDescription: string | undefined;
  tooltipAction: React.ReactNode;
}): React.ReactNode {
  return (
    <HoverCard key={description} width={280} shadow="md" withArrow>
      <HoverCard.Target>
        <Button className="w-full !h-full !aspect-square" variant="default">
          <div className="w-full h-full flex flex-col items-center justify-center">
            <Text className="!text-[2.5rem]">
              <span className="font-bold">{value}</span>
              <span className="opacity-50">{unit}</span>
            </Text>

            <Text className="text-sm font-light opacity-50 text-center whitespace-break-spaces">
              {description}
            </Text>
          </div>
        </Button>
      </HoverCard.Target>

      <HoverCard.Dropdown>
        <Text size="sm">{tooltipDescription}</Text>

        {tooltipAction}
      </HoverCard.Dropdown>
    </HoverCard>
  );
}
