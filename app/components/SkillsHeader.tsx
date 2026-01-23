"use client";

import { forwardRef } from "react";

type Props = {
  titleText?: string;
};

export const SkillsHeader = forwardRef<HTMLDivElement, Props>(
  ({ titleText = "SKILLS" }, ref) => {
    return (
      <div
        ref={ref}
        className="mx-auto! mb-14! w-full max-w-4xl flex flex-col justify-center items-center mt-5!  md:mb-16! lg:mb-20!"
      >
        <p className="mb-4 font-sans text-sm tracking-[0.3em] text-white/40">
          WHAT I DO
        </p>

        <h2 className="overflow-hidden font-serif text-[15vw] font-bold leading-none text-white sm:text-[12vw] md:text-[10vw] lg:text-[8vw]">
          {titleText.split("").map((char, index) => (
            <span key={index} className="char inline-block">
              {index === 0 ? <span className="text-red-500">{char}</span> : char}
            </span>
          ))}
        </h2>

        <div className="subtitle mt-6 flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-red-500" />
          <p className="font-sans text-lg text-white/40">& Expertise</p>
          <div className="h-px w-12 bg-red-500" />
        </div>
      </div>
    );
  }
);

SkillsHeader.displayName = "SkillsHeader";
