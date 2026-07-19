import { createFileRoute } from "@tanstack/react-router";
import {
  Phone, MapPin, Wifi, Sparkles, Utensils, Camera, Shield, Sun,
  Home as HomeIcon, Shirt, Wrench, Zap, Droplet, Refrigerator, Flame, TableProperties, Archive,
} from "lucide-react";
import { SiteChrome } from "@/components/site/SiteChrome";
import { InquiryForm } from "@/components/site/InquiryForm";
import { SITE, IMAGES, PG_IMAGES } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Foothill Stay | Premium Girls Hostel & PG Near MIT-WPU, Pune" },
      {
        name: "description",
        content:
          "The Foothill Stay is a premium girls' hostel and PG accommodation located inside the MIT-WPU Campus, Kothrud, Pune. Spacious rooms, high-speed fiber internet, 24/7 housekeeping, home-style vegetarian meals, CCTV security, generator backup, hot water, and laundry facilities in a peaceful green environment.",
      },
      {
        name: "keywords",
        content:
          "Girls Hostel Near MIT-WPU, Girls PG in Kothrud, Girls Hostel Pune, Girls PG Pune, Girls Hostel Near Cummins College, Premium Girls Hostel, Student Accommodation Pune, The Foothill Stay",
      },
      { property: "og:title", content: "The Foothill Stay | Premium Girls Hostel & PG Near MIT-WPU" },
      {
        property: "og:description",
        content:
          "Premium girls' hostel & PG inside MIT-WPU Campus, Kothrud, Pune. Spacious rooms, home-style meals, 24/7 security.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: IMAGES.exterior },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: IMAGES.exterior },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const HERO_GALLERY = [IMAGES.exterior, IMAGES.room, IMAGES.wardrobe, IMAGES.bathroom];

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
  { title: "Double Sharing", image: IMAGES.room },
  { title: "Triple Sharing", image: IMAGES.wardrobe },
];

function Home() {
  return (
    <SiteChrome>
      {/* SECTION 1 — HERO */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 md:px-6 pt-8">
          <div className="relative overflow-hidden rounded-3xl bg-muted">
            <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar">
              {HERO_GALLERY.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`The Foothill Stay ${i + 1}`}
                  loading={i === 0 ? "eager" : "lazy"}
                  className="snap-center shrink-0 w-full aspect-[16/10] md:aspect-[21/9] object-cover"
                />
              ))}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-12 text-white">
              <h1 className="font-display text-3xl md:text-5xl font-semibold tracking-tight">
                The Foothill Stay
              </h1>
              <p className="mt-2 text-base md:text-xl font-medium opacity-95">
                Premium Girls Hostel & PG
              </p>
              <p className="mt-1 text-sm md:text-base opacity-90">
                Inside MIT-WPU Campus, Kothrud, Pune
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm md:text-base font-medium">
                <a href={SITE.phone1Href} className="hover:underline">📞 {SITE.phone1}</a>
                <a href={SITE.phone2Href} className="hover:underline">📞 {SITE.phone2}</a>
              </div>
              <a
                href={SITE.phone1Href}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <p className="mt-3 text-xs md:text-sm opacity-90">
                Safe · Comfortable · Student Friendly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — CHOOSE ACCOMMODATION */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-center">
            Choose Accommodation
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl overflow-hidden border border-border/60 bg-card">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img src={IMAGES.exterior} alt="Girls Hostel" loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold">Girls Hostel</h3>
                <p className="mt-1 text-sm text-muted-foreground">Inside MIT-WPU Campus</p>
                <ul className="mt-4 space-y-1.5 text-sm">
                  <li>Double Sharing</li>
                  <li>Triple Sharing</li>
                  <li>Food Included</li>
                </ul>
                <a
                  href="#hostel-rooms"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
                >
                  Explore Hostel
                </a>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden border border-border/60 bg-card">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img src={PG_IMAGES[0]} alt="Girls PG" loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold">Girls PG</h3>
                <p className="mt-1 text-sm text-muted-foreground">Vanaraji Society · 5 min from MIT-WPU</p>
                <ul className="mt-4 space-y-1.5 text-sm">
                  <li>Double Sharing</li>
                  <li>Food Not Included</li>
                </ul>
                <a
                  href="#pg"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
                >
                  Explore PG
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — LOCATION */}
      <section className="py-16 md:py-20 border-t border-border/60">
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
              title="The Foothill Stay Location"
            />
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3 text-center text-sm">
            <div className="rounded-2xl bg-primary-soft px-4 py-3 font-semibold text-primary">
              Inside MIT-WPU Campus
            </div>
            <div className="rounded-2xl bg-primary-soft px-4 py-3 font-semibold text-primary">
              Safe & Peaceful Environment
            </div>
            <div className="rounded-2xl bg-primary-soft px-4 py-3 font-semibold text-primary">
              Easy Walking Distance
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — AMENITIES */}
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

      {/* SECTION 5 — FOOD */}
      <section className="py-16 md:py-20 border-t border-border/60">
        <div className="mx-auto max-w-4xl px-4 md:px-6 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-semibold">
            Wholesome Home-Style Meals
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Enjoy pure vegetarian, nutritious home-style meals prepared using pure ghee and fresh
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
              personalized care, customized meal planning and individual attention to every resident.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6 — ROOM TYPES */}
      <section id="hostel-rooms" className="py-16 md:py-20 border-t border-border/60">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-center">Room Types</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {ROOMS.map((r) => (
              <div key={r.title} className="rounded-3xl overflow-hidden border border-border/60 bg-card">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img src={r.image} alt={`${r.title} room`} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold">{r.title}</h3>
                  <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                    <li>Comfortable Beds</li>
                    <li>Study Space</li>
                    <li>Extra Spacious Wardrobe</li>
                    <li>Clean Washroom</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — PG */}
      <section id="pg" className="py-16 md:py-20 border-t border-border/60 bg-primary-soft/30">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-center">Girls PG</h2>
          <p className="mt-3 text-center text-muted-foreground">
            Vanaraji Society · 5-minute walk from MIT-WPU
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href={SITE.pgPhoneHref}
              className="inline-flex items-center gap-2 text-lg font-semibold text-primary hover:underline"
            >
              <Phone className="h-4 w-4" /> {SITE.pgPhone}
            </a>
          </div>

          <div className="mt-10 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth">
            <div className="flex gap-4">
              {PG_IMAGES.map((src, i) => (
                <div
                  key={i}
                  className="snap-center shrink-0 w-[80%] sm:w-[55%] md:w-[38%] lg:w-[30%] aspect-[4/3] overflow-hidden rounded-2xl bg-muted"
                >
                  <img
                    src={src}
                    alt={`Girls PG photo ${i + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3 text-center text-sm max-w-3xl mx-auto">
            <div className="rounded-2xl bg-card border border-border/60 px-4 py-3 font-semibold">
              Double Sharing
            </div>
            <div className="rounded-2xl bg-card border border-border/60 px-4 py-3 font-semibold">
              Same Premium Amenities
            </div>
            <div className="rounded-2xl bg-card border border-border/60 px-4 py-3 font-semibold">
              Food Not Included
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <a
              href={SITE.pgPhoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
            >
              <Phone className="h-4 w-4" /> Call for PG
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 8 — INQUIRY */}
      <section id="enquire" className="py-16 md:py-20 border-t border-border/60">
        <div className="mx-auto max-w-xl px-4 md:px-6">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-center">
            Book Your Stay
          </h2>
          <p className="mt-3 text-center text-muted-foreground">
            Fill in your details and our team will get back to you shortly.
          </p>
          <div className="mt-8 rounded-3xl bg-card border border-border/60 p-6 sm:p-8">
            <InquiryForm />
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <a href={SITE.phone1Href} className="text-primary font-semibold hover:underline inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Hostel · {SITE.phone1}
            </a>
            <a href={SITE.pgPhoneHref} className="text-primary font-semibold hover:underline inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" /> PG · {SITE.pgPhone}
            </a>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
