import Head from "next/head";
import Link from "next/link";
import { siteConfig } from "@/config/site.config";

export function Header() {
  return (
    <>
      <Head>
        <title>{siteConfig.siteName}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={siteConfig.favicon} />
      </Head>
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <Link href="/">
          <span className="text-xl font-bold">{siteConfig.siteName}</span>
        </Link>
      </header>
    </>
  );
}
