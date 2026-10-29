import Link from "next/link";

import { Reveal } from "./Reveal";
import { RichText } from "./RichText";
import { IconArrowRight, IconMail, IconWhatsApp } from "./Icons";
import type { LegalBlock, LegalDoc } from "@/lib/legal";
import { site, whatsappLink } from "@/lib/site";

/**
 * Shared body for /privacy and /terms: a numbered contents rail on wide
 * screens, the plain-language summary, then the full text in the same prose
 * styles the articles use — so the legal pages read like the rest of the
 * site rather than a pasted-in PDF.
 */
export function LegalBody({
  doc,
  related,
}: {
  doc: LegalDoc;
  /** The other legal page, linked from the closing panel. */
  related: { href: string; label: string };
}) {
  return (
    <section className="border-t border-edge py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-16">
        <nav aria-label="On this page" className="hidden lg:block">
          <div className="sticky top-[calc(var(--nav-h)+2rem)]">
            <p className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-faint">
              On this page
            </p>
            <ol className="space-y-2 text-[0.85rem]">
              {doc.sections.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="flex gap-2.5 text-muted transition-colors hover:text-brand"
                  >
                    <span className="w-5 shrink-0 tabular-nums text-faint">{i + 1}.</span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        <div className="max-w-3xl">
          <Reveal>
            <aside className="rounded-3xl border border-brand/25 bg-brand-tint p-7 sm:p-8">
              <h2 className="font-display text-[1.15rem] font-semibold tracking-tight">
                The short version
              </h2>
              <div className="prose-sgh mt-4 [&_li]:text-[0.95rem] [&_li]:text-ink [&_ul]:mb-0">
                <ul>
                  {doc.summary.map((s) => (
                    <li key={s}>
                      <RichText>{s}</RichText>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </Reveal>

          <div className="prose-sgh mt-6">
            {doc.sections.map((s, i) => (
              <section key={s.id} id={s.id} className="scroll-mt-28">
                <h2>
                  <span className="mr-2 text-brand">{i + 1}.</span>
                  {s.title}
                </h2>
                {s.body.map((block, j) => (
                  <Block key={j} block={block} />
                ))}
              </section>
            ))}
          </div>

          <Reveal>
            <div className="panel mt-14 flex flex-col gap-5 rounded-3xl p-7 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div>
                <p className="font-display text-[1.1rem] font-semibold tracking-tight">
                  Something here unclear?
                </p>
                <p className="mt-1.5 text-[0.9rem] text-muted">
                  Ask us. A person who does the work will answer.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={whatsappLink(`Hi ${site.name}! I have a question about your policies.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-deep"
                >
                  <IconWhatsApp className="h-4 w-4" />
                  WhatsApp
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 rounded-full border border-edge bg-paper px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand/50 hover:text-brand"
                >
                  <IconMail className="h-4 w-4" />
                  Email
                </a>
              </div>
            </div>
          </Reveal>

          <Link
            href={related.href}
            className="group mt-8 inline-flex items-center gap-2 text-[0.9rem] font-medium text-brand"
          >
            {related.label}
            <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Block({ block }: { block: LegalBlock }) {
  if (typeof block === "string") {
    return (
      <p>
        <RichText>{block}</RichText>
      </p>
    );
  }
  return (
    <ul>
      {block.map((item) => (
        <li key={item}>
          <RichText>{item}</RichText>
        </li>
      ))}
    </ul>
  );
}
