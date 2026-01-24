"use client";

import { useEffect, useRef } from "react";
import { runSkillsAnimations } from "../components/lib/skills.animations";
import { SkillsBackground } from "../components/SkillsBackground";
import { SkillsHeader } from "../components/SkillsHeader";
import { SkillsGrid } from "../components/SkillsGrid";
import { SkillsCTA } from "../components/SkillsCTA";
import { SkillsFooterBar } from "../components/SkillsFooterBar";
import { skillsData } from "../components/lib/skills.data";
import Navbar from "../components/Navbar";


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
    <>
    <Navbar />
    <section
      ref={containerRef}
      id="skills"
      className="relative w-full overflow-hidden bg-[#0a0a0a] mt-14!"
    >

      <SkillsBackground />

      <div className="relative z-10  flex items-center w-full   flex-col justify-center ">
        <div className="mb-16 md:mb-20 lg:mb-24">
          <SkillsHeader ref={titleRef} titleText="SKILLS" />
        </div>

        <div ref={cardsRef} className="mb-16 md:mb-20 lg:mb-24">
          <SkillsGrid data={skillsData} cardHeightClassName="h-[340px]" />
        </div>

        <SkillsCTA />
      </div>

      <SkillsFooterBar />
    </section>
    </>
  );
}