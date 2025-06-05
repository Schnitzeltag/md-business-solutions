export default function FaqPage() {
  const faqs = [
    {
      question: "Bietet ihr auch Wartung für bestehende Websites?",
      answer:
        "Ja, wir kümmern uns gerne um Pflege, Updates und Erweiterungen Ihrer bestehenden Seite – auch wenn sie nicht von uns erstellt wurde.",
    },
    {
      question: "Wie läuft ein typisches Projekt ab?",
      answer:
        "Nach einem unverbindlichen Beratungsgespräch erstellen wir ein Angebot. Anschließend folgt die Umsetzung mit regelmäßigen Abstimmungen.",
    },
    {
      question: "Kann ich individuelle Schulungen buchen?",
      answer:
        "Natürlich! Wir bieten Einzeltrainings und Workshops an, die genau auf Ihre Fragen zugeschnitten sind.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20 max-w-3xl">
      <h1 className="text-4xl font-bold mb-12 text-center">Häufige Fragen</h1>
      <div className="space-y-6">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="bg-white dark:bg-neutral-900 rounded-xl shadow p-6"
          >
            <summary className="cursor-pointer font-semibold">{faq.question}</summary>
            <p className="mt-3 text-neutral-700 dark:text-neutral-300">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
