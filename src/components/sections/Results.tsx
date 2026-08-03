import { Reveal, Eyebrow } from "../Reveal";
import { Counter } from "../Counter";
import { StarIcon } from "./Hero";
import { site } from "@/lib/site";

/**
 * Verbatim excerpts from the Google Business Profile review summary.
 *
 * These are the only two review quotes currently public, so they are the
 * only two shown — deliberately un-attributed, because inventing reviewer
 * names would be fabricating testimonials.
 *
 * TODO: as more reviews come in, paste the full text and the reviewer's
 * first name here. Real names with real quotes convert far better.
 */
const REVIEWS = [
  { quote: "Great service and professional team.", source: "Google review" },
  { quote: "Incredible experience working with them.", source: "Google review" },
];

/**
 * TODO — REPLACE THESE WITH YOUR REAL NUMBERS, OR DELETE THE BLOCK.
 *
 * These are illustrative figures written as placeholders, not measurements
 * from your accounts. Published as-is they are unverified performance claims
 * on a live business site. Swap in figures you can evidence from a client
 * dashboard, or remove the section — the 5.0 rating and the review quotes
 * below are real and carry the section on their own.
 */
const OUTCOMES = [
  {
    metric: <Counter to={214} suffix="%" />,
    label: "average lift in organic enquiries",
    note: "across local service clients in their first two quarters",
  },
  {
    metric: <Counter to={41} suffix="%" />,
    label: "reduction in cost per lead",
    note: "after restructuring paid search and landing pages",
  },
  {
    metric: <Counter to={2.1} decimals={1} suffix="s" />,
    label: "typical Largest Contentful Paint",
    note: "on the sites we build, measured on mobile field data",
  },
];

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
                    <StarIcon key={i} className="h-3.5 w-3.5" />
                  ))}
                </span>
              </div>
              <div className="h-12 w-px bg-edge" />
              <p className="text-[0.86rem] leading-relaxed text-muted">
                Based on <strong className="text-ink">{site.rating.count} reviews</strong> on
                Google.
                <br />
                {site.hours.label}.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {OUTCOMES.map((o, i) => (
              <Reveal key={i} delay={i * 90}>
                <div className="panel card-hover spotlight flex items-center gap-6 rounded-2xl p-6 sm:p-7">
                  <span className="w-[5.5rem] shrink-0 font-display text-[2.1rem] font-semibold leading-none tracking-tight text-brand sm:w-28 sm:text-[2.5rem]">
                    {o.metric}
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
                    <span className="mb-3 flex gap-0.5 text-brand">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <StarIcon key={i} className="h-3.5 w-3.5" />
                      ))}
                    </span>
                    <blockquote className="text-[0.95rem] leading-relaxed text-ink">
                      &ldquo;{r.quote}&rdquo;
                    </blockquote>
                    <figcaption className="mt-3 text-[0.75rem] text-faint">{r.source}</figcaption>
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
