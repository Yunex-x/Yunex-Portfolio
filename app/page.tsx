"use client";

import { useEffect, useRef, useState } from "react";
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

  // Mobile menu state and refs
  const [mobileOpen, setMobileOpen] = useState(false);
  const firstMobileLinkRef = useRef<HTMLAnchorElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      const nameChars = nameRef.current?.querySelectorAll(".char");
      if (nameChars && nameChars.length) {
        gsap.set(nameChars, { y: 120, opacity: 0 });
        tl.to(nameChars, {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.05,
        });
      }

      tl.from(
        roleRef.current,
        {
          y: 60,
          opacity: 0,
          duration: 1,
        },
        "-=0.6"
      );

      tl.from(
        taglineRef.current,
        {
          y: 40,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.4"
      );

      tl.from(
        ctaRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.4"
      );

      const roleText = roleRef.current?.querySelector(".role-text");
      if (roleText) {
        const animateRole = () => {
          gsap.to(roleText, {
            y: -20,
            opacity: 0,
            duration: 0.45,
            ease: "power2.in",
            onComplete: () => {
              currentRoleIndex.current =
                (currentRoleIndex.current + 1) % roles.length;
              roleText.textContent = roles[currentRoleIndex.current];
              gsap.fromTo(
                roleText,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.45, ease: "power2.out" }
              );
            },
          });
        };

        const loopInterval = setInterval(animateRole, 3000);
        return () => clearInterval(loopInterval);
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // focus management & keyboard handling for mobile menu
  useEffect(() => {
    if (mobileOpen) {
      // prevent background scroll when menu is open
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      // focus the first nav link if available, otherwise the close button
      const timer = setTimeout(() => {
        if (firstMobileLinkRef.current) {
          firstMobileLinkRef.current.focus();
        } else if (closeButtonRef.current) {
          closeButtonRef.current.focus();
        }
      }, 80);

      return () => {
        clearTimeout(timer);
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [mobileOpen]);

  // close mobile menu when viewport becomes >= sm (640px)
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 640 && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    // also run once to handle initial mount/responsive testing
    onResize();
    return () => window.removeEventListener("resize", onResize);
  }, [mobileOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  const nameText = "YUNEX-X";

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a] flex flex-col"
    >
      {/* Background accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0a0a0a] to-red-950/30" />
      <div className="absolute -right-1/4 top-1/4 h-[150px] w-[150px] rounded-full bg-red-600/10 blur-[150px] md:h-[260px] md:w-[260px]" />
      <div className="absolute -left-1/4 bottom-1/4 h-[100px] w-[100px] rounded-full bg-red-600/5 blur-[100px] md:h-[180px] md:w-[180px]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Navigation (in normal flow) */}
      <nav className="relative z-30 flex items-center justify-end md:justify-center p-2! md:px-16">
        <div className="hidden sm:flex h-16 items-center gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.label}
              href={link.href}
              className={`font-sans font-medium tracking-wider transition-colors ${
                index === 0 ? "text-red-500" : "text-white/40 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile: hamburger */}
        <div className="sm:hidden">
          <button
            onClick={() => setMobileOpen(true)}
            aria-controls="mobile-menu"
            aria-expanded={mobileOpen}
            aria-label="Open menu"
            className="inline-flex items-center justify-center rounded-md bg-white/6 p-2! text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <svg
              className="h-10 w-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile backdrop (hidden on >= sm) */}
      <div
        className={`fixed inset-0 z-20 bg-black/50 transition-opacity duration-300 sm:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden={!mobileOpen}
      />

      {/* Mobile panel (full screen on small screens). Hidden on >= sm */}
      <aside
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-hidden={!mobileOpen}
        className={`fixed top-0 right-0 z-30 h-screen w-full transform bg-[#0a0a0a] transition-transform duration-300 ease-in-out sm:hidden
          ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-end ">
            <button
              ref={closeButtonRef}
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="rounded-md bg-white/6 p-2! text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <svg
                className="h-10 w-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6">
            {navLinks.map((link, index) => (
              <Link
                key={link.label}
                href={link.href}
                ref={index === 0 ? firstMobileLinkRef : undefined}
                onClick={() => setMobileOpen(false)}
                className="block w-full max-w-sm rounded px-2 py-3 text-center text-2xl font-semibold text-white/95 hover:text-red-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                {link.label}
              </Link>
            ))}

            {/* Removed the extra red "Contact" button here as requested */}
          </div>

          <div className="px-6 py-4">
            <div className="flex items-center justify-between text-sm text-white/40">
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/Yunex-x"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-400"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/younes-ma-2155233a2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-400"
                >
                  LinkedIn
                </a>
              </div>
              <div>© {new Date().getFullYear()}</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content: let it flex and fill the remaining space between nav and bottom bar */}
      <main className="relative z-10 flex flex-1 flex-col items-center justify-center gap-4 px-6 py-6 md:px-8">
        <p className="mb-2 font-sans text-xs tracking-[0.3em] text-white/40 sm:text-sm">
          HELLO, I'M
        </p>

        <h1
          ref={nameRef}
          className="overflow-hidden font-serif leading-none text-white"
          style={{ fontSize: "clamp(2.25rem, 10.5vw, 6rem)" }}
        >
          {nameText.split("").map((char, index) => (
            <span key={index} className="char inline-block">
              {char === "-" ? <span className="text-red-500">-</span> : char}
            </span>
          ))}
        </h1>

        <div ref={roleRef} className="mt-2 overflow-hidden w-full max-w-2xl px-4">
          <div className="flex items-center gap-3 justify-center">
            <div className="h-px w-8 bg-red-500" />
            <p
              className="role-text font-sans text-base font-light tracking-wide text-white/60 sm:text-xl md:text-2xl"
              aria-live="polite"
            >
              {roles[0]}
            </p>
            <div className="h-px w-8 bg-red-500" />
          </div>
        </div>

        <p
          ref={taglineRef}
          className="mt-10! max-w-lg text-center font-sans text-sm leading-relaxed text-white/30 sm:text-base md:text-lg mb-20!"
        >
          Building modern, conversion-focused{" "}
          <span className="text-red-400">web experiences</span> with clean code
          and thoughtful design.
        </p>

        <div
          ref={ctaRef}
          className="flex w-full  justify-center flex-col items-center gap-6! sm:flex-row sm:gap-6!"
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl bg-red-500 px-5! py-2! font-sans text-sm font-semibold text-white transition-all hover:bg-red-600"
          >
            <span className="relative z-10">Contact Me</span>
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-5! py-2! font-sans text-sm font-medium text-white/70 transition-all hover:border-red-500 hover:text-red-500"
          >
            View Work
          </Link>
        </div>
      </main>

      {/* Bottom bar (kept visually anchored) */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/5 bg-black/50">
        <div className="flex max-w-7xl items-center justify-between gap-6 px-4 py-3 mx-auto md:px-16">
          <div className="flex items-center gap-6">
            <span className="font-sans text-xs font-bold tracking-widest text-red-500">
              SOCIAL
            </span>
            <div className="flex items-center gap-4">
              <Link
                href="https://github.com/Yunex-x"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-white/60 transition-colors hover:text-red-400"
              >
                GitHub
              </Link>
              <span className="text-white/20">—</span>
              <Link
                href="https://www.linkedin.com/in/younes-ma-2155233a2/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-white/40 transition-colors hover:text-red-400"
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