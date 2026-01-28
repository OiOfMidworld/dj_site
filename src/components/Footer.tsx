import Link from "next/link";
import { Music, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import siteConfig from "@/data/siteConfig.json";

export default function Footer() {
  return (
    <footer className="bg-[var(--background-secondary)] border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold mb-4">
              <Music className="w-6 h-6 text-[var(--color-primary)]" />
              <span className="gradient-text">{siteConfig.siteName}</span>
            </Link>
            <p className="text-[var(--foreground-muted)] mb-4 max-w-md">
              {siteConfig.description}
            </p>
            <div className="flex gap-4">
              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--foreground-muted)] hover:text-[var(--color-primary)] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}
              {siteConfig.social.youtube && (
                <a
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--foreground-muted)] hover:text-[var(--color-primary)] transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-[var(--foreground-muted)] hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-[var(--foreground-muted)] hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-[var(--foreground-muted)] hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-[var(--foreground-muted)] hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/book" className="text-[var(--foreground-muted)] hover:text-white transition-colors">
                  Book Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-[var(--foreground-muted)]">
                <Mail className="w-4 h-4 text-[var(--color-primary)]" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-[var(--foreground-muted)]">
                <Phone className="w-4 h-4 text-[var(--color-primary)]" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-[var(--foreground-muted)]">
                <MapPin className="w-4 h-4 text-[var(--color-primary)]" />
                <span>{siteConfig.contact.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[var(--border)] text-center text-[var(--foreground-muted)] text-sm">
          <p>&copy; {new Date().getFullYear()} {siteConfig.siteName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
