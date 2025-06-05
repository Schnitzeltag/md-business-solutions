import { Code, Palette, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Code className="w-8 h-8 text-primary" />,
    title: "Webentwicklung",
    text: "Modernste Technologien für schnelle und zugängliche Websites.",
  },
  {
    icon: <Palette className="w-8 h-8 text-primary" />,
    title: "Design",
    text: "Individuelle Gestaltung mit Wiedererkennungswert.",
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-primary" />,
    title: "Schulungen",
    text: "Kurse und Workshops für Sie und Ihr Team.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-neutral-50 dark:bg-neutral-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Unsere Stärken</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white dark:bg-neutral-900 rounded-2xl shadow p-8 flex flex-col items-center"
            >
              {feat.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">{feat.title}</h3>
              <p className="text-neutral-700 dark:text-neutral-300">{feat.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
