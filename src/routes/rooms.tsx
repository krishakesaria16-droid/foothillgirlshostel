import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteChrome } from "@/components/site/SiteChrome";
import { Reveal, SectionHeader } from "@/components/site/Reveal";
import { IMAGES } from "@/lib/site";
import { CheckCircle2, Users, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/rooms")({
  head: () => ({
    meta: [
      { title: "Rooms & Sharing Options — The Foothill Girls Hostel MIT-WPU" },
      { name: "description", content: "Double, Triple, and Quad sharing rooms with spacious wardrobes, attached washrooms, and natural lighting at The Foothill Girls Hostel." },
      { property: "og:title", content: "Rooms — The Foothill Girls Hostel" },
      { property: "og:url", content: "/rooms" },
      { property: "og:image", content: IMAGES.room },
    ],
    links: [{ rel: "canonical", href: "/rooms" }],
  }),
  component: RoomsPage,
});

const ROOMS = [
  { title: "Double Sharing", desc: "Premium comfort with just one roommate. Ideal for focused study.", image: IMAGES.room, features: ["2 Comfortable Beds", "Individual Wardrobes", "Attached Washroom", "Study Desk", "Natural Lighting"], badge: null },
  { title: "Triple Sharing", desc: "Our most popular option — the perfect balance of space and value.", image: IMAGES.wardrobe, features: ["3 Spacious Beds", "Personal Cupboards", "Attached Washroom", "Study Space", "Huge Windows"], badge: "Most Preferred" },
  { title: "Quad Sharing", desc: "Live with friends in a spacious shared room — great for making memories.", image: IMAGES.room, features: ["4 Comfortable Beds", "Individual Storage", "Common Washroom", "Group Study Area", "Natural Ventilation"], badge: null },
];

function RoomsPage() {
  return (
    <SiteChrome>
      <section className="py-24 md:py-32 gradient-soft">
        <div className="mx-auto max-w-4xl px-4 md:px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Rooms</p>
          <h1 className="mt-3 font-display text-4xl md:text-6xl font-bold leading-tight">
            Choose your <span className="text-gradient">perfect room</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">Every room includes wardrobes, comfortable beds, study space, and natural lighting.</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {ROOMS.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.1}>
                <div className={`group relative h-full rounded-3xl border bg-card shadow-soft hover:shadow-elegant transition overflow-hidden ${r.badge ? "border-primary/40 ring-2 ring-primary/20" : "border-border/60"}`}>
                  {r.badge && (
                    <div className="absolute top-4 right-4 z-10 rounded-full gradient-gold px-3 py-1 text-[11px] font-bold text-gold-foreground shadow-soft">
                      ★ {r.badge}
                    </div>
                  )}
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={r.image} alt={r.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition duration-700" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      <h3 className="font-display text-xl font-bold">{r.title}</h3>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
                    <ul className="mt-5 space-y-2 text-sm">
                      {r.features.map(f => (
                        <li key={f} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary shrink-0" /><span>{f}</span></li>
                      ))}
                    </ul>
                    <Link to="/contact" className="mt-6 flex items-center justify-center gap-2 w-full rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:shadow-elegant transition">
                      Book Now <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 gradient-soft">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeader eyebrow="Inside the rooms" title="Real photos, real spaces" />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[IMAGES.room, IMAGES.wardrobe, IMAGES.bathroom, IMAGES.exterior].map((s, i) => (
              <Reveal key={s} delay={i * 0.08}>
                <img src={s} alt={`Room detail ${i + 1}`} loading="lazy" className="rounded-2xl shadow-soft object-cover aspect-square w-full hover:scale-105 transition duration-500" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
