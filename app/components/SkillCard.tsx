"use client";

import { SkillCategory } from "./lib/skills.types";


type Props = {
  category: SkillCategory;
  index: number;
  heightClassName?: string;
};

export function SkillCard({
  category,
  index,
  heightClassName = "h-[340px]",
}: Props) {
  return (
    <div
      className={`skill-card group relative flex ${heightClassName} flex-col w-2xs   rounded-2xl border border-white/10 bg-white/5 p-4! backdrop-blur-sm transition-colors hover:border-red-500/30 hover:bg-white/7 md:p-8`}
    >
      {/* Number */}
      <span className="absolute right-6 bottom-18 font-serif text-6xl font-bold text-white/5">
        0{index + 1}
      </span>

      {/* Top */}
      <div>
        <h3 className="card-title mb-8! font-sans   text-center font-bold tracking-widest text-white">
          {category.title}
        </h3>


        <ul className="space-y-3!">
          {category.skills.map((skill, skillIndex) => (
            <li
              key={skillIndex}
              className="skill-item flex items-center gap-3 text-white/50"
            >
              <span className="h-1 w-1 rounded-full bg-red-500" />
              <span className="font-sans text-sm">{skill}</span>
            </li>
          ))}
        </ul>
      </div>

     
      {/* Hover glow */}
      <div className="absolute -inset-px -z-10 rounded-2xl bg-linear-to-br from-red-500/0 via-red-500/0 to-red-500/0 opacity-0 blur-xl transition-opacity group-hover:opacity-20" />
    </div>
  );
}
