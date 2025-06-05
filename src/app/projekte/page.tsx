"use client";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Kiosk Website",
    image: "/images/projects/kiosk-demo.jpg",
    description: "Moderne Website für einen Kioskbetrieb mit interaktiver Speisekarte, Google Maps-Einbindung und Mobile-Optimierung.",
    stack: ["Next.js", "React", "Tailwind CSS"],
    demoUrl: "https://dein-kiosk-demo-link.de",
  },
  {
    name: "Friseur Salon",
    image: "/images/projects/friseur-demo.jpg",
    description: "Stylische Online-Präsenz für einen Friseursalon, inklusive Buchungssystem und Teamvorstellung.",
    stack: ["React", "shadcn/ui", "Framer Motion"],
    demoUrl: "https://dein-friseur-demo-link.de",
  },
  {
    name: "Kleingartenverein",
    image: "/images/projects/garten-demo.jpg",
    description: "Vereinswebsite mit Terminkalender, Mitgliederbereich und Fotogalerie. Vollständig mobilfähig.",
    stack: ["Next.js", "Tailwind CSS"],
    demoUrl: "https://dein-gartenverein-demo-link.de",
  },
  {
    name: "RechnungsBuddy",
    image: "/images/projects/rechnungsbuddy-demo.jpg",
    description: "Tool zur einfachen Rechnungserstellung für Selbstständige und kleine Unternehmen.",
    stack: ["React", "Flask", "Tailwind CSS"],
    demoUrl: "https://dein-rechnungsbuddy-demo-link.de",
  },
  // Weitere Projekte nach Wunsch...
];

export default function ProjektePage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-7xl">
      <h1 className="text-4xl font-bold mb-12 text-center">Projekte & Referenzen</h1>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 * idx }}
            className="rounded-2xl shadow-lg bg-white dark:bg-neutral-900 overflow-hidden flex flex-col group hover:shadow-2xl transition"
          >
            <div className="h-56 bg-neutral-200 dark:bg-neutral-800 overflow-hidden relative">
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="100vw"
                className="object-cover w-full h-full group-hover:scale-105 transition"
              />
            </div>
            <div className="flex-1 flex flex-col p-7">
              <h2 className="text-2xl font-semibold mb-2">{project.name}</h2>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-primary/10 text-primary rounded text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                Live-Demo ansehen <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
