
import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Yunes-x | Front-End Web Developer",
  description: "I build modern, conversion-focused web interfaces.",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${dmSans.variable} font-sans antialiased bg-[#0a0a0a] min-h-screen flex flex-col`}>
        <main className="">
          {children}
        </main>
      </body>
    </html>
  );
}