// src/app/page.tsx

import HeroSection from "../components/HeroSection";
import LegacySection from "../components/LegacySection";
import Kontaktformular from "../components/Kontaktformular";
import TestimonialsSection from "@/components/TestimonialsSection";
// Optional: Weitere Sektionen, z. B. Leistungen, Projekte etc.

export default function HomePage() {
  return (
    <>
      <HeroSection />
      {/* Hier könnten noch Abschnitte zu Leistungen, Projekten etc. folgen */}
      <LegacySection />
      <TestimonialsSection />
      <Kontaktformular />
    </>
  );
}
