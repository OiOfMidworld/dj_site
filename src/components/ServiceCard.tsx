import { Heart, Building, PartyPopper, Music, LucideIcon } from "lucide-react";

const iconMap: { [key: string]: LucideIcon } = {
  Heart,
  Building,
  PartyPopper,
  Music,
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export default function ServiceCard({ title, description, icon, features }: ServiceCardProps) {
  const IconComponent = iconMap[icon] || Music;

  return (
    <div className="p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--color-primary)]/50 transition-all group">
      <div className="w-14 h-14 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)]/20 transition-colors">
        <IconComponent className="w-7 h-7 text-[var(--color-primary)]" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-[var(--foreground-muted)] mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-[var(--foreground-muted)]">
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
