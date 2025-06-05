// src/config/site.config.ts

const config = {
  company: "MD Business Solutions",
  tagline: "Websites, Apps & mehr – modern, individuell, wirkungsvoll.",
  description: "Wir entwickeln Websites, Apps und Software für Unternehmen und Privatkunden. Außerdem bieten wir Computerkurse für Einsteiger und Fortgeschrittene an.",
  links: {
    home: "/",
    ueberMich: "/ueber-mich",
    leistungen: "/leistungen",
    projekte: "/projekte",
    kurse: "/kurse",
    impressum: "/impressum",
    datenschutz: "/datenschutz",
  },
  kontakt: {
    email: "info@md-business-solutions.de",
    telefon: "01234 56789",
    adresse: "Beispielstraße 1, 12345 Musterstadt",
  },
  hero: {
    headline: "Websites. Apps. Lösungen.",
    subline: "Ihr Weg zu moderner Digitalisierung beginnt hier.",
    spline: "https://prod.spline.design/7405s9RfP9DS1Gmg/scene.splinecode",
    video: "",
  },
  legacy: [
    {
      year: "2023",
      text: "Launch von MD Business Solutions. Erste Webprojekte für lokale Unternehmen.",
    },
    {
      year: "2024",
      text: "Start der Computerkurse für Einsteiger und Fortgeschrittene.",
    },
    // ...
  ],
  kurse: [
    {
      name: "Computerkurs für Einsteiger",
      beschreibung: "Von Null zum PC-Profi: Schritt-für-Schritt.",
      link: "/kurse/einsteiger",
    },
    // ...
  ],
  projekte: [
    // Projekt-Beispiele
    {
      name: "Kunden-Website A",
      beschreibung: "Modernes Webdesign für Handwerksbetrieb.",
      bild: "/images/projekt1.jpg",
      link: "https://www.beispiel.de",
    },
    // ...
  ],
  testimonials: [
    {
      name: "Sabine Weber",
      text: "Die neue Website ist wunderschön und einfach zu bedienen. Ich bekomme viel mehr Anfragen von Kunden!",
      image: "/images/testimonials/sabine.jpg",
      company: "Blumen Weber",
    },
    {
      name: "Thomas Schmitt",
      text: "Top Betreuung – schnelle Umsetzung und sehr gute Erklärungen, auch für Technik-Laien.",
      image: "/images/testimonials/thomas.jpg",
      company: "Schmitt Sanitär",
    },
    {
      name: "Petra Krause",
      text: "Dank der Computerkurse kann ich endlich sicher im Internet surfen. Sehr empfehlenswert!",
      image: "/images/testimonials/petra.jpg",
      company: "",
    },
  ],
  // ...
};

export default config;