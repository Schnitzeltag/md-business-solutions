// src/components/Header.tsx

import Link from "next/link";
import config from "../config/site.config";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: config.links.home, label: "Home" },
  { href: config.links.ueberMich, label: "Über mich" },
  { href: config.links.leistungen, label: "Leistungen" },
  { href: config.links.kurse, label: "Kurse" },
  { href: config.links.projekte, label: "Projekte" },
  { href: config.links.faq, label: "FAQ" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-white/80 dark:bg-neutral-900/80 shadow-md backdrop-blur">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <Link href={config.links.home} className="text-xl font-bold tracking-tight hover:opacity-80">
          {config.company}
        </Link>
        <nav className="flex gap-4 items-center">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium hover:text-primary transition"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
