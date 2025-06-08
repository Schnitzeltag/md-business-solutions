// src/components/Header.tsx

"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
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
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-white/80 dark:bg-neutral-900/80 shadow-md backdrop-blur">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <Link href={config.links.home} className="text-xl font-bold tracking-tight hover:opacity-80">
          {config.company}
        </Link>
        <nav className="hidden md:flex gap-4 items-center">
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
        <button
          className="md:hidden p-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800"
          aria-label="Menü öffnen"
          onClick={() => setOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setOpen(false)}
        >
          <div
            className="absolute left-0 top-0 w-64 h-full bg-white dark:bg-neutral-900 p-4"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="mb-4 p-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800"
              aria-label="Menü schließen"
              onClick={() => setOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <nav className="flex flex-col gap-4">
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
        </div>
      )}
    </header>
  );
}
