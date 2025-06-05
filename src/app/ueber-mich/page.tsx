"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import config from "../../config/site.config";

const cards = [
  {
    title: "Webdesign & Entwicklung",
    description:
      "10+ Jahre Projekterfahrung mit aktuellen Webtechnologien. Individuell, performant und nachhaltig – für Unternehmen, Vereine und Selbständige.",
    icon: "🌐",
  },
  {
    title: "Individuelle Software",
    description:
      "Von internen Tools bis zu mobilen Apps: Maßgeschneiderte Lösungen, die Prozesse vereinfachen und digitalisieren.",
    icon: "💻",
  },
  {
    title: "Digitale Kompetenz",
    description:
      "Wissenstransfer ist mir wichtig: Computerkurse, Workshops, persönliche Beratung – verständlich und praxisnah.",
    icon: "🎓",
  },
];

const career = [
  {
    year: "2012 – 2015",
    position: "Studium Informatik (B.Sc.)",
    description:
      "Fundiertes Wissen als Basis für professionelle Software- und Webentwicklung.",
  },
  {
    year: "2015 – 2021",
    position: "Softwareentwickler & Webdesigner (angestellt)",
    description:
      "Vielseitige Projekte für Unternehmen, KMU und öffentliche Auftraggeber. Praxiserprobte Expertise.",
  },
  {
    year: "Seit 2022",
    position: "MD Business Solutions (selbstständig)",
    description:
      "Beratung, Umsetzung und Schulungen für Unternehmen und Privatpersonen.",
  },
];

export default function UeberMichPage() {
  return (
    <div className="mx-auto px-4 py-20 max-w-6xl">
      {/* Header + Portrait */}
      <section className="flex flex-col md:flex-row gap-12 md:gap-20 items-center md:items-start mb-20">
        <div className="flex-shrink-0">
          <Image
            src="/images/portrait.jpg"
            alt="Max Mustermann"
            width={220}
            height={220}
            className="rounded-2xl object-cover border-4 border-primary/80 shadow-lg"
            priority
          />
        </div>
        <div className="flex-1">
          <h1 className="text-5xl font-extrabold mb-4">Über mich</h1>
          <h2 className="text-xl text-primary mb-6 font-semibold">
            Max Mustermann – Gründer von {config.company}
          </h2>
          <p className="text-xl mb-5 leading-relaxed">
            Ich stehe für ehrliche Beratung, moderne Entwicklung und nachhaltige Digitalisierung.<br />
            <span className="text-primary font-semibold">
              Zuhören, verstehen, umsetzen – und immer verlässlich bleiben.
            </span>
          </p>
          <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Nach Jahren als Entwickler in Agenturen und Unternehmen habe ich mich mit <b>{config.company}</b> selbstständig gemacht, um meine Leidenschaft für gute Software und sinnvolle Digitalisierung direkt an meine Kunden weiterzugeben. Ich glaube an Technik, die den Alltag wirklich leichter macht – und daran, dass ehrlicher, persönlicher Kontakt durch nichts zu ersetzen ist.
          </p>
        </div>
      </section>

      {/* Card-Grid */}
      <section className="mb-24">
        <div className="grid md:grid-cols-3 gap-10">
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1 * idx }}
              className="bg-white dark:bg-neutral-800 rounded-2xl shadow-lg p-10 min-h-[230px] flex flex-col items-center text-center hover:shadow-2xl transition"
            >
              <div className="text-5xl mb-5">{card.icon}</div>
              <div className="font-semibold text-2xl mb-2">{card.title}</div>
              <div className="text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed">{card.description}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Karriere Timeline als Cards */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-10 text-center">Beruflicher Werdegang</h2>
        <div className="flex flex-col md:flex-row gap-10">
          {career.map((item, idx) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1 * idx + 0.2 }}
              className="flex-1 bg-neutral-100 dark:bg-neutral-900 rounded-2xl shadow p-8 border-l-8 border-primary min-h-[180px]"
            >
              <div className="text-primary font-extrabold text-lg mb-1">{item.year}</div>
              <div className="font-bold mb-2 text-xl">{item.position}</div>
              <div className="text-neutral-700 dark:text-neutral-300 text-base">{item.description}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Werte & USP */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Werte & Arbeitsweise</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15 }}
            className="bg-primary/10 dark:bg-primary/20 p-7 rounded-xl shadow text-center text-lg"
          >
            <div className="font-bold mb-2 text-xl">Verlässlichkeit</div>
            <div>
              Klare Kommunikation, transparente Abläufe, verbindliche Absprachen.
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="bg-primary/10 dark:bg-primary/20 p-7 rounded-xl shadow text-center text-lg"
          >
            <div className="font-bold mb-2 text-xl">Individuelle Lösungen</div>
            <div>
              Kein „Baukasten“, sondern passgenau nach Ihren Bedürfnissen entwickelt.
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.45 }}
            className="bg-primary/10 dark:bg-primary/20 p-7 rounded-xl shadow text-center text-lg"
          >
            <div className="font-bold mb-2 text-xl">Praxisnähe</div>
            <div>
              Projekte und Kurse, die im Alltag funktionieren und Spaß machen.
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Lassen Sie uns gemeinsam Ihr Digitalprojekt umsetzen</h2>
        <Link
          href="/#kontakt"
          className="inline-block px-10 py-4 rounded-full bg-primary text-white text-lg font-semibold shadow hover:scale-105 transition"
        >
          Kontakt aufnehmen
        </Link>
      </section>
    </div>
  );
}
