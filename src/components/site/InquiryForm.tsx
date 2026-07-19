import { useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { submitInquiry } from "@/lib/inquiry.functions";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export function InquiryForm() {
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
          accommodation: data.accommodation || "",
          sharing: data.sharing || "",
          message: data.message || "",
        },
      });
      toast.success("Inquiry sent! We'll contact you shortly.");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  const input =
    "w-full rounded-xl border border-input bg-background px-4 py-3 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";

  return (
    <form onSubmit={handle} className="space-y-3">
      <input required name="student_name" className={input} placeholder="Student Name" />
      <input required name="phone" type="tel" className={input} placeholder="Phone Number" />
      <input required name="email" type="email" className={input} placeholder="Email" />
      <input name="college" className={input} placeholder="College" />
      <select required name="accommodation" className={input} defaultValue="">
        <option value="" disabled>Preferred Accommodation</option>
        <option>Hostel</option>
        <option>PG</option>
      </select>
      <select name="sharing" className={input} defaultValue="">
        <option value="" disabled>Preferred Room</option>
        <option>Double Sharing</option>
        <option>Triple Sharing</option>
      </select>
      <textarea name="message" rows={3} className={input} placeholder="Message (optional)" />
      <button
        type="submit"
        disabled={loading}
        className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition disabled:opacity-70"
      >
        {loading && <Loader2 className="h-4 w-4 animate-spin" />}
        {loading ? "Sending..." : "Submit Inquiry"}
      </button>
    </form>
  );
}
