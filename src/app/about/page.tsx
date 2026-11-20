import ServiceCard from "@/components/ServiceCard";
import siteConfig from "@/data/siteConfig.json";
import services from "@/data/services.json";
import { Disc3, Headphones, Music2, Sparkles } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: `About | ${siteConfig.siteName}`,
  description: siteConfig.about.bio,
};

export default function AboutPage() {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
        <p className="text-[var(--foreground-muted)] max-w-3xl mx-auto text-lg">
          {siteConfig.about.bio}
        </p>
      </section>

      {/* Stats */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] text-center">
            <Disc3 className="w-8 h-8 text-[var(--color-primary)] mx-auto mb-2" />
            <div className="text-2xl font-bold">{siteConfig.about.experience}</div>
            <div className="text-sm text-[var(--foreground-muted)]">Experience</div>
          </div>
          <div className="p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] text-center">
            <Sparkles className="w-8 h-8 text-[var(--color-primary)] mx-auto mb-2" />
            <div className="text-2xl font-bold">{siteConfig.about.eventsCompleted}</div>
            <div className="text-sm text-[var(--foreground-muted)]">Events</div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
            <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto">
              Professional DJ services tailored to your event type and needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-4 py-16 bg-[var(--background-secondary)]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mt-8">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-primary)] text-white font-semibold rounded-full hover:bg-[var(--color-primary-dark)] transition-all"
            >
              Reach out now!
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
