// src/components/LegacySection.tsx
export default function LegacySection() {
  return (
    <section className="bg-neutral-100 dark:bg-neutral-800 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Unsere Geschichte</h2>
        <div className="flex flex-col gap-8">
          <div className="flex items-start gap-4">
            <span className="text-xl font-extrabold text-primary min-w-[80px]">2022</span>
            <span className="text-lg">Gründung von MD Business Solutions und Entwicklung erster Webseiten für lokale Unternehmen.</span>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-xl font-extrabold text-primary min-w-[80px]">2023</span>
            <span className="text-lg">Start der Computerkurse für Einsteiger und Fortgeschrittene, Ausbau des Service-Angebots.</span>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-xl font-extrabold text-primary min-w-[80px]">2024</span>
            <span className="text-lg">Umsetzung vielfältiger Digitalprojekte und Erweiterung des Teams.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
