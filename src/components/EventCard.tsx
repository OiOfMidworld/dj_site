import { Calendar, MapPin, Clock } from "lucide-react";

interface EventCardProps {
  title: string;
  venue: string;
  date: string;
  time?: string;
  description: string;
  isPublic?: boolean;
  isPast?: boolean;
}

export default function EventCard({
  title,
  venue,
  date,
  time,
  description,
  isPublic = true,
  isPast = false,
}: EventCardProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div
      className={`p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] ${
        isPast ? "opacity-70" : "hover:border-[var(--color-primary)]/50"
      } transition-all`}
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        {!isPublic && (
          <span className="text-xs px-2 py-1 rounded-full bg-[var(--foreground-muted)]/10 text-[var(--foreground-muted)]">
            Private
          </span>
        )}
        {isPast && (
          <span className="text-xs px-2 py-1 rounded-full bg-[var(--foreground-muted)]/10 text-[var(--foreground-muted)]">
            Past
          </span>
        )}
      </div>

      <div className="space-y-2 text-sm text-[var(--foreground-muted)]">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-[var(--color-primary)]" />
          <span>{formattedDate}</span>
        </div>
        {time && (
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[var(--color-primary)]" />
            <span>{time}</span>
          </div>
        )}
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-[var(--color-primary)]" />
          <span>{venue}</span>
        </div>
      </div>

      <p className="mt-4 text-[var(--foreground-muted)]">{description}</p>
    </div>
  );
}
