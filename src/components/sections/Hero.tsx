import Link from "next/link";

import { site, whatsappLink, mapsDirectionsUrl } from "@/lib/site";
import { Backdrop } from "../Backdrop";
import { Counter } from "../Counter";
import { GlobeArcs } from "../GlobeArcs";
import { IconArrowDown, IconArrowRight, IconStar, IconWhatsApp } from "../Icons";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pb-20 pt-[calc(var(--nav-h)+3rem)] sm:pb-28 sm:pt-[calc(var(--nav-h)+4.5rem)]">
      <Backdrop />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.08fr] lg:gap-8">
        {/* ---------- copy ---------- */}
        {/* min-w-0 on both columns: grid items default to min-width:auto, so
            any wide child would otherwise stretch the track past the
            viewport instead of shrinking to fit. */}
        <div className="min-w-0">
          <div
            data-reveal=""
            className="mb-7 inline-flex items-center gap-3 rounded-full border border-edge bg-paper py-1.5 pl-2 pr-4 shadow-sm"
          >
            <span className="flex items-center gap-1 rounded-full bg-brand-tint px-2.5 py-1 text-[0.72rem] font-semibold text-brand">
              <IconStar className="h-3 w-3" />
              {site.rating.value}
            </span>
            <span className="text-[0.78rem] text-muted">
              {site.rating.count} five-star reviews · {site.address.locality.split(",")[1]?.trim()}
            </span>
          </div>

          <h1
            data-reveal=""
            style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
            className="text-balance-tight font-display text-[clamp(2.5rem,6.2vw,4.3rem)] font-semibold leading-[1.02] tracking-[-0.04em]"
          >
            We turn local searches into{" "}
            <span className="text-gradient">paying customers</span>.
          </h1>

          <p
            data-reveal=""
            style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
            className="mt-6 max-w-lg text-[1.02rem] leading-relaxed text-muted sm:text-[1.08rem]"
          >
            A digital marketing agency in Banashankari, {site.address.city}. We build the SEO,
            Google Ads, Meta Ads and websites that put your business in front of people already
            looking for what you sell — and we prove it with numbers, not adjectives.
          </p>

          <div
            data-reveal=""
            style={{ "--reveal-delay": "240ms" } as React.CSSProperties}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href={whatsappLink(
                `Hi ${site.name}! I'd like a free growth audit for my business.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine inline-flex items-center justify-center gap-2.5 rounded-full bg-brand px-6 py-4 text-[0.95rem] font-semibold text-white shadow-[0_14px_30px_-12px_rgba(224,27,45,0.65)] transition-all duration-300 hover:bg-brand-deep hover:scale-[1.03] sm:px-7 sm:text-base"
            >
              <IconWhatsApp className="h-5 w-5 shrink-0" />
              Get your free growth audit
            </a>
            <Link
              href="/services/"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 px-6 py-4 text-[0.95rem] font-medium text-ink transition-all duration-300 hover:border-ink/40 hover:bg-paper-3 sm:px-7 sm:text-base"
            >
              See what we do
              <IconArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </Link>
          </div>

          <dl
            data-reveal=""
            style={{ "--reveal-delay": "320ms" } as React.CSSProperties}
            className="mt-11 grid max-w-lg grid-cols-3 gap-4 border-t border-edge pt-8 sm:gap-6"
          >
            {[
              { v: <Counter to={5} suffix=".0" />, l: "Google rating" },
              { v: <Counter to={21} />, l: "Services offered" },
              // Kept numeric on purpose: "Mon–Sat" is a ~130px unbreakable
              // token, and a grid item's default min-width:auto would push the
              // whole column past a phone viewport.
              { v: <>6</>, l: "days a week, 10–7" },
            ].map((s, i) => (
              <div key={i} className="min-w-0">
                <dt className="sr-only">{s.l}</dt>
                <dd>
                  <span className="block font-display text-[1.5rem] font-semibold tracking-tight text-ink sm:text-[1.7rem]">
                    {s.v}
                  </span>
                  <span className="mt-1 block text-[0.75rem] leading-snug text-faint sm:text-[0.78rem]">
                    {s.l}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* ---------- visual ---------- */}
        <div
          data-reveal=""
          style={{ "--reveal-delay": "200ms" } as React.CSSProperties}
          className="relative min-w-0"
        >
          <GlobeShowcase />
        </div>
      </div>
    </section>
  );
}

/**
 * The hero's visual anchor. The globe sits directly on the page rather than
 * inside a card, so it reads as an object rather than a chart.
 *
 * The two callouts are pinned to the square's empty corners — the sphere only
 * ever occupies the middle 75% of the viewBox, so they can't collide with it
 * however far the globe turns.
 */
function GlobeShowcase() {
  return (
    <div className="relative mx-auto w-full max-w-[34rem]">
      <div className="relative">
        <GlobeArcs className="w-full" />

        <Callout className="left-0 top-[6%]" label="What we're known for">
          Local SEO &amp; Maps
        </Callout>

        <Callout
          className="right-0 top-[62%]"
          label="Tracked on every campaign"
          delay="-2.1s"
        >
          Cost per lead
        </Callout>
      </div>

      {/* location strip — below the globe, clear of both callouts */}
      <a
        href={mapsDirectionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="panel card-hover relative z-10 -mt-2 flex items-center gap-3 rounded-2xl px-5 py-4"
      >
        <span className="relative flex h-2 w-2 shrink-0 text-brand">
          <span className="ping-dot absolute inset-0" />
          <span className="relative block h-2 w-2 rounded-full bg-brand" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block truncate text-[0.85rem] font-medium text-ink">
            {site.address.street}, {site.address.landmark}
          </span>
          <span className="block truncate text-[0.75rem] text-faint">
            {site.address.locality}, {site.address.city} {site.address.postalCode}
          </span>
        </span>
        <IconArrowRight className="h-4 w-4 shrink-0 text-faint" />
      </a>
    </div>
  );
}

function Callout({
  label,
  children,
  className = "",
  delay,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
  delay?: string;
}) {
  return (
    <div
      className={`animate-bob absolute z-20 hidden rounded-2xl border border-edge bg-paper/95 px-4 py-3 shadow-[0_14px_34px_-16px_rgba(20,20,28,0.35)] backdrop-blur-sm sm:block ${className}`}
      style={delay ? { animationDelay: delay } : undefined}
    >
      <p className="text-[0.62rem] uppercase tracking-[0.14em] text-faint">{label}</p>
      <p className="mt-1 font-display text-[0.92rem] font-semibold tracking-tight text-ink">
        {children}
      </p>
    </div>
  );
}
