import { Phone, MessageCircle, Send } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";

export function MobileBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden glass-strong border-t border-border/60">
      <div className="grid grid-cols-3 divide-x divide-border/60">
        <a href={SITE.phoneHref} className="flex flex-col items-center gap-1 py-3 text-primary hover:bg-primary-soft transition">
          <Phone className="h-5 w-5" /><span className="text-[11px] font-semibold">Call</span>
        </a>
        <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 py-3 text-primary hover:bg-primary-soft transition">
          <MessageCircle className="h-5 w-5" /><span className="text-[11px] font-semibold">WhatsApp</span>
        </a>
        <Link to="/contact" className="flex flex-col items-center gap-1 py-3 bg-primary text-primary-foreground">
          <Send className="h-5 w-5" /><span className="text-[11px] font-semibold">Enquire</span>
        </Link>
      </div>
    </div>
  );
}
