import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Wifi, Sparkles, Utensils, Camera, Shield, Lock, Sun, Home as HomeIcon } from "lucide-react";
import { SiteChrome } from "@/components/site/SiteChrome";
import { InquiryForm } from "@/components/site/InquiryForm";
import { SITE, IMAGES } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Foothill Girls Hostel — Inside MIT College Campus, Kothrud, Pune" },
      { name: "description", content: "Safe & comfortable girls hostel inside MIT College Campus, Kothrud, Pune. Call +91 8007660249 to book." },
      { property: "og:title", content: "The Foothill Girls Hostel — Inside MIT College Campus" },
      { property: "og:image", content: IMAGES.exterior },
      { name: "twitter:image", content: IMAGES.exterior },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const GALLERY = [IMAGES.exterior, IMAGES.room, IMAGES.wardrobe, IMAGES.bathroom, IMAGES.room];

const AMENITIES = [
  { icon: Wifi, label: "Free WiFi" },
  { icon: Sparkles, label: "Daily Housekeeping" },
  { icon: Utensils, label: "Pure Veg Food" },
  { icon: Camera, label: "CCTV Security" },
  { icon: Shield, label: "Watchman" },
  { icon: Lock, label: "Individual Storage" },
  { icon: HomeIcon, label: "Spacious Rooms" },
  { icon: Sun, label: "Natural Light & Ventilation" },
];

const ROOMS = [
  { title: "Double Sharing", image: IMAGES.room },
  { title: "Triple Sharing", image: IMAGES.wardrobe },
  { title: "Quad Sharing", image: IMAGES.room },
];

function Home() {
  return (
    <SiteChrome>
      {/* HERO */}
      <section className="pt-12 md:pt-20 pb-8">
        <div className="mx-auto max-w-6xl px-4 md:px-6 text-center">
          <h1 className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-foreground">
            The Foothill Girls Hostel
          </h1>
          <p className="mt-4 text-base md:text-lg text-muted-foreground">
            Inside MIT College Campus, Kothrud, Pune
          </p>
          <a
            href={SITE.phoneHref}
            className="mt-6 inline-flex items-center gap-2 text-lg font-semibold text-primary hover:underline"
          >
            <Phone className="h-4 w-4" /> {SITE.phone}
          </a>
        </div>

        {/* Horizontal gallery */}
        <div className="mt-10 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth">
          <div className="flex gap-4 px-4 md:px-6 mx-auto max-w-6xl">
            {GALLERY.map((src, i) => (
              <div
                key={i}
                className="snap-center shrink-0 w-[80%] sm:w-[60%] md:w-[45%] lg:w-[38%] aspect-[4/3] overflow-hidden rounded-3xl bg-muted"
              >
                <img
                  src={src}
                  alt={`The Foothill Girls Hostel photo ${i + 1}`}
                  loading={i === 0 ? "eager" : "lazy"}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3">
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:opacity-90 transition"
          >
            <Phone className="h-5 w-5" /> Call Now
          </a>
          <a href="#enquire" className="text-sm text-primary hover:underline">
            Enquire via Form
          </a>
        </div>
      </section>

      {/* LOCATION */}
      <section className="py-16 md:py-20 border-t border-border/60">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-center">
            Inside MIT College Campus
          </h2>
          <div className="mt-8 aspect-video rounded-2xl overflow-hidden border border-border/60">
            <iframe
              src={SITE.mapEmbed}
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hostel Location"
            />
          </div>
          <p className="mt-6 text-center text-muted-foreground">
            Located inside MIT College Campus, next to Ramdev Mandir, Kothrud, Pune.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3 text-sm">
            <span className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-soft px-4 py-2 font-semibold text-primary">
              <MapPin className="h-4 w-4" /> Safe Campus Location
            </span>
            <span className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-soft px-4 py-2 font-semibold text-primary">
              Easy Walking Distance for MIT Students
            </span>
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
                <span className="text-sm font-medium">{a.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROOMS */}
      <section className="py-16 md:py-20 border-t border-border/60">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-center">Room Types</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {ROOMS.map((r) => (
              <div
                key={r.title}
                className="rounded-3xl overflow-hidden border border-border/60 bg-card"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={r.image}
                    alt={`${r.title} room`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold">{r.title}</h3>
                  <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                    <li>Spacious wardrobe</li>
                    <li>Comfortable beds</li>
                    <li>Clean washroom</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="enquire" className="py-16 md:py-20 border-t border-border/60 bg-primary-soft/40">
        <div className="mx-auto max-w-xl px-4 md:px-6">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-center">
            Book Your Stay
          </h2>
          <p className="mt-3 text-center text-muted-foreground">
            Interested in staying with us? Call us directly or fill out the inquiry form and we'll
            get back to you shortly.
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>
          <div className="mt-8 rounded-3xl bg-card border border-border/60 p-6 sm:p-8">
            <InquiryForm />
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
