import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "info@devvertix.com";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "Devvertix <onboarding@resend.dev>";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, budget, message } = body ?? {};

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json({ error: "Name is required." }, { status: 400 });
    }
    if (!email || typeof email !== "string" || !isValidEmail(email)) {
      return NextResponse.json({ error: "Valid email is required." }, { status: 400 });
    }
    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Please include a short project description (10+ characters)." },
        { status: 400 }
      );
    }

    const safe = {
      name: escapeHtml(name.trim()),
      email: escapeHtml(email.trim()),
      company: company ? escapeHtml(String(company).trim()) : "—",
      budget: budget ? escapeHtml(String(budget).trim()) : "—",
      message: escapeHtml(message.trim()).replace(/\n/g, "<br/>"),
    };

    const html = `
      <div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;max-width:560px;margin:0 auto;padding:24px;background:#0b0b0f;color:#e8e8ee;border-radius:12px">
        <h2 style="margin:0 0 16px;font-size:20px;color:#fff">New project brief</h2>
        <table style="width:100%;border-collapse:collapse;font-size:14px">
          <tr><td style="padding:8px 0;color:#9a9aa8;width:110px">Name</td><td>${safe.name}</td></tr>
          <tr><td style="padding:8px 0;color:#9a9aa8">Email</td><td>${safe.email}</td></tr>
          <tr><td style="padding:8px 0;color:#9a9aa8">Company</td><td>${safe.company}</td></tr>
          <tr><td style="padding:8px 0;color:#9a9aa8">Budget</td><td>${safe.budget}</td></tr>
        </table>
        <div style="margin-top:20px;padding:16px;background:#15151c;border-radius:8px;line-height:1.6">
          ${safe.message}
        </div>
        <p style="margin-top:20px;font-size:12px;color:#6b6b78">Sent from the Devvertix contact form.</p>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email.trim(),
      subject: `New project brief — ${name.trim()}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send. Please email info@devvertix.com directly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, id: data?.id });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Unexpected error." }, { status: 500 });
  }
}
