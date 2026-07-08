import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IMAGES } from "@/lib/site";

const SLIDES = [
  { src: IMAGES.exterior, alt: "The Foothill Girls Hostel exterior surrounded by greenery" },
  { src: IMAGES.room, alt: "Spacious hostel room with comfortable beds" },
  { src: IMAGES.wardrobe, alt: "Individual wardrobes with plenty of storage" },
  { src: IMAGES.bathroom, alt: "Clean modern washroom" },
];

export function HeroSlider() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.img
          key={i}
          src={SLIDES[i].src}
          alt={SLIDES[i].alt}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-x-0 bottom-6 flex justify-center gap-2 z-10">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-gold" : "w-4 bg-white/40"}`}
          />
        ))}
      </div>
    </div>
  );
}
