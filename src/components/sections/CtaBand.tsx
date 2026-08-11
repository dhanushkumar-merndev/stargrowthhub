import Link from "next/link";

import { IconArrowRight, IconWhatsApp } from "../Icons";
import { site, whatsappLink } from "@/lib/site";

/**
 * The full-width red band that closes every page.
 *
 * Repeating the same block at the foot of each route is deliberate: a visitor
 * who has read to the bottom of /process is at their most convinced, and the
 * ask should be identical wherever that happens.
 */
export function CtaBand({
  title = "Every day you're not on page one, a competitor is taking that call.",
  body,
  cta = "Start with a free audit",
  message = `Hi ${site.name}! I'd like to book a free growth audit.`,
  secondary,
}: {
  title?: React.ReactNode;
  body?: React.ReactNode;
  cta?: string;
  /** Pre-filled WhatsApp message, so we know which page the enquiry came from. */
  message?: string;
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="relative isolate overflow-hidden bg-brand">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(255,255,255,0.5), transparent 45%), radial-gradient(circle at 85% 80%, rgba(255,255,255,0.35), transparent 45%)",
        }}
      />

      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-balance-tight max-w-2xl font-display text-[clamp(1.8rem,4vw,2.7rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-white">
            {title}
          </h2>
          <p className="mt-4 max-w-xl text-[1rem] leading-relaxed text-white/80">
            {body ?? (
              <>
                {site.hours.label} · {site.address.locality}, {site.address.city}
              </>
            )}
          </p>
        </div>

        <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={whatsappLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-8 py-4 font-semibold text-brand transition-transform duration-300 hover:scale-[1.04]"
          >
            <IconWhatsApp className="h-5 w-5" />
            {cta}
          </a>

          {secondary && (
            <Link
              href={secondary.href}
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-4 font-medium text-white transition-colors duration-300 hover:border-white hover:bg-white/10"
            >
              {secondary.label}
              <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
