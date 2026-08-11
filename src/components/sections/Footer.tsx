import Link from "next/link";

import { Logo } from "../Logo";
import {
  IconArrowUpRight,
  IconClock,
  IconMail,
  IconPhone,
  IconPin,
  IconWhatsApp,
  SOCIAL_ICONS,
} from "../Icons";
import { site, whatsappLink, hasPhone } from "@/lib/site";
import { PILLARS } from "@/lib/services";
import { sortedPosts } from "@/lib/posts";

const COMPANY_LINKS = [
  { href: "/services/", label: "Services" },
  { href: "/results/", label: "Results & reviews" },
  { href: "/process/", label: "How we work" },
  { href: "/about/", label: "About us" },
  { href: "/blog/", label: "Insights" },
  { href: "/faq/", label: "FAQs" },
  { href: "/contact/", label: "Free growth audit" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const socials = Object.entries(site.social).filter(([, url]) => Boolean(url));

  return (
    <footer className="relative border-t border-edge bg-paper-2">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-[0.88rem] leading-relaxed text-muted">
              {site.tagline}. Helping local businesses in {site.address.city} get found, get
              chosen, and get paid.
            </p>

            <address className="mt-6 flex gap-2.5 not-italic text-[0.85rem] leading-relaxed text-faint">
              <IconPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              <span>
                {site.address.street}
                <br />
                {site.address.landmark}
                <br />
                {site.address.locality}
                <br />
                {site.address.city}, {site.address.region} {site.address.postalCode}
              </span>
            </address>

            <div className="mt-5 flex flex-col gap-2 text-[0.85rem]">
              {hasPhone && (
                <a
                  href={site.phoneHref}
                  className="inline-flex w-fit items-center gap-2 text-muted transition-colors hover:text-brand"
                >
                  <IconPhone className="h-4 w-4 shrink-0 text-faint" />
                  {site.phone}
                </a>
              )}
              <a
                href={`mailto:${site.email}`}
                className="inline-flex w-fit items-center gap-2 break-all text-muted transition-colors hover:text-brand"
              >
                <IconMail className="h-4 w-4 shrink-0 text-faint" />
                {site.email}
              </a>
              <span className="inline-flex w-fit items-center gap-2 text-faint">
                <IconClock className="h-4 w-4 shrink-0" />
                {site.hours.label}
              </span>
            </div>

            {socials.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-2">
                {socials.map(([name, url]) => {
                  const Glyph = SOCIAL_ICONS[name];
                  return (
                    <li key={name}>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${site.name} on ${name}`}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-edge bg-paper text-muted transition-all duration-300 hover:border-brand/50 hover:bg-brand hover:text-white"
                      >
                        {Glyph ? <Glyph className="h-4 w-4" /> : null}
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          <FooterCol title="Services">
            {PILLARS.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/services/#${p.slug}`}
                  className="link-underline text-muted hover:text-ink"
                >
                  {p.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services/" className="link-underline font-medium text-brand">
                All 21 services
              </Link>
            </li>
          </FooterCol>

          <FooterCol title="Company">
            {COMPANY_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="link-underline text-muted hover:text-ink">
                  {l.label}
                </Link>
              </li>
            ))}
          </FooterCol>

          <FooterCol title="Latest insights">
            {sortedPosts()
              .slice(0, 4)
              .map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/blog/${p.slug}/`}
                    className="link-underline line-clamp-2 text-muted hover:text-ink"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
          </FooterCol>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-edge pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.8rem] text-faint">
            © {year} {site.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-5 text-[0.8rem] text-faint">
            <Link href="/contact/" className="link-underline inline-flex items-center gap-1.5 hover:text-brand">
              Free growth audit
              <IconArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <a
              href={whatsappLink(`Hi ${site.name}!`)}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline inline-flex items-center gap-1.5 hover:text-brand"
            >
              <IconWhatsApp className="h-3.5 w-3.5" />
              WhatsApp us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="mb-5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-faint">
        {title}
      </h2>
      <ul className="space-y-2.5 text-[0.85rem]">{children}</ul>
    </div>
  );
}
