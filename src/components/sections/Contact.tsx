import Link from "next/link";

import { Reveal, Eyebrow } from "../Reveal";
import { LeadForm } from "../LeadForm";
import { IconArrowRight, IconCheck, IconMail, IconPhone } from "../Icons";
import { site, hasPhone } from "@/lib/site";

const ASSURANCES = [
  "A written audit within 48 hours — yours to keep either way",
  "Every account created in your name, never ours",
  "Rolling monthly engagements, 30-day notice, no lock-in",
  "You talk to the people doing the work, not an account manager",
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate scroll-mt-24 overflow-hidden bg-paper-2 py-24 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="dot-grid pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_75%_60%_at_50%_50%,#000,transparent_75%)]"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <Reveal>
            <Eyebrow>Free growth audit</Eyebrow>
            <h2 className="text-balance-tight font-display text-[clamp(2.1rem,5vw,3.4rem)] font-semibold leading-[1.08] tracking-[-0.03em]">
              Tell us what you sell.
              <br />
              We&apos;ll tell you what&apos;s <span className="text-gradient">leaking</span>.
            </h2>
            <p className="mt-5 max-w-md text-[1.02rem] leading-relaxed text-muted">
              Fill this in and it opens WhatsApp with your details already written out — one
              tap to send. No forms disappearing into an inbox nobody checks.
            </p>

            <ul className="mt-9 space-y-3.5">
              {ASSURANCES.map((a) => (
                <li key={a} className="flex items-start gap-3 text-[0.92rem] text-muted">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                    <IconCheck className="h-3 w-3" />
                  </span>
                  {a}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              {hasPhone && (
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2.5 rounded-full border border-ink/15 bg-paper px-6 py-3.5 text-sm font-medium transition-all duration-300 hover:border-ink/40"
                >
                  <IconPhone className="h-4 w-4 text-brand" />
                  {site.phone}
                </a>
              )}
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2.5 rounded-full border border-ink/15 bg-paper px-6 py-3.5 text-sm font-medium transition-all duration-300 hover:border-brand/50 hover:bg-brand-tint"
              >
                <IconMail className="h-4 w-4 text-brand" />
                {site.email}
              </a>
              <Link
                href="/contact/"
                className="group inline-flex items-center gap-2 rounded-full border border-ink/15 bg-paper px-6 py-3.5 text-sm font-medium transition-all duration-300 hover:border-brand/50 hover:bg-brand-tint"
              >
                Visit the office
                <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <LeadForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
