import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { NAV, SITE, IMAGES } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "glass-strong shadow-soft" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative h-11 w-11 overflow-hidden rounded-full ring-2 ring-primary/20 transition group-hover:ring-primary/50">
            <img src={IMAGES.logo} alt="The Foothill Girls Hostel logo" className="h-full w-full object-cover" />
          </div>
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-base font-bold text-foreground">The Foothill</div>
            <div className="text-[10px] tracking-widest uppercase text-primary font-semibold">Girls Hostel</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="relative px-4 py-2 text-sm font-medium text-foreground/80 transition hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={SITE.phoneHref}
            className="flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/10 transition"
          >
            <Phone className="h-4 w-4" />
            {SITE.phone}
          </a>
          <Link
            to="/contact"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft hover:shadow-elegant transition"
          >
            Enquire Now
          </Link>
        </div>

        <button
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full glass"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden glass-strong border-t border-border/40">
          <nav className="mx-auto max-w-7xl flex flex-col p-4 gap-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="rounded-xl px-4 py-3 text-sm font-medium text-foreground/80 hover:bg-primary-soft"
                activeProps={{ className: "bg-primary-soft text-primary" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground shadow-soft"
            >
              Enquire Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
