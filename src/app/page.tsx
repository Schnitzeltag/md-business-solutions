// src/app/page.tsx

import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import LegacySection from "../components/LegacySection";
import Kontaktformular from "../components/Kontaktformular";
import TestimonialsSection from "@/components/TestimonialsSection";
// Optional: Weitere Sektionen, z. B. Leistungen, Projekte etc.

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <LegacySection />
      <TestimonialsSection />
      <Kontaktformular />
    </>
  );
}
