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
      className={`skill-card group relative flex ${heightClassName} flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-red-500/30 hover:bg-white/7 md:p-8`}
    >
      {/* Number */}
      <span className="absolute right-6 top-6 font-serif text-6xl font-bold text-white/5">
        0{index + 1}
      </span>

      {/* Top */}
      <div>
        <h3 className="card-title mb-2 font-sans text-sm font-bold tracking-widest text-white">
          {category.title}
        </h3>

        <div className="card-line mb-6 h-px w-12 bg-red-500" />

        <ul className="space-y-3">
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

      {/* Bottom */}
      {category.description ? (
        <p className="mt-6 border-t border-white/5 pt-6 font-sans text-xs leading-relaxed text-white/30">
          {category.description}
        </p>
      ) : (
        <div className="mt-6 border-t border-white/5 pt-6">
          <span className="font-sans text-xs text-white/20">—</span>
        </div>
      )}

      {/* Hover glow */}
      <div className="absolute -inset-px -z-10 rounded-2xl bg-linear-to-br from-red-500/0 via-red-500/0 to-red-500/0 opacity-0 blur-xl transition-opacity group-hover:opacity-20" />
    </div>
  );
}
