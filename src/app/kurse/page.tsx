"use client";
import { User, Users, Smartphone, Shield } from "lucide-react";
import { motion } from "framer-motion";

const kurse = [
  {
    title: "Computerkurs für Einsteiger",
    icon: <User className="w-9 h-9 text-primary" />,
    description: "Der verständliche Einstieg für alle, die sicher und entspannt am Computer arbeiten möchten.",
    features: [
      "Maus, Tastatur, Desktop",
      "Dateien & Ordner organisieren",
      "Internet & E-Mail nutzen",
      "Fotos verwalten, drucken, verschicken",
    ],
    price: "6 Termine à 90 Min. – 89 €"
  },
  {
    title: "Spezialkurse & Einzeltraining",
    icon: <Users className="w-9 h-9 text-primary" />,
    description: "Vertiefende Themen oder individuelle Unterstützung – praxisnah, persönlich, flexibel.",
    features: [
      "Textverarbeitung, Tabellenkalkulation",
      "Smartphone & Tablet",
      "Online-Shopping, Sicherheit",
      "Einzelstunde: 39 € / 60 Min.",
    ],
    price: "Preis nach Vereinbarung"
  },
  {
    title: "Smartphone- & Internet-Hilfe",
    icon: <Smartphone className="w-9 h-9 text-primary" />,
    description: "Praktische Begleitung rund um Handy, Tablet & Internet – verständlich erklärt.",
    features: [
      "Geräte einrichten & bedienen",
      "WhatsApp, Videoanruf & Co.",
      "Sicher surfen & einkaufen",
      "Tipps & Tricks aus der Praxis",
    ],
    price: "Individuell buchbar"
  },
  {
    title: "IT-Sicherheit & Datenschutz",
    icon: <Shield className="w-9 h-9 text-primary" />,
    description: "Sicher und entspannt mit PC und Internet umgehen – für Privatpersonen und kleine Unternehmen.",
    features: [
      "Sicheres Surfen, starke Passwörter",
      "Datensicherung",
      "Betrug & Phishing erkennen",
      "DSGVO & Praxiswissen",
    ],
    price: "Auf Anfrage"
  },
];

export default function KursePage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-6xl">
      <h1 className="text-4xl font-bold mb-12 text-center">Kurse & Schulungen</h1>
      <div className="grid md:grid-cols-2 gap-12">
        {kurse.map((kurs, idx) => (
          <motion.div
            key={kurs.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.09 * idx }}
            className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg p-10 group hover:shadow-2xl transition"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="bg-primary/10 p-3 rounded-xl">{kurs.icon}</div>
              <h2 className="font-bold text-2xl">{kurs.title}</h2>
            </div>
            <p className="text-neutral-700 dark:text-neutral-300 mb-4">{kurs.description}</p>
            <ul className="mb-6 space-y-1">
              {kurs.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-base">
                  <span className="text-primary">•</span> {feature}
                </li>
              ))}
            </ul>
            <div className="font-bold text-primary text-lg">{kurs.price}</div>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-14">
        <p className="mb-3 text-lg">Sie möchten teilnehmen oder haben Fragen?</p>
        <a
          href="/#kontakt"
          className="inline-block px-8 py-4 rounded-full bg-primary text-white font-semibold shadow hover:scale-105 transition"
        >
          Kontakt aufnehmen
        </a>
      </div>
    </div>
  );
}
