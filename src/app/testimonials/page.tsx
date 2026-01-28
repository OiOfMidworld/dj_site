import TestimonialCard from "@/components/TestimonialCard";
import siteConfig from "@/data/siteConfig.json";
import testimonials from "@/data/testimonials.json";
import { Star } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: `Testimonials | ${siteConfig.siteName}`,
  description: "Read what clients say about their experience.",
};

export default function TestimonialsPage() {
  const averageRating =
    testimonials.testimonials.reduce((acc, t) => acc + t.rating, 0) /
    testimonials.testimonials.length;

  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Testimonials</h1>
        <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto text-lg mb-8">
          Don&apos;t just take my word for it. Here&apos;s what my clients have to say.
        </p>

        {/* Overall Rating */}
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[var(--card)] border border-[var(--border)]">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < Math.round(averageRating)
                    ? "fill-[var(--color-accent)] text-[var(--color-accent)]"
                    : "text-[var(--border)]"
                }`}
              />
            ))}
          </div>
          <span className="text-lg font-semibold">{averageRating.toFixed(1)}</span>
          <span className="text-[var(--foreground-muted)]">
            ({testimonials.testimonials.length} reviews)
          </span>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="px-4 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                eventType={testimonial.eventType}
                date={testimonial.date}
                rating={testimonial.rating}
                text={testimonial.text}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16 bg-gradient-to-r from-[var(--color-primary)]/20 to-[var(--color-secondary)]/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Create Your Own Experience?</h2>
          <p className="text-[var(--foreground-muted)] mb-6">
            Join the list of happy clients. Book your event today.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-primary)] text-white font-semibold rounded-full hover:bg-[var(--color-primary-dark)] transition-all"
          >
            Book Now
          </Link>
        </div>
      </section>
    </div>
  );
}
