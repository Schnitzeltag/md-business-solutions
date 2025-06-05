import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-4 text-center text-sm mt-8">
      <p>&copy; {new Date().getFullYear()} Max Mustermann. Alle Rechte vorbehalten.</p>
      <div className="mt-2 space-x-2">
        <Link href="/impressum" className="underline">Impressum</Link>
        <Link href="/datenschutz" className="underline">Datenschutz</Link>
      </div>
    </footer>
  );
}
