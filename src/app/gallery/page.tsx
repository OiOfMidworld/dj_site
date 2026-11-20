import siteConfig from "@/data/siteConfig.json";
import { Image as ImageIcon, Music, Video } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: `Gallery | ${siteConfig.siteName}`,
  description: "Photos, videos, and mixes from past events and performances.",
};

type Photo = {id: number; alt: string; src?: string}
// Placeholder images - replace with actual images
const photos = [
  { id: 1, src: "/images/IMG_1666.jpeg", alt: "pic1"},
  { id: 2, src: "/images/IMG_0912.jpeg", alt: "pic2"},
  { id: 3, src: "/images/IMG_0167.jpeg", alt: "pic3"},
  { id: 4, src: "/images/IMG_0168.jpeg", alt: "pic4"},
  { id: 5, src: "/images/IMG_0169.jpeg", alt: "pic5"},
];



export default function GalleryPage() {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Gallery</h1>
        <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto text-lg">
          Check out photos and Videos from past events!
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
                className="relative aspect-square rounded-xl bg-[var(--card)] border border-[var(--border)] overflow-hidden hover:border-[var(--color-primary)]/50 transition-all group cursor-pointer"
              >
                {photo.src ? (
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-secondary)]/20">
          <div className="text-center p-4">
            <ImageIcon className="w-12 h-12 text-[var(--foreground-muted)] mx-auto mb-2" />
            <p className="text-sm text-[var(--foreground-muted)]">{photo.alt}</p>
          </div>
        </div>
      )}
    </div>
  ))}
</div>
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
              <p className="text-sm text-[var(--foreground-muted)] mt-2">
                <iframe 
                  width="315" 
                  height="560" 
                  src="https://www.youtube.com/embed/KjuntC52bBg" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
                </iframe>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
