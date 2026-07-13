import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const inquirySchema = z.object({
  student_name: z.string().trim().min(1).max(120),
  phone: z.string().trim().min(6).max(20),
  email: z.string().trim().email().max(200),
  sharing: z.string().trim().max(40).optional().default(""),
  joining_date: z.string().trim().max(40).optional().default(""),
  message: z.string().trim().max(2000).optional().default(""),
});

export type InquiryInput = z.infer<typeof inquirySchema>;

export const submitInquiry = createServerFn({ method: "POST" })
  .inputValidator((raw: unknown) => inquirySchema.parse(raw))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("hostel_inquiries").insert({
      student_name: data.student_name,
      phone: data.phone,
      email: data.email,
      sharing: data.sharing || null,
      joining_date: data.joining_date || null,
      message: data.message || null,
    });
    if (error) throw new Error(error.message);

    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const send = (payload: Record<string, unknown>) =>
        fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendKey}`,
          },
          body: JSON.stringify(payload),
        }).catch((e) => console.error("[resend]", e));

      const from = "The Foothill Hostel <onboarding@resend.dev>";
      const rows = Object.entries(data)
        .map(
          ([k, v]) =>
            `<tr><td style="padding:6px 12px;color:#666;text-transform:capitalize">${k.replace(/_/g, " ")}</td><td style="padding:6px 12px;font-weight:600">${v || "-"}</td></tr>`
        )
        .join("");
      await Promise.all([
        send({
          from,
          to: ["nmchhajed@gmail.com"],
          subject: "New Hostel Inquiry",
          html: `<div style="font-family:system-ui;max-width:600px"><h2 style="color:#2E7D32">New Hostel Inquiry</h2><table style="border-collapse:collapse;width:100%;background:#f8fafb;border-radius:8px">${rows}</table></div>`,
        }),
        send({
          from,
          to: [data.email],
          subject: "Thank you for contacting The Foothill Girls Hostel",
          html: `<div style="font-family:system-ui;max-width:600px"><h2 style="color:#2E7D32">Hi ${data.student_name},</h2><p>Thank you for your interest in <b>The Foothill Girls Hostel</b>. Our team will contact you shortly.</p><p>📞 +91 8007660249</p></div>`,
        }),
      ]);
    }

    return { ok: true };
  });
