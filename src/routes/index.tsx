import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, ArrowRight } from "lucide-react";
import { SITE, IMAGES, PG_IMAGES } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Foothill Stay | Premium Girls Hostel & PG Near MIT-WPU, Pune" },
      {
        name: "description",
        content:
          "The Foothill Stay offers premium girls' hostel and PG accommodation near MIT-WPU in Pune with spacious furnished rooms, high-speed fiber internet, dedicated housekeeping, modern amenities, home-style meals for hostel residents, and a safe student-friendly environment.",
      },
      {
        name: "keywords",
        content:
          "Girls Hostel Near MIT-WPU, Girls PG Near MIT-WPU, Girls Hostel Kothrud, Girls PG Kothrud, Student Accommodation Pune, Premium Girls Hostel Pune, Premium Girls PG Pune, Girls Hostel Near Cummins College, The Foothill Stay",
      },
      { property: "og:title", content: "The Foothill Stay | Premium Girls Hostel & PG Near MIT-WPU" },
      {
        property: "og:description",
        content:
          "Premium girls' hostel & PG near MIT-WPU, Kothrud, Pune. Choose your stay.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: IMAGES.exterior },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: IMAGES.exterior },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="fixed inset-0 flex flex-col bg-background overflow-hidden">
      <Link
        to="/"
        className="absolute top-4 left-4 z-30 flex items-center gap-2 rounded-full bg-background/85 backdrop-blur px-3 py-1.5 shadow-sm"
      >
        <img
          src={IMAGES.logo}
          alt="The Foothill Stay logo"
          className="h-8 w-8 rounded-full object-cover"
        />
        <span className="font-display text-sm font-semibold hidden sm:inline">
          The Foothill Stay
        </span>
      </Link>

      <ChoiceHalf
        title="Premium Girls Hostel"
        subtitle="Inside MIT-WPU Campus"
        tagline="Safe • Comfortable • Student Friendly"
        image={IMAGES.exterior}
        exploreTo="/hostel"
        exploreLabel="Explore Hostel"
        callLabel="Call Hostel"
        phones={[
          { label: SITE.phone1, href: SITE.phone1Href },
          { label: SITE.phone2, href: SITE.phone2Href },
        ]}
        primaryCallHref={SITE.phone1Href}
      />
      <ChoiceHalf
        title="Premium Girls PG"
        subtitle="Vanaraji Society"
        tagline="5 Minutes Walk from MIT-WPU"
        image={PG_IMAGES[0]}
        exploreTo="/pg"
        exploreLabel="Explore PG"
        callLabel="Call PG"
        phones={[{ label: SITE.pgPhone, href: SITE.pgPhoneHref }]}
        primaryCallHref={SITE.pgPhoneHref}
      />
    </div>
  );
}

function ChoiceHalf({
  title,
  subtitle,
  tagline,
  image,
  exploreTo,
  exploreLabel,
  callLabel,
  phones,
  primaryCallHref,
}: {
  title: string;
  subtitle: string;
  tagline: string;
  image: string;
  exploreTo: string;
  exploreLabel: string;
  callLabel: string;
  phones: { label: string; href: string }[];
  primaryCallHref: string;
}) {
  return (
    <section className="relative flex-1 min-h-0 overflow-hidden group">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/65 transition-opacity duration-500 group-hover:opacity-90" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5 text-white">
        <p className="text-[11px] sm:text-xs uppercase tracking-[0.25em] opacity-85">
          The Foothill Stay
        </p>
        <h2 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
          {title}
        </h2>
        <p className="mt-1 text-sm sm:text-base opacity-95">{subtitle}</p>
        <p className="mt-1 text-[11px] sm:text-xs opacity-80">{tagline}</p>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <Link
            to={exploreTo}
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-xs sm:text-sm font-semibold text-primary-foreground hover:opacity-90 hover:-translate-y-0.5 transition"
          >
            {exploreLabel} <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <a
            href={primaryCallHref}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/70 bg-white/10 backdrop-blur px-5 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-white hover:text-primary transition"
          >
            <Phone className="h-3.5 w-3.5" /> {callLabel}
          </a>
        </div>

        <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-0.5 text-[11px] sm:text-xs font-medium opacity-95">
          {phones.map((p) => (
            <a key={p.href} href={p.href} className="hover:underline">
              📞 {p.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
