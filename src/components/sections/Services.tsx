import Link from "next/link";

import { Reveal, Eyebrow } from "../Reveal";
import { IconArrowRight, IconCheck } from "../Icons";
import { PILLARS, ALL_SERVICES } from "@/lib/services";
import { site, whatsappLink } from "@/lib/site";

export function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal className="max-w-2xl">
            <Eyebrow>What we do</Eyebrow>
            <h2 className="text-balance-tight font-display text-[clamp(2rem,4.6vw,3.1rem)] font-semibold leading-[1.1] tracking-[-0.03em]">
              One team for everything that brings you{" "}
              <span className="text-gradient">customers</span>
            </h2>
            <p className="mt-5 text-[1.02rem] leading-relaxed text-muted">
              Most agencies do one thing and outsource the rest. We run search, paid, social,
              web and brand under one roof in {site.address.city} — which means your channels
              actually talk to each other.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <Link
              href="/services/"
              className="group inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3.5 text-sm font-medium transition-all duration-300 hover:border-brand/50 hover:bg-brand-tint"
            >
              All services
              <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 70} className="h-full">
              <article className="panel card-hover spotlight group relative flex h-full flex-col rounded-3xl p-7">
                <span className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-tint text-brand transition-all duration-500 group-hover:bg-brand group-hover:text-white">
                  <p.icon className="h-6 w-6" />
                </span>

                <h3 className="font-display text-[1.22rem] font-semibold tracking-tight">
                  {/* Stretched link: the whole card is the target, and the
                      heading stays the accessible name for it. */}
                  <Link href={`/services/#${p.slug}`} className="before:absolute before:inset-0">
                    {p.title}
                  </Link>
                </h3>
                <p className="mt-3 flex-1 text-[0.92rem] leading-relaxed text-muted">{p.blurb}</p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {p.points.map((pt) => (
                    <li
                      key={pt}
                      className="rounded-full border border-edge px-2.5 py-1 text-[0.72rem] text-faint"
                    >
                      {pt}
                    </li>
                  ))}
                </ul>

                <span className="mt-6 inline-flex items-center gap-1.5 text-[0.84rem] font-medium text-brand">
                  What this includes
                  <IconArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Full service list — genuine keyword surface area, and useful to a
            visitor scanning for the one thing they came for. */}
        <Reveal delay={120}>
          <div className="panel-tint mt-8 rounded-3xl p-7 sm:p-9">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h3 className="font-display text-lg font-semibold tracking-tight">
                Everything we offer
              </h3>
              <a
                href={whatsappLink(
                  `Hi ${site.name}! I'd like to know more about one of your services.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-medium text-brand"
              >
                Ask about a specific service
                <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
            <ul className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
              {ALL_SERVICES.map((s) => (
                <li key={s.name} className="flex items-start gap-2.5 text-[0.88rem] text-muted">
                  <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  {s.name}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
