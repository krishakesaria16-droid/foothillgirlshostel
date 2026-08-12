import { createFileRoute } from "@tanstack/react-router";
import {
  Phone, MapPin, Wifi, Sparkles, Camera, Shield, Sun,
  Shirt, Droplet, Refrigerator, Flame, Archive, Trees,
} from "lucide-react";
import { SiteChrome } from "@/components/site/SiteChrome";
import { InquiryForm } from "@/components/site/InquiryForm";
import { SITE, IMAGES, PG_IMAGES } from "@/lib/site";

export const Route = createFileRoute("/pg")({
  head: () => ({
    meta: [
      { title: "Girls PG in Vanaraji Society Near MIT-WPU | The Foothill Stay" },
      {
        name: "description",
        content:
          "Premium girls' PG in Vanaraji Society, 5 minutes from MIT-WPU, Kothrud, Pune. Spacious double-sharing rooms, high-speed fiber internet, dedicated housekeeping and modern amenities.",
      },
      { property: "og:title", content: "Girls PG Near MIT-WPU | The Foothill Stay" },
      {
        property: "og:description",
        content: "Premium girls' PG in Vanaraji Society, 5 min walk from MIT-WPU.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: PG_IMAGES[0] },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: PG_IMAGES[0] },
    ],
    links: [{ rel: "canonical", href: "/pg" }],
  }),
  component: PgPage,
});

const AMENITIES = [
  { icon: Wifi, label: "High-Speed Fiber Internet" },
  { icon: Sparkles, label: "Housekeeping" },
  { icon: Camera, label: "24×7 CCTV & Security Guard" },
  { icon: Archive, label: "Extra Spacious Wardrobes" },
  { icon: Sun, label: "Sun-Kissed Rooms" },
  { icon: Shirt, label: "Laundry & Drying Area" },
  { icon: Droplet, label: "24×7 Hot Water" },
  { icon: Refrigerator, label: "Refrigerator" },
  { icon: Flame, label: "Gas" },
  { icon: Shield, label: "Safe & Peaceful Locality" },
  { icon: Trees, label: "Attached Balcony" },
];

function PgPage() {
  return (
    <SiteChrome>
      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 md:px-6 pt-8">
          <div className="relative overflow-hidden rounded-3xl bg-muted">
            <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar">
              {PG_IMAGES.slice(0, 6).map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`The Foothill Stay PG ${i + 1}`}
                  loading={i === 0 ? "eager" : "lazy"}
                  className="snap-center shrink-0 w-full aspect-[16/10] md:aspect-[21/9] object-cover"
                />
              ))}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-12 text-white">
              <h1 className="font-display text-3xl md:text-5xl font-semibold tracking-tight">
                Premium Girls PG
              </h1>
              <p className="mt-2 text-base md:text-xl font-medium opacity-95">
                Vanaraji Society · 5 Minutes Walk from MIT-WPU
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm md:text-base font-medium">
                <a href={SITE.pgPhoneHref} className="hover:underline">📞 {SITE.pgPhone}</a>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={SITE.pgPhoneHref}
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
            Vanaraji Society · Near MIT-WPU
          </h2>
          <div className="mt-8 aspect-video rounded-2xl overflow-hidden border border-border/60">
            <iframe
              src={SITE.pgMapEmbed}
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Foothill Stay PG Location"
            />
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 text-center text-sm max-w-xl mx-auto">
            <div className="rounded-2xl bg-primary-soft px-4 py-3 font-semibold text-primary">
              Vanaraji Society
            </div>
            <div className="rounded-2xl bg-primary-soft px-4 py-3 font-semibold text-primary">
              5 Minutes Walk from MIT-WPU
            </div>
          </div>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="py-12 border-t border-border/60">
        <div className="mx-auto max-w-3xl px-4 md:px-6 text-center">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            The Foothill Stay PG offers premium girls' accommodation in Vanaraji Society, just five
            minutes from MIT-WPU. Spacious double-sharing rooms, modern amenities, dedicated
            housekeeping, high-speed internet, and a peaceful environment make it an ideal home for
            students.
          </p>
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

      {/* ROOM TYPE */}
      <section id="rooms" className="py-16 md:py-20 border-t border-border/60">
        <div className="mx-auto max-w-md px-4 md:px-6">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-center">Room Type</h2>
          <div className="mt-10 rounded-3xl overflow-hidden border border-border/60 bg-card">
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img src={IMAGES.pgDouble} alt="PG Double Sharing Room" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="font-display text-lg font-semibold">Double Sharing</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                <li>Comfortable Beds</li>
                <li>Study Area</li>
                <li>Extra Spacious Wardrobe</li>
                <li>Clean Washroom</li>
              </ul>
              <a
                href="#enquire"
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition w-full"
              >
                Enquire Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-16 md:py-20 border-t border-border/60">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-center">Gallery</h2>
          <div className="mt-10 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth">
            <div className="flex gap-4">
              {PG_IMAGES.map((src, i) => (
                <div
                  key={i}
                  className="snap-center shrink-0 w-[80%] sm:w-[55%] md:w-[38%] lg:w-[30%] aspect-[4/3] overflow-hidden rounded-2xl bg-muted"
                >
                  <img
                    src={src}
                    alt={`PG photo ${i + 1}`}
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
            <InquiryForm variant="pg" />
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <a href={SITE.pgPhoneHref} className="text-primary font-semibold hover:underline inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" /> PG · {SITE.pgPhone}
            </a>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
