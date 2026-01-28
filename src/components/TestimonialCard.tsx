import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  eventType: string;
  date: string;
  rating: number;
  text: string;
}

export default function TestimonialCard({
  name,
  eventType,
  date,
  rating,
  text,
}: TestimonialCardProps) {
  return (
    <div className="p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--color-primary)]/50 transition-all">
      <Quote className="w-8 h-8 text-[var(--color-primary)]/30 mb-4" />

      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating
                ? "fill-[var(--color-accent)] text-[var(--color-accent)]"
                : "text-[var(--border)]"
            }`}
          />
        ))}
      </div>

      <p className="text-[var(--foreground)] mb-4 italic">&ldquo;{text}&rdquo;</p>

      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-[var(--foreground-muted)]">{eventType}</p>
        </div>
        <p className="text-sm text-[var(--foreground-muted)]">{date}</p>
      </div>
    </div>
  );
}
