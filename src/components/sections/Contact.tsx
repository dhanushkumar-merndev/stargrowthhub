import { Reveal, Eyebrow } from "../Reveal";
import { LeadForm } from "../LeadForm";
import { site, whatsappLink, hasPhone } from "@/lib/site";

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
                    <svg viewBox="0 0 20 20" fill="none" className="h-3 w-3" aria-hidden="true">
                      <path
                        d="m4 10.5 4 4 8-9"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
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
                  <PhoneIcon className="h-4 w-4 text-brand" />
                  {site.phone}
                </a>
              )}
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2.5 rounded-full border border-ink/15 bg-paper px-6 py-3.5 text-sm font-medium transition-all duration-300 hover:border-brand/50 hover:bg-brand-tint"
              >
                {site.email}
              </a>
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

/** Full-width red band that closes the page. */
export function ClosingBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-brand">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(255,255,255,0.5), transparent 45%), radial-gradient(circle at 85% 80%, rgba(255,255,255,0.35), transparent 45%)",
        }}
      />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-balance-tight max-w-2xl font-display text-[clamp(1.8rem,4vw,2.7rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-white">
            Every day you&apos;re not on page one, a competitor is taking that call.
          </h2>
          <p className="mt-4 max-w-xl text-[1rem] leading-relaxed text-white/80">
            {site.hours.label} · {site.address.locality}, {site.address.city}
          </p>
        </div>
        <a
          href={whatsappLink(`Hi ${site.name}! I'd like to book a free growth audit.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-shine shrink-0 rounded-full bg-white px-8 py-4 font-semibold text-brand transition-transform duration-300 hover:scale-[1.04]"
        >
          Start with a free audit
        </a>
      </div>
    </section>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M5 3h3l2 5-2.5 1.5a12 12 0 0 0 5 5L14 12l5 2v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3 5.2 2 2 0 0 1 5 3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
