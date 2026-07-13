import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { SITE, IMAGES } from "@/lib/site";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur border-b border-border/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={IMAGES.logo}
            alt="The Foothill Girls Hostel logo"
            className="h-10 w-10 rounded-full object-cover"
          />
          <div className="leading-tight">
            <div className="font-display text-sm md:text-base font-semibold text-foreground">
              The Foothill Girls Hostel
            </div>
            <div className="text-[10px] md:text-[11px] text-muted-foreground">
              Inside MIT College Campus, Kothrud
            </div>
          </div>
        </Link>
        <a
          href={SITE.phoneHref}
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
        >
          <Phone className="h-4 w-4" /> Call Now
        </a>
      </div>
    </header>
  );
}
