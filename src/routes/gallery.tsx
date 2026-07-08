import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { SiteChrome } from "@/components/site/SiteChrome";
import { Reveal } from "@/components/site/Reveal";
import { IMAGES } from "@/lib/site";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — The Foothill Girls Hostel Photos" },
      { name: "description", content: "Photos of The Foothill Girls Hostel — exterior, rooms, wardrobes, washrooms, and more." },
      { property: "og:title", content: "Gallery — The Foothill Girls Hostel" },
      { property: "og:url", content: "/gallery" },
      { property: "og:image", content: IMAGES.exterior },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const PHOTOS = [
  { src: IMAGES.exterior, alt: "Hostel exterior surrounded by greenery", span: "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" },
  { src: IMAGES.room, alt: "Spacious room with three single beds" },
  { src: IMAGES.wardrobe, alt: "Individual wardrobes with plenty of storage" },
  { src: IMAGES.bathroom, alt: "Clean modern washroom" },
  { src: IMAGES.exterior, alt: "Approach to the hostel through greenery" },
  { src: IMAGES.room, alt: "Comfortable single beds" },
  { src: IMAGES.wardrobe, alt: "Large wardrobe storage" },
  { src: IMAGES.bathroom, alt: "Modern washroom facilities" },
];

function GalleryPage() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <SiteChrome>
      <section className="py-24 md:py-32 gradient-soft">
        <div className="mx-auto max-w-4xl px-4 md:px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Gallery</p>
          <h1 className="mt-3 font-display text-4xl md:text-6xl font-bold leading-tight">
            A look inside <span className="text-gradient">The Foothill</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">Real photos of our hostel, rooms, and surroundings.</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[220px] md:auto-rows-[240px]">
            {PHOTOS.map((p, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <button
                  onClick={() => setOpen(p.src)}
                  className={`group relative overflow-hidden rounded-2xl shadow-soft w-full h-full ${p.span ?? ""}`}
                >
                  <img src={p.src} alt={p.alt} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition duration-700" />
                  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition" />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-ink/90 backdrop-blur-md"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <button className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30" onClick={() => setOpen(null)} aria-label="Close">
              <X className="h-5 w-5" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              src={open} alt="Enlarged view"
              className="max-h-[92vh] max-w-[95vw] rounded-2xl shadow-elegant object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </SiteChrome>
  );
}
