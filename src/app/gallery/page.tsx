import siteConfig from "@/data/siteConfig.json";
import { Image as ImageIcon, Music, Video } from "lucide-react";

export const metadata = {
  title: `Gallery | ${siteConfig.siteName}`,
  description: "Photos, videos, and mixes from past events and performances.",
};

// Placeholder images - replace with actual images
const photos = [
  { id: 1, alt: "DJ Setup at Wedding", placeholder: true },
  { id: 2, alt: "Club Night Performance", placeholder: true },
  { id: 3, alt: "Corporate Event", placeholder: true },
  { id: 4, alt: "Festival Stage", placeholder: true },
  { id: 5, alt: "Private Party", placeholder: true },
  { id: 6, alt: "DJ Equipment Close-up", placeholder: true },
];

// Placeholder for mixes - replace with actual SoundCloud/Mixcloud embeds
const mixes = [
  {
    id: 1,
    title: "Summer Vibes Mix 2024",
    platform: "SoundCloud",
    embedUrl: "", // Add SoundCloud embed URL
  },
  {
    id: 2,
    title: "Wedding Hits Collection",
    platform: "Mixcloud",
    embedUrl: "", // Add Mixcloud embed URL
  },
  {
    id: 3,
    title: "Club Bangers Vol. 1",
    platform: "SoundCloud",
    embedUrl: "", // Add SoundCloud embed URL
  },
];

export default function GalleryPage() {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Gallery</h1>
        <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto text-lg">
          Check out photos from past events and listen to some of my mixes.
        </p>
      </section>

      {/* Photo Gallery */}
      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <ImageIcon className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-2xl font-bold">Photos</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="aspect-square rounded-xl bg-[var(--card)] border border-[var(--border)] overflow-hidden hover:border-[var(--color-primary)]/50 transition-all group cursor-pointer"
              >
                {/* Placeholder - replace with Next/Image when adding real photos */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-secondary)]/20 group-hover:scale-105 transition-transform">
                  <div className="text-center p-4">
                    <ImageIcon className="w-12 h-12 text-[var(--foreground-muted)] mx-auto mb-2" />
                    <p className="text-sm text-[var(--foreground-muted)]">{photo.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-[var(--foreground-muted)] mt-6 text-sm">
            Add your photos to <code className="bg-[var(--card)] px-2 py-1 rounded">/public/images/</code> and update this page.
          </p>
        </div>
      </section>

      {/* Mixes */}
      <section className="px-4 py-16 bg-[var(--background-secondary)]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Music className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-2xl font-bold">Mixes</h2>
          </div>

          <div className="space-y-4">
            {mixes.map((mix) => (
              <div
                key={mix.id}
                className="p-6 rounded-xl bg-[var(--card)] border border-[var(--border)]"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">{mix.title}</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                    {mix.platform}
                  </span>
                </div>
                {mix.embedUrl ? (
                  <iframe
                    width="100%"
                    height="166"
                    scrolling="no"
                    frameBorder="no"
                    allow="autoplay"
                    src={mix.embedUrl}
                    className="rounded-lg"
                  />
                ) : (
                  <div className="h-20 rounded-lg bg-[var(--background)] border border-[var(--border)] flex items-center justify-center text-[var(--foreground-muted)] text-sm">
                    Add {mix.platform} embed URL to enable playback
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="text-center text-[var(--foreground-muted)] mt-6 text-sm">
            Get embed codes from SoundCloud or Mixcloud and add them to this page.
          </p>
        </div>
      </section>

      {/* Videos */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Video className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-2xl font-bold">Videos</h2>
          </div>

          <div className="aspect-video rounded-xl bg-[var(--card)] border border-[var(--border)] flex items-center justify-center">
            <div className="text-center p-4">
              <Video className="w-16 h-16 text-[var(--foreground-muted)] mx-auto mb-4" />
              <p className="text-[var(--foreground-muted)]">
                Add YouTube or Vimeo video embeds here
              </p>
              <p className="text-sm text-[var(--foreground-muted)] mt-2">
                Replace this placeholder with your video content
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
