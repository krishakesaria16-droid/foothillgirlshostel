import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { SiteChrome } from "@/components/site/SiteChrome";
import { Reveal } from "@/components/site/Reveal";
import { InquiryForm } from "@/components/site/InquiryForm";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — The Foothill Girls Hostel MIT-WPU Kothrud" },
      { name: "description", content: "Book a visit, enquire, or get directions to The Foothill Girls Hostel inside MIT-WPU Campus, Kothrud, Pune. Call +91 8007660249." },
      { property: "og:title", content: "Contact — The Foothill Girls Hostel" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteChrome>
      <section className="py-24 md:py-32 gradient-soft">
        <div className="mx-auto max-w-4xl px-4 md:px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Contact</p>
          <h1 className="mt-3 font-display text-4xl md:text-6xl font-bold leading-tight">
            Let's <span className="text-gradient">connect</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Book a visit or reserve your seat. Our team responds within a few hours.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-4">
              {[
                { i: Phone, l: "Phone", v: SITE.phone, h: SITE.phoneHref },
                { i: MessageCircle, l: "WhatsApp", v: SITE.phone, h: SITE.whatsappHref, ext: true },
                { i: Mail, l: "Email", v: SITE.email, h: SITE.emailHref },
              ].map(c => (
                <a key={c.l} href={c.h} target={c.ext ? "_blank" : undefined} rel={c.ext ? "noopener noreferrer" : undefined} className="flex items-center gap-4 rounded-2xl border border-border/60 bg-card p-5 hover:shadow-elegant transition group">
                  <div className="h-12 w-12 rounded-xl bg-primary-soft flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                    <c.i className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase text-muted-foreground">{c.l}</div>
                    <div className="font-display font-bold break-all">{c.v}</div>
                  </div>
                </a>
              ))}
              <div className="flex items-center gap-4 rounded-2xl border border-border/60 bg-card p-5">
                <div className="h-12 w-12 rounded-xl bg-primary-soft flex items-center justify-center text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase text-muted-foreground">Address</div>
                  <div className="text-sm font-medium">{SITE.address}</div>
                </div>
              </div>
              <div className="aspect-video rounded-2xl overflow-hidden border border-border/60 shadow-soft">
                <iframe src={SITE.mapEmbed} className="h-full w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Hostel Location" />
              </div>
              <a href={SITE.mapDirections} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-5 py-2.5 text-sm font-bold text-primary hover:bg-primary hover:text-primary-foreground transition">
                <MapPin className="h-4 w-4" /> Get Directions
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl glass-strong p-6 sm:p-8 shadow-elegant sticky top-24">
              <h2 className="font-display text-2xl font-bold">Send us an Inquiry</h2>
              <p className="text-sm text-muted-foreground mt-1">Fill in your details — we'll be in touch shortly.</p>
              <div className="mt-6">
                <InquiryForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteChrome>
  );
}
