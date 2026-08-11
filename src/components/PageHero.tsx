import Link from "next/link";

import { Backdrop } from "./Backdrop";
import { Reveal, Eyebrow } from "./Reveal";
import { IconChevronRight, IconHome, type Icon } from "./Icons";

export type Crumb = { label: string; href?: string };

/**
 * The masthead every inner page opens with.
 *
 * One component rather than six near-identical headers: the pages then share
 * their vertical rhythm, their breadcrumb markup and their backdrop, so
 * moving between them feels like one site instead of six landing pages.
 */
export function PageHero({
  eyebrow,
  title,
  lead,
  crumbs,
  children,
}: {
  eyebrow: string;
  /** Rendered as the page's single <h1>. */
  title: React.ReactNode;
  lead: React.ReactNode;
  crumbs: Crumb[];
  /** Optional row of buttons, stats or chips below the lead. */
  children?: React.ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden pb-14 pt-[calc(var(--nav-h)+3.5rem)] sm:pb-20 sm:pt-[calc(var(--nav-h)+4.5rem)]">
      <Backdrop />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <Breadcrumbs crumbs={crumbs} />

          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="text-balance-tight max-w-4xl font-display text-[clamp(2.2rem,5.6vw,3.8rem)] font-semibold leading-[1.05] tracking-[-0.037em]">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-muted">{lead}</p>
        </Reveal>

        {children && <Reveal delay={120}>{children}</Reveal>}
      </div>
    </section>
  );
}

export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-7">
      <ol className="flex flex-wrap items-center gap-1.5 text-[0.8rem] text-faint">
        <li>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-ink"
          >
            <IconHome className="h-3.5 w-3.5" />
            Home
          </Link>
        </li>
        {crumbs.map((c) => (
          <li key={c.label} className="inline-flex items-center gap-1.5">
            <IconChevronRight className="h-3.5 w-3.5 text-faint/60" />
            {c.href ? (
              <Link href={c.href} className="transition-colors hover:text-ink">
                {c.label}
              </Link>
            ) : (
              <span className="text-muted" aria-current="page">
                {c.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/**
 * The stat strip that sits under most page heroes — three or four facts a
 * visitor can absorb before deciding whether to keep reading.
 */
export function HeroStats({
  items,
}: {
  items: { icon: Icon; value: string; label: string }[];
}) {
  return (
    <dl className="mt-11 grid gap-4 border-t border-edge pt-8 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((s) => (
        <div key={s.label} className="flex items-start gap-3">
          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-tint text-brand">
            <s.icon className="h-4 w-4" />
          </span>
          <div className="min-w-0">
            <dt className="sr-only">{s.label}</dt>
            <dd>
              <span className="block font-display text-[1.05rem] font-semibold tracking-tight text-ink">
                {s.value}
              </span>
              <span className="mt-0.5 block text-[0.78rem] leading-snug text-faint">
                {s.label}
              </span>
            </dd>
          </div>
        </div>
      ))}
    </dl>
  );
}

/** Section heading used consistently across the inner pages. */
export function SectionHead({
  eyebrow,
  title,
  lead,
  center = false,
  className = "",
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  center?: boolean;
  className?: string;
}) {
  return (
    <Reveal className={`${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-balance-tight font-display text-[clamp(1.9rem,4.4vw,2.9rem)] font-semibold leading-[1.1] tracking-[-0.03em]">
        {title}
      </h2>
      {lead && (
        <p
          className={`mt-5 text-[1.02rem] leading-relaxed text-muted ${center ? "mx-auto" : ""}`}
        >
          {lead}
        </p>
      )}
    </Reveal>
  );
}
