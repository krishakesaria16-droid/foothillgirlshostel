import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Star, Instagram, Facebook } from "lucide-react";
import { NAV, SITE, IMAGES } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-gradient-to-b from-background to-primary-soft/50">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img src={IMAGES.logo} alt="Foothill logo" className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/20" />
              <div>
                <div className="font-display text-lg font-bold">The Foothill</div>
                <div className="text-[10px] tracking-widest uppercase text-primary font-semibold">Girls Hostel</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              {SITE.tagline}
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-gold/20 px-3 py-1.5 text-sm font-semibold">
              <div className="flex text-gold">
                {[0,1,2,3,4].map(i => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
              </div>
              <span>5.0 Google Rating</span>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {NAV.map(n => (
                <li key={n.to}>
                  <Link to={n.to} className="text-muted-foreground hover:text-primary transition">{n.label}</Link>
                </li>
              ))}
              <li><Link to="/privacy" className="text-muted-foreground hover:text-primary transition">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2"><Phone className="h-4 w-4 text-primary shrink-0 mt-0.5" /><a href={SITE.phoneHref} className="text-muted-foreground hover:text-primary">{SITE.phone}</a></li>
              <li className="flex gap-2"><Mail className="h-4 w-4 text-primary shrink-0 mt-0.5" /><a href={SITE.emailHref} className="text-muted-foreground hover:text-primary break-all">{SITE.email}</a></li>
              <li className="flex gap-2"><MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" /><span className="text-muted-foreground">{SITE.address}</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a href="#" aria-label="Instagram" className="h-10 w-10 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition"><Instagram className="h-4 w-4" /></a>
              <a href="#" aria-label="Facebook" className="h-10 w-10 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition"><Facebook className="h-4 w-4" /></a>
            </div>
            <div className="mt-6">
              <Link to="/contact" className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft hover:shadow-elegant transition">Book a Visit</Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/60 flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} The Foothill Girls Hostel. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-primary">Privacy Policy</Link>
            <Link to="/privacy" className="hover:text-primary">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
