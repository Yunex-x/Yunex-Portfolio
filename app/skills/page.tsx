"use client";

import { useEffect, useRef } from "react";
import { runSkillsAnimations } from "../components/lib/skills.animations";
import { SkillsNavbar } from "../components/SkillsNavbar";
import { SkillsBackground } from "../components/SkillsBackground";
import { SkillsHeader } from "../components/SkillsHeader";
import { SkillsGrid } from "../components/SkillsGrid";
import { SkillsCTA } from "../components/SkillsCTA";
import { SkillsFooterBar } from "../components/SkillsFooterBar";
import { skillsData } from "../components/lib/skills.data";


export default function SkillsPage() {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cleanup = runSkillsAnimations({
      container: containerRef.current,
      titleEl: titleRef.current,
      cardsEl: cardsRef.current,
    });

    return () => cleanup();
  }, []);

  return (
    <section
      ref={containerRef}
      id="skills"
      className="relative w-full overflow-hidden bg-[#0a0a0a]"
    >
      <SkillsNavbar />
      <SkillsBackground />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-6 pb-28 pt-32 md:px-8 md:pb-32 md:pt-36 lg:px-16 lg:pb-36 lg:pt-40">
        <SkillsHeader ref={titleRef} titleText="SKILLS" />

        <div ref={cardsRef}>
          <SkillsGrid data={skillsData} cardHeightClassName="h-[340px]" />
        </div>

        <SkillsCTA />
      </div>

      <SkillsFooterBar />
    </section>
  );
}
