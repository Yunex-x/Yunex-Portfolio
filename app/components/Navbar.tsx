import Link from "next/link";

const navLinks = [
  { href:  "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href:  "/contact", label: "Contact" },
];            


export default function Navbar() {
  return (
    <nav className="flex justify-center bg-transparent gap-4 px-6 pt-8 lg:gap-10">
      {navLinks.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="font-serif text-sm font-medium uppercase tracking-[0.25em] text-white/90 transition hover:text-amber-300 sm:text-base"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}