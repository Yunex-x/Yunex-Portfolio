"use client";

import Link from "next/link";

export function SkillsCTA() {
  return (
    <div className="mt-6! mb-6! text-center gap-4! flex flex-col items-center">
      <p className=" font-sans  text-base text-white/30">
        Interested in working together?
      </p>
      <Link
        href="./contact"
        className="inline-flex items-center justify-center rounded-full bg-red-500 px-10! py-2! font-sans text-sm font-semibold text-white transition-all hover:bg-red-600"
      >
        Let&apos;s Talk
      </Link>
    </div>
  );
}
