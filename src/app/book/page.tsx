import CalendlyEmbed from "@/components/CalendlyEmbed";
import siteConfig from "@/data/siteConfig.json";
import { Mail, Phone, HelpCircle } from "lucide-react";

export const metadata = {
  title: `Book | ${siteConfig.siteName}`,
  description: "Book a consultation or schedule your event.",
};

const faqs = [
  {
    question: "How far in advance should I book?",
    answer:
      "I recommend booking at least 2-3 months in advance for weddings and large events. For smaller events, 2-4 weeks notice is usually sufficient, depending on availability.",
  },
  {
    question: "What's included in the booking?",
    answer:
      "All bookings include professional DJ services, quality sound equipment, and a pre-event consultation to discuss your music preferences. Additional services like lighting and MC duties can be added.",
  },
  {
    question: "Do you travel for events?",
    answer:
      "Yes! I'm based in the local area but travel for events within a reasonable distance. Travel fees may apply for distant locations.",
  },
  {
    question: "What's your payment policy?",
    answer:
      "A 25% deposit is required to secure your date, with the remaining balance due one week before the event. I accept various payment methods for your convenience.",
  },
  {
    question: "Can I provide a song request list?",
    answer:
      "Absolutely! I encourage clients to share their must-play songs and do-not-play lists. We'll discuss your preferences during the consultation.",
  },
];

export default function BookPage() {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Book Your Event</h1>
        <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto text-lg">
          Ready to make your event unforgettable? Schedule a consultation to discuss your needs.
        </p>
      </section>

      {/* Calendly Embed */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <CalendlyEmbed url={siteConfig.calendlyUrl} />
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="px-4 py-16 bg-[var(--background-secondary)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Prefer to Reach Out Directly?</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-4 p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--color-primary)]/50 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-[var(--color-primary)]" />
              </div>
              <div>
                <div className="font-semibold">Email</div>
                <div className="text-[var(--foreground-muted)]">{siteConfig.contact.email}</div>
              </div>
            </a>

            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center gap-4 p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--color-primary)]/50 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center">
                <Phone className="w-6 h-6 text-[var(--color-primary)]" />
              </div>
              <div>
                <div className="font-semibold">Phone</div>
                <div className="text-[var(--foreground-muted)]">{siteConfig.contact.phone}</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 justify-center mb-8">
            <HelpCircle className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)]"
              >
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-[var(--foreground-muted)]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
