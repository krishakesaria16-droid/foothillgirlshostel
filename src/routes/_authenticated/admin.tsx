import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { listInquiries, updateInquiryStatus, deleteInquiry } from "@/lib/inquiry.functions";
import { supabase } from "@/integrations/supabase/client";
import { SiteChrome } from "@/components/site/SiteChrome";
import { Reveal } from "@/components/site/Reveal";
import { toast } from "sonner";
import { useState, useMemo } from "react";
import {
  Loader2, LogOut, Search, Trash2, Download, Phone, Mail,
  Inbox, Clock, CheckCircle2, XCircle,
} from "lucide-react";

const STATUSES = ["New", "Contacted", "Confirmed", "Cancelled"] as const;

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({ meta: [{ title: "Admin Dashboard — The Foothill" }, { name: "robots", content: "noindex,nofollow" }] }),
  component: AdminPage,
});

function AdminPage() {
  const navigate = useNavigate();
  const qc = useQueryClient();
  const fetchList = useServerFn(listInquiries);
  const updateFn = useServerFn(updateInquiryStatus);
  const deleteFn = useServerFn(deleteInquiry);

  const { data, isLoading, error } = useQuery({
    queryKey: ["inquiries"],
    queryFn: () => fetchList({}),
  });

  const updateMut = useMutation({
    mutationFn: (v: { id: string; status: string }) => updateFn({ data: v }),
    onSuccess: () => { qc.invalidateQueries({ queryKey: ["inquiries"] }); toast.success("Updated"); },
    onError: (e: Error) => toast.error(e.message),
  });
  const deleteMut = useMutation({
    mutationFn: (id: string) => deleteFn({ data: { id } }),
    onSuccess: () => { qc.invalidateQueries({ queryKey: ["inquiries"] }); toast.success("Deleted"); },
    onError: (e: Error) => toast.error(e.message),
  });

  const [q, setQ] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("All");

  const filtered = useMemo(() => {
    if (!data) return [];
    const term = q.toLowerCase().trim();
    return data.filter((r) => {
      if (statusFilter !== "All" && r.status !== statusFilter) return false;
      if (!term) return true;
      return [r.student_name, r.email, r.phone, r.college, r.course].some((v) => (v || "").toLowerCase().includes(term));
    });
  }, [data, q, statusFilter]);

  const stats = useMemo(() => {
    const counts: Record<string, number> = { New: 0, Contacted: 0, Confirmed: 0, Cancelled: 0 };
    data?.forEach((r) => { counts[r.status] = (counts[r.status] ?? 0) + 1; });
    return { total: data?.length ?? 0, New: counts.New, Contacted: counts.Contacted, Confirmed: counts.Confirmed, Cancelled: counts.Cancelled };
  }, [data]);

  async function signOut() {
    await supabase.auth.signOut();
    navigate({ to: "/auth" });
  }

  function exportCsv() {
    if (!filtered.length) return;
    const cols = ["created_at","student_name","phone","email","college","course","year","sharing","joining_date","parent_phone","status","message"];
    const csv = [
      cols.join(","),
      ...filtered.map((r) => cols.map((c) => `"${String((r as any)[c] ?? "").replace(/"/g, '""')}"`).join(",")),
    ].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = `inquiries-${new Date().toISOString().slice(0,10)}.csv`; a.click();
    URL.revokeObjectURL(url);
  }

  const isForbidden = error && /forbidden/i.test(error.message);

  return (
    <SiteChrome>
      <section className="py-10 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-wrap justify-between gap-4 items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Admin</p>
              <h1 className="mt-2 font-display text-3xl md:text-4xl font-bold">Inquiries Dashboard</h1>
            </div>
            <button onClick={signOut} className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold hover:bg-accent">
              <LogOut className="h-4 w-4" /> Sign out
            </button>
          </div>

          {isForbidden && (
            <div className="mt-8 rounded-2xl border border-destructive/40 bg-destructive/5 p-6">
              <h2 className="font-display font-bold text-destructive">Access Denied</h2>
              <p className="mt-2 text-sm">
                You're signed in, but you're not an admin yet. Ask the site owner to grant you the admin role in the database.
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                (Admin grants a user id the <code>admin</code> role in the <code>user_roles</code> table.)
              </p>
              <Link to="/" className="mt-4 inline-flex text-sm font-semibold text-primary hover:underline">← Back to home</Link>
            </div>
          )}

          {!isForbidden && (
            <>
              <div className="mt-8 grid gap-4 grid-cols-2 md:grid-cols-5">
                {[
                  { l: "Total", v: stats.total, i: Inbox, c: "text-primary bg-primary-soft" },
                  { l: "New", v: stats.New, i: Clock, c: "text-blue-600 bg-blue-50 dark:bg-blue-950/40" },
                  { l: "Contacted", v: stats.Contacted, i: Phone, c: "text-amber-600 bg-amber-50 dark:bg-amber-950/40" },
                  { l: "Confirmed", v: stats.Confirmed, i: CheckCircle2, c: "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40" },
                  { l: "Cancelled", v: stats.Cancelled, i: XCircle, c: "text-rose-600 bg-rose-50 dark:bg-rose-950/40" },
                ].map((s, i) => (
                  <Reveal key={s.l} delay={i * 0.05}>
                    <div className="rounded-2xl border border-border/60 bg-card p-4 shadow-soft">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold uppercase text-muted-foreground">{s.l}</span>
                        <div className={`h-8 w-8 rounded-lg flex items-center justify-center ${s.c}`}><s.i className="h-4 w-4" /></div>
                      </div>
                      <div className="mt-2 font-display text-3xl font-bold">{s.v}</div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3 items-center">
                <div className="relative flex-1 min-w-[200px] max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    value={q} onChange={(e) => setQ(e.target.value)}
                    placeholder="Search name, email, phone, college..."
                    className="w-full rounded-full border border-input bg-background pl-10 pr-4 py-2.5 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                  />
                </div>
                <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="rounded-full border border-input bg-background px-4 py-2.5 text-sm">
                  <option>All</option>
                  {STATUSES.map(s => <option key={s}>{s}</option>)}
                </select>
                <button onClick={exportCsv} className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:shadow-elegant transition">
                  <Download className="h-4 w-4" /> Export CSV
                </button>
              </div>

              <div className="mt-6 rounded-3xl border border-border/60 bg-card shadow-soft overflow-hidden">
                {isLoading ? (
                  <div className="p-16 text-center text-muted-foreground"><Loader2 className="h-8 w-8 animate-spin mx-auto" /></div>
                ) : filtered.length === 0 ? (
                  <div className="p-16 text-center text-muted-foreground">
                    <Inbox className="h-10 w-10 mx-auto opacity-40" />
                    <p className="mt-3 text-sm">No inquiries yet.</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-muted text-xs uppercase text-muted-foreground">
                        <tr>
                          <th className="text-left px-4 py-3 font-semibold">Date</th>
                          <th className="text-left px-4 py-3 font-semibold">Student</th>
                          <th className="text-left px-4 py-3 font-semibold">Contact</th>
                          <th className="text-left px-4 py-3 font-semibold">College / Year</th>
                          <th className="text-left px-4 py-3 font-semibold">Sharing</th>
                          <th className="text-left px-4 py-3 font-semibold">Status</th>
                          <th className="text-right px-4 py-3 font-semibold">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filtered.map((r) => (
                          <tr key={r.id} className="border-t border-border/60 hover:bg-muted/40">
                            <td className="px-4 py-3 whitespace-nowrap text-xs text-muted-foreground">{new Date(r.created_at).toLocaleDateString("en-IN")}<br/><span className="opacity-70">{new Date(r.created_at).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })}</span></td>
                            <td className="px-4 py-3">
                              <div className="font-semibold">{r.student_name}</div>
                              {r.message && <div className="text-xs text-muted-foreground line-clamp-1 max-w-[200px]">{r.message}</div>}
                            </td>
                            <td className="px-4 py-3">
                              <a href={`tel:${r.phone}`} className="flex items-center gap-1 hover:text-primary"><Phone className="h-3 w-3" />{r.phone}</a>
                              <a href={`mailto:${r.email}`} className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary"><Mail className="h-3 w-3" />{r.email}</a>
                            </td>
                            <td className="px-4 py-3 text-xs">
                              {r.college || "-"}<br/><span className="text-muted-foreground">{r.course} {r.year && `• ${r.year}`}</span>
                            </td>
                            <td className="px-4 py-3 text-xs">{r.sharing || "-"}<br/><span className="text-muted-foreground">{r.joining_date}</span></td>
                            <td className="px-4 py-3">
                              <select
                                value={r.status}
                                onChange={(e) => updateMut.mutate({ id: r.id, status: e.target.value })}
                                className="rounded-full border border-input bg-background px-3 py-1 text-xs font-semibold"
                              >
                                {STATUSES.map(s => <option key={s}>{s}</option>)}
                              </select>
                            </td>
                            <td className="px-4 py-3 text-right">
                              <button
                                onClick={() => { if (confirm("Delete this inquiry?")) deleteMut.mutate(r.id); }}
                                className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-destructive hover:bg-destructive/10"
                                aria-label="Delete"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </section>
    </SiteChrome>
  );
}
