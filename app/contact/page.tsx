"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import Navbar from "../components/Navbar";

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

    // GSAP refs
    const containerRef = useRef<HTMLDivElement | null>(null);
    const headlineRef = useRef<HTMLHeadingElement | null>(null);
    const subRef = useRef<HTMLDivElement | null>(null);
    const taglineRef = useRef<HTMLParagraphElement | null>(null);
    const ctaRef = useRef<HTMLDivElement | null>(null);

    const headlineText = "CONTACT — ME";

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

            const headChars = headlineRef.current?.querySelectorAll(".char");
            if (headChars && headChars.length) {
                gsap.set(headChars, { y: 120, opacity: 0 });
                tl.to(headChars, {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    stagger: 0.04,
                });
            }

            tl.from(
                subRef.current,
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
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <main
            ref={containerRef}
            className="relative min-h-screen w-full overflow-hidden bg-black"
        >
            {/* ✅ Background like home */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(255,255,255,0.06)_0%,rgba(0,0,0,0.95)_70%)]" />
                <div className="absolute -right-24 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-red-500/10 blur-[120px]" />
                <div className="absolute -left-24 top-2/3 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-white/5 blur-[140px]" />
            </div>

            {/* ✅ NAV (same uppercase + tracking + red active) */}
            <Navbar />

            {/* ✅ Center section like home */}
            <section className="relative z-10 mx-auto flex min-h-[calc(100vh-120px)] w-full max-w-6xl items-center justify-center px-4 pb-14 pt-12">
                <div className="w-full max-w-4xl">
                    {/* Headline block (animated) */}
                    <div className="text-center">
                        <p className="font-serif text-[11px] uppercase tracking-[0.45em] text-white/40">
                            LET’S TALK
                        </p>

                        <h1
                            ref={headlineRef}
                            className="mt-4 font-serif text-5xl leading-[0.95] text-white sm:text-6xl md:text-7xl overflow-hidden"
                        >
                            {headlineText.split("").map((char, i) => (
                                <span
                                    key={i}
                                    className="char inline-block"
                                    aria-hidden={char === " " ? "true" : undefined}
                                >
                                    {char}
                                </span>
                            ))}
                        </h1>

                        <div ref={subRef} className="mt-5 flex items-center justify-center gap-4">
                            <span className="h-px w-10 bg-red-500/70" />
                            <p className="font-sans text-sm text-white/60">
                                Got an idea ? Let’s make it real.
                            </p>
                            <span className="h-px w-10 bg-red-500/70" />
                        </div>
                    </div>

                    {/* ✅ Card (same glass + spacing) */}
                    <div className="mt-10">
                        {/* Top row (empty slot if you want to add text/content) */}
                        <div className="flex flex-col gap-5 ">
                            <div className="text-center gap-4 flex flex-col"></div>
                        </div>

                        {/* Divider */}
                        <div className="my-7  h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                        {/* Buttons */}
                        <div ref={ctaRef} className="grid grid-cols-1 gap-4 w-full max-w-xl mx-auto">
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
                </div>
            </section>
        </main>
    );
}