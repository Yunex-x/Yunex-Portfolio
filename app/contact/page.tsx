"use client";

import React, { useState } from "react";
import Link from "next/link";
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

type ContactMeCardProps = {
  email?: string;
  githubUrl?: string;
  linkedinUrl?: string;
};

export default function ContactMeCard({
  email = "yunex.business@gmail.com",
  githubUrl = "https://github.com/Yunex-x",
  linkedinUrl = "https://www.linkedin.com/in/younes-ma-2155233a2",
}: ContactMeCardProps) {
  // Use the provided email prop for the mailto link
  const mailto = email ? `mailto:${email}?subject=${encodeURIComponent("Contact from website")}` : undefined;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navigation with mobile menu */}
      <nav className={`relative flex justify-center gap-4 mt-6! px-6 pt-8 lg:gap-10 ${menuOpen ? 'bg-black' : 'bg-transparent'} sm:bg-transparent`}>
        {/* Modern menu icon for small screens only */}
        <button
          className={`sm:block md:hidden absolute right-4 top-2 -translate-y-1/2 z-20 p-2 ${menuOpen ? 'bg-black' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            // Close (X) icon
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="6" y1="6" x2="18" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <line x1="6" y1="18" x2="18" y2="6" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            // Menu (hamburger) icon
            <svg width="40" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="7" width="16" height="2" rx="1" fill="white" />
              <rect x="4" y="15" width="16" height="2" rx="1" fill="white" />
              <rect x="4" y="11" width="16" height="2" rx="1" fill="white" />
            </svg>
          )}
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-serif text-sm font-medium uppercase tracking-[0.25em] text-white/90 transition hover:text-amber-300 sm:text-base"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Dropdown for small screens only */}
        {menuOpen && (
          <div className="sm:block md:hidden absolute top-full left-0 w-full bg-black flex flex-col items-center gap-6 py-6 z-30 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-serif text-lg font-medium uppercase tracking-[0.25em] text-white/90 transition hover:text-amber-300"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
      <section className="w-full min-h-screen flex items-center justify-center px-4 py-10 sm:py-14">
      <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl animate-fade-in">
        {/* subtle colored glows (matches site accents) */}
        <div className="pointer-events-none absolute -top-20 -right-20 h-44 w-44 rounded-full bg-red-600/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-44 w-44 rounded-full bg-amber-400/8 blur-3xl" />

        <div className="relative p-5 sm:p-8">
          {/* Header */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
            <div className="min-w-0">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Contact Me
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-white/65 max-w-[44ch] font-sans">
                Got a project idea, job opportunity, or want to collaborate? Use the
                quick actions — I reply fast.
              </p>
            </div>

            <div className="flex w-fit items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 sm:mt-1">
              <span
                className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"
                aria-hidden
              />
              <span className="text-xs font-sans font-medium text-white/70">
                Available
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Buttons (grid like repo) */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {/* Email */}
            <a
              href={mailto}
              aria-label="Send email"
              className="group relative flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)] focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-red-500/12 to-red-500/6 ring-1 ring-white/6">
                  <Mail className="h-5 w-5 text-white/90" />
                </div>
                <div className="text-left min-w-0">
                  <p className="text-sm font-sans font-semibold">Email</p>
                  <p className="text-xs text-white/60">Send message</p>
                </div>
              </div>

              <ArrowUpRight className="h-5 w-5 shrink-0 text-white/50 transition-transform duration-200 group-hover:translate-x-[4px] group-hover:-translate-y-[2px] group-hover:text-white" />
            </a>

            {/* GitHub */}
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open GitHub profile"
              className="group relative flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-white transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-white/12 to-white/6 ring-1 ring-white/6">
                  <Github className="h-5 w-5 text-white/90" />
                </div>
                <div className="text-left min-w-0">
                  <p className="text-sm font-sans font-semibold">GitHub</p>
                  <p className="text-xs text-white/60">See projects</p>
                </div>
              </div>

              <ArrowUpRight className="h-5 w-5 shrink-0 text-white/50 transition-transform duration-200 group-hover:translate-x-[4px] group-hover:-translate-y-[2px] group-hover:text-white" />
            </a>

            {/* LinkedIn */}
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open LinkedIn profile"
              className="group relative flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-gradient-to-br from-blue-600/12 to-indigo-600/8 px-4 py-3 text-white transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-blue-500/24 to-indigo-500/16 ring-1 ring-white/6">
                  <Linkedin className="h-5 w-5 text-white/90" />
                </div>
                <div className="text-left min-w-0">
                  <p className="text-sm font-sans font-semibold">LinkedIn</p>
                  <p className="text-xs text-white/60">Connect</p>
                </div>
              </div>

              <ArrowUpRight className="h-5 w-5 shrink-0 text-white/50 transition-transform duration-200 group-hover:translate-x-[4px] group-hover:-translate-y-[2px] group-hover:text-white" />
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
