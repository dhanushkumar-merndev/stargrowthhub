import Link from "next/link";

import { Reveal, Eyebrow } from "../Reveal";
import { IconArrowRight } from "../Icons";
import { PROMISES } from "@/lib/company";
import { INDUSTRIES } from "@/lib/services";

/**
 * The "why us" band on the home page: four promises we can be held to, and the
 * categories we have genuinely run campaigns in. Both link on to /about, which
 * carries the longer argument.
 */
export function WhyUs() {
  return (
    <section id="why-us" className="relative scroll-mt-24 border-t border-edge py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal className="max-w-2xl">
            <Eyebrow>Why us</Eyebrow>
            <h2 className="text-balance-tight font-display text-[clamp(2rem,4.6vw,3.1rem)] font-semibold leading-[1.1] tracking-[-0.03em]">
              Four promises you can actually{" "}
              <span className="text-gradient">hold us to</span>
            </h2>
            <p className="mt-5 text-[1.02rem] leading-relaxed text-muted">
              Not values on a wall. Each of these is something you can check for yourself, and
              call us on the day we stop doing it.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <Link
              href="/about/"
              className="group inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3.5 text-sm font-medium transition-all duration-300 hover:border-brand/50 hover:bg-brand-tint"
            >
              More about us
              <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROMISES.map((p, i) => (
            <Reveal key={p.title} delay={i * 70} className="h-full">
              <div className="panel card-hover spotlight group h-full rounded-3xl p-7">
                <span className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-tint text-brand transition-all duration-500 group-hover:bg-brand group-hover:text-white">
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-[1.08rem] font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-2.5 text-[0.9rem] leading-relaxed text-muted">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* industries */}
        <Reveal delay={120}>
          <div className="panel-tint mt-8 rounded-3xl p-7 sm:p-9">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h3 className="font-display text-lg font-semibold tracking-tight">
                  Categories we have run campaigns in
                </h3>
                <p className="mt-2 max-w-xl text-[0.88rem] leading-relaxed text-muted">
                  If yours is not here, ask anyway — but we will say so honestly at the audit if
                  we do not think we can move your number.
                </p>
              </div>
              <Link
                href="/services/"
                className="group inline-flex items-center gap-2 text-sm font-medium text-brand"
              >
                See the services
                <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <ul className="mt-7 grid gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
              {INDUSTRIES.map((ind) => (
                <li key={ind.name} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-paper text-brand">
                    <ind.icon className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[0.92rem] font-medium text-ink">{ind.name}</span>
                    <span className="mt-0.5 block text-[0.82rem] leading-snug text-faint">
                      {ind.note}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
