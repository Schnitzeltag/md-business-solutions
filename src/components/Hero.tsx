import { siteConfig } from "@/config/site.config";

export function Hero() {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url('${siteConfig.heroImage}')` }}
    >
      <h1 className="text-5xl font-bold bg-black/50 p-4 rounded">Willkommen bei {siteConfig.siteName}</h1>
    </section>
  );
}
