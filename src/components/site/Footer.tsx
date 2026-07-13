import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border/60 bg-primary-soft/40">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-12 grid gap-8 md:grid-cols-2">
        <div>
          <div className="font-display text-lg font-semibold">{SITE.name}</div>
          <p className="mt-2 text-sm text-muted-foreground">{SITE.tagline}</p>
        </div>
        <ul className="space-y-2 text-sm">
          <li className="flex gap-2">
            <Phone className="h-4 w-4 text-primary shrink-0 mt-0.5" />
            <a href={SITE.phoneHref} className="hover:text-primary">{SITE.phone}</a>
          </li>
          <li className="flex gap-2">
            <Mail className="h-4 w-4 text-primary shrink-0 mt-0.5" />
            <a href={SITE.emailHref} className="hover:text-primary break-all">{SITE.email}</a>
          </li>
          <li className="flex gap-2">
            <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
            <span className="text-muted-foreground">{SITE.address}</span>
          </li>
          <li>
            <a
              href={SITE.mapDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline text-sm font-medium"
            >
              View on Google Maps →
            </a>
          </li>
        </ul>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-4 md:px-6 py-4 flex flex-col md:flex-row justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <Link to="/privacy" className="hover:text-primary">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
