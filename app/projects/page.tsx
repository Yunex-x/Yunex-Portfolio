"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import gsap from "gsap";
import Navbar from "../components/Navbar";

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
    snapshot?: string; // image url
};

const projects: Project[] = [
    {
        title: "Figma designs to Next.js",
        description:
            "A collection of pixel-perfect design–to–code UI examples built with Next.js + Tailwind CSS as part of my portfolio to showcase modern frontend skills.",
        tags: ["Next.js", "Tailwind", "Figma"],
        liveUrl: "https://figma-to-ui-alpha.vercel.app/",
        githubUrl: "https://github.com/Yunex-x/figma-to-ui/tree/main",
        snapshot: "/OIP.webp",
    },
    {
        title: "Checkout Flow",
        description:
            "Complete payment experience with multiple payment methods, order summary, and responsive design.",
        tags: ["Checkout", "flow" , "E-commerce"],
        liveUrl: "https://figma-to-ui-alpha.vercel.app/checkout",
        githubUrl: "https://github.com/Yunex-x/figma-to-ui/tree/main/app/checkout",
        snapshot: "/check.jpg",
    },
    {
        title: "Auth Flow",
        description:
            "A modern, conversion-focused landing page built with Next.js App Router and Tailwind CSS, designed for service/agency websites that need to capture leads efficiently.",
        tags: ["Next.js", "Tailwind", "Portfolio"],
        liveUrl: "https://figma-to-ui-alpha.vercel.app/auth/login",
        githubUrl: "https://github.com/Yunex-x/figma-to-ui/tree/main/app/auth",
        snapshot: "login.jpg",
    },
    {
        title: "Dashboard UI",
        description:
            "   Analytics and admin dashboard with data visualization and modern UI components.",
        tags: ["Tailwind", "UI Kit", ""],
        liveUrl: "https://figma-to-ui-alpha.vercel.app/dashboard",
        githubUrl: "https://github.com/Yunex-x/figma-to-ui/tree/main/app/dashboard",
        snapshot: "/dashboard.jpg",
    },
    {
        title: "Dashboard KPI ",
        description:
            " A backend-ready KPI dashboard built with Next.js and Tailwind CSSClean UI, reusable components, separated logic (hooks & services), and prepared for easy backend integration .",
tags: [
  
  "KPI",
  "Frontend",
  "Backend-Ready",
  "UI Kit",
]  ,
      liveUrl: "https://dashboard-zeta-ten-72.vercel.app/overview",
        githubUrl: "https://github.com/Yunex-x/dashboard",
        snapshot: "/dash.jpeg",
    },
];

export default function ProjectsPage() {
    const [menuOpen, setMenuOpen] = useState(false);

    // GSAP refs
    const containerRef = useRef<HTMLElement | null>(null);
    const titleRef = useRef<HTMLHeadingElement | null>(null);
    const subRef = useRef<HTMLDivElement | null>(null);
    const gridRef = useRef<HTMLDivElement | null>(null);

    const titleText = "PROJECTS";

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

            const chars = titleRef.current?.querySelectorAll(".char");
            if (chars && chars.length) {
                gsap.set(chars, { y: 120, opacity: 0 });
                tl.to(chars, {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    stagger: 0.05,
                });
            }

            tl.from(
                subRef.current,
                {
                    y: 60,
                    opacity: 0,
                    duration: 0.9,
                },
                "-=0.6"
            );

            // Animate project cards with a stagger
            const cards = gridRef.current?.querySelectorAll("article");
            if (cards && cards.length) {
                gsap.set(cards, { y: 20, opacity: 0 });
                tl.to(
                    cards,
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.08,
                        ease: "power2.out",
                    },
                    "-=0.4"
                );
            }
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <main ref={containerRef} className="relative min-h-screen w-full overflow-hidden bg-black">
            {/* ✅ Background like Home */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(255,255,255,0.06)_0%,rgba(0,0,0,0.95)_70%)]" />
                <div className="absolute -right-28 top-1/2 h-[560px] w-[560px] -translate-y-1/2 rounded-full bg-red-500/10 blur-[130px]" />
                <div className="absolute -left-28 top-2/3 h-[460px] w-[460px] -translate-y-1/2 rounded-full bg-white/5 blur-[160px]" />
            </div>

            {/* ✅ NAV */}
            <Navbar />

            {/* ✅ CONTENT */}
            <section className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-4 pb-16 pt-14">
                {/* Title like Home */}
                <div className="w-full text-center">
                    <p className="font-serif text-[11px] uppercase tracking-[0.45em] text-white/40">
                        SELECTED WORK
                    </p>

                    <h1
                        ref={titleRef}
                        className="mt-4  font-serif text-5xl leading-[0.95] text-white sm:text-6xl md:text-7xl overflow-hidden"
                    >
                        {titleText.split("").map((char, i) => (
                            <span key={i} className="char inline-block">
                                {char}
                            </span>
                        ))}{" "}
                        <span className="text-red-500" aria-hidden>
                            —
                        </span>
                    </h1>

                    <div ref={subRef} className="mt-8 flex items-center justify-center  gap-4">
                        <span className="h-px w-10 bg-red-500/70" />
                        <p className="font-sans text-sm text-white/60">
                            Modern UI builds with clean spacing and premium detail.
                        </p>
                        <span className="h-px w-10 bg-red-500/70" />
                    </div>
                </div>

                {/* ✅ 6 Cards */}
                <div ref={gridRef} className="mt-12 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, idx) => (
                        <article
                            key={project.title + '-' + idx}
                            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur transition hover:-translate-y-1 hover:border-white/15 hover:bg-white/7 hover:shadow-[0_40px_90px_-60px_rgba(0,0,0,0.95)]"
                        >
                            {/* Snapshot placeholder */}
                            <div className="relative h-44 w-full overflow-hidden border-b border-white/10 bg-white/5">
                                <img
                                    src={project.snapshot || "/snapshots/default.png"}
                                    alt={project.title + " snapshot"}
                                    className="object-cover bg-center h-[176px] w-[361px] transition-transform duration-500 group-hover:scale-105"
                                />
                               
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
                                            Live demo
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