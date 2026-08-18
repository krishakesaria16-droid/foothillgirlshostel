import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const inquirySchema = z.object({
  student_name: z.string().trim().min(1).max(120),
  phone: z.string().trim().min(6).max(20),
  email: z.string().trim().email().max(200),
  college: z.string().trim().max(120).optional().default(""),
  accommodation: z.string().trim().max(20).optional().default(""),
  sharing: z.string().trim().max(40).optional().default(""),
  message: z.string().trim().max(2000).optional().default(""),
});

export type InquiryInput = z.infer<typeof inquirySchema>;

// Email-only notification. The DB insert happens client-side through the
// publishable key + the "Anyone can submit an inquiry" RLS policy, so no
// service-role key is needed anywhere.
export const notifyInquiry = createServerFn({ method: "POST" })
  .inputValidator((raw: unknown) => inquirySchema.parse(raw))
  .handler(async ({ data }) => {
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

      const from = "The Foothill Stay <onboarding@resend.dev>";
      const rows = Object.entries(data)
        .map(
          ([k, v]) =>
            `<tr><td style="padding:6px 12px;color:#666;text-transform:capitalize">${k.replace(/_/g, " ")}</td><td style="padding:6px 12px;font-weight:600">${v || "-"}</td></tr>`
        )
        .join("");
      await Promise.all([
        send({
          from,
          to: ["thefoothillstay@gmail.com"],
          subject: "New Inquiry — The Foothill Stay",
          html: `<div style="font-family:system-ui;max-width:600px"><h2 style="color:#2E7D32">New Inquiry</h2><table style="border-collapse:collapse;width:100%;background:#f8fafb;border-radius:8px">${rows}</table></div>`,
        }),
        send({
          from,
          to: [data.email],
          subject: "Thank you for contacting The Foothill Stay",
          html: `<div style="font-family:system-ui;max-width:600px"><h2 style="color:#2E7D32">Hi ${data.student_name},</h2><p>Thank you for your interest in <b>The Foothill Stay</b>. Our team will contact you shortly.</p><p>📞 7773996600 · 8181815543</p></div>`,
        }),
      ]);
    }

    return { ok: true };
  });
