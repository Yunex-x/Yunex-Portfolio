"use client";

import React, { useState } from "react";
import Link from "next/link";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/skills", label: "Skills" },
    { href: "/contact", label: "Contact" },
];

export default function ProjectsPage() {
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
            {/* Page content placeholder */}
            <section className="w-full min-h-screen flex items-center justify-center px-4 py-10 sm:py-14">
                <div className="text-white text-2xl font-serif">Projects Page Content Here</div>
            </section>
        </>
    );
}
