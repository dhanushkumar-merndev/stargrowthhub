import Link from "next/link";
import type { Metadata } from "next";
import { Backdrop } from "@/components/Backdrop";
import { IconArrowRight, IconHome, IconWhatsApp } from "@/components/Icons";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[70vh] items-center overflow-hidden py-24">
      <Backdrop />

      <div className="mx-auto max-w-2xl px-5 text-center sm:px-8">
        <p className="font-display text-[clamp(4rem,14vw,8rem)] font-semibold leading-none tracking-tight text-gradient">
          404
        </p>
        <h1 className="mt-4 font-display text-[clamp(1.6rem,4vw,2.4rem)] font-semibold tracking-tight">
          This page drifted off the map
        </h1>
        <p className="mx-auto mt-4 max-w-md text-[1rem] leading-relaxed text-muted">
          The link is broken or the page has moved. Head back home, or just message us — it&apos;s
          usually faster.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="btn-shine inline-flex items-center justify-center gap-2.5 rounded-full bg-brand px-7 py-4 font-semibold text-white transition-colors hover:bg-brand-deep"
          >
            <IconHome className="h-4 w-4" />
            Back to home
          </Link>
          <a
            href={whatsappLink(`Hi ${site.name}! I hit a broken link on your website.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-full border border-ink/15 px-7 py-4 font-medium transition-all duration-300 hover:border-ink/40 hover:bg-paper-3"
          >
            <IconWhatsApp className="h-4 w-4" />
            Message us on WhatsApp
          </a>
        </div>

        {/* A 404 is a dead end unless it offers somewhere to go. */}
        <ul className="mt-12 flex flex-wrap justify-center gap-2 border-t border-edge pt-8">
          {[
            { href: "/services/", label: "Services" },
            { href: "/results/", label: "Results" },
            { href: "/process/", label: "Process" },
            { href: "/about/", label: "About" },
            { href: "/blog/", label: "Insights" },
            { href: "/faq/", label: "FAQs" },
            { href: "/contact/", label: "Contact" },
          ].map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="group inline-flex items-center gap-1.5 rounded-full border border-edge bg-paper px-4 py-2 text-[0.82rem] text-muted transition-all duration-300 hover:border-brand/50 hover:text-brand"
              >
                {l.label}
                <IconArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
