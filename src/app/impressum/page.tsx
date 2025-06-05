export default function ImpressumPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-2xl">
      <h1 className="text-3xl font-bold mb-4">Impressum</h1>
      <p>
        Angaben gemäß § 5 TMG:
        <br /><br />
        MD Business Solutions<br />
        Max Mustermann<br />
        Musterstraße 1<br />
        12345 Musterstadt<br />
        <br />
        Telefon: 01234 56789<br />
        E-Mail: info@md-business-solutions.de
        <br /><br />
        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
        DE123456789
        <br /><br />
        Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:<br />
        Max Mustermann, Anschrift wie oben
        <br /><br />
        Quelle: <a href="https://www.e-recht24.de" className="underline" target="_blank" rel="noopener noreferrer">e-recht24.de</a>
      </p>
    </div>
  );
}
