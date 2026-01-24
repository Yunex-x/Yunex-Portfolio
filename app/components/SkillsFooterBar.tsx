"use client";

import Link from "next/link";

export function SkillsFooterBar() {
  return (
    <div className="relative z-20 border-t border-white/5">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 md:px-8 lg:px-16">
        <div className="flex items-center gap-6">
          <span className="font-sans text-xs font-bold tracking-widest text-red-500">
            SOCIAL
          </span>
          <div className="flex items-center gap-4!">
            <Link
              href="https://github.com/Yunes-x"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-white/60 transition-colors hover:text-red-400"
            >
              GitHub
            </Link>
            <span className="text-white/20">—</span>
            <Link
              href="https://linkedin.com/in/Yunes-x"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-white/40 transition-colors hover:text-red-400"
            >
              LinkedIn
            </Link>
          </div>
        </div>

        <div className="hidden items-center gap-3 sm:flex">
          <span className="font-sans text-xs tracking-wider text-white/30">
            © 2026
          </span>
        </div>
      </div>
    </div>
  );
}
