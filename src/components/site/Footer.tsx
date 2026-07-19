import { Phone, Mail, MapPin } from "lucide-react";
import { SITE, IMAGES } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border/60 bg-primary-soft/40">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img src={IMAGES.logo} alt="" className="h-10 w-10 rounded-full object-cover" />
            <div className="font-display text-lg font-semibold">{SITE.name}</div>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">{SITE.tagline}</p>
        </div>
        <ul className="space-y-2 text-sm">
          <li className="font-semibold text-foreground">Hostel</li>
          <li className="flex gap-2">
            <Phone className="h-4 w-4 text-primary shrink-0 mt-0.5" />
            <a href={SITE.phone1Href} className="hover:text-primary">{SITE.phone1}</a>
          </li>
          <li className="flex gap-2">
            <Phone className="h-4 w-4 text-primary shrink-0 mt-0.5" />
            <a href={SITE.phone2Href} className="hover:text-primary">{SITE.phone2}</a>
          </li>
          <li className="font-semibold text-foreground pt-2">PG</li>
          <li className="flex gap-2">
            <Phone className="h-4 w-4 text-primary shrink-0 mt-0.5" />
            <a href={SITE.pgPhoneHref} className="hover:text-primary">{SITE.pgPhone}</a>
          </li>
        </ul>
        <ul className="space-y-2 text-sm">
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
        <div className="mx-auto max-w-6xl px-4 md:px-6 py-4 text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
