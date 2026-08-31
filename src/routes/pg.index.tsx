import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, ArrowRight } from "lucide-react";
import { SITE, IMAGES, FLOOR_9_IMAGES, FLOOR_10_IMAGES } from "@/lib/site";

export const Route = createFileRoute("/pg/")({
  head: () => ({
    meta: [
      { title: "Girls PG Near MIT-WPU — Choose Your Floor | The Foothill Stay" },
      {
        name: "description",
        content:
          "Choose between Vanaraji 9th Floor and Vanaraji 10th Floor — premium girls PG accommodation, 5 minutes walking distance from MIT-WPU, Kothrud, Pune.",
      },
      { property: "og:title", content: "Girls PG Near MIT-WPU — Choose Your Floor" },
      {
        property: "og:description",
        content: "Vanaraji 9th Floor or 10th Floor — premium girls PG, 5 min from MIT-WPU.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/pg" }],
  }),
  component: PgFloorChoice,
});

function PgFloorChoice() {
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

      <FloorHalf
        title="Vanaraji 9th Floor"
        image={FLOOR_9_IMAGES[0]}
        to="/pg/vanaraji-9th-floor"
        label="Explore 9th Floor"
      />
      <FloorHalf
        title="Vanaraji 10th Floor"
        image={FLOOR_10_IMAGES[0]}
        to="/pg/vanaraji-10th-floor"
        label="Explore 10th Floor"
      />
    </div>
  );
}

function FloorHalf({
  title,
  image,
  to,
  label,
}: {
  title: string;
  image: string;
  to: string;
  label: string;
}) {
  return (
    <section className="relative flex-1 min-h-0 overflow-hidden group">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/65" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5 text-white">
        <p className="text-[11px] sm:text-xs uppercase tracking-[0.25em] opacity-85">
          Premium Girls PG
        </p>
        <h2 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
          {title}
        </h2>
        <p className="mt-1 text-sm sm:text-base opacity-95">
          5 Min Walking Distance from MIT-WPU
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <Link
            to={to}
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-xs sm:text-sm font-semibold text-primary-foreground hover:opacity-90 hover:-translate-y-0.5 transition"
          >
            {label} <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <a
            href={SITE.pgPhoneHref}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/70 bg-white/10 backdrop-blur px-5 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-white hover:text-primary transition"
          >
            <Phone className="h-3.5 w-3.5" /> Enquire Now
          </a>
        </div>
      </div>
    </section>
  );
}
