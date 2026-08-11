"use client";

import { useState } from "react";

import { IconCheck, IconChevronDown, IconSend, IconWhatsApp } from "./Icons";
import { site, whatsappLink } from "@/lib/site";

const SERVICES = [
  "SEO / Google ranking",
  "Google Ads (PPC)",
  "Meta Ads (Instagram & Facebook)",
  "Website design & development",
  "Branding & graphic design",
  "Social media management",
  "Google Business Profile / local SEO",
  "Not sure yet — advise me",
];

const BUDGETS = [
  "Under ₹25,000 / month",
  "₹25,000 – ₹50,000 / month",
  "₹50,000 – ₹1,00,000 / month",
  "₹1,00,000+ / month",
  "One-time project",
];

type Errors = Partial<Record<"name" | "phone" | "service", string>>;

export function LeadForm() {
  const [values, setValues] = useState({
    name: "",
    business: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
    website: "", // honeypot
  });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState<string | null>(null);

  const set =
    (k: keyof typeof values) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [k]: e.target.value }));
      setErrors((prev) => ({ ...prev, [k]: undefined }));
    };

  function validate(): Errors {
    const next: Errors = {};
    if (values.name.trim().length < 2) next.name = "Please tell us your name.";
    // Accepts 10-digit Indian mobiles with or without +91 / spaces / dashes.
    const digits = values.phone.replace(/\D/g, "");
    if (digits.length < 10 || digits.length > 13) next.phone = "Enter a valid 10-digit mobile number.";
    if (!values.service) next.service = "Pick what you need help with.";
    return next;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Bots fill hidden fields; humans never see this one.
    if (values.website) return;

    const found = validate();
    setErrors(found);
    if (Object.keys(found).length) {
      document.getElementById(`field-${Object.keys(found)[0]}`)?.focus();
      return;
    }

    // Every answer is packed into the WhatsApp message body, so the enquiry
    // arrives complete — no backend, no form service, nothing to maintain.
    const lines = [
      `*New enquiry from ${site.url.replace(/^https?:\/\//, "")}*`,
      "",
      `*Name:* ${values.name.trim()}`,
      values.business.trim() && `*Business:* ${values.business.trim()}`,
      `*Phone:* ${values.phone.trim()}`,
      `*Needs help with:* ${values.service}`,
      values.budget && `*Budget:* ${values.budget}`,
      values.message.trim() && `*Details:* ${values.message.trim()}`,
    ].filter(Boolean) as string[];

    const url = whatsappLink(lines.join("\n"));
    setSent(url);

    // Opening in a new tab keeps the site (and any ad-click attribution)
    // alive in the original tab.
    const win = window.open(url, "_blank", "noopener,noreferrer");
    if (!win) window.location.href = url; // popup blocked -> navigate instead
  }

  const inputCls =
    "w-full rounded-xl border border-edge bg-paper px-4 py-3 text-[0.95rem] text-ink placeholder:text-faint outline-none transition-all duration-300 focus:border-brand focus:ring-4 focus:ring-brand/12";

  if (sent) {
    return (
      <div className="panel rounded-3xl p-8 text-center sm:p-10">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white">
          <IconCheck className="h-7 w-7" />
        </div>
        <h3 className="font-display text-2xl font-semibold tracking-tight">WhatsApp is opening…</h3>
        <p className="mx-auto mt-3 max-w-sm text-[0.95rem] leading-relaxed text-muted">
          Your details are pre-filled — just hit send. We usually reply within a couple of
          working hours.
        </p>
        <a
          href={sent}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white"
        >
          <IconWhatsApp className="h-4 w-4" />
          Didn&apos;t open? Tap here
        </a>
        <button
          type="button"
          onClick={() => setSent(null)}
          className="mt-4 block w-full text-sm text-faint underline underline-offset-4 transition-colors hover:text-muted"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="panel rounded-3xl p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Your name" required error={errors.name} id="field-name">
          <input
            id="field-name"
            name="name"
            value={values.name}
            onChange={set("name")}
            className={inputCls}
            placeholder="Priya Sharma"
            autoComplete="name"
          />
        </Field>

        <Field label="Business name" id="field-business">
          <input
            id="field-business"
            name="business"
            value={values.business}
            onChange={set("business")}
            className={inputCls}
            placeholder="Sharma Interiors"
            autoComplete="organization"
          />
        </Field>

        <Field label="WhatsApp number" required error={errors.phone} id="field-phone">
          <input
            id="field-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            value={values.phone}
            onChange={set("phone")}
            className={inputCls}
            placeholder="98765 43210"
            autoComplete="tel"
          />
        </Field>

        <Field label="What do you need?" required error={errors.service} id="field-service">
          <SelectShell>
            <select
              id="field-service"
              name="service"
              value={values.service}
              onChange={set("service")}
              className={`${inputCls} appearance-none pr-11`}
            >
              <option value="">Select a service…</option>
              {SERVICES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </SelectShell>
        </Field>

        <div className="sm:col-span-2">
          <Field label="Monthly budget" hint="optional" id="field-budget">
            <SelectShell>
              <select
                id="field-budget"
                name="budget"
                value={values.budget}
                onChange={set("budget")}
                className={`${inputCls} appearance-none pr-11`}
              >
                <option value="">Prefer not to say</option>
                {BUDGETS.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </SelectShell>
          </Field>
        </div>

        <div className="sm:col-span-2">
          <Field label="Tell us a bit more" hint="optional" id="field-message">
            <textarea
              id="field-message"
              name="message"
              rows={3}
              value={values.message}
              onChange={set("message")}
              className={`${inputCls} resize-none`}
              placeholder="We're a dental clinic in Jayanagar and want more appointment calls from Google."
            />
          </Field>
        </div>
      </div>

      {/* Honeypot — visually and semantically hidden from real users. */}
      <div className="absolute h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="field-website">Website</label>
        <input
          id="field-website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={set("website")}
        />
      </div>

      <button
        type="submit"
        className="btn-shine group mt-6 flex w-full items-center justify-center gap-2.5 rounded-xl bg-brand px-6 py-4 font-semibold text-white shadow-[0_14px_30px_-14px_rgba(224,27,45,0.7)] transition-all duration-300 hover:bg-brand-deep hover:scale-[1.015] active:scale-[0.99]"
      >
        <IconWhatsApp className="h-5 w-5" />
        Send on WhatsApp
        <IconSend className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      </button>

      <p className="mt-4 text-center text-xs leading-relaxed text-faint">
        Opens WhatsApp with your details filled in. No spam, no call centre — you talk
        directly to the team. Typical reply time: under 2 working hours.
      </p>
    </form>
  );
}

function Field({
  label,
  children,
  required,
  hint,
  error,
  id,
}: {
  label: string;
  children: React.ReactNode;
  required?: boolean;
  hint?: string;
  error?: string;
  id: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 flex items-baseline justify-between text-[0.8rem] font-medium text-muted"
      >
        <span>
          {label}
          {required && <span className="ml-0.5 text-brand">*</span>}
        </span>
        {hint && <span className="text-[0.7rem] text-faint">{hint}</span>}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1.5 text-[0.75rem] text-brand">
          {error}
        </p>
      )}
    </div>
  );
}

/**
 * `appearance-none` strips the browser's own dropdown arrow, so the select
 * needs one drawn back on. `pointer-events-none` keeps clicks falling through
 * to the control underneath.
 */
function SelectShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {children}
      <IconChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-faint" />
    </div>
  );
}
