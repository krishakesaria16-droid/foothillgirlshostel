import { createFileRoute } from "@tanstack/react-router";
import { SiteChrome } from "@/components/site/SiteChrome";
import { Reveal, SectionHeader } from "@/components/site/Reveal";
import { IMAGES } from "@/lib/site";
import { Trees, Shield, Users, Heart } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About The Foothill Girls Hostel — Premium Living Near MIT-WPU" },
      { name: "description", content: "Learn about The Foothill Girls Hostel — a safe, peaceful, premium girls hostel located inside MIT-WPU Campus, Kothrud, Pune." },
      { property: "og:title", content: "About — The Foothill Girls Hostel" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: Shield, t: "Safety First", d: "24×7 CCTV, dedicated watchman, and strict entry protocols." },
  { icon: Heart, t: "Home-like Comfort", d: "Warm environment, hygienic vegetarian food, personal touch." },
  { icon: Trees, t: "Nature-Inspired", d: "Surrounded by greenery for a peaceful, calm study atmosphere." },
  { icon: Users, t: "Community", d: "A supportive circle of like-minded students & mentors." },
];

function AboutPage() {
  return (
    <SiteChrome>
      <section className="relative py-24 md:py-32 gradient-soft">
        <div className="mx-auto max-w-4xl px-4 md:px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">About Us</p>
          <h1 className="mt-3 font-display text-4xl md:text-6xl font-bold leading-tight">
            A safe, peaceful home <span className="text-gradient">near MIT-WPU</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            The Foothill Girls Hostel offers a peaceful, secure, and premium living experience exclusively for girls studying near MIT-WPU. Located inside the campus vicinity and surrounded by greenery.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 grid gap-12 lg:grid-cols-2 items-center">
          <Reveal>
            <img src={IMAGES.exterior} alt="Hostel exterior with greenery" loading="lazy" className="rounded-3xl shadow-elegant object-cover aspect-[4/3]" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">Our Story</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Built with a single mission — to give every girl studying at MIT-WPU a home that is safe, hygienic, and quietly luxurious. From spacious rooms and daily housekeeping to fresh vegetarian meals and lush green surroundings, we've thought of every detail so students can focus on what matters: their studies and growth.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We take pride in the trust of parents who choose us for their daughters — and we work every day to keep earning it.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24 gradient-soft">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeader eyebrow="Our Values" title="What we stand for" />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.t} delay={i * 0.08}>
                <div className="h-full rounded-3xl bg-card border border-border/60 p-6 shadow-soft hover:shadow-elegant transition">
                  <div className="h-12 w-12 rounded-xl bg-primary-soft flex items-center justify-center text-primary">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display font-bold text-lg">{v.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
