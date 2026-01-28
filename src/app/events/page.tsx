import EventCard from "@/components/EventCard";
import siteConfig from "@/data/siteConfig.json";
import events from "@/data/events.json";
import { Calendar, History } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: `Events | ${siteConfig.siteName}`,
  description: "Upcoming and past events and performances.",
};

export default function EventsPage() {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Events</h1>
        <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto text-lg">
          See where I&apos;m performing next and check out some past events.
        </p>
      </section>

      {/* Upcoming Events */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Calendar className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-2xl font-bold">Upcoming Events</h2>
          </div>

          {events.upcoming.length > 0 ? (
            <div className="space-y-4">
              {events.upcoming.map((event) => (
                <EventCard
                  key={event.id}
                  title={event.title}
                  venue={event.venue}
                  date={event.date}
                  time={event.time}
                  description={event.description}
                  isPublic={event.isPublic}
                />
              ))}
            </div>
          ) : (
            <div className="p-8 rounded-2xl bg-[var(--card)] border border-[var(--border)] text-center">
              <p className="text-[var(--foreground-muted)]">No upcoming public events scheduled.</p>
              <Link
                href="/book"
                className="inline-block mt-4 text-[var(--color-primary)] hover:underline"
              >
                Book me for your event
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16 bg-gradient-to-r from-[var(--color-primary)]/20 to-[var(--color-secondary)]/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Want Me at Your Event?</h2>
          <p className="text-[var(--foreground-muted)] mb-6">
            Let&apos;s make your next event unforgettable.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-primary)] text-white font-semibold rounded-full hover:bg-[var(--color-primary-dark)] transition-all"
          >
            Book Now
          </Link>
        </div>
      </section>

      {/* Past Events */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <History className="w-6 h-6 text-[var(--foreground-muted)]" />
            <h2 className="text-2xl font-bold text-[var(--foreground-muted)]">Past Events</h2>
          </div>

          <div className="space-y-4">
            {events.past.map((event) => (
              <EventCard
                key={event.id}
                title={event.title}
                venue={event.venue}
                date={event.date}
                description={event.description}
                isPast
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
