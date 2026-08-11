import { createFileRoute } from "@tanstack/react-router";
import {
  Phone, MapPin, Wifi, Sparkles, Utensils, Camera, Shield, Sun,
  Shirt, Wrench, Zap, Droplet, Refrigerator, Flame, TableProperties, Archive,
} from "lucide-react";
import { SiteChrome } from "@/components/site/SiteChrome";
import { InquiryForm } from "@/components/site/InquiryForm";
import { SITE, IMAGES, HOSTEL_GALLERY } from "@/lib/site";

export const Route = createFileRoute("/hostel")({
  head: () => ({
    meta: [
      { title: "Girls Hostel Inside MIT-WPU Campus | The Foothill Stay" },
      {
        name: "description",
        content:
          "Premium girls' hostel inside MIT-WPU Campus, Kothrud, Pune. Spacious rooms, home-style meals, 24×7 security, fiber internet, hot water, generator backup and boutique 17-resident capacity.",
      },
      { property: "og:title", content: "Girls Hostel Inside MIT-WPU Campus | The Foothill Stay" },
      {
        property: "og:description",
        content: "Spacious rooms, home-style meals, 24×7 security. Inside MIT-WPU Campus.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: IMAGES.exterior },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: IMAGES.exterior },
    ],
    links: [{ rel: "canonical", href: "/hostel" }],
  }),
  component: HostelPage,
});

const AMENITIES = [
  { icon: Wifi, label: "High-Speed Fiber Internet" },
  { icon: Sparkles, label: "24×7 Housekeeping" },
  { icon: Utensils, label: "Homely Veg Meals" },
  { icon: Camera, label: "24×7 CCTV & Security Guard" },
  { icon: TableProperties, label: "Table Tennis & Indoor Games" },
  { icon: Archive, label: "Extra Spacious Wardrobes" },
  { icon: Sun, label: "Sun-Kissed Rooms" },
  { icon: Shirt, label: "Laundry & Drying Area" },
  { icon: Wrench, label: "In-House Maintenance 24×7" },
  { icon: Zap, label: "24×7 Generator Backup" },
  { icon: Droplet, label: "24×7 Hot Water" },
  { icon: Refrigerator, label: "Refrigerator" },
  { icon: Flame, label: "Induction Cooktop" },
  { icon: Shield, label: "Safe Campus Location" },
];

const MEALS = ["Breakfast", "Lunch", "Evening High Tea", "Dinner"];

const ROOMS = [
  { title: "Double Sharing", image: IMAGES.double },
  { title: "Triple Sharing", image: IMAGES.triple },
  { title: "Quadruple Sharing", image: IMAGES.quad },
];

function HostelPage() {
  return (
    <SiteChrome>
      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 md:px-6 pt-8">
          <div className="relative overflow-hidden rounded-3xl bg-muted">
            <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar">
              {HOSTEL_GALLERY.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`The Foothill Stay Hostel ${i + 1}`}
                  loading={i === 0 ? "eager" : "lazy"}
                  className="snap-center shrink-0 w-full aspect-[16/10] md:aspect-[21/9] object-cover"
                />
              ))}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-12 text-white">
              <h1 className="font-display text-3xl md:text-5xl font-semibold tracking-tight">
                Premium Girls Hostel
              </h1>
              <p className="mt-2 text-base md:text-xl font-medium opacity-95">
                Inside MIT-WPU Campus, Kothrud, Pune
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm md:text-base font-medium">
                <a href={SITE.phone1Href} className="hover:underline">📞 {SITE.phone1}</a>
                <a href={SITE.phone2Href} className="hover:underline">📞 {SITE.phone2}</a>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={SITE.phone1Href}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
                >
                  <Phone className="h-4 w-4" /> Call Now
                </a>
                <a
                  href="#enquire"
                  className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/10 backdrop-blur px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-primary transition"
                >
                  Enquire Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-center">
            Located Inside MIT-WPU Campus
          </h2>
          <div className="mt-8 aspect-video rounded-2xl overflow-hidden border border-border/60">
            <iframe
              src={SITE.mapEmbed}
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Foothill Stay Hostel Location"
            />
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3 text-center text-sm">
            <div className="rounded-2xl bg-primary-soft px-4 py-3 font-semibold text-primary">
              Inside MIT-WPU Campus
            </div>
            <div className="rounded-2xl bg-primary-soft px-4 py-3 font-semibold text-primary">
              Kothrud, Pune
            </div>
            <div className="rounded-2xl bg-primary-soft px-4 py-3 font-semibold text-primary">
              Safe & Easy Walking Distance
            </div>
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="py-16 md:py-20 border-t border-border/60">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-center">Amenities</h2>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {AMENITIES.map((a) => (
              <div
                key={a.label}
                className="flex flex-col items-center text-center gap-3 rounded-2xl border border-border/60 bg-card p-5"
              >
                <div className="h-11 w-11 rounded-full bg-primary-soft flex items-center justify-center text-primary">
                  <a.icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium leading-snug">{a.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOD */}
      <section className="py-16 md:py-20 border-t border-border/60">
        <div className="mx-auto max-w-4xl px-4 md:px-6 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-semibold">
            Wholesome Home-Style Meals
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Pure vegetarian, nutritious home-style meals prepared using pure ghee and fresh
            handpicked vegetables.
          </p>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {MEALS.map((m) => (
              <div key={m} className="rounded-2xl border border-border/60 bg-card px-4 py-6 text-sm font-semibold">
                {m}
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-3xl bg-primary-soft/60 border border-primary/10 p-6 md:p-8 text-left">
            <h3 className="font-display text-lg md:text-xl font-semibold">
              Boutique Living Experience
            </h3>
            <p className="mt-2 text-sm md:text-base text-muted-foreground">
              Unlike large hostels, our exclusive <b>17-resident capacity</b> allows us to provide
              personalized attention, customized meal planning and a boutique living experience.
            </p>
          </div>
        </div>
      </section>

      {/* ROOM TYPES */}
      <section id="rooms" className="py-16 md:py-20 border-t border-border/60">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-center">Room Types</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {ROOMS.map((r) => (
              <div key={r.title} className="rounded-3xl overflow-hidden border border-border/60 bg-card flex flex-col">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img src={r.image} alt={`${r.title} room`} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-display text-lg font-semibold">{r.title}</h3>
                  <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground flex-1">
                    <li>Comfortable Beds</li>
                    <li>Study Area</li>
                    <li>Extra Spacious Wardrobe</li>
                    <li>Clean Washroom</li>
                  </ul>
                  <a
                    href="#enquire"
                    className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-16 md:py-20 border-t border-border/60">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-center">Gallery</h2>
          <div className="mt-10 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth">
            <div className="flex gap-4">
              {HOSTEL_GALLERY.map((src, i) => (
                <div
                  key={i}
                  className="snap-center shrink-0 w-[80%] sm:w-[55%] md:w-[38%] lg:w-[30%] aspect-[4/3] overflow-hidden rounded-2xl bg-muted"
                >
                  <img
                    src={src}
                    alt={`Hostel photo ${i + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INQUIRY */}
      <section id="enquire" className="py-16 md:py-20 border-t border-border/60">
        <div className="mx-auto max-w-xl px-4 md:px-6">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-center">
            Book Your Stay
          </h2>
          <p className="mt-3 text-center text-muted-foreground">
            Fill in your details and our team will get back to you shortly.
          </p>
          <div className="mt-8 rounded-3xl bg-card border border-border/60 p-6 sm:p-8">
            <InquiryForm variant="hostel" />
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <a href={SITE.phone1Href} className="text-primary font-semibold hover:underline inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Hostel · {SITE.phone1}
            </a>
            <a href={SITE.phone2Href} className="text-primary font-semibold hover:underline inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Hostel · {SITE.phone2}
            </a>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
