import Hero from "@/components/Hero";
import Link from "next/link";
import { ArrowRight, Star, Music, Calendar, Users } from "lucide-react";
import testimonials from "@/data/testimonials.json";
import services from "@/data/services.json";

export default function Home() {
  const featuredTestimonial = testimonials.testimonials[0];
  const featuredServices = services.services.slice(0, 3);

  return (
    <>
      <Hero />

      {/* Services Preview */}
      <section className="py-20 px-4 bg-[var(--background-secondary)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
            <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto">
              From intimate gatherings to large-scale events, I bring the perfect energy and soundtrack.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--color-primary)]/50 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-4">
                  <Music className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-[var(--foreground-muted)] text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[var(--color-primary)] hover:underline"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-[var(--color-accent)] text-[var(--color-accent)]" />
            ))}
          </div>
          <blockquote className="text-2xl md:text-3xl font-medium mb-6 italic">
            &ldquo;{featuredTestimonial.text}&rdquo;
          </blockquote>
          <div className="text-[var(--foreground-muted)]">
            <span className="font-semibold text-white">{featuredTestimonial.name}</span>
            {" "}&mdash; {featuredTestimonial.eventType}
          </div>
          <div className="mt-8">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 text-[var(--color-primary)] hover:underline"
            >
              Read More Reviews <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[var(--color-primary)]/20 to-[var(--color-secondary)]/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Make Your Event Unforgettable?</h2>
          <p className="text-[var(--foreground-muted)] mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your event and create the perfect musical experience together.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-primary)] text-white font-semibold rounded-full hover:bg-[var(--color-primary-dark)] transition-all glow-hover"
          >
            <Calendar className="w-5 h-5" />
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
