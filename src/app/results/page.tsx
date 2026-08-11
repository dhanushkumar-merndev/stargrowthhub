import type { Metadata } from "next";
import Link from "next/link";

import { PageHero, HeroStats, SectionHead } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import {
  IconArrowRight,
  IconAward,
  IconChart,
  IconCheck,
  IconClock,
  IconGoogle,
  IconMessage,
  IconQuote,
  IconStar,
} from "@/components/Icons";
import { OUTCOMES, REVIEWS, CASE_STUDIES, MEASUREMENT } from "@/lib/results";
import { REPORTING } from "@/lib/process";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Results & Reviews — 5.0 Rated Digital Marketing Agency in Bengaluru",
  description:
    "What our work actually produces: a 5.0 Google rating, the numbers we report on every month, and how we measure a lead. No vanity metrics.",
  keywords: [
    "digital marketing agency reviews Bengaluru",
    "SEO results Bangalore",
    "marketing agency case studies Bengaluru",
    "cost per lead reporting India",
  ],
  alternates: { canonical: "/results/" },
  openGraph: {
    title: `Results | ${site.name}`,
    description:
      "Rated 5.0 on Google. See the numbers we report on, and how we define a lead.",
    url: `${site.url}/results/`,
    type: "website",
  },
};

export default function ResultsPage() {
  return (
    <>
      <PageHero
        eyebrow="Proof, not promises"
        crumbs={[{ label: "Results" }]}
        title={
          <>
            Rated <span className="text-gradient">{site.rating.value} out of 5</span> by every
            client who reviewed us
          </>
        }
        lead="We report on the numbers that pay your bills — enquiries, calls, cost per lead — not impressions and reach. Every client gets a monthly dashboard they own and can check any day of the week."
      >
        <HeroStats
          items={[
            { icon: IconStar, value: `${site.rating.value} / 5`, label: "average Google rating" },
            { icon: IconGoogle, value: `${site.rating.count} reviews`, label: "all five stars" },
            { icon: IconClock, value: "48 hours", label: "from enquiry to written audit" },
            { icon: IconMessage, value: "Under 2 hrs", label: "typical WhatsApp reply time" },
          ]}
        />
      </PageHero>

      {/* ---------- rating + reviews ---------- */}
      <section className="border-y border-edge bg-paper-2 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            <Reveal>
              <div className="panel sticky top-28 rounded-3xl p-8">
                <span className="flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-faint">
                  <IconGoogle className="h-3.5 w-3.5" />
                  Google Business Profile
                </span>

                <p className="mt-5 font-display text-[3.4rem] font-semibold leading-none tracking-tight">
                  {site.rating.value}
                </p>

                <span className="mt-3 flex gap-1 text-brand">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <IconStar key={i} className="h-4 w-4" />
                  ))}
                </span>

                <p className="mt-4 text-[0.9rem] leading-relaxed text-muted">
                  Based on <strong className="text-ink">{site.rating.count} reviews</strong>, every
                  one of them five stars.
                </p>

                <p className="mt-5 border-t border-edge pt-5 text-[0.82rem] leading-relaxed text-faint">
                  {site.hours.label}
                  <br />
                  {site.address.locality}, {site.address.city}
                </p>
              </div>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {REVIEWS.map((r, i) => (
                <Reveal key={r.quote} delay={i * 80}>
                  <figure className="panel card-hover spotlight flex h-full flex-col rounded-3xl p-7">
                    <IconQuote className="h-6 w-6 text-brand/25" />
                    <blockquote className="mt-4 flex-1 text-[1.02rem] leading-relaxed text-ink">
                      {r.quote}
                    </blockquote>
                    <figcaption className="mt-5 flex items-center gap-2.5 border-t border-edge pt-4">
                      <span className="flex gap-0.5 text-brand">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <IconStar key={j} className="h-3 w-3" />
                        ))}
                      </span>
                      <span className="text-[0.76rem] text-faint">{r.name ?? r.source}</span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}

              <Reveal delay={160} className="sm:col-span-2">
                <div className="panel-tint flex flex-wrap items-center justify-between gap-4 rounded-3xl p-7">
                  <div className="flex items-start gap-3.5">
                    <IconAward className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                    <p className="max-w-md text-[0.9rem] leading-relaxed text-muted">
                      Reviews are quoted verbatim and left un-attributed — we would rather show
                      two real ones than invent a wall of names.
                    </p>
                  </div>
                  {site.social.google && (
                    <a
                      href={site.social.google}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-[0.86rem] font-semibold text-brand"
                    >
                      Read them on Google
                      <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- outcome metrics ---------- */}
      {OUTCOMES.length > 0 && (
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHead
              eyebrow="Typical outcomes"
              title="What the work tends to produce"
              lead="Figures across our local service clients. Every one of them is measured in an account the client owns, so they can check the same number themselves."
            />

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {OUTCOMES.map((o, i) => (
                <Reveal key={o.label} delay={i * 80}>
                  <div className="panel card-hover spotlight group h-full rounded-3xl p-7">
                    <span className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-tint text-brand transition-all duration-500 group-hover:bg-brand group-hover:text-white">
                      <o.icon className="h-5 w-5" />
                    </span>
                    <p className="font-display text-[2.6rem] font-semibold leading-none tracking-tight text-brand">
                      <Counter to={o.value} decimals={o.decimals} suffix={o.suffix} />
                    </p>
                    <p className="mt-4 text-[0.98rem] font-medium text-ink">{o.label}</p>
                    <p className="mt-1.5 text-[0.84rem] leading-relaxed text-faint">{o.note}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---------- case studies: renders only once real ones are added ---------- */}
      {CASE_STUDIES.length > 0 && (
        <section className="border-t border-edge bg-paper-2 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHead
              eyebrow="Case studies"
              title="The work, start to finish"
              lead="Each of these is a real engagement, published with the client's permission."
            />

            <div className="mt-12 space-y-6">
              {CASE_STUDIES.map((c, i) => (
                <Reveal key={c.client} delay={i * 60}>
                  <article className="panel card-hover rounded-3xl p-7 sm:p-9">
                    <div className="grid gap-9 lg:grid-cols-[1fr_1fr] lg:gap-12">
                      <div>
                        <span className="inline-flex items-center gap-2 rounded-full bg-brand-tint px-3 py-1 text-[0.72rem] font-semibold text-brand">
                          {c.industry} · {c.area}
                        </span>
                        <h3 className="mt-4 font-display text-[1.5rem] font-semibold tracking-tight">
                          {c.client}
                        </h3>
                        <p className="mt-3 text-[0.93rem] leading-relaxed text-muted">
                          {c.challenge}
                        </p>

                        <h4 className="mt-6 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-faint">
                          What we did
                        </h4>
                        <ul className="mt-3 space-y-2">
                          {c.work.map((w) => (
                            <li
                              key={w}
                              className="flex items-start gap-2.5 text-[0.88rem] text-muted"
                            >
                              <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                              {w}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <dl className="grid gap-4 sm:grid-cols-2">
                          {c.metrics.map((m) => (
                            <div key={m.label} className="rounded-2xl bg-paper-2 p-5">
                              <dt className="sr-only">{m.label}</dt>
                              <dd>
                                <span className="block font-display text-[2rem] font-semibold leading-none tracking-tight text-brand">
                                  {m.value}
                                </span>
                                <span className="mt-2 block text-[0.82rem] leading-snug text-muted">
                                  {m.label}
                                </span>
                              </dd>
                            </div>
                          ))}
                        </dl>

                        {c.quote && (
                          <figure className="panel-tint mt-4 rounded-2xl p-6">
                            <IconQuote className="h-5 w-5 text-brand/25" />
                            <blockquote className="mt-3 text-[0.93rem] leading-relaxed text-ink">
                              {c.quote.text}
                            </blockquote>
                            <figcaption className="mt-3 text-[0.78rem] text-faint">
                              {c.quote.by}
                            </figcaption>
                          </figure>
                        )}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---------- how we measure ---------- */}
      <section className="border-t border-edge py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHead
            eyebrow="How we measure"
            title={
              <>
                A number you can&apos;t audit is just a{" "}
                <span className="text-gradient">nicer-looking guess</span>
              </>
            }
            lead="Here is exactly what we count, and where the counting happens. All of it sits in accounts registered in your name, so you never have to take our word for a figure."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {MEASUREMENT.map((m, i) => (
              <Reveal key={m.title} delay={i * 70}>
                <div className="panel card-hover spotlight flex h-full gap-5 rounded-3xl p-7">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-tint text-brand">
                    <m.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-[1.05rem] font-semibold tracking-tight">
                      {m.title}
                    </h3>
                    <p className="mt-2 text-[0.89rem] leading-relaxed text-muted">{m.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- the monthly report ---------- */}
      <section className="border-t border-edge bg-paper-2 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <SectionHead
              eyebrow="Every month"
              title="Four lines, and none of them are impressions"
              lead="This is the whole report. If a metric cannot change a decision you are about to make, it does not belong on it."
            />

            <div className="grid gap-4">
              {REPORTING.map((r, i) => (
                <Reveal key={r.label} delay={i * 70}>
                  <div className="panel flex items-center gap-5 rounded-2xl p-6">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-ink/5 text-ink">
                      <r.icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[0.98rem] font-medium text-ink">{r.label}</p>
                      <p className="mt-1 text-[0.84rem] leading-relaxed text-faint">{r.note}</p>
                    </div>
                  </div>
                </Reveal>
              ))}

              <Reveal delay={300}>
                <div className="panel flex flex-wrap items-center justify-between gap-4 rounded-2xl border-brand/25 p-6">
                  <div className="flex items-start gap-3.5">
                    <IconChart className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                    <p className="max-w-sm text-[0.89rem] leading-relaxed text-muted">
                      Want to see what your current numbers look like on this report?
                    </p>
                  </div>
                  <Link
                    href="/contact/"
                    className="group inline-flex items-center gap-2 text-[0.88rem] font-semibold text-brand"
                  >
                    Book the free audit
                    <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="See what your own numbers say before you commit to anything."
        body="A written audit of your site, your Google profile and your competitors — in 48 hours, free."
        message={`Hi ${site.name}! I read your results page and I'd like a free growth audit.`}
        secondary={{ href: "/services/", label: "Browse the services" }}
      />

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${site.url}/` },
          { name: "Results", url: `${site.url}/results/` },
        ])}
      />
    </>
  );
}
