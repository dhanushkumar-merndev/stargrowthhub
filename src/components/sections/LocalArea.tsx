import Link from "next/link";

import { Reveal, Eyebrow } from "../Reveal";
import {
  IconArrowRight,
  IconClock,
  IconDirections,
  IconMail,
  IconPhone,
  IconPin,
} from "../Icons";
import { site, fullAddress, mapsDirectionsUrl, hasPhone } from "@/lib/site";

// Keyless embed — no API key, no billing account, and it lazy-loads so it
// never blocks the page paint.
const MAP_SRC = `https://maps.google.com/maps?q=${encodeURIComponent(
  `${site.name}, ${fullAddress}`,
)}&z=16&output=embed`;

export function LocalArea() {
  return (
    <section id="visit" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <Eyebrow>Find us</Eyebrow>
            <h2 className="text-balance-tight font-display text-[clamp(2rem,4.6vw,3.1rem)] font-semibold leading-[1.1] tracking-[-0.03em]">
              A real office in{" "}
              <span className="text-gradient">{site.address.locality}</span> — come say hello
            </h2>
            <p className="mt-5 text-[1.02rem] leading-relaxed text-muted">
              We are on 80 Feet Road in BSK 1st Stage, near Bangalore One and a few minutes
              from Banashankari bus stand and metro. Walk in during working hours, or send a
              message and we will come to you.
            </p>

            <dl className="mt-8 grid gap-5 sm:grid-cols-2">
              <InfoItem label="Address" icon={IconPin}>
                <address className="not-italic leading-relaxed">
                  {site.address.street}
                  <br />
                  {site.address.landmark}
                  <br />
                  {site.address.locality}
                  <br />
                  {site.address.city}, {site.address.region} {site.address.postalCode}
                </address>
              </InfoItem>

              <InfoItem label="Opening hours" icon={IconClock}>
                <span className="leading-relaxed">
                  {site.hours.label}
                  <br />
                  <span className="text-faint">{site.hours.closed}</span>
                </span>
              </InfoItem>

              {hasPhone && (
                <InfoItem label="Phone" icon={IconPhone}>
                  <a href={site.phoneHref} className="link-underline hover:text-brand">
                    {site.phone}
                  </a>
                </InfoItem>
              )}

              <InfoItem label="Email" icon={IconMail}>
                <a
                  href={`mailto:${site.email}`}
                  className="link-underline break-all hover:text-brand"
                >
                  {site.email}
                </a>
              </InfoItem>
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3.5 text-sm font-medium transition-all duration-300 hover:border-brand/50 hover:bg-brand-tint"
              >
                <IconDirections className="h-4 w-4 text-brand" />
                Get directions on Google Maps
              </a>
              <Link
                href="/contact/"
                className="group inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3.5 text-sm font-medium transition-all duration-300 hover:border-brand/50 hover:bg-brand-tint"
              >
                Contact the team
                <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="mt-10 border-t border-edge pt-8">
              <h3 className="text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-faint">
                Areas we serve
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {site.areasServed.map((a) => (
                  <li
                    key={a}
                    className="rounded-full border border-edge bg-paper-2 px-3 py-1.5 text-[0.8rem] text-muted"
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            {/* data-lenis-prevent hands wheel events back to the map so it
                stays draggable and zoomable under smooth scrolling. */}
            <div data-lenis-prevent className="panel h-full overflow-hidden rounded-3xl p-2">
              <iframe
                src={MAP_SRC}
                title={`Map showing ${site.name} at ${fullAddress}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[24rem] w-full rounded-[1.4rem] border-0 lg:h-full lg:min-h-[30rem]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InfoItem({
  label,
  icon: Icon,
  children,
}: {
  label: string;
  icon: (props: { className?: string }) => React.ReactElement;
  children: React.ReactNode;
}) {
  return (
    <div>
      <dt className="mb-1.5 flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-faint">
        <Icon className="h-3.5 w-3.5 text-brand" />
        {label}
      </dt>
      <dd className="text-[0.92rem] text-muted">{children}</dd>
    </div>
  );
}
