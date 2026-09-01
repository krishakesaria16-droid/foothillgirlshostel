import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Phone, MapPin, Wifi, Sparkles, Camera, Sun, Droplet,
  Refrigerator, Archive, Wrench, Flame, WashingMachine, X, ArrowRight,
} from "lucide-react";
import { SiteChrome } from "@/components/site/SiteChrome";
import { InquiryForm } from "@/components/site/InquiryForm";
import { SITE } from "@/lib/site";

const AMENITIES = [
  { icon: Wifi, label: "High-Speed Fiber Internet" },
  { icon: Sparkles, label: "Dedicated 24×7 Housekeeping" },
  { icon: Camera, label: "24×7 CCTV Surveillance & Security Guard" },
  { icon: Archive, label: "Extra Spacious Wardrobes" },
  { icon: Sun, label: "Spacious, Sun-Kissed Rooms" },
  { icon: Wrench, label: "In-House Maintenance Team 24/7" },
  { icon: Droplet, label: "24/7 Hot Water" },
  { icon: Refrigerator, label: "Refrigerator" },
  { icon: Flame, label: "Gas" },
  { icon: WashingMachine, label: "Washing Machine" },
];

export function FloorPage({
  floorName,
  images,
  roomImage,
  nextFloor,
}: {
  floorName: string;
  images: string[];
  roomImage: string;
  nextFloor?: { label: string; to: string };
}) {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <SiteChrome>
      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 md:px-6 pt-8">
          <div className="relative overflow-hidden rounded-3xl bg-muted">
            <img
              src={images[0]}
              alt={`${floorName} — premium girls PG`}
              className="w-full aspect-[16/10] md:aspect-[21/9] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-12 text-white">
              <h1 className="font-display text-3xl md:text-5xl font-semibold tracking-tight">
                {floorName}
              </h1>
              <p className="mt-2 text-base md:text-xl font-medium opacity-95">
                5 Min Walking Distance from MIT-WPU
              </p>
              <p className="mt-1 text-sm md:text-base opacity-90">
                Premium Girls PG · Double Sharing
              </p>
              <a href={SITE.pgPhoneHref} className="mt-2 block text-sm md:text-base font-medium hover:underline">
                📞 {SITE.pgPhone}
              </a>
              <div className="mt-5">
                <a
                  href="#enquire"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
                >
                  <Phone className="h-4 w-4" /> Enquire Now
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
              title={`${floorName} location`}
            />
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

      {/* ROOM */}
      <section className="py-16 md:py-20 border-t border-border/60">
        <div className="mx-auto max-w-md px-4 md:px-6">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-center">Room Type</h2>
          <div className="mt-10 rounded-3xl overflow-hidden border border-border/60 bg-card">
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={roomImage}
                alt={`${floorName} double sharing room`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-lg font-semibold">Double Sharing</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Spacious, comfortable double-sharing accommodation designed for students.
              </p>
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
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-center">
            {floorName} Gallery
          </h2>
          <div className="mt-10 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth">
            <div className="flex gap-4">
              {images.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setLightbox(src)}
                  className="snap-center shrink-0 w-[80%] sm:w-[55%] md:w-[38%] lg:w-[30%] aspect-[4/3] overflow-hidden rounded-2xl bg-muted"
                >
                  <img
                    src={src}
                    alt={`${floorName} photo ${i + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INQUIRY */}
      <section id="enquire" className="py-16 md:py-20 border-t border-border/60">
        <div className="mx-auto max-w-xl px-4 md:px-6">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-center">
            Interested in the {floorName.replace("Vanaraji ", "")}?
          </h2>
          <div className="mt-8 rounded-3xl bg-card border border-border/60 p-6 sm:p-8">
            <InquiryForm variant="pg" floor={floorName} />
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <a
              href={SITE.pgPhoneHref}
              className="text-primary font-semibold hover:underline inline-flex items-center gap-2"
            >
              <MapPin className="h-4 w-4" /> PG · {SITE.pgPhone}
            </a>
          </div>

          {nextFloor && (
            <div className="mt-10 text-center">
              <Link
                to={nextFloor.to}
                className="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition"
              >
                {nextFloor.label} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute top-5 right-5 rounded-full bg-white/15 p-2 text-white"
            onClick={() => setLightbox(null)}
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={lightbox}
            alt={`${floorName} photo`}
            className="max-h-[90vh] max-w-full rounded-2xl object-contain"
          />
        </div>
      )}
    </SiteChrome>
  );
}
