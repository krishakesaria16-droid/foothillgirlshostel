import { createFileRoute } from "@tanstack/react-router";
import { SiteChrome } from "@/components/site/SiteChrome";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — The Foothill Girls Hostel" },
      { name: "description", content: "Privacy policy for The Foothill Girls Hostel website." },
      { property: "og:title", content: "Privacy Policy — The Foothill Girls Hostel" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <SiteChrome>
      <section className="py-24 md:py-32 gradient-soft">
        <div className="mx-auto max-w-3xl px-4 md:px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Legal</p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          <p className="mt-4 text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long" })}</p>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 md:px-6 prose prose-neutral">
          <div className="space-y-6 text-foreground/80 leading-relaxed">
            <p>At The Foothill Girls Hostel, we respect your privacy. This page explains how we collect and use the information you provide through our website.</p>
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground">Information we collect</h2>
              <p className="mt-2">When you fill out an enquiry or contact form, we collect your name, phone number, email, and any details you choose to share (college, course, sharing preference, parent contact, message).</p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground">How we use it</h2>
              <p className="mt-2">We use your details solely to respond to your inquiry, arrange a visit, or complete your booking. We do not sell or share your information with third parties.</p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground">Data security</h2>
              <p className="mt-2">Inquiries are stored securely in our backend and accessible only to authorized staff of The Foothill Girls Hostel.</p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground">Contact</h2>
              <p className="mt-2">For any privacy-related questions, please contact us at <a className="text-primary underline" href="mailto:nmchhajed@gmail.com">nmchhajed@gmail.com</a> or +91 8007660249.</p>
            </div>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
