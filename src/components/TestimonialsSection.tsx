// src/components/TestimonialsSection.tsx
import Image from "next/image";
import config from "../config/site.config";

export default function TestimonialsSection() {
  return (
    <section className="bg-white dark:bg-neutral-900 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Was unsere Kunden sagen</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {config.testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-neutral-100 dark:bg-neutral-800 rounded-2xl p-8 flex flex-col items-center shadow transition hover:scale-105">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={80}
                height={80}
                className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-primary shadow"
              />
              <blockquote className="italic text-lg text-center mb-4">“{testimonial.text}”</blockquote>
              <div className="text-base font-semibold text-primary">{testimonial.name}</div>
              {testimonial.company && (
                <div className="text-neutral-500 text-sm">{testimonial.company}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
