import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "[YOUR NAME] | Front-End Developer",
  description: "Portfolio for a front-end developer specializing in React and Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main"
          className="absolute left-1/2 -translate-x-1/2 -translate-y-full bg-card text-slate-100 px-4 py-2 rounded-b-lg shadow-soft focus:translate-y-0 transition"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}