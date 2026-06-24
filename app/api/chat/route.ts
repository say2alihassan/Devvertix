import { NextResponse } from "next/server";
import OpenAI from "openai";
import { Resend } from "resend";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "info@devvertix.com";
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || "Devvertix <onboarding@resend.dev>";

const SYSTEM_PROMPT = `You are Vertix, the AI assistant for Devvertix — a senior AI & mobile product-development agency.

# About Devvertix
Devvertix helps founders ship production-ready Generative AI systems and scalable mobile apps. The team has shipped 11+ apps on the App Store & Google Play, some with 1M+ downloads.

# Services
- **AI-Native SaaS** (core offering): end-to-end product dev — architecture to paying users
- **RAG & Knowledge Systems**: production retrieval pipelines, hybrid search, reranking, eval harnesses
- **Autonomous Agents**: multi-step agents that plan, tool-use, and recover from failure
- **AI Chatbots**: on-brand conversational assistants grounded in client data
- **Mobile (iOS & Android)**: React Native, Flutter, and native — 11+ shipped apps
- **Workflow Automation**: embedding AI into existing tools, with integrations, eval, observability

# Process (typical 9-week engagement)
1. Discovery (Week 1) — goals, users, constraints, technical brief
2. Architecture (Week 2) — models, infra, data, trade-offs
3. Build (Weeks 3–8) — bi-weekly sprints, working software by week 4, code reviews, eval harnesses, CI
4. Ship (Week 9) — production launch, monitoring, runbooks, store submissions
5. Scale (Ongoing) — iterate on real usage; tune performance, cost, quality

# Engagement
- Typical budget range: $20k – $50k+ depending on scope
- Free 30-min intro call available
- NDA available on request
- Reply within 24 hours to project briefs

# Your job
1. Answer questions about services, process, timelines, pricing honestly and concisely.
2. Qualify leads: naturally learn what they're building, their timeline, and budget.
3. When a visitor seems ready (shared a project idea + shown interest), invite them to share name + email so the team can follow up. Call the \`capture_lead\` tool when you have name + email + a short project summary. Don't be pushy — one invitation is enough.
4. If asked something outside Devvertix's scope, redirect politely back to how the team can help.

# Tone
Direct, warm, technically credible. Keep responses short (2–4 sentences typical). No hype, no exclamation spam. Use markdown sparingly — mostly plain prose.

If the visitor asks for direct contact, point them to info@devvertix.com or the contact form on the page.`;

const tools: OpenAI.Chat.Completions.ChatCompletionTool[] = [
  {
    type: "function",
    function: {
      name: "capture_lead",
      description:
        "Save a qualified lead's contact info and project summary, and notify the Devvertix team. Only call this when you have the visitor's name, email, and a short project description — and they've agreed to be contacted.",
      parameters: {
        type: "object",
        properties: {
          name: { type: "string", description: "Visitor's name" },
          email: { type: "string", description: "Visitor's email" },
          summary: {
            type: "string",
            description: "1–3 sentence summary of what they're building",
          },
          budget: {
            type: "string",
            description: "Budget if mentioned, otherwise omit",
          },
          timeline: {
            type: "string",
            description: "Timeline if mentioned, otherwise omit",
          },
        },
        required: ["name", "email", "summary"],
        additionalProperties: false,
      },
    },
  },
];

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

async function sendLeadEmail(args: {
  name: string;
  email: string;
  summary: string;
  budget?: string;
  timeline?: string;
  transcript: { role: string; content: string }[];
}) {
  const safe = {
    name: escapeHtml(args.name),
    email: escapeHtml(args.email),
    summary: escapeHtml(args.summary).replace(/\n/g, "<br/>"),
    budget: args.budget ? escapeHtml(args.budget) : "—",
    timeline: args.timeline ? escapeHtml(args.timeline) : "—",
  };

  const transcriptHtml = args.transcript
    .slice(-12)
    .map((m) => {
      const who = m.role === "user" ? "Visitor" : "Vertix";
      return `<div style="margin:8px 0"><strong style="color:#9a9aa8">${who}:</strong> ${escapeHtml(
        m.content
      ).replace(/\n/g, "<br/>")}</div>`;
    })
    .join("");

  const html = `
    <div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#0b0b0f;color:#e8e8ee;border-radius:12px">
      <h2 style="margin:0 0 16px;font-size:20px;color:#fff">New chatbot lead</h2>
      <table style="width:100%;border-collapse:collapse;font-size:14px">
        <tr><td style="padding:8px 0;color:#9a9aa8;width:110px">Name</td><td>${safe.name}</td></tr>
        <tr><td style="padding:8px 0;color:#9a9aa8">Email</td><td>${safe.email}</td></tr>
        <tr><td style="padding:8px 0;color:#9a9aa8">Budget</td><td>${safe.budget}</td></tr>
        <tr><td style="padding:8px 0;color:#9a9aa8">Timeline</td><td>${safe.timeline}</td></tr>
      </table>
      <div style="margin-top:20px;padding:16px;background:#15151c;border-radius:8px;line-height:1.6">
        <div style="color:#9a9aa8;font-size:12px;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px">Project</div>
        ${safe.summary}
      </div>
      <div style="margin-top:20px;padding:16px;background:#15151c;border-radius:8px;font-size:13px;line-height:1.5">
        <div style="color:#9a9aa8;font-size:12px;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px">Transcript (last 12 turns)</div>
        ${transcriptHtml}
      </div>
      <p style="margin-top:20px;font-size:12px;color:#6b6b78">Captured by Vertix (chatbot on devvertix.com).</p>
    </div>
  `;

  return resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    replyTo: args.email,
    subject: `New chatbot lead — ${args.name}`,
    html,
  });
}

type ClientMessage = { role: "user" | "assistant"; content: string };

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages: ClientMessage[] = Array.isArray(body?.messages)
      ? body.messages
      : [];

    if (messages.length === 0) {
      return NextResponse.json({ error: "No messages." }, { status: 400 });
    }

    const trimmed = messages.slice(-20).filter(
      (m) =>
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.length > 0 &&
        m.content.length < 4000
    );

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.5,
      max_tokens: 400,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...trimmed.map((m) => ({ role: m.role, content: m.content })),
      ],
      tools,
      tool_choice: "auto",
    });

    const msg = completion.choices[0]?.message;

    if (msg?.tool_calls && msg.tool_calls.length > 0) {
      const call = msg.tool_calls[0];
      if (call.type === "function" && call.function.name === "capture_lead") {
        let parsed: {
          name?: string;
          email?: string;
          summary?: string;
          budget?: string;
          timeline?: string;
        } = {};
        try {
          parsed = JSON.parse(call.function.arguments);
        } catch {
          parsed = {};
        }

        const { name, email, summary, budget, timeline } = parsed;

        if (
          !name ||
          !email ||
          !summary ||
          !isValidEmail(email) ||
          name.length < 2 ||
          summary.length < 5
        ) {
          return NextResponse.json({
            reply:
              "Thanks — could you share your name, email, and a short description of what you're building?",
          });
        }

        const { error } = await sendLeadEmail({
          name,
          email,
          summary,
          budget,
          timeline,
          transcript: trimmed,
        });

        if (error) {
          console.error("Lead email failed:", error);
          return NextResponse.json({
            reply:
              "Got it — I couldn't send the notification automatically, but you can reach the team at info@devvertix.com and they'll follow up within 24 hours.",
          });
        }

        return NextResponse.json({
          reply: `Thanks, ${name.split(" ")[0]} — the team has your note and will reply to ${email} within 24 hours. Anything else I can answer in the meantime?`,
          leadCaptured: true,
        });
      }
    }

    const reply =
      msg?.content ||
      "Sorry — I didn't catch that. Could you rephrase?";

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Chat route error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again or email info@devvertix.com." },
      { status: 500 }
    );
  }
}
