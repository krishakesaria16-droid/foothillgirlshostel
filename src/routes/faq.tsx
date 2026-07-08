import { createFileRoute } from "@tanstack/react-router";
import { SiteChrome } from "@/components/site/SiteChrome";
import { Reveal } from "@/components/site/Reveal";

const FAQS = [
  { q: "Is the hostel inside MIT-WPU campus?", a: "Yes, The Foothill Girls Hostel is located inside the MIT-WPU campus vicinity in Kothrud, Pune — just a short walk from classes." },
  { q: "Is food included in the hostel fee?", a: "Yes, hygienic pure vegetarian meals (breakfast, lunch, dinner) are served daily by our kitchen staff." },
  { q: "Is WiFi available?", a: "Yes, high-speed WiFi is available throughout the hostel for study and personal use." },
  { q: "What room sharing options are available?", a: "We offer Double, Triple, and Quad sharing rooms — all with spacious wardrobes, comfortable beds, and natural lighting." },
  { q: "Is CCTV surveillance available?", a: "Yes, the entire property is under 24×7 CCTV surveillance with a dedicated watchman for safety." },
  { q: "How can I book a room?", a: "Simply fill in the enquiry form on our website, WhatsApp us, or call +91 8007660249 to schedule a visit." },
  { q: "Is housekeeping done daily?", a: "Yes, rooms and common areas are cleaned daily by our housekeeping staff." },
  { q: "Are visitors allowed?", a: "Only registered parents/guardians are allowed after verification, keeping the hostel safe for all students." },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — The Foothill Girls Hostel MIT-WPU" },
      { name: "description", content: "Answers to common questions about The Foothill Girls Hostel — location, food, WiFi, security, room sharing, booking, and more." },
      { property: "og:title", content: "FAQ — The Foothill Girls Hostel" },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQS.map(f => ({
          "@type": "Question", name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a }
        })),
      }),
    }],
  }),
  component: FAQPage,
});

function FAQPage() {
  return (
    <SiteChrome>
      <section className="py-24 md:py-32 gradient-soft">
        <div className="mx-auto max-w-3xl px-4 md:px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">FAQ</p>
          <h1 className="mt-3 font-display text-4xl md:text-6xl font-bold leading-tight">
            Questions? <span className="text-gradient">We have answers.</span>
          </h1>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 md:px-6 space-y-3">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.04}>
              <details className="group rounded-2xl border border-border/60 bg-card px-5 py-4 shadow-soft hover:shadow-elegant transition open:shadow-elegant">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-display font-semibold list-none">
                  {f.q}
                  <span className="h-6 w-6 rounded-full bg-primary-soft flex items-center justify-center text-primary text-lg leading-none transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteChrome>
  );
}
