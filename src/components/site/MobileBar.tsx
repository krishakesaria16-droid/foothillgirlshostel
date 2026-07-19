import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export function MobileBar() {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 sm:hidden">
      <a
        href={SITE.phone1Href}
        className="flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant"
      >
        <Phone className="h-4 w-4" /> Call Now · {SITE.phone1}
      </a>
    </div>
  );
}
