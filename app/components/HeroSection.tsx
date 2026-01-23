"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/skills", label: "SKILLS" },
  { href: "/contact", label: "CONTACT" },
];

const roles = [
  "Front-End Developer",
  "Next.js Expert",
  "Tailwind CSS Specialist",
  "Landing Page Designer",
];

export default function HeroOptionB() {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const currentRoleIndex = useRef(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial timeline
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Animate name letters
      const nameChars = nameRef.current?.querySelectorAll(".char");
      if (nameChars) {
        gsap.set(nameChars, { y: 120, opacity: 0 });
        tl.to(nameChars, {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.05,
        });
      }

      // Animate role
      tl.from(
        roleRef.current,
        {
          y: 60,
          opacity: 0,
          duration: 1,
        },
        "-=0.6"
      );

      // Animate tagline
      tl.from(
        taglineRef.current,
        {
          y: 40,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.4"
      );

      // Animate CTA
      tl.from(
        ctaRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.4"
      );

      // Role text loop animation
      const roleText = roleRef.current?.querySelector(".role-text");
      if (roleText) {
        const animateRole = () => {
          gsap.to(roleText, {
            y: -20,
            opacity: 0,
            duration: 0.5,
            ease: "power2.in",
            onComplete: () => {
              currentRoleIndex.current =
                (currentRoleIndex.current + 1) % roles.length;
              if (roleText) {
                roleText.textContent = roles[currentRoleIndex.current];
              }
              gsap.fromTo(
                roleText,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
              );
            },
          });
        };

        // Start loop after initial animation
        const loopInterval = setInterval(animateRole, 3000);
        return () => clearInterval(loopInterval);
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Split name into characters
  const nameText = "YUNEX-X";

  return (
    <section
      ref={containerRef}  
      className="relative h-screen w-full overflow-hidden bg-[#0a0a0a] "
    >
      {/* Red gradient effects */}
      <div className="absolute inset-0 bg-linear-to-br from-[#0a0a0a] via-[#0a0a0a] to-red-950/30" />
      <div className="absolute -right-1/4 top-1/4 h-150 w-150 rounded-full bg-red-600/10 blur-[150px]" />
      <div className="absolute -left-1/4 bottom-1/4 h-100 w-100 rounded-full bg-red-600/5 blur-[100px]" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-center  px-8 py-9 lg:px-16 ">
       

        <div className=" hidden sm:flex h-16 items-center gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.label}
              href={link.href}
              className={`font-sans font-medium tracking-wider transition-colors ${index === 0
                  ? "text-red-500"
                  : "text-white/40 hover:text-white"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex h-[calc(100vh-100px)] flex-col items-center justify-center gap-6 px-8">
        {/* Small intro */}
        <p className="mb-4 font-sans text-lg tracking-[0.3em] text-white/40">
          HELLO, I'M
        </p>

        {/* Large animated name */}
        <h1
          ref={nameRef}
          className="overflow-hidden font-serif text-[12vw] font-bold leading-none text-white md:text-[10vw] lg:text-[8vw]"
        >
          {nameText.split("").map((char, index) => (
            <span key={index} className="char inline-block">
              {char === "-" ? (
                <span className="text-red-500">-</span>
              ) : (
                char
              )}
            </span>
          ))}
        </h1>

        {/* Animated role */}
        <div ref={roleRef} className="mt-6 overflow-hidden">
          <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-red-500" />
            <p className="role-text font-sans text-xl font-light tracking-wide text-white/60 sm:text-2xl md:text-3xl">
              {roles[0]}
            </p>
            <div className="h-px w-12 bg-red-500" />
          </div>
        </div>

        {/* Tagline */}
        <p
          ref={taglineRef}
          className="mt-8 max-w-xl text-center font-sans text-base leading-relaxed text-white/30 sm:text-lg"
        >
          Building modern, conversion-focused{" "}
          <span className="text-red-400">web experiences</span> with clean code
          and thoughtful design.
        </p>

        {/* CTA Buttons */}
        <div
          ref={ctaRef}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:gap-6"
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl bg-red-500 px-4! py-2! font-sans text-sm font-semibold text-white transition-all hover:bg-red-600 "
          >
            <span className="relative z-10">Contact Me</span>
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-4! py-2! font-sans text-sm font-medium text-white/70 transition-all hover:border-red-500 hover:text-red-500"
          >
            View Work
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t  border-white/5">
        <div className=" flex max-w-7xl  h-8  px-4! py-6 lg:px-16">
          {/* Social */}
          <div className="flex items-center gap-6">
            <span className="font-sans text-xs font-bold tracking-widest text-red-500">
              SOCIAL
            </span>
            <div className="flex items-center gap-4">
              <Link
                href="https://github.com/Yunex-x"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-md text-white/60 transition-colors hover:text-red-400"
              >
                GitHub
              </Link>
              <span className="text-white/20">—</span>
              <Link
                href="https://www.linkedin.com/in/younes-ma-2155233a2/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-md text-white/40 transition-colors hover:text-red-400"
              >
                LinkedIn
              </Link>
            </div>
          </div>

        
        </div>
      </div>

      
    </section>
  );
}