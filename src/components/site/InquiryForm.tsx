import { useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { submitInquiry } from "@/lib/inquiry.functions";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const SHARING = ["Double Sharing", "Triple Sharing", "Quad Sharing"];
const YEARS = ["1st Year", "2nd Year", "3rd Year", "4th Year", "Post Graduate"];

type Props = {
  compact?: boolean;
  onSuccess?: () => void;
};

export function InquiryForm({ compact, onSuccess }: Props) {
  const submit = useServerFn(submitInquiry);
  const [loading, setLoading] = useState(false);

  async function handle(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries()) as Record<string, string>;
    setLoading(true);
    try {
      await submit({
        data: {
          student_name: data.student_name || "",
          phone: data.phone || "",
          email: data.email || "",
          college: data.college || "",
          course: data.course || "",
          year: data.year || "",
          sharing: data.sharing || "",
          joining_date: data.joining_date || "",
          parent_phone: data.parent_phone || "",
          message: data.message || "",
        },
      });
      toast.success("Inquiry submitted! We'll contact you shortly.");
      (e.target as HTMLFormElement).reset();
      onSuccess?.();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  const input =
    "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";
  const label = "text-xs font-semibold uppercase tracking-wider text-muted-foreground";

  return (
    <form onSubmit={handle} className="space-y-4">
      <div className={compact ? "grid gap-3" : "grid gap-4 sm:grid-cols-2"}>
        <label className="space-y-1.5">
          <span className={label}>Student Name *</span>
          <input required name="student_name" className={input} placeholder="Full name" />
        </label>
        <label className="space-y-1.5">
          <span className={label}>Phone *</span>
          <input required name="phone" type="tel" className={input} placeholder="10-digit mobile" />
        </label>
        <label className="space-y-1.5 sm:col-span-2">
          <span className={label}>Email *</span>
          <input required name="email" type="email" className={input} placeholder="you@example.com" />
        </label>
        <label className="space-y-1.5">
          <span className={label}>College</span>
          <input name="college" className={input} placeholder="MIT-WPU" />
        </label>
        <label className="space-y-1.5">
          <span className={label}>Course</span>
          <input name="course" className={input} placeholder="B.Tech / MBA / etc." />
        </label>
        <label className="space-y-1.5">
          <span className={label}>Year</span>
          <select name="year" className={input} defaultValue="">
            <option value="" disabled>Select year</option>
            {YEARS.map(y => <option key={y}>{y}</option>)}
          </select>
        </label>
        <label className="space-y-1.5">
          <span className={label}>Preferred Sharing</span>
          <select name="sharing" className={input} defaultValue="">
            <option value="" disabled>Select sharing</option>
            {SHARING.map(s => <option key={s}>{s}</option>)}
          </select>
        </label>
        <label className="space-y-1.5">
          <span className={label}>Joining Month/Date</span>
          <input name="joining_date" className={input} placeholder="e.g. July 2026" />
        </label>
        <label className="space-y-1.5">
          <span className={label}>Parent Contact</span>
          <input name="parent_phone" type="tel" className={input} placeholder="Parent's phone" />
        </label>
        <label className="space-y-1.5 sm:col-span-2">
          <span className={label}>Message</span>
          <textarea name="message" rows={3} className={input} placeholder="Any specific requirements..." />
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft hover:shadow-elegant transition disabled:opacity-70"
      >
        {loading && <Loader2 className="h-4 w-4 animate-spin" />}
        {loading ? "Sending..." : "Submit Inquiry"}
      </button>
      <p className="text-center text-xs text-muted-foreground">
        We respect your privacy. Your details are only used to respond to your inquiry.
      </p>
    </form>
  );
}
