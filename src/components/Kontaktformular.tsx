
// src/components/Kontaktformular.tsx

"use client";
import { useState, useCallback, useEffect } from "react";

export default function Kontaktformular() {
  const [data, setData] = useState({ name: "", email: "", nachricht: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    },
    []
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      // TODO: Backend-Anbindung oder E-Mail (z. B. via Formspree, EmailJS)
      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
      if (!emailValid) return;
      setSuccess(true);
      setData({ name: "", email: "", nachricht: "" });
    },
    [data.email]
  );

  useEffect(() => {
    if (!success) return;
    const id = setTimeout(() => setSuccess(false), 5000);
    return () => clearTimeout(id);
  }, [success]);

  return (
    <section id="kontakt" className="container mx-auto px-4 py-16 max-w-xl">
      <h2 className="text-3xl font-bold mb-4">Kontakt aufnehmen</h2>
      <p className="mb-6 text-lg">
        Sie möchten ein Projekt starten oder haben Fragen? Schreiben Sie uns!
      </p>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Ihr Name"
          aria-label="Name"
          required
          className="p-3 rounded border border-neutral-300 text-black"
          value={data.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Ihre E-Mail"
          aria-label="E-Mail"
          required
          className="p-3 rounded border border-neutral-300 text-black"
          value={data.email}
          onChange={handleChange}
        />
        <textarea
          name="nachricht"
          placeholder="Ihre Nachricht"
          aria-label="Nachricht"
          required
          rows={5}
          className="p-3 rounded border border-neutral-300 text-black resize-none"
          value={data.nachricht}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="px-6 py-3 rounded bg-primary text-white font-semibold hover:scale-105 transition"
        >
          Absenden
        </button>
        {success && (
          <div className="text-green-600 font-bold mt-2">Vielen Dank für Ihre Nachricht!</div>
        )}
      </form>
    </section>
  );
}
