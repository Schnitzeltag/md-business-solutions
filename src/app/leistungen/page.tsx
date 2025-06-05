"use client";
import { Briefcase, Laptop, Brain, Settings } from "lucide-react"; // oder eigene SVGs/Icons
import { motion } from "framer-motion";

const services = [
  {
    title: "Webdesign & Entwicklung",
    icon: <Laptop className="w-10 h-10 text-primary" />,
    description: "Maßgeschneiderte, moderne Websites – responsiv, performant, suchmaschinenoptimiert und individuell gestaltet.",
    features: [
      "Responsive Design (Mobil & Desktop)",
      "CMS/Content-Integration",
      "SEO & Performance",
      "Wartung und Hosting auf Wunsch"
    ],
    price: "ab 599 €"
  },
  {
    title: "App-Entwicklung",
    icon: <Settings className="w-10 h-10 text-primary" />,
    description: "Native Apps oder Progressive Web-Apps – individuell für Ihre Idee, Ihren Prozess oder Ihr Geschäftsmodell entwickelt.",
    features: [
      "Android & iOS",
      "Prototyping & Beratung",
      "Datensicherheit & Support",
      "Modernste Technologien"
    ],
    price: "auf Anfrage"
  },
  {
    title: "Software-Lösungen",
    icon: <Brain className="w-10 h-10 text-primary" />,
    description: "Automatisierung, Schnittstellen & individuelle Tools – 100% passgenau für Ihr Unternehmen.",
    features: [
      "Individuelle Workflows",
      "Digitale Prozessoptimierung",
      "Schnittstellen & Datenintegration"
    ],
    price: "auf Anfrage"
  },
  {
    title: "Beratung & Digitalisierung",
    icon: <Briefcase className="w-10 h-10 text-primary" />,
    description: "Von der ersten Idee bis zur Umsetzung – ich begleite Sie bei allen Fragen rund um Digitalisierung, Website & Co.",
    features: [
      "Individuelle Beratung",
      "Analyse & Konzept",
      "Umsetzungsbegleitung"
    ],
    price: "auf Anfrage"
  },
];

export default function LeistungenPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-6xl">
      <h1 className="text-4xl font-bold mb-12 text-center">Leistungen</h1>
      <div className="grid md:grid-cols-2 gap-12">
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 * idx }}
            className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg p-10 group hover:shadow-2xl transition relative"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="bg-primary/10 p-3 rounded-xl">{service.icon}</div>
              <h2 className="font-bold text-2xl">{service.title}</h2>
            </div>
            <p className="text-neutral-700 dark:text-neutral-300 mb-4">{service.description}</p>
            <ul className="mb-6 space-y-1">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-base">
                  <span className="text-primary">•</span> {feature}
                </li>
              ))}
            </ul>
            <div className="font-bold text-primary text-lg absolute bottom-8 right-10 group-hover:scale-110 transition">{service.price}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
