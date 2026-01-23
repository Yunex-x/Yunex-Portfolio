"use client";

import Link from "next/link";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/skills", label: "SKILLS" },
  { href: "/contact", label: "CONTACT" },
];

export function SkillsNavbar() {
  return (
    <nav className="absolute  top-6 left-0 right-0  z-50">
      <div className="mx-auto! flex   items-center justify-center  px-6 py-4 md:px-8 lg:px-26! max-w-7xl">
        <div className="hidden items-center gap-8 sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`font-sans font-medium tracking-wider transition-colors ${
                link.label === "SKILLS"
                  ? "text-red-500"
                  : "text-white/40 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
