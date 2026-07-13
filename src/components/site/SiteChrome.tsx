import { type ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { MobileBar } from "./MobileBar";

export function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1 pb-24 sm:pb-0">{children}</main>
      <Footer />
      <MobileBar />
    </div>
  );
}
