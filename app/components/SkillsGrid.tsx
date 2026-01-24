"use client";

import { SkillCategory } from "./lib/skills.types";
import { SkillCard } from "./SkillCard";

type Props = {
  data: SkillCategory[];
  cardHeightClassName?: string;
};

export function SkillsGrid({ data, cardHeightClassName }: Props) {
  return (
    <div className="!mx-auto !mt-4 flex justify-center !p-4 w-full ">

      <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((category, index) => (
          <SkillCard
            key={category.title}
            category={category}
            index={index}
            heightClassName={cardHeightClassName}
          />
        ))}
      </div>
    </div>
  );
}
