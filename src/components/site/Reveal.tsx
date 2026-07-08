import { motion } from "motion/react";
import type { ReactNode } from "react";

export function Reveal({ children, delay = 0, y = 24 }: { children: ReactNode; delay?: number; y?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({
  eyebrow, title, subtitle, center = true,
}: { eyebrow?: string; title: string; subtitle?: string; center?: boolean }) {
  return (
    <Reveal>
      <div className={center ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
        {eyebrow && (
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
        )}
        <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">{subtitle}</p>
        )}
      </div>
    </Reveal>
  );
}
