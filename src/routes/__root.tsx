import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteChrome } from "../components/site/SiteChrome";
import { Toaster } from "sonner";

function NotFoundComponent() {
  return (
    <SiteChrome>
      <div className="flex min-h-[70vh] items-center justify-center px-4 py-24">
        <div className="max-w-md text-center">
          <p className="font-display text-8xl font-bold text-gradient">404</p>
          <h1 className="mt-4 font-display text-2xl font-semibold text-foreground">
            This page took a wrong turn
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            The page you're looking for doesn't exist or has moved.
          </p>
          <Link
            to="/"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:shadow-elegant"
          >
            Return home
          </Link>
        </div>
      </div>
    </SiteChrome>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <SiteChrome>
      <div className="flex min-h-[70vh] items-center justify-center px-4 py-24">
        <div className="max-w-md text-center">
          <h1 className="font-display text-2xl font-semibold">Something went wrong</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Please try again or head back home.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => { router.invalidate(); reset(); }}
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft hover:shadow-elegant"
            >
              Try again
            </button>
            <a href="/" className="rounded-full border border-input bg-background px-5 py-2.5 text-sm font-semibold hover:bg-accent">
              Go home
            </a>
          </div>
        </div>
      </div>
    </SiteChrome>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "The Foothill Girls Hostel — Premium Girls Hostel Inside MIT-WPU, Kothrud" },
      {
        name: "description",
        content:
          "The Foothill Girls Hostel — a premium, safe, and peaceful girls hostel inside MIT-WPU Campus, Kothrud, Pune. Spacious rooms, hygienic food, WiFi, CCTV & daily housekeeping.",
      },
      { name: "author", content: "The Foothill Girls Hostel" },
      { name: "theme-color", content: "#2E7D32" },
      { property: "og:site_name", content: "The Foothill Girls Hostel" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "The Foothill Girls Hostel — Premium Girls Hostel Near MIT-WPU" },
      { property: "og:description", content: "Safe • Peaceful • Hygienic • Comfortable living inside MIT-WPU Campus, Kothrud." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "The Foothill Girls Hostel" },
      { name: "twitter:description", content: "Premium girls hostel inside MIT-WPU Campus, Kothrud, Pune." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Poppins:wght@300;400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LodgingBusiness",
          name: "The Foothill Girls Hostel",
          description: "Premium girls hostel inside MIT-WPU Campus, Kothrud, Pune.",
          telephone: "+91 8007660249",
          email: "nmchhajed@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Inside MIT-WPU Campus",
            addressLocality: "Kothrud",
            addressRegion: "Maharashtra",
            postalCode: "411038",
            addressCountry: "IN",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "24",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <Toaster position="top-center" richColors />
    </QueryClientProvider>
  );
}
