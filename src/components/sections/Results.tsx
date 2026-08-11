import Link from "next/link";

import { Reveal, Eyebrow } from "../Reveal";
import { Counter } from "../Counter";
import { IconArrowRight, IconGoogle, IconQuote, IconStar } from "../Icons";
import { OUTCOMES, REVIEWS } from "@/lib/results";
import { site } from "@/lib/site";

export function Results() {
  return (
    <section id="results" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <Eyebrow>Proof, not promises</Eyebrow>
            <h2 className="text-balance-tight font-display text-[clamp(2rem,4.6vw,3.1rem)] font-semibold leading-[1.1] tracking-[-0.03em]">
              Rated <span className="text-gradient">{site.rating.value} out of 5</span> by every
              client who reviewed us
            </h2>
            <p className="mt-5 text-[1.02rem] leading-relaxed text-muted">
              We report on the numbers that pay your bills — enquiries, calls, cost per lead —
              not impressions and reach. Every client gets a monthly dashboard they own and can
              check any day of the week.
            </p>

            <div className="panel mt-8 flex items-center gap-5 rounded-2xl p-5">
              <div className="flex shrink-0 flex-col items-center">
                <span className="font-display text-3xl font-semibold tracking-tight">
                  {site.rating.value}
                </span>
                <span className="mt-1 flex gap-0.5 text-brand">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <IconStar key={i} className="h-3.5 w-3.5" />
                  ))}
                </span>
              </div>
              <div className="h-12 w-px bg-edge" />
              <div className="text-[0.86rem] leading-relaxed text-muted">
                <p className="flex items-center gap-1.5">
                  <IconGoogle className="h-3.5 w-3.5 shrink-0 text-faint" />
                  Based on <strong className="text-ink">{site.rating.count} reviews</strong> on
                  Google.
                </p>
                <p className="mt-0.5">{site.hours.label}.</p>
              </div>
            </div>

            <Link
              href="/results/"
              className="group mt-6 inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3.5 text-sm font-medium transition-all duration-300 hover:border-brand/50 hover:bg-brand-tint"
            >
              See the full picture
              <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <div className="grid gap-4">
            {OUTCOMES.map((o, i) => (
              <Reveal key={o.label} delay={i * 90}>
                <div className="panel card-hover spotlight flex items-center gap-6 rounded-2xl p-6 sm:p-7">
                  <span className="w-[5.5rem] shrink-0 font-display text-[2.1rem] font-semibold leading-none tracking-tight text-brand sm:w-28 sm:text-[2.5rem]">
                    <Counter to={o.value} decimals={o.decimals} suffix={o.suffix} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[0.95rem] font-medium text-ink">{o.label}</span>
                    <span className="mt-1 block text-[0.8rem] leading-relaxed text-faint">
                      {o.note}
                    </span>
                  </span>
                </div>
              </Reveal>
            ))}

            <Reveal delay={280}>
              <div className="grid gap-4 sm:grid-cols-2">
                {REVIEWS.map((r) => (
                  <figure key={r.quote} className="panel-tint rounded-2xl p-6">
                    <IconQuote className="h-4 w-4 text-brand/30" />
                    <blockquote className="mt-3 text-[0.95rem] leading-relaxed text-ink">
                      {r.quote}
                    </blockquote>
                    <figcaption className="mt-4 flex items-center gap-2 border-t border-edge pt-3">
                      <span className="flex gap-0.5 text-brand">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <IconStar key={i} className="h-3 w-3" />
                        ))}
                      </span>
                      <span className="text-[0.75rem] text-faint">{r.name ?? r.source}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
