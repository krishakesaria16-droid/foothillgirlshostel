import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Phone, MessageCircle, Calendar, Send, Shield, Wifi, Sparkles,
  Camera, Utensils, Trees, Wind, Lock, BookOpen, Star, MapPin,
  CheckCircle2, ArrowRight, Users, Bed,
} from "lucide-react";
import { SiteChrome } from "@/components/site/SiteChrome";
import { HeroSlider } from "@/components/site/HeroSlider";
import { Reveal, SectionHeader } from "@/components/site/Reveal";
import { InquiryForm } from "@/components/site/InquiryForm";
import { SITE, IMAGES } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Foothill Girls Hostel — Premium Girls Hostel Inside MIT-WPU, Kothrud" },
      { name: "description", content: "Premium girls hostel inside MIT-WPU Campus, Kothrud. Safe, peaceful, hygienic. Spacious rooms, WiFi, CCTV, hygienic vegetarian food. Book a visit today." },
      { property: "og:title", content: "The Foothill Girls Hostel — Premium Girls Hostel Inside MIT-WPU, Kothrud" },
      { property: "og:image", content: IMAGES.exterior },
      { name: "twitter:image", content: IMAGES.exterior },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const WHY = [
  { icon: MapPin, title: "Inside MIT-WPU Campus", desc: "Walk to class in minutes — safe & convenient." },
  { icon: Shield, title: "Girls Only Hostel", desc: "Exclusive, secure environment 24×7." },
  { icon: Bed, title: "Spacious Premium Rooms", desc: "Comfortable beds, natural lighting." },
  { icon: Sparkles, title: "Daily Housekeeping", desc: "Clean & hygienic rooms every day." },
  { icon: Wifi, title: "High-Speed WiFi", desc: "Perfect for study & staying connected." },
  { icon: Camera, title: "CCTV Security", desc: "Full surveillance across the property." },
  { icon: Lock, title: "Individual Cupboards", desc: "Private, lockable personal storage." },
  { icon: Utensils, title: "Hygienic Vegetarian Food", desc: "Home-style, fresh, nutritious meals." },
  { icon: Trees, title: "Peaceful Green Environment", desc: "Surrounded by nature & greenery." },
  { icon: Wind, title: "Natural Ventilation", desc: "Huge windows, fresh air, sunlight." },
];

const ROOMS = [
  { title: "Double Sharing", desc: "Premium comfort with just one roommate.", image: IMAGES.room, features: ["2 Comfortable Beds", "Individual Wardrobes", "Attached Washroom", "Study Desk", "Natural Lighting"], badge: null },
  { title: "Triple Sharing", desc: "Our most popular — perfect balance of space & value.", image: IMAGES.wardrobe, features: ["3 Spacious Beds", "Personal Cupboards", "Attached Washroom", "Study Space", "Huge Windows"], badge: "Most Preferred" },
  { title: "Quad Sharing", desc: "Live with friends in a spacious shared room.", image: IMAGES.room, features: ["4 Comfortable Beds", "Individual Storage", "Common Washroom", "Group Study Area", "Natural Ventilation"], badge: null },
];

const AMENITIES = [
  { icon: Wifi, label: "Free WiFi" }, { icon: Sparkles, label: "Daily Housekeeping" },
  { icon: Camera, label: "CCTV Surveillance" }, { icon: Shield, label: "24×7 Security" },
  { icon: Utensils, label: "Pure Vegetarian Food" }, { icon: Lock, label: "Individual Storage" },
  { icon: Wind, label: "Huge Windows" }, { icon: Trees, label: "Natural Surroundings" },
  { icon: BookOpen, label: "Study Environment" }, { icon: Sparkles, label: "Clean Washrooms" },
];

const TESTIMONIALS = [
  { name: "Ananya S.", text: "Very nice and quiet place. Feels like a second home away from home." },
  { name: "Kavya M.", text: "The food is hygienic and tasty, and all the essential facilities are available." },
  { name: "Riya P.", text: "Good food served by the Maharaj. Rooms are clean and well maintained." },
  { name: "Priya D.", text: "Clean rooms and peaceful surroundings. Parents are very happy with the safety." },
];

const FAQS = [
  { q: "Is the hostel inside MIT-WPU campus?", a: "Yes, The Foothill Girls Hostel is located inside the MIT-WPU campus vicinity in Kothrud, Pune — just a short walk from classes." },
  { q: "Is food included in the hostel fee?", a: "Yes, hygienic pure vegetarian meals (breakfast, lunch, dinner) are served daily by our kitchen staff." },
  { q: "Is WiFi available?", a: "Yes, high-speed WiFi is available throughout the hostel for study and personal use." },
  { q: "What room sharing options are available?", a: "We offer Double, Triple, and Quad sharing rooms — all with spacious wardrobes, comfortable beds, and natural lighting." },
  { q: "Is CCTV surveillance available?", a: "Yes, the entire property is under 24×7 CCTV surveillance with a dedicated watchman for safety." },
  { q: "How can I book a room?", a: "Simply fill in the enquiry form on our website, WhatsApp us, or call +91 8007660249 to schedule a visit." },
];

function Home() {
  return (
    <SiteChrome>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <HeroSlider />
        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 py-24 md:py-32 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl text-primary-foreground"
          >
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold">
              <Star className="h-3.5 w-3.5 fill-gold" /> Inside MIT-WPU Campus • Kothrud
            </div>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
              Premium Girls Hostel<br /><span className="text-gold">Inside MIT-WPU Campus</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl">
              Safe • Peaceful • Hygienic • Comfortable Living
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-bold text-gold-foreground shadow-elegant hover:scale-105 transition">
                <Calendar className="h-4 w-4" /> Book a Visit
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-primary hover:scale-105 transition">
                <Send className="h-4 w-4" /> Enquire Now
              </Link>
              <a href={SITE.phoneHref} className="inline-flex items-center gap-2 rounded-full glass-strong text-white px-6 py-3.5 text-sm font-bold hover:scale-105 transition">
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full glass-strong text-white px-6 py-3.5 text-sm font-bold hover:scale-105 transition">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/80">
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold" />CCTV Secured</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold" />Pure Vegetarian Food</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold" />24×7 Security</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold" />5.0 Google Rating</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeader eyebrow="Why Choose Us" title="Everything a student needs — right on campus" subtitle="A premium living experience designed around comfort, safety, and peace of mind." />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {WHY.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.05}>
                <div className="group h-full rounded-2xl border border-border/60 bg-card p-6 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition">
                  <div className="h-11 w-11 rounded-xl bg-primary-soft flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                    <w.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display font-bold text-base">{w.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 md:py-28 gradient-soft">
        <div className="mx-auto max-w-7xl px-4 md:px-6 grid gap-12 lg:grid-cols-2 items-center">
          <Reveal>
            <div className="relative">
              <img src={IMAGES.exterior} alt="Hostel exterior with lush greenery" loading="lazy" className="rounded-3xl shadow-elegant object-cover aspect-[4/5]" />
              <div className="absolute -bottom-6 -right-6 hidden md:block glass-strong rounded-2xl p-5 shadow-elegant max-w-[220px]">
                <div className="flex items-center gap-2">
                  <div className="flex text-gold">
                    {[0,1,2,3,4].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}
                  </div>
                  <span className="font-display font-bold">5.0</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Trusted by hundreds of MIT-WPU students & parents.</p>
              </div>
            </div>
          </Reveal>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">About The Foothill</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              A safe, peaceful home <span className="text-gradient">that feels like family</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              The Foothill Girls Hostel offers a peaceful, secure, and premium living experience exclusively for girls studying near MIT-WPU. Located inside the campus vicinity and surrounded by greenery, the hostel provides spacious rooms, hygienic food, high-speed WiFi, daily housekeeping, CCTV security, and a comfortable environment that feels like home.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[{ n: "100+", l: "Happy Students" }, { n: "5.0★", l: "Google Rating" }, { n: "24/7", l: "Security" }].map(s => (
                <div key={s.l} className="rounded-2xl bg-card border border-border/60 p-4 text-center shadow-soft">
                  <div className="font-display text-2xl font-bold text-primary">{s.n}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all">
              Learn more about us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ROOMS */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeader eyebrow="Room Types" title="Choose the room that fits you best" subtitle="Every room includes wardrobes, comfortable beds, study space, and natural lighting." />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {ROOMS.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.1}>
                <div className={`group relative h-full rounded-3xl border bg-card shadow-soft hover:shadow-elegant transition overflow-hidden ${r.badge ? "border-primary/40 ring-2 ring-primary/20" : "border-border/60"}`}>
                  {r.badge && (
                    <div className="absolute top-4 right-4 z-10 rounded-full gradient-gold px-3 py-1 text-[11px] font-bold text-gold-foreground shadow-soft">
                      ★ {r.badge}
                    </div>
                  )}
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={r.image} alt={`${r.title} room`} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition duration-700" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      <h3 className="font-display text-xl font-bold">{r.title}</h3>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
                    <ul className="mt-5 space-y-2 text-sm">
                      {r.features.map(f => (
                        <li key={f} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary shrink-0" /><span>{f}</span></li>
                      ))}
                    </ul>
                    <Link to="/contact" className="mt-6 flex items-center justify-center gap-2 w-full rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:shadow-elegant transition">
                      Book Now <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="py-20 md:py-28 gradient-soft">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeader eyebrow="Amenities" title="Premium facilities, everyday comfort" />
          <div className="mt-14 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {AMENITIES.map((a, i) => (
              <Reveal key={a.label} delay={i * 0.04}>
                <div className="flex items-center gap-3 rounded-2xl glass px-4 py-4 hover:bg-primary hover:text-primary-foreground transition group">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 group-hover:bg-white/20 flex items-center justify-center text-primary group-hover:text-primary-foreground transition">
                    <a.icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold">{a.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeader eyebrow="Gallery" title="Take a look inside" subtitle="Real photos of The Foothill Girls Hostel." />
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[IMAGES.exterior, IMAGES.room, IMAGES.wardrobe, IMAGES.bathroom].map((src, i) => (
              <Reveal key={src} delay={i * 0.08}>
                <div className={`overflow-hidden rounded-2xl shadow-soft group ${i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"}`}>
                  <img src={src} alt={`Hostel photo ${i + 1}`} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition duration-700" />
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/gallery" className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-6 py-3 text-sm font-bold text-primary hover:bg-primary hover:text-primary-foreground transition">
              View Full Gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SAFETY - DARK SECTION */}
      <section className="py-20 md:py-28 bg-ink text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={IMAGES.exterior} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Safety First</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Your Safety is <span className="text-gold">Our Priority</span>
            </h2>
            <p className="mt-6 text-white/80 leading-relaxed max-w-lg">
              Parents choose The Foothill because we take security seriously — from 24×7 CCTV coverage to a dedicated watchman and strict entry protocols.
            </p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: Camera, t: "24×7 CCTV Monitoring" },
              { icon: Shield, t: "Dedicated Watchman" },
              { icon: Lock, t: "Girls Only Hostel" },
              { icon: MapPin, t: "Secure Campus Location" },
            ].map((s, i) => (
              <Reveal key={s.t} delay={i * 0.08}>
                <div className="rounded-2xl glass p-5 border-white/10">
                  <s.icon className="h-6 w-6 text-gold" />
                  <p className="mt-3 font-display font-bold">{s.t}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-4 py-1.5">
              <div className="flex text-gold">
                {[0,1,2,3,4].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <span className="text-sm font-bold text-primary">5.0 on Google</span>
            </div>
            <h2 className="mt-6 font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Loved by students & parents
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <div className="h-full rounded-3xl border border-border/60 bg-card p-6 shadow-soft hover:shadow-elegant transition">
                  <div className="flex text-gold mb-3">
                    {[0,1,2,3,4].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed">"{t.text}"</p>
                  <div className="mt-6 flex items-center gap-3 pt-4 border-t border-border/60">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{t.name}</div>
                      <div className="text-xs text-muted-foreground">Verified Google Review</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 gradient-soft">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <SectionHeader eyebrow="FAQ" title="Answers to common questions" />
          <div className="mt-12 space-y-3">
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
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section id="contact" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 grid gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Get in touch</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Ready to visit? <span className="text-gradient">We're here.</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-lg">
              Book a visit, ask a question, or reserve your seat. Our team responds within a few hours.
            </p>
            <div className="mt-8 space-y-4">
              <a href={SITE.phoneHref} className="flex items-center gap-4 rounded-2xl border border-border/60 bg-card p-4 hover:shadow-elegant transition group">
                <div className="h-12 w-12 rounded-xl bg-primary-soft flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition"><Phone className="h-5 w-5" /></div>
                <div><div className="text-xs font-semibold uppercase text-muted-foreground">Phone</div><div className="font-display font-bold">{SITE.phone}</div></div>
              </a>
              <a href={SITE.emailHref} className="flex items-center gap-4 rounded-2xl border border-border/60 bg-card p-4 hover:shadow-elegant transition group">
                <div className="h-12 w-12 rounded-xl bg-primary-soft flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition"><Send className="h-5 w-5" /></div>
                <div><div className="text-xs font-semibold uppercase text-muted-foreground">Email</div><div className="font-display font-bold break-all">{SITE.email}</div></div>
              </a>
              <div className="flex items-center gap-4 rounded-2xl border border-border/60 bg-card p-4">
                <div className="h-12 w-12 rounded-xl bg-primary-soft flex items-center justify-center text-primary"><MapPin className="h-5 w-5" /></div>
                <div><div className="text-xs font-semibold uppercase text-muted-foreground">Address</div><div className="text-sm font-medium">{SITE.address}</div></div>
              </div>
            </div>
            <div className="mt-6 aspect-video rounded-2xl overflow-hidden border border-border/60 shadow-soft">
              <iframe src={SITE.mapEmbed} className="h-full w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Hostel Location" />
            </div>
            <a href={SITE.mapDirections} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-full border-2 border-primary px-5 py-2.5 text-sm font-bold text-primary hover:bg-primary hover:text-primary-foreground transition">
              <MapPin className="h-4 w-4" /> Get Directions
            </a>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl glass-strong p-6 sm:p-8 shadow-elegant">
              <h3 className="font-display text-2xl font-bold">Send us an Inquiry</h3>
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
