"use client";

import React from "react";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

type ContactMeCardProps = {
  email?: string;
  githubUrl?: string;
  linkedinUrl?: string;
};

export default function ContactMeCard({
  email = "youremail@example.com",
  githubUrl = "https://github.com/yourusername",
  linkedinUrl = "https://www.linkedin.com/in/yourusername",
}: ContactMeCardProps) {
  return (
    <section className="w-full flex items-center justify-center px-4 py-10">
      <div className="relative w-full max-w-[520px] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0B1220] via-[#0A0F1A] to-[#05070D] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)]">
        {/* Glow */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl" />

        <div className="relative p-7 sm:p-8">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-widest text-white/50">
                LET’S CONNECT
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white">
                Contact Me
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-white/65">
                Got a project idea, job opportunity, or want to collaborate?
                Let’s talk — I reply fast.
              </p>
            </div>

            <div className="hidden sm:flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.7)]" />
              <span className="text-xs font-medium text-white/70">
                Available
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Buttons */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {/* Email */}
            <a
              href={`mailto:${email}`}
              className="group relative flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-cyan-500/25 to-blue-500/25 ring-1 ring-white/10">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold">Email</p>
                  <p className="text-xs text-white/60">Send message</p>
                </div>
              </div>

              <ArrowUpRight className="h-5 w-5 text-white/50 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
            </a>

            {/* GitHub */}
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="group relative flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-white/15 to-white/5 ring-1 ring-white/10">
                  <Github className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold">GitHub</p>
                  <p className="text-xs text-white/60">See projects</p>
                </div>
              </div>

              <ArrowUpRight className="h-5 w-5 text-white/50 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
            </a>

            {/* LinkedIn */}
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="group relative flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-blue-500/25 to-indigo-500/25 ring-1 ring-white/10">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold">LinkedIn</p>
                  <p className="text-xs text-white/60">Connect</p>
                </div>
              </div>

              <ArrowUpRight className="h-5 w-5 text-white/50 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
            </a>
          </div>

          {/* Footer note */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs text-white/45">
              Tip: update the links with your real profile.
            </p>

            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              Modern UI
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
