"use client";

import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { profile } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type Status = "idle" | "sending" | "sent" | "error";

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const field =
  "w-full rounded-xl border border-pink-soft bg-canvas px-4 py-3 text-base font-normal text-ink placeholder:text-ink-muted/60 focus:border-pink focus:outline-none focus:ring-2 focus:ring-pink/30";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!serviceId || !templateId || !publicKey) {
      // Not configured: fall back to the visitor's mail client.
      const body = `${data.get("message")}\n\n- ${data.get("name")} (${data.get("email")})`;
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent("Portfolio enquiry")}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("sending");
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.get("name"),
          to_name: profile.name,
          from_email: data.get("email"),
          to_email: profile.email,
          message: data.get("message"),
        },
        publicKey,
      );
      setStatus("sent");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section">
      <SectionHeading eyebrow="Contact" title="Let's work together." />
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <Reveal className="space-y-8">
          <p className="inline-flex items-center gap-2.5 rounded-full border border-pink-soft bg-pink-mist px-4 py-2 text-sm font-medium text-ink">
            <span aria-hidden className="h-2 w-2 rounded-full bg-forest" />
            Open to freelance web projects
          </p>

          <div>
            <h3 className="font-display text-2xl font-semibold leading-snug text-ink">
              A few lines are enough to start.
            </h3>
            <ul className="mt-5 space-y-4 border-l-2 border-pink/60 pl-5">
              <li>
                <p className="font-semibold text-forest">What you need built</p>
                <p className="mt-0.5 text-ink-muted">A new site, a web app, or changes to something that already exists.</p>
              </li>
              <li>
                <p className="font-semibold text-forest">When you need it</p>
                <p className="mt-0.5 text-ink-muted">A rough timeline helps me plan the work.</p>
              </li>
              <li>
                <p className="font-semibold text-forest">Sites you like</p>
                <p className="mt-0.5 text-ink-muted">Links or examples show me the look you have in mind.</p>
              </li>
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form onSubmit={onSubmit} className="card space-y-5 p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-semibold text-ink">
                Name
                <input name="name" type="text" required autoComplete="name" placeholder="Your name" className={`${field} mt-2`} />
              </label>
              <label className="block text-sm font-semibold text-ink">
                Email
                <input name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={`${field} mt-2`} />
              </label>
            </div>
            <label className="block text-sm font-semibold text-ink">
              Message
              <textarea name="message" required rows={5} placeholder="How can I help?" className={`${field} mt-2 resize-y`} />
            </label>

            <div className="flex flex-wrap items-center gap-4">
              <button type="submit" disabled={status === "sending"} className="btn-primary disabled:opacity-60">
                {status === "sending" ? "Sending…" : "Send message"} <Send size={16} />
              </button>
              <p role="status" aria-live="polite" className="text-sm">
                {status === "sent" && (
                  <span className="inline-flex items-center gap-1.5 text-accent">
                    <CheckCircle2 size={16} /> Thank you! I&apos;ll get back to you soon.
                  </span>
                )}
                {status === "error" && (
                  <span className="inline-flex items-center gap-1.5 text-red-700">
                    <AlertCircle size={16} /> Something went wrong. Please try again or email me directly.
                  </span>
                )}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
