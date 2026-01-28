import Link from "next/link";
import { Calendar, Play } from "lucide-react";
import siteConfig from "@/data/siteConfig.json";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/20 via-transparent to-[var(--color-secondary)]/20" />

      {/* Animated circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-primary)]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--color-secondary)]/10 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="gradient-text">{siteConfig.siteName}</span>
        </h1>
        <p className="text-xl md:text-2xl text-[var(--foreground-muted)] mb-4">
          {siteConfig.tagline}
        </p>
        <p className="text-lg text-[var(--foreground-muted)] mb-8 max-w-2xl mx-auto">
          {siteConfig.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/book"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-primary)] text-white font-semibold rounded-full hover:bg-[var(--color-primary-dark)] transition-all glow-hover"
          >
            <Calendar className="w-5 h-5" />
            Book Now
          </Link>
          <Link
            href="/gallery"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[var(--border)] text-white font-semibold rounded-full hover:bg-white/5 transition-all"
          >
            <Play className="w-5 h-5" />
            View Work
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          <div>
            <div className="text-3xl font-bold gradient-text">{siteConfig.about.experience}</div>
            <div className="text-sm text-[var(--foreground-muted)]">Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold gradient-text">{siteConfig.about.eventsCompleted}</div>
            <div className="text-sm text-[var(--foreground-muted)]">Events</div>
          </div>
          <div>
            <div className="text-3xl font-bold gradient-text">5.0</div>
            <div className="text-sm text-[var(--foreground-muted)]">Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
}
