import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { SITE, IMAGES } from "@/lib/site";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur border-b border-border/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 md:px-6">
        <Link to="/" className="flex items-center gap-3 min-w-0">
          <img
            src={IMAGES.logo}
            alt="The Foothill Stay logo"
            className="h-10 w-10 rounded-full object-cover shrink-0"
          />
          <div className="leading-tight min-w-0">
            <div className="font-display text-sm md:text-base font-semibold text-foreground truncate">
              The Foothill Stay
            </div>
            <div className="text-[10px] md:text-[11px] text-muted-foreground truncate">
              Premium Girls Hostel & PG · MIT-WPU, Kothrud
            </div>
          </div>
        </Link>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex flex-col text-right text-xs leading-tight">
            <a href={SITE.phone1Href} className="hover:text-primary font-medium">{SITE.phone1}</a>
            <a href={SITE.phone2Href} className="hover:text-primary font-medium">{SITE.phone2}</a>
          </div>
          <a
            href={SITE.phone1Href}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </div>
      </div>
    </header>
  );
}
