"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Logo } from "./Logo";
import {
  IconArrowRight,
  IconAudience,
  IconChart,
  IconChevronDown,
  IconClock,
  IconClose,
  IconCompass,
  IconDocument,
  IconHelp,
  IconLayers,
  IconMenu,
  IconPhone,
  IconPin,
  IconWhatsApp,
  type Icon,
} from "./Icons";
import { PILLARS } from "@/lib/services";
import { site, whatsappLink, hasPhone } from "@/lib/site";

type NavLink = {
  href: string;
  label: string;
  icon: Icon;
  /** Renders a mega-menu of the service pillars under this item. */
  mega?: boolean;
};

const LINKS: NavLink[] = [
  { href: "/services/", label: "Services", icon: IconLayers, mega: true },
  { href: "/results/", label: "Results", icon: IconChart },
  { href: "/process/", label: "Process", icon: IconCompass },
  { href: "/about/", label: "About", icon: IconAudience },
  { href: "/blog/", label: "Insights", icon: IconDocument },
  { href: "/faq/", label: "FAQs", icon: IconHelp },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  /**
   * The sheet's state is "which route is it open for" rather than a bare
   * boolean. Navigating therefore closes it during the same render that
   * changes the route — no effect, no cascading re-render, and no sheet left
   * hanging open after a browser Back.
   */
  const [openForPath, setOpenForPath] = useState<string | null>(null);
  const open = openForPath === pathname;
  const closeSheet = () => setOpenForPath(null);
  const toggleSheet = () => setOpenForPath((p) => (p === pathname ? null : pathname));

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
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenForPath(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /** `/services/` should stay lit while you are reading any of its anchors. */
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-edge bg-paper lg:bg-paper/85 lg:backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
      style={{ height: "var(--nav-h)" }}
    >
      <nav
        className="mx-auto flex h-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8"
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

        {/* ---------- desktop links ---------- */}
        <ul className="hidden items-center gap-1 lg:flex">
          {LINKS.map((l) => (
            <li key={l.href} className="group relative">
              <Link
                href={l.href}
                aria-current={isActive(l.href) ? "page" : undefined}
                className={`relative flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive(l.href) ? "text-brand" : "text-muted hover:text-ink"
                }`}
              >
                {l.label}
                {l.mega && (
                  <IconChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />
                )}
                {/* active underline */}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-3.5 -bottom-0.5 h-px origin-left bg-brand transition-transform duration-300 ${
                    isActive(l.href) ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>

              {l.mega && <MegaMenu />}
            </li>
          ))}
        </ul>

        {/* ---------- desktop actions ---------- */}
        <div className="hidden items-center gap-3 lg:flex">
          {hasPhone && (
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              <IconPhone className="h-4 w-4" />
              {site.phone}
            </a>
          )}
          <a
            href={whatsappLink(
              `Hi ${site.name}! I found you online and I'd like to discuss growing my business.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-deep hover:scale-[1.04]"
          >
            <IconWhatsApp className="h-4 w-4" />
            Get a free audit
          </a>
        </div>

        {/* ---------- mobile toggle ---------- */}
        <button
          type="button"
          onClick={toggleSheet}
          className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-edge bg-paper text-ink transition-colors hover:border-brand/40 hover:text-brand lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {/* Both glyphs are mounted and cross-faded, so the swap animates
              rather than popping between two different SVGs. */}
          <span className="relative block h-5 w-5">
            <IconMenu
              className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${
                open ? "rotate-90 scale-75 opacity-0" : "rotate-0 scale-100 opacity-100"
              }`}
            />
            <IconClose
              className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${
                open ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-75 opacity-0"
              }`}
            />
          </span>
        </button>
      </nav>

      {/* ---------- mobile sheet ---------- */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 bottom-0 top-[var(--nav-h)] origin-top overflow-y-auto border-t border-edge bg-paper px-5 pb-10 pt-6 transition-all duration-400 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        <ul className="flex flex-col">
          {LINKS.map((l, i) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={closeSheet}
                aria-current={isActive(l.href) ? "page" : undefined}
                className={`flex items-center gap-3.5 border-b border-edge py-4 font-display text-[1.35rem] font-medium tracking-tight transition-all duration-500 ${
                  isActive(l.href) ? "text-brand" : "text-ink"
                }`}
                style={{
                  transitionDelay: open ? `${60 + i * 45}ms` : "0ms",
                  opacity: open ? 1 : 0,
                  transform: open ? "none" : "translateY(10px)",
                }}
              >
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                    isActive(l.href) ? "bg-brand text-white" : "bg-paper-3 text-muted"
                  }`}
                >
                  <l.icon className="h-4 w-4" />
                </span>
                {l.label}
                <IconArrowRight className="ml-auto h-4 w-4 text-faint" />
              </Link>
            </li>
          ))}
        </ul>

        {/* service shortcuts */}
        <div
          className="mt-7 transition-all duration-500"
          style={{
            transitionDelay: open ? "340ms" : "0ms",
            opacity: open ? 1 : 0,
          }}
        >
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-faint">
            Jump to a service
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-2">
            {PILLARS.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/services/#${p.slug}`}
                  onClick={closeSheet}
                  className="flex h-full items-center gap-2.5 rounded-xl border border-edge bg-paper-2 px-3 py-2.5 text-[0.78rem] leading-snug text-muted"
                >
                  <p.icon className="h-3.5 w-3.5 shrink-0 text-brand" />
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <a
          href={whatsappLink(`Hi ${site.name}! I'd like a free growth audit for my business.`)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeSheet}
          className="mt-8 flex w-full items-center justify-center gap-2.5 rounded-full bg-brand px-6 py-4 font-semibold text-white"
        >
          <IconWhatsApp className="h-5 w-5" />
          Chat on WhatsApp
        </a>

        <div className="mt-6 flex flex-col items-center gap-1.5 text-center text-[0.8rem] text-faint">
          <span className="flex items-center gap-1.5">
            <IconClock className="h-3.5 w-3.5" />
            {site.hours.label}
          </span>
          <span className="flex items-center gap-1.5">
            <IconPin className="h-3.5 w-3.5" />
            {site.address.locality}, {site.address.city}
          </span>
        </div>
      </div>
    </header>
  );
}

/**
 * The services mega-menu.
 *
 * Opened by `group-hover` for pointers and `group-focus-within` for keyboards,
 * so it needs no state and no outside-click handler. On touch there is no
 * hover, and tapping "Services" simply navigates to the page — which is the
 * behaviour a phone user wants anyway.
 */
function MegaMenu() {
  return (
    <div
      className="invisible absolute left-1/2 top-full z-50 w-[40rem] -translate-x-1/2 pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"
    >
      <div className="panel overflow-hidden rounded-3xl p-3 shadow-[0_28px_60px_-28px_rgba(20,20,28,0.4)]">
        <ul className="grid grid-cols-2 gap-1">
          {PILLARS.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/services/#${p.slug}`}
                className="group/item flex items-start gap-3 rounded-2xl p-3 transition-colors duration-300 hover:bg-paper-2"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-tint text-brand transition-colors duration-300 group-hover/item:bg-brand group-hover/item:text-white">
                  <p.icon className="h-4 w-4" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[0.88rem] font-semibold tracking-tight text-ink">
                    {p.title}
                  </span>
                  <span className="mt-0.5 block text-[0.78rem] leading-snug text-faint">
                    {p.short}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/services/"
          className="group/all mt-1 flex items-center justify-between rounded-2xl bg-paper-2 px-4 py-3 text-[0.84rem] font-semibold text-brand"
        >
          See all 21 services and what each includes
          <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/all:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
