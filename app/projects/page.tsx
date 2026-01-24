"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/skills", label: "Skills" },
    { href: "/contact", label: "Contact" },
];

type Project = {
    title: string;
    description: string;
    tags: string[];
    liveUrl?: string;
    githubUrl?: string;
};

const projects: Project[] = [

    {
        title: "Dashboard UI",
        description:
            "Dark dashboard layout with sidebar, cards, sections and consistent spacing system.",
        tags: ["Next.js", "Tailwind", "Dashboard"],
        liveUrl: "#",
        githubUrl: "https://github.com/Yunex-x/checkout-forms",
    },
    {
        title: "Landing Page UI",
        description:
            "High-conversion landing page layout with clear hierarchy and premium feel.",
        tags: ["Next.js", "Tailwind", "Marketing"],
        liveUrl: "#",
        githubUrl: "https://github.com/Yunex-x",
    },
    {
        title: "Portfolio UI",
        description:
            "Minimal portfolio with strong typography, smooth sections and clean details.",
        tags: ["Next.js", "Tailwind", "Portfolio"],
        liveUrl: "#",
        githubUrl: "https://github.com/Yunex-x",
    },
    {
        title: "Components Library",
        description:
            "Reusable UI components built with consistency, spacing system and dark theme.",
        tags: ["Tailwind", "UI Kit", "Design"],
        liveUrl: "#",
        githubUrl: "https://github.com/Yunex-x",
    },
      {
        title: "Components Library",
        description:
            "Reusable UI components built with consistency, spacing system and dark theme.",
        tags: ["Tailwind", "UI Kit", "Design"],
        liveUrl: "#",
        githubUrl: "https://github.com/Yunex-x",
    },
      {
        title: "Components Library",
        description:
            "Reusable UI components built with consistency, spacing system and dark theme.",
        tags: ["Tailwind", "UI Kit", "Design"],
        liveUrl: "#",
        githubUrl: "https://github.com/Yunex-x",
    },
];

export default function ProjectsPage() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <main className="relative min-h-screen w-full overflow-hidden bg-black">
            {/* ✅ Background like Home */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(255,255,255,0.06)_0%,rgba(0,0,0,0.95)_70%)]" />
                <div className="absolute -right-28 top-1/2 h-[560px] w-[560px] -translate-y-1/2 rounded-full bg-red-500/10 blur-[130px]" />
                <div className="absolute -left-28 top-2/3 h-[460px] w-[460px] -translate-y-1/2 rounded-full bg-white/5 blur-[160px]" />
            </div>

            {/* ✅ NAV */}
            <nav className="relative z-20 mx-auto flex w-full max-w-6xl items-center justify-center px-6 pt-10">
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

                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => {
                        const isActive = link.href === "/projects";
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

                {menuOpen && (
                    <div className="absolute left-0 top-[88px] z-40 w-full border-t border-white/10 bg-black/95 py-8 backdrop-blur md:hidden">
                        <div className="flex flex-col items-center gap-7">
                            {navLinks.map((link) => {
                                const isActive = link.href === "/projects";
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

            {/* ✅ CONTENT */}
            <section className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-4 pb-16 pt-14">
                {/* Title like Home */}
                <div className="w-full text-center">
                    <p className="font-serif text-[11px] uppercase tracking-[0.45em] text-white/40">
                        SELECTED WORK
                    </p>

                    <h1 className="mt-4 font-serif text-5xl leading-[0.95] text-white sm:text-6xl md:text-7xl">
                        PROJECTS{" "}
                        <span className="text-red-500" aria-hidden>
                            —
                        </span>
                    </h1>

                    <div className="mt-5 flex items-center justify-center gap-4">
                        <span className="h-px w-10 bg-red-500/70" />
                        <p className="font-sans text-sm text-white/60">
                            Modern UI builds with clean spacing and premium detail.
                        </p>
                        <span className="h-px w-10 bg-red-500/70" />
                    </div>
                </div>

                {/* ✅ 6 Cards */}
                <div className="mt-12 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <article
                            key={project.title}
                            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur transition hover:-translate-y-1 hover:border-white/15 hover:bg-white/7 hover:shadow-[0_40px_90px_-60px_rgba(0,0,0,0.95)]"
                        >
                            {/* Snapshot placeholder */}
                            <div className="relative h-44 w-full overflow-hidden border-b border-white/10 bg-white/5">
                                {/* soft gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-white/5" />

                                {/* fake highlights */}
                                <div className="absolute left-4 top-4 h-3 w-20 rounded-full bg-white/10" />
                                <div className="absolute left-4 top-10 h-2 w-28 rounded-full bg-white/8" />
                                <div className="absolute bottom-4 left-4 h-8 w-24 rounded-xl bg-white/6" />

                                {/* label */}
                                <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/40 px-3 py-1 font-sans text-[11px] text-white/60 backdrop-blur">
                                    Snapshot
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="font-serif text-2xl text-white">
                                    {project.title}
                                </h3>

                                <p className="mt-2 font-sans text-sm leading-relaxed text-white/55">
                                    {project.description}
                                </p>

                                {/* tags */}
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-sans text-[11px] text-white/55"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* actions */}
                                <div className="mt-6 flex items-center gap-3">
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-sans text-xs font-medium text-white/70 transition hover:border-white/15 hover:bg-white/10 hover:text-white"
                                        >
                                            View
                                            <ArrowUpRight className="h-4 w-4" />
                                        </a>
                                    )}

                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-sans text-xs font-medium text-white/70 transition hover:border-white/15 hover:bg-white/10 hover:text-white"
                                        >
                                            Code
                                            <Github className="h-4 w-4" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}
