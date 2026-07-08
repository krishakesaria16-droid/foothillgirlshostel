import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { InquiryForm } from "./InquiryForm";

const KEY = "foothill_popup_dismissed_at";
const COOLDOWN_MS = 24 * 60 * 60 * 1000;

export function EnquiryPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const last = Number(localStorage.getItem(KEY) || 0);
    if (Date.now() - last < COOLDOWN_MS) return;
    const t = setTimeout(() => setOpen(true), 10000);
    return () => clearTimeout(t);
  }, []);

  function close() {
    setOpen(false);
    if (typeof window !== "undefined") {
      localStorage.setItem(KEY, String(Date.now()));
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-3 sm:p-6"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-ink/60 backdrop-blur-sm" onClick={close} />
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.96 }}
            transition={{ type: "spring", damping: 24, stiffness: 220 }}
            className="relative w-full max-w-lg glass-strong rounded-3xl shadow-elegant overflow-hidden"
          >
            <div className="gradient-hero px-6 py-5 text-primary-foreground relative">
              <button
                onClick={close}
                aria-label="Close"
                className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition"
              >
                <X className="h-4 w-4" />
              </button>
              <p className="text-xs font-semibold uppercase tracking-widest text-gold">Limited Seats Available</p>
              <h3 className="mt-1 font-display text-xl sm:text-2xl font-bold leading-tight">
                Looking for a Safe Girls Hostel Near MIT-WPU?
              </h3>
              <p className="mt-1 text-sm text-white/85">
                Fill in your details and we'll contact you shortly.
              </p>
            </div>
            <div className="max-h-[70vh] overflow-y-auto p-5 sm:p-6">
              <InquiryForm compact onSuccess={close} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
