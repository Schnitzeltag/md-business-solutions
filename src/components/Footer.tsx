// src/components/Footer.tsx

import Link from "next/link";
import config from "../config/site.config";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-100 py-8 mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <span>&copy; {new Date().getFullYear()} {config.company}</span>
        <nav className="flex gap-4">
          <Link href={config.links.impressum} className="hover:underline">Impressum</Link>
          <Link href={config.links.datenschutz} className="hover:underline">Datenschutz</Link>
        </nav>
      </div>
    </footer>
  );
}
