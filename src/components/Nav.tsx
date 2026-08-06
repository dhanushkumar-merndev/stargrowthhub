"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { site, whatsappLink, hasPhone } from "@/lib/site";

const LINKS = [
  { href: "/#services", label: "Services" },
  { href: "/#results", label: "Results" },
  { href: "/#process", label: "Process" },
  { href: "/blog/", label: "Insights" },
  { href: "/#faq", label: "FAQs" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-edge bg-paper lg:bg-paper/85 lg:backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
      style={{ height: "var(--nav-h)" }}
    >
      <nav
        className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 sm:px-8"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="group relative z-10 flex h-full shrink-0 items-center"
          aria-label={`${site.name} — home`}
        >
          {/* priority: the header mark is above the fold on every route. */}
          <Logo priority className="transition-transform duration-500 group-hover:scale-[1.03]" />
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="link-underline text-sm font-medium text-muted transition-colors hover:text-ink"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          {hasPhone && (
            <a
              href={site.phoneHref}
              className="text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              {site.phone}
            </a>
          )}
          <a
            href={whatsappLink(
              `Hi ${site.name}! I found you online and I'd like to discuss growing my business.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-deep hover:scale-[1.04]"
          >
            Get a free audit
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-edge bg-paper lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className="relative block h-4 w-5" aria-hidden="true">
            <span
              className={`absolute left-0 top-1/2 block h-[1.5px] w-full -translate-y-1/2 bg-ink transition-all duration-300 ${
                open ? "rotate-45" : "-translate-y-[6px]"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 block h-[1.5px] w-full -translate-y-1/2 bg-ink transition-all duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 block h-[1.5px] w-full -translate-y-1/2 bg-ink transition-all duration-300 ${
                open ? "-rotate-45" : "translate-y-[6px]"
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile sheet */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 bottom-0 top-[var(--nav-h)] origin-top border-t border-edge bg-paper px-6 pt-8 transition-all duration-400 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1">
          {LINKS.map((l, i) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-edge py-4 font-display text-2xl font-medium tracking-tight transition-all duration-500"
                style={{
                  transitionDelay: open ? `${80 + i * 55}ms` : "0ms",
                  opacity: open ? 1 : 0,
                  transform: open ? "none" : "translateY(10px)",
                }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href={whatsappLink(`Hi ${site.name}! I'd like a free growth audit for my business.`)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className="mt-8 flex w-full items-center justify-center rounded-full bg-brand px-6 py-4 font-semibold text-white"
        >
          Chat on WhatsApp
        </a>
        <p className="mt-6 text-center text-sm text-faint">
          {site.hours.label} · {site.address.locality}
        </p>
      </div>
    </header>
  );
}
