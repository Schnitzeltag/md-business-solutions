
// src/components/Kontaktformular.tsx

"use client";
import { useState } from "react";
import config from "../config/site.config";

export default function Kontaktformular() {
  const [data, setData] = useState({ name: "", email: "", nachricht: "" });
  const [success, setSuccess] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: Backend-Anbindung oder E-Mail (z. B. via Formspree, EmailJS)
    setSuccess(true);
    setData({ name: "", email: "", nachricht: "" });
  }

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
          required
          className="p-3 rounded border border-neutral-300 text-black"
          value={data.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Ihre E-Mail"
          required
          className="p-3 rounded border border-neutral-300 text-black"
          value={data.email}
          onChange={handleChange}
        />
        <textarea
          name="nachricht"
          placeholder="Ihre Nachricht"
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
