import Link from "next/link";

import { Reveal, Eyebrow } from "../Reveal";
import { IconArrowRight, IconClock } from "../Icons";
import { STEPS } from "@/lib/process";

export function Process() {
  return (
    <section
      id="process"
      className="relative scroll-mt-24 border-y border-edge bg-paper-2 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal className="max-w-2xl">
            <Eyebrow>How we work</Eyebrow>
            <h2 className="text-balance-tight font-display text-[clamp(2rem,4.6vw,3.1rem)] font-semibold leading-[1.1] tracking-[-0.03em]">
              Four steps, and you know where you stand at every one
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <Link
              href="/process/"
              className="group inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3.5 text-sm font-medium transition-all duration-300 hover:border-brand/50 hover:bg-brand-tint"
            >
              The full process
              <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <ol className="relative mt-14 grid gap-6 lg:grid-cols-4">
          {/* connecting line */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-0 right-0 top-[3.4rem] hidden h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent lg:block"
          />

          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 90} as="li">
              <div className="panel card-hover spotlight group relative h-full rounded-3xl p-7">
                <div className="flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-tint text-brand transition-all duration-500 group-hover:bg-brand group-hover:text-white">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-edge px-2.5 py-1 text-[0.68rem] uppercase tracking-wider text-faint">
                    <IconClock className="h-3 w-3" />
                    {s.duration}
                  </span>
                </div>

                <span className="mt-6 block font-display text-[2.2rem] font-semibold leading-none tracking-tight text-brand/20">
                  {s.n}
                </span>
                <h3 className="mt-3 font-display text-[1.12rem] font-semibold tracking-tight">
                  <Link href={`/process/#step-${s.n}`} className="before:absolute before:inset-0">
                    {s.title}
                  </Link>
                </h3>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-muted">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
