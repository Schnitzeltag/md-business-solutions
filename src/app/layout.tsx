// src/app/layout.tsx

import "./../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "MD Business Solutions – Webdesign, App- und Software-Entwicklung",
  description: "Websites, Apps und Computerkurse. Modern. Individuell. Wirkungsvoll.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="bg-neutral-50 text-neutral-900 dark:bg-neutral-900 dark:text-white">
        <Header />
        <main className="min-h-[80vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
