import Link from "next/link";

import { Reveal, Eyebrow } from "../Reveal";
import { FaqItem } from "../FaqItem";
import { IconArrowRight } from "../Icons";
import { HOME_FAQS, ALL_FAQS } from "@/lib/faqs";

export function Faq() {
  return (
    <section id="faq" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal>
          <div className="text-center">
            <Eyebrow>Questions</Eyebrow>
            <h2 className="text-balance-tight font-display text-[clamp(2rem,4.6vw,3.1rem)] font-semibold leading-[1.1] tracking-[-0.03em]">
              Answers before you <span className="text-gradient">ask</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 space-y-3">
          {HOME_FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 50}>
              <FaqItem question={f.q} answer={f.a} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-8 text-center">
            <Link
              href="/faq/"
              className="group inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3.5 text-sm font-medium transition-all duration-300 hover:border-brand/50 hover:bg-brand-tint"
            >
              All {ALL_FAQS.length} questions answered
              <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
