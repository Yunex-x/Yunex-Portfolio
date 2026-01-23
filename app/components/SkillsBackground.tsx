"use client";

export function SkillsBackground() {
  return (
    <>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-[#0a0a0a] via-[#0a0a0a] to-red-950/30" />

      {/* Blobs */}
      <div className="float-element absolute -left-1/4 top-1/4 h-130 w-130 rounded-full bg-red-600/10 blur-[150px]" />
      <div className="float-element absolute -right-1/4 bottom-1/4 h-105 w-105 rounded-full bg-red-600/5 blur-[100px]" />
      <div className="float-element absolute left-1/2 top-1/2 h-80 w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/5 blur-[120px]" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
    </>
  );
}
