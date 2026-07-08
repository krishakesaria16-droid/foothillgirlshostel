import { createFileRoute, useNavigate, useSearch, Link } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { supabase } from "@/integrations/supabase/client";

import { SiteChrome } from "@/components/site/SiteChrome";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { z } from "zod";

const searchSchema = z.object({ next: z.string().optional() });

export const Route = createFileRoute("/auth")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Sign In — The Foothill Girls Hostel Admin" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const { next } = useSearch({ from: "/auth" });
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) navigate({ to: next || "/_authenticated/admin" });
    });
  }, [navigate, next]);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const email = String(fd.get("email") || "");
    const password = String(fd.get("password") || "");
    try {
      const { error } = mode === "signin"
        ? await supabase.auth.signInWithPassword({ email, password })
        : await supabase.auth.signUp({
            email, password,
            options: { emailRedirectTo: `${window.location.origin}/auth` },
          });
      if (error) throw error;
      toast.success(mode === "signin" ? "Signed in!" : "Account created — check your email if confirmation is required.");
      const { data } = await supabase.auth.getUser();
      if (data.user) navigate({ to: next || "/_authenticated/admin" });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Auth failed");
    } finally {
      setLoading(false);
    }
  }


  const input = "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20";

  return (
    <SiteChrome>
      <section className="py-20 md:py-28 gradient-soft min-h-[80vh] flex items-center">
        <div className="mx-auto w-full max-w-md px-4 md:px-6">
          <div className="rounded-3xl glass-strong shadow-elegant p-6 sm:p-8">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Admin Access</p>
              <h1 className="mt-2 font-display text-3xl font-bold">
                {mode === "signin" ? "Welcome back" : "Create account"}
              </h1>
              <p className="mt-2 text-sm text-muted-foreground">
                Sign in to manage inquiries.
              </p>
            </div>
            <form onSubmit={submit} className="mt-6 space-y-4">
              <label className="block space-y-1.5">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</span>
                <input required name="email" type="email" className={input} placeholder="you@example.com" />
              </label>
              <label className="block space-y-1.5">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Password</span>
                <input required name="password" type="password" minLength={6} className={input} placeholder="Password" />
              </label>
              <button disabled={loading} type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft hover:shadow-elegant disabled:opacity-70">
                {loading && <Loader2 className="h-4 w-4 animate-spin" />}
                {mode === "signin" ? "Sign In" : "Create Account"}
              </button>
            </form>
            <p className="mt-6 text-center text-sm text-muted-foreground">
              {mode === "signin" ? "New here?" : "Have an account?"}{" "}
              <button className="font-semibold text-primary hover:underline" onClick={() => setMode(mode === "signin" ? "signup" : "signin")}>
                {mode === "signin" ? "Create account" : "Sign in"}
              </button>
            </p>
            <p className="mt-4 text-center text-xs text-muted-foreground">
              <Link to="/" className="hover:text-primary">← Back to website</Link>
            </p>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
