import { createFileRoute } from "@tanstack/react-router";
import { SiteChrome } from "@/components/site/SiteChrome";
import { Reveal, SectionHeader } from "@/components/site/Reveal";
import {
  Wifi, Sparkles, Camera, Shield, Utensils, Lock, Wind, Trees, BookOpen, Bath,
} from "lucide-react";

export const Route = createFileRoute("/facilities")({
  head: () => ({
    meta: [
      { title: "Facilities & Amenities — The Foothill Girls Hostel" },
      { name: "description", content: "WiFi, CCTV, 24×7 security, hygienic vegetarian food, daily housekeeping, and more at The Foothill Girls Hostel, MIT-WPU." },
      { property: "og:title", content: "Facilities — The Foothill Girls Hostel" },
      { property: "og:url", content: "/facilities" },
    ],
    links: [{ rel: "canonical", href: "/facilities" }],
  }),
  component: FacilitiesPage,
});

const AMENITIES = [
  { icon: Wifi, title: "Free High-Speed WiFi", desc: "Stay connected 24×7 for study and personal use." },
  { icon: Sparkles, title: "Daily Housekeeping", desc: "Clean rooms and common areas every single day." },
  { icon: Camera, title: "CCTV Surveillance", desc: "Full property coverage, monitored 24×7." },
  { icon: Shield, title: "24×7 Security", desc: "Dedicated watchman and controlled entry." },
  { icon: Utensils, title: "Pure Vegetarian Food", desc: "Fresh, hygienic, home-style meals daily." },
  { icon: Lock, title: "Individual Storage", desc: "Personal lockable cupboards for every student." },
  { icon: Wind, title: "Natural Ventilation", desc: "Huge windows, fresh air, and sunlight." },
  { icon: Trees, title: "Green Surroundings", desc: "A calm, nature-inspired atmosphere." },
  { icon: BookOpen, title: "Study-Friendly", desc: "Quiet study spaces and desks in every room." },
  { icon: Bath, title: "Clean Washrooms", desc: "Modern washrooms — cleaned & sanitized daily." },
];

function FacilitiesPage() {
  return (
    <SiteChrome>
      <section className="py-24 md:py-32 gradient-soft">
        <div className="mx-auto max-w-4xl px-4 md:px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Facilities</p>
          <h1 className="mt-3 font-display text-4xl md:text-6xl font-bold leading-tight">
            Everything you need, <span className="text-gradient">every day</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">Premium facilities designed around comfort, safety, and peace of mind.</p>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {AMENITIES.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.05}>
                <div className="group h-full rounded-3xl border border-border/60 bg-card p-6 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition">
                  <div className="h-12 w-12 rounded-2xl bg-primary-soft flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                    <a.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display font-bold text-lg">{a.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
