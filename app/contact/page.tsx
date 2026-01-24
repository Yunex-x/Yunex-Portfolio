"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/skills", label: "Skills" },
    { href: "/contact", label: "Contact" },
];

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
    const mailto = email
        ? `mailto:${email}?subject=${encodeURIComponent("Contact from website")}`
        : undefined;

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <main className="relative min-h-screen w-full overflow-hidden bg-black">
            {/* ✅ Background like home */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(255,255,255,0.06)_0%,rgba(0,0,0,0.95)_70%)]" />
                <div className="absolute -right-24 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-red-500/10 blur-[120px]" />
                <div className="absolute -left-24 top-2/3 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-white/5 blur-[140px]" />
            </div>

            {/* ✅ NAV (same uppercase + tracking + red active) */}
            <nav className="relative z-20 mx-auto flex w-full max-w-6xl items-center justify-center px-6 pt-10">
                {/* Mobile button */}
                <button
                    className="absolute right-4 top-10 md:hidden z-30 grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 backdrop-blur"
                    aria-label="Toggle menu"
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    {menuOpen ? (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                            <line
                                x1="6"
                                y1="6"
                                x2="18"
                                y2="18"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                            <line
                                x1="6"
                                y1="18"
                                x2="18"
                                y2="6"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                    ) : (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                            <rect x="4" y="7" width="16" height="2" rx="1" fill="white" />
                            <rect x="4" y="11" width="16" height="2" rx="1" fill="white" />
                            <rect x="4" y="15" width="16" height="2" rx="1" fill="white" />
                        </svg>
                    )}
                </button>

                {/* Desktop nav */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => {
                        const isActive = link.href === "/contact";
                        return (
                            <Link
                                key={link.label}
                                href={link.href}
                                className={`font-serif text-xs uppercase tracking-[0.35em] transition ${isActive ? "text-red-500" : "text-white/70 hover:text-white"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile dropdown */}
                {menuOpen && (
                    <div className="absolute left-0 top-[88px] z-40 w-full border-t border-white/10 bg-black/95 py-8 backdrop-blur md:hidden">
                        <div className="flex flex-col items-center gap-7">
                            {navLinks.map((link) => {
                                const isActive = link.href === "/contact";
                                return (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        onClick={() => setMenuOpen(false)}
                                        className={`font-serif text-sm uppercase tracking-[0.35em] transition ${isActive ? "text-red-500" : "text-white/80 hover:text-white"
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                )}
            </nav>

            {/* ✅ Center section like home */}
            <section className="relative z-10 mx-auto flex min-h-[calc(100vh-120px)] w-full max-w-6xl items-center justify-center px-4 pb-14 pt-12">
                <div className="w-full max-w-4xl">
                    {/* Headline block (same hierarchy as home) */}
                    <div className="text-center">
                        <p className="font-serif text-[11px] uppercase tracking-[0.45em] text-white/40">
                            LET’S TALK
                        </p>

                        <h1 className="mt-4 font-serif text-5xl leading-[0.95] text-white sm:text-6xl md:text-7xl">
                            CONTACT{" "}
                            <span className="text-red-500" aria-hidden>
                                —
                            </span>{" "}
                            ME
                        </h1>

                        <div className="mt-5 flex items-center justify-center gap-4">
                            <span className="h-px w-10 bg-red-500/70" />
                            <p className="font-sans text-sm text-white/60">
                                Got an idea ? Let’s make it real.
                            </p>
                            <span className="h-px w-10 bg-red-500/70" />
                        </div>
                    </div>

                    {/* ✅ Card (same glass + spacing) */}
                        {/* Top row */}
                        <div className="flex flex-col gap-5 ">
                            <div className="text-center gap-4 flex flex-col">
                                

                            </div>


                        </div>

                        {/* Divider */}
                        <div className="my-7  h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                        {/* Buttons */}

                        <div className="grid grid-cols-1 gap- w-50 mx-auto ">
                            {/* Email */}
                            <a
                                href={mailto}
                                aria-label="Send email"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white transition hover:-translate-y-1 hover:border-white/15 hover:bg-white/7 hover:shadow-[0_25px_50px_-30px_rgba(0,0,0,0.9)] focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5">
                                        <Mail className="h-5 w-5 text-white/85" />
                                    </div>
                                    <div className="text-left">
                                        <p className="font-sans text-sm font-semibold">Email</p>
                                        <p className="font-sans text-xs text-white/50">Send message</p>
                                    </div>
                                </div>

                                <ArrowUpRight className="h-5 w-5 text-white/40 transition group-hover:-translate-y-[2px] group-hover:translate-x-[4px] group-hover:text-white" />
                            </a>

                            {/* GitHub */}
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Open GitHub profile"
                                className="group flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white transition hover:-translate-y-1 hover:border-white/15 hover:bg-white/7 hover:shadow-[0_25px_50px_-30px_rgba(0,0,0,0.9)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5">
                                        <Github className="h-5 w-5 text-white/85" />
                                    </div>
                                    <div className="text-left">
                                        <p className="font-sans text-sm font-semibold">GitHub</p>
                                        <p className="font-sans text-xs text-white/50">See projects</p>
                                    </div>
                                </div>

                                <ArrowUpRight className="h-5 w-5 text-white/40 transition group-hover:-translate-y-[2px] group-hover:translate-x-[4px] group-hover:text-white" />
                            </a>

                            {/* LinkedIn */}
                            <a
                                href={linkedinUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Open LinkedIn profile"
                                className="group flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white transition hover:-translate-y-1 hover:border-white/15 hover:bg-white/7 hover:shadow-[0_25px_50px_-30px_rgba(0,0,0,0.9)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5">
                                        <Linkedin className="h-5 w-5 text-white/85" />
                                    </div>
                                    <div className="text-left">
                                        <p className="font-sans text-sm font-semibold">LinkedIn</p>
                                        <p className="font-sans text-xs text-white/50">Connect</p>
                                    </div>
                                </div>

                                <ArrowUpRight className="h-5 w-5 text-white/40 transition group-hover:-translate-y-[2px] group-hover:translate-x-[4px] group-hover:text-white" />
                            </a>
                        </div>
                </div>
            </section>
        </main>
    );
}
