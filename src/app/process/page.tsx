import type { Metadata } from "next";
import Link from "next/link";

import { PageHero, HeroStats, SectionHead } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import {
  IconArrowRight,
  IconCheck,
  IconClipboard,
  IconClock,
  IconCompass,
  IconOwnership,
  IconRefresh,
  IconShield,
} from "@/components/Icons";
import { STEPS, WHAT_WE_NEED, REPORTING } from "@/lib/process";
import { breadcrumbSchema } from "@/lib/schema";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "How We Work — Free Audit, a Plan With Numbers, Then Monthly Reporting",
  description:
    "The four steps of a Star Growth Hub engagement: a free 48-hour audit, a plan with real numbers, build and launch in accounts you own, then monthly reporting on cost per lead.",
  keywords: [
    "digital marketing process",
    "marketing agency onboarding Bengaluru",
    "free SEO audit Bangalore",
    "how digital marketing agencies work",
  ],
  alternates: { canonical: "/process/" },
  openGraph: {
    title: `How we work | ${site.name}`,
    description:
      "Four steps, and you know where you stand at every one — starting with a free 48-hour audit.",
    url: `${site.url}/process/`,
    type: "website",
  },
};

/** A week-by-week view of a typical first month. */
const TIMELINE = [
  { when: "Day 0", what: "You message us on WhatsApp with what you sell and where." },
  { when: "Day 1–2", what: "Audit delivered in writing. Yours to keep, hire us or not." },
  { when: "Week 1", what: "A call to walk through the plan, the budget split and the targets." },
  { when: "Week 2", what: "Accounts created in your name. Tracking wired and tested." },
  { when: "Week 2–4", what: "Technical fixes, pages and campaigns ship in priority order." },
  { when: "Week 4–6", what: "First optimisation cycle. Cost per lead starts to settle." },
  { when: "Month 2", what: "First full monthly report, and the call about where budget moves." },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="How we work"
        crumbs={[{ label: "Process" }]}
        title={
          <>
            Four steps, and you know where you stand at{" "}
            <span className="text-gradient">every one</span>
          </>
        }
        lead="No discovery phase that bills for six weeks before anything ships. You get findings in 48 hours, a plan in week one, and live campaigns inside a month — in accounts that belong to you the whole way through."
      >
        <HeroStats
          items={[
            { icon: IconClock, value: "48 hours", label: "to a written audit" },
            { icon: IconClipboard, value: "Week 1", label: "a plan with numbers on it" },
            { icon: IconOwnership, value: "Day one", label: "you own every account" },
            { icon: IconShield, value: "30 days", label: "notice period, no lock-in" },
          ]}
        />
      </PageHero>

      {/* ---------- the four steps ---------- */}
      <section className="border-t border-edge py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ol className="space-y-6">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 50} as="li">
                <article
                  id={`step-${s.n}`}
                  className="panel card-hover spotlight group scroll-mt-28 rounded-3xl p-7 sm:p-9"
                >
                  <div className="grid gap-9 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
                    <div className="min-w-0">
                      <div className="flex items-center justify-between gap-4">
                        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-tint text-brand transition-all duration-500 group-hover:bg-brand group-hover:text-white">
                          <s.icon className="h-5 w-5" />
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-full border border-edge px-3 py-1.5 text-[0.7rem] uppercase tracking-wider text-faint">
                          <IconClock className="h-3 w-3" />
                          {s.duration}
                        </span>
                      </div>

                      <span className="mt-6 block font-display text-[2.6rem] font-semibold leading-none tracking-tight text-brand/20">
                        {s.n}
                      </span>
                      <h2 className="mt-3 font-display text-[1.45rem] font-semibold tracking-tight sm:text-[1.6rem]">
                        {s.title}
                      </h2>
                      <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">{s.body}</p>

                      <div className="mt-6 flex items-start gap-3 rounded-2xl bg-brand-tint px-5 py-4">
                        <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                        <p className="text-[0.86rem] leading-relaxed text-ink">
                          <strong className="font-semibold">You end up with:</strong> {s.output}
                        </p>
                      </div>
                    </div>

                    <div className="min-w-0 rounded-2xl bg-paper-2 p-6 sm:p-7">
                      <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-faint">
                        What happens inside this step
                      </h3>
                      <ul className="mt-5 space-y-3.5">
                        {s.inside.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-[0.89rem] leading-relaxed text-muted"
                          >
                            <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rotate-45 rounded-[2px] bg-brand" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- timeline ---------- */}
      <section className="border-t border-edge bg-paper-2 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <SectionHead
              eyebrow="The first month"
              title="What actually happens, week by week"
              lead="Written down so you can hold us to it. If a week slips, you hear it from us before you notice it yourself."
            />

            <Reveal delay={100}>
              <ol className="relative space-y-0 border-l border-edge pl-8">
                {TIMELINE.map((t) => (
                  <li key={t.when} className="relative pb-7 last:pb-0">
                    <span
                      aria-hidden="true"
                      className="absolute -left-[2.28rem] top-1 flex h-3 w-3 items-center justify-center rounded-full border-2 border-brand bg-paper-2"
                    />
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-brand">
                      {t.when}
                    </p>
                    <p className="mt-1.5 text-[0.95rem] leading-relaxed text-muted">{t.what}</p>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- what we need from you ---------- */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHead
            eyebrow="Your side of it"
            title={
              <>
                Four things we need from you — and{" "}
                <span className="text-gradient">nothing else</span>
              </>
            }
            lead="Engagements stall for the same handful of reasons every time. Here they are up front, so neither of us discovers them in week three."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {WHAT_WE_NEED.map((w, i) => (
              <Reveal key={w.title} delay={i * 70}>
                <div className="panel card-hover spotlight flex h-full gap-5 rounded-3xl p-7">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-ink/5 text-ink">
                    <w.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-[1.05rem] font-semibold tracking-tight">
                      {w.title}
                    </h3>
                    <p className="mt-2 text-[0.89rem] leading-relaxed text-muted">{w.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- reporting ---------- */}
      <section className="border-t border-edge bg-paper-2 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHead
            eyebrow="Every month, from month two"
            title="The report is four lines long"
            center
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {REPORTING.map((r, i) => (
              <Reveal key={r.label} delay={i * 70}>
                <div className="panel card-hover h-full rounded-3xl p-6 text-center">
                  <span className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-tint text-brand">
                    <r.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-[1rem] font-semibold tracking-tight">
                    {r.label}
                  </h3>
                  <p className="mt-2 text-[0.83rem] leading-relaxed text-faint">{r.note}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300}>
            <div className="panel mt-8 flex flex-col items-start justify-between gap-6 rounded-3xl p-8 sm:flex-row sm:items-center sm:p-9">
              <div className="flex items-start gap-4">
                <IconRefresh className="mt-0.5 h-6 w-6 shrink-0 text-brand" />
                <div>
                  <h3 className="font-display text-[1.2rem] font-semibold tracking-tight">
                    And a quarterly re-audit
                  </h3>
                  <p className="mt-2 max-w-lg text-[0.9rem] leading-relaxed text-muted">
                    Your competitors do not stand still, so every three months we redo the audit
                    from scratch and tell you what changed around you.
                  </p>
                </div>
              </div>
              <a
                href={whatsappLink(
                  `Hi ${site.name}! I read your process page and I'd like to start with the free audit.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine shrink-0 rounded-full bg-brand px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-brand-deep hover:scale-[1.03]"
              >
                Start at step one
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- cross-links ---------- */}
      <section className="border-t border-edge py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                href: "/services/",
                icon: IconCompass,
                title: "What we could work on",
                body: "Six practices, twenty-one services, and what each one includes.",
              },
              {
                href: "/results/",
                icon: IconClipboard,
                title: "What the work produces",
                body: "Our rating, our reviews and exactly how we count a lead.",
              },
            ].map((c, i) => (
              <Reveal key={c.href} delay={i * 80}>
                <Link
                  href={c.href}
                  className="panel card-hover spotlight group flex h-full items-center gap-5 rounded-3xl p-7"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-tint text-brand transition-all duration-500 group-hover:bg-brand group-hover:text-white">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-[1.1rem] font-semibold tracking-tight">
                      {c.title}
                    </span>
                    <span className="mt-1.5 block text-[0.88rem] leading-relaxed text-muted">
                      {c.body}
                    </span>
                  </span>
                  <IconArrowRight className="h-5 w-5 shrink-0 text-faint transition-transform duration-300 group-hover:translate-x-1 group-hover:text-brand" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Step one is free, and it takes 48 hours."
        body="Message us with what you sell and where. You get the audit whether or not you hire us."
        cta="Book the free audit"
        message={`Hi ${site.name}! I'd like to start with the free growth audit.`}
        secondary={{ href: "/faq/", label: "Read the FAQs" }}
      />

      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: `${site.url}/` },
            { name: "Process", url: `${site.url}/process/` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: `How ${site.name} runs a digital marketing engagement`,
            description:
              "The four steps of an engagement, from a free growth audit through to monthly reporting on cost per lead.",
            step: STEPS.map((s, i) => ({
              "@type": "HowToStep",
              position: i + 1,
              name: s.title,
              text: s.body,
              url: `${site.url}/process/#step-${s.n}`,
            })),
          },
        ]}
      />
    </>
  );
}
