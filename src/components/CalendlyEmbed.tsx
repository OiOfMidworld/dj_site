"use client";

import { useEffect } from "react";
import { Calendar } from "lucide-react";

interface CalendlyEmbedProps {
  url: string;
}

export default function CalendlyEmbed({ url }: CalendlyEmbedProps) {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  // If no URL provided, show placeholder
  if (!url || url === "https://calendly.com/your-calendly-link") {
    return (
      <div className="rounded-2xl bg-[var(--card)] border border-[var(--border)] p-12 text-center">
        <Calendar className="w-16 h-16 text-[var(--foreground-muted)] mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Calendly Integration</h3>
        <p className="text-[var(--foreground-muted)] mb-4">
          To enable online booking, update the <code className="bg-[var(--background)] px-2 py-1 rounded">calendlyUrl</code> in{" "}
          <code className="bg-[var(--background)] px-2 py-1 rounded">src/data/siteConfig.json</code>
        </p>
        <ol className="text-left text-sm text-[var(--foreground-muted)] max-w-md mx-auto space-y-2">
          <li>1. Create a free account at <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">calendly.com</a></li>
          <li>2. Set up your event type (e.g., &quot;DJ Consultation&quot;)</li>
          <li>3. Copy your Calendly URL</li>
          <li>4. Paste it into siteConfig.json</li>
        </ol>
      </div>
    );
  }

  return (
    <div
      className="calendly-inline-widget rounded-2xl overflow-hidden"
      data-url={url}
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
}
