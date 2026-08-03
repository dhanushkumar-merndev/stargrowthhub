import Link from "next/link";
import { Logo } from "../Logo";
import { site, whatsappLink, hasPhone } from "@/lib/site";
import { ALL_SERVICES } from "./Marquee";
import { sortedPosts } from "@/lib/posts";

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

            <address className="mt-6 not-italic text-[0.85rem] leading-relaxed text-faint">
              {site.address.street}
              <br />
              {site.address.landmark}
              <br />
              {site.address.locality}
              <br />
              {site.address.city}, {site.address.region} {site.address.postalCode}
            </address>

            <div className="mt-5 flex flex-col gap-1.5 text-[0.85rem]">
              {hasPhone && (
                <a href={site.phoneHref} className="link-underline w-fit text-muted hover:text-brand">
                  {site.phone}
                </a>
              )}
              <a
                href={`mailto:${site.email}`}
                className="link-underline w-fit break-all text-muted hover:text-brand"
              >
                {site.email}
              </a>
            </div>

            {socials.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-2">
                {socials.map(([name, url]) => (
                  <li key={name}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 items-center rounded-full border border-edge bg-paper px-4 text-[0.75rem] capitalize text-muted transition-all duration-300 hover:border-brand/50 hover:text-brand"
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <FooterCol title="Services">
            {ALL_SERVICES.slice(0, 9).map((s) => (
              <li key={s}>
                <Link href="/#services" className="link-underline text-muted hover:text-ink">
                  {s}
                </Link>
              </li>
            ))}
          </FooterCol>

          <FooterCol title="Company">
            {[
              { href: "/#services", label: "What we do" },
              { href: "/#results", label: "Results" },
              { href: "/#process", label: "How we work" },
              { href: "/#visit", label: "Visit the office" },
              { href: "/#faq", label: "FAQs" },
              { href: "/blog/", label: "Insights" },
              { href: "/#contact", label: "Free growth audit" },
            ].map((l) => (
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
          <div className="flex items-center gap-5 text-[0.8rem] text-faint">
            <span>{site.hours.label}</span>
            <a
              href={whatsappLink(`Hi ${site.name}!`)}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline hover:text-brand"
            >
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
