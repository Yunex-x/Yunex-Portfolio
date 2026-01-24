"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
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
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Title stagger (expects the title to render characters with the "char" class)
      const titleChars = titleRef.current?.querySelectorAll(".char");
      if (titleChars && titleChars.length) {
        gsap.set(titleChars, { y: 120, opacity: 0 });
        tl.to(titleChars, {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.05,
        });
      }

      // small reveal for the title subtitle / divider (if present inside titleRef)
      const subtitleEl = titleRef.current?.querySelector(".subtitle,.meta,p");
      if (subtitleEl) {
        tl.from(
          subtitleEl,
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.6"
        );
      }

      // Cards animation: stagger each card in the grid
      const cardElements = gsap.utils.toArray(cardsRef.current?.children || []);
      if (cardElements.length) {
        gsap.set(cardElements, { y: 20, opacity: 0 });
        tl.to(
          cardElements,
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.06,
            ease: "power2.out",
          },
          "-=0.4"
        );
      }

      // CTA reveal
      const ctaEl = containerRef.current?.querySelector(".skills-cta, .cta");
      if (ctaEl) {
        tl.from(
          ctaEl,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.4"
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // --- Navbar logic from projects page ---
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/projects", label: "PROJECTS" },
    { href: "/skills", label: "SKILLS" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <>
      {/* Navbar (projects style) */}
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