import { type ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { MobileBar } from "./MobileBar";
import { ScrollProgress } from "./ScrollProgress";
import { BackToTop } from "./BackToTop";
import { EnquiryPopup } from "./EnquiryPopup";

export function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <ScrollProgress />
      <Navbar />
      <main className="flex-1 pb-20 md:pb-0">{children}</main>
      <Footer />
      <MobileBar />
      <BackToTop />
      <EnquiryPopup />
    </div>
  );
}
