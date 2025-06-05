// src/components/HeroSection.tsx
"use client"

import Spline from "@splinetool/react-spline";
import config from "../config/site.config";

export default function HeroSection() {
  return (
    <section className="relative min-h-[70vh] flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {config.hero.spline ? (
          <Spline scene={config.hero.spline} />
        ) : config.hero.video ? (
          <video autoPlay loop muted className="w-full h-full object-cover">
            <source src={config.hero.video} type="video/mp4" />
          </video>
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/50 to-transparent dark:from-neutral-900/90 pointer-events-none" />
      </div>
      <div className="z-10 text-center pt-16 pb-24">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
          {config.hero.headline}
        </h1>
        <p className="text-xl md:text-2xl mb-8">{config.hero.subline}</p>
        <a
          href="#kontakt"
          className="inline-block px-8 py-4 rounded-full bg-primary text-white font-semibold shadow-lg hover:scale-105 transition"
        >
          Jetzt Kontakt aufnehmen
        </a>
      </div>
    </section>
  );
}
