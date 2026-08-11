import type { Metadata } from "next";
import Link from "next/link";

import { PageHero, HeroStats, SectionHead } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import {
  IconArrowRight,
  IconCheck,
  IconClock,
  IconLayers,
  IconRupee,
  IconTargetOutcome,
  IconThumbsUp,
  IconAudience,
  IconShield,
} from "@/components/Icons";
import { PILLARS, ALL_SERVICES, INDUSTRIES } from "@/lib/services";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Digital Marketing Services in Bengaluru — SEO, Google Ads, Web & Branding",
  description:
    "SEO, Google Ads, Meta Ads, web design, branding and lead generation for Bengaluru businesses. See exactly what each service includes, what it costs and how long it takes.",
  keywords: [
    "digital marketing services Bengaluru",
    "SEO services Bangalore",
    "Google Ads management Bengaluru",
    "social media marketing agency Bangalore",
    "web design services Banashankari",
    "branding agency Bengaluru",
  ],
  alternates: { canonical: "/services/" },
  openGraph: {
    title: `Services | ${site.name}`,
    description:
      "Everything that brings a Bengaluru business customers — search, paid, social, web and brand, run by one team.",
    url: `${site.url}/services/`,
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        crumbs={[{ label: "Services" }]}
        title={
          <>
            One team for everything that brings you{" "}
            <span className="text-gradient">customers</span>
          </>
        }
        lead={
          <>
            Most agencies do one thing well and outsource the rest. We run search, paid, social,
            web and brand under one roof in {site.address.city} — which means your channels stop
            contradicting each other and start compounding.
          </>
        }
      >
        <HeroStats
          items={[
            { icon: IconLayers, value: "6 core practices", label: "and 21 services in total" },
            { icon: IconClock, value: "48-hour audit", label: "before you commit to anything" },
            { icon: IconShield, value: "No lock-in", label: "rolling monthly, 30 days' notice" },
            { icon: IconAudience, value: "Bengaluru-first", label: "built for local search behaviour" },
          ]}
        />
      </PageHero>

      {/* ---------- jump links ---------- */}
      <section className="border-y border-edge bg-paper-2 py-5">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ul className="flex flex-wrap gap-2">
            {PILLARS.map((p) => (
              <li key={p.slug}>
                <a
                  href={`#${p.slug}`}
                  className="group inline-flex items-center gap-2 rounded-full border border-edge bg-paper px-4 py-2 text-[0.82rem] text-muted transition-all duration-300 hover:border-brand/50 hover:text-brand"
                >
                  <p.icon className="h-3.5 w-3.5 text-brand" />
                  {p.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- the six practices ---------- */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="space-y-6">
            {PILLARS.map((p, i) => (
              <Reveal key={p.slug} delay={i * 40}>
                <article
                  id={p.slug}
                  className="panel card-hover spotlight group scroll-mt-28 rounded-3xl p-7 sm:p-9"
                >
                  <div className="grid gap-9 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
                    {/* left: the pitch */}
                    <div className="min-w-0">
                      <div className="flex items-center gap-4">
                        <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-brand-tint p-3.5 text-brand transition-all duration-500 group-hover:bg-brand group-hover:text-white">
                          <p.icon className="h-6 w-6" />
                        </span>
                        <span className="font-display text-[2rem] font-semibold leading-none tracking-tight text-brand/20">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <h2 className="mt-5 font-display text-[1.5rem] font-semibold tracking-tight sm:text-[1.7rem]">
                        {p.title}
                      </h2>
                      <p className="mt-2 text-[0.95rem] font-medium text-brand">{p.short}</p>
                      <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">{p.detail}</p>

                      <ul className="mt-6 flex flex-wrap gap-2">
                        {p.points.map((pt) => (
                          <li
                            key={pt}
                            className="rounded-full border border-edge px-3 py-1 text-[0.74rem] text-faint"
                          >
                            {pt}
                          </li>
                        ))}
                      </ul>

                      <a
                        href={whatsappLink(
                          `Hi ${site.name}! I'd like to talk about ${p.title.toLowerCase()} for my business.`,
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-7 inline-flex items-center gap-2 text-[0.88rem] font-semibold text-brand"
                      >
                        Ask about {p.title.toLowerCase()}
                        <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </a>
                    </div>

                    {/* right: the specifics */}
                    <div className="min-w-0 rounded-2xl bg-paper-2 p-6 sm:p-7">
                      <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-faint">
                        What you get
                      </h3>
                      <ul className="mt-4 space-y-2.5">
                        {p.deliverables.map((d) => (
                          <li key={d} className="flex items-start gap-2.5 text-[0.88rem] text-muted">
                            <span className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                              <IconCheck className="h-3 w-3" />
                            </span>
                            {d}
                          </li>
                        ))}
                      </ul>

                      <h3 className="mt-7 border-t border-edge pt-6 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-faint">
                        Worth a conversation if
                      </h3>
                      <ul className="mt-4 space-y-2.5">
                        {p.fitFor.map((f) => (
                          <li key={f} className="flex items-start gap-2.5 text-[0.88rem] text-muted">
                            <IconThumbsUp className="mt-0.5 h-4 w-4 shrink-0 text-faint" />
                            {f}
                          </li>
                        ))}
                      </ul>

                      <dl className="mt-7 grid gap-4 border-t border-edge pt-6 sm:grid-cols-2">
                        <div>
                          <dt className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-faint">
                            <IconTargetOutcome className="h-3.5 w-3.5 text-brand" />
                            What good looks like
                          </dt>
                          <dd className="mt-2 text-[0.85rem] leading-relaxed text-muted">
                            {p.outcome}
                          </dd>
                        </div>
                        <div>
                          <dt className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-faint">
                            <IconClock className="h-3.5 w-3.5 text-brand" />
                            Typical timeline
                          </dt>
                          <dd className="mt-2 text-[0.85rem] leading-relaxed text-muted">
                            {p.timeline}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- full catalogue ---------- */}
      <section className="border-t border-edge bg-paper-2 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHead
            eyebrow="The full list"
            title="Everything we offer"
            lead="The complete catalogue from our Google Business Profile. If the one thing you came for is on this list, message us about that alone — we would rather do one job properly than sell you a bundle."
          />

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {ALL_SERVICES.map((s, i) => (
              <Reveal key={s.name} delay={Math.min(i * 25, 300)}>
                <div className="panel card-hover flex h-full items-center gap-3.5 rounded-2xl px-5 py-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-tint text-brand">
                    <s.icon className="h-4 w-4" />
                  </span>
                  <span className="text-[0.9rem] font-medium text-ink">{s.name}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- industries ---------- */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHead
            eyebrow="Who we work with"
            title={
              <>
                Categories we have{" "}
                <span className="text-gradient">actually run campaigns in</span>
              </>
            }
            lead="Being specific beats claiming every industry. If yours is not here, ask anyway — but we will tell you honestly at the audit if we do not think we can move your number."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((ind, i) => (
              <Reveal key={ind.name} delay={i * 60}>
                <div className="panel card-hover spotlight group h-full rounded-3xl p-7">
                  <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-ink/5 text-ink transition-all duration-500 group-hover:bg-brand group-hover:text-white">
                    <ind.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-[1.1rem] font-semibold tracking-tight">
                    {ind.name}
                  </h3>
                  <p className="mt-2.5 text-[0.88rem] leading-relaxed text-muted">{ind.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- how pricing works ---------- */}
      <section className="border-t border-edge py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <SectionHead
              eyebrow="How we price"
              title="No package tiers, because no two businesses leak in the same place"
              lead="We scope after the audit, so you get a number for your business rather than a bronze/silver/gold table that was written before we met you."
            />

            <div className="grid gap-4">
              {[
                {
                  icon: IconRupee,
                  title: "Management fee, quoted line by line",
                  body: "You see what each piece of work costs and can strike any line off. Most local clients land between ₹25,000 and ₹60,000 a month across fee and media combined.",
                },
                {
                  icon: IconShield,
                  title: "Media budget stays yours",
                  body: "Ad spend is billed by Google and Meta to a payment profile in your name. We never blend our fee into your spend on an invoice.",
                },
                {
                  icon: IconClock,
                  title: "Projects are fixed-price",
                  body: "Websites, identity systems and audits are quoted as a fixed number with a delivery date, not billed hourly against an open-ended estimate.",
                },
                {
                  icon: IconThumbsUp,
                  title: "Start with one thing",
                  body: "Plenty of clients begin with a single landing page or just Google Business Profile work, and add channels once the first one is paying for itself.",
                },
              ].map((row, i) => (
                <Reveal key={row.title} delay={i * 70}>
                  <div className="panel card-hover spotlight flex gap-5 rounded-2xl p-6">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-tint text-brand">
                      <row.icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-display text-[1.02rem] font-semibold tracking-tight">
                        {row.title}
                      </h3>
                      <p className="mt-2 text-[0.88rem] leading-relaxed text-muted">{row.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}

              <Reveal delay={300}>
                <div className="panel-tint flex flex-wrap items-center justify-between gap-4 rounded-2xl p-6">
                  <p className="text-[0.9rem] text-muted">
                    Want the exact number for your business?
                  </p>
                  <Link
                    href="/contact/"
                    className="group inline-flex items-center gap-2 text-[0.88rem] font-semibold text-brand"
                  >
                    Get a free audit
                    <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Tell us which one of these you need. We'll tell you if it's the right one."
        body="A free audit first — the findings are yours whether or not you hire us."
        message={`Hi ${site.name}! I was reading your services page and I'd like a free growth audit.`}
        secondary={{ href: "/process/", label: "See how we work" }}
      />

      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: `${site.url}/` },
            { name: "Services", url: `${site.url}/services/` },
          ]),
          ...PILLARS.map((p) => serviceSchema(p.title, p.detail, p.slug)),
        ]}
      />
    </>
  );
}
