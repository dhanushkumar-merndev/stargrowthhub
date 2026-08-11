import type { Metadata } from "next";

import { PageHero, HeroStats, SectionHead } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { LeadForm } from "@/components/LeadForm";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import {
  IconArrowRight,
  IconCheck,
  IconClock,
  IconDirections,
  IconMail,
  IconMessage,
  IconPhone,
  IconPin,
  IconWhatsApp,
} from "@/components/Icons";
import { breadcrumbSchema } from "@/lib/schema";
import {
  site,
  fullAddress,
  mapsDirectionsUrl,
  whatsappLink,
  hasPhone,
} from "@/lib/site";

// Keyless embed — no API key, no billing account, and it lazy-loads so it
// never blocks the page paint.
const MAP_SRC = `https://maps.google.com/maps?q=${encodeURIComponent(
  `${site.name}, ${fullAddress}`,
)}&z=16&output=embed`;

const ASSURANCES = [
  "A written audit within 48 hours — yours to keep either way",
  "Every account created in your name, never ours",
  "Rolling monthly engagements, 30-day notice, no lock-in",
  "You talk to the people doing the work, not an account manager",
];

const TRAVEL = [
  "Two minutes from Banashankari bus stand",
  "Walking distance from Banashankari metro station",
  "Directly on 80 Feet Road, near Bangalore One",
  "Street parking available outside working-hour peaks",
];

export const metadata: Metadata = {
  title: "Contact — Free Growth Audit for Your Bengaluru Business",
  description:
    "Message Star Growth Hub in Banashankari, Bengaluru for a free 48-hour growth audit. Office on 80 Feet Road, near Bangalore One. Open Mon–Sat, 10am–7pm.",
  keywords: [
    "contact digital marketing agency Bengaluru",
    "free SEO audit Bangalore",
    "marketing agency Banashankari contact",
    "digital marketing near me Bengaluru",
  ],
  alternates: { canonical: "/contact/" },
  openGraph: {
    title: `Contact | ${site.name}`,
    description:
      "Tell us what you sell and we'll tell you what's leaking — a free written audit in 48 hours.",
    url: `${site.url}/contact/`,
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Free growth audit"
        crumbs={[{ label: "Contact" }]}
        title={
          <>
            Tell us what you sell. We&apos;ll tell you what&apos;s{" "}
            <span className="text-gradient">leaking</span>.
          </>
        }
        lead="Fill in the form and it opens WhatsApp with your details already written out — one tap to send. No form disappearing into an inbox nobody checks, and no call centre ringing you at dinner."
      >
        <HeroStats
          items={[
            { icon: IconClock, value: "Under 2 hours", label: "typical reply on WhatsApp" },
            { icon: IconCheck, value: "48-hour audit", label: "in writing, free, yours to keep" },
            { icon: IconPin, value: site.address.locality, label: `${site.address.city} ${site.address.postalCode}` },
            { icon: IconMessage, value: site.hours.label, label: site.hours.closed },
          ]}
        />
      </PageHero>

      {/* ---------- form + reassurance ---------- */}
      <section
        id="enquiry"
        className="relative isolate scroll-mt-24 overflow-hidden border-t border-edge bg-paper-2 py-20 sm:py-28"
      >
        <div
          aria-hidden="true"
          className="dot-grid pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_75%_60%_at_50%_50%,#000,transparent_75%)]"
        />

        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
            <Reveal>
              <h2 className="text-balance-tight font-display text-[clamp(1.8rem,4vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.03em]">
                What you get for filling this in
              </h2>

              <ul className="mt-8 space-y-3.5">
                {ASSURANCES.map((a) => (
                  <li key={a} className="flex items-start gap-3 text-[0.94rem] text-muted">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                      <IconCheck className="h-3 w-3" />
                    </span>
                    {a}
                  </li>
                ))}
              </ul>

              {/* direct channels */}
              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                <a
                  href={whatsappLink(
                    `Hi ${site.name}! I'd like a free growth audit for my business.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="panel card-hover group flex items-center gap-3.5 rounded-2xl p-5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/12 text-[#1da851]">
                    <IconWhatsApp className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[0.72rem] uppercase tracking-[0.14em] text-faint">
                      WhatsApp
                    </span>
                    <span className="mt-0.5 block truncate text-[0.9rem] font-medium text-ink">
                      Message the team
                    </span>
                  </span>
                </a>

                <a
                  href={`mailto:${site.email}`}
                  className="panel card-hover group flex items-center gap-3.5 rounded-2xl p-5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-tint text-brand">
                    <IconMail className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[0.72rem] uppercase tracking-[0.14em] text-faint">
                      Email
                    </span>
                    <span className="mt-0.5 block truncate text-[0.9rem] font-medium text-ink">
                      {site.email}
                    </span>
                  </span>
                </a>

                {hasPhone && (
                  <a
                    href={site.phoneHref}
                    className="panel card-hover group flex items-center gap-3.5 rounded-2xl p-5"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ink/5 text-ink">
                      <IconPhone className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[0.72rem] uppercase tracking-[0.14em] text-faint">
                        Phone
                      </span>
                      <span className="mt-0.5 block truncate text-[0.9rem] font-medium text-ink">
                        {site.phone}
                      </span>
                    </span>
                  </a>
                )}

                <a
                  href={mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="panel card-hover group flex items-center gap-3.5 rounded-2xl p-5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ink/5 text-ink">
                    <IconDirections className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[0.72rem] uppercase tracking-[0.14em] text-faint">
                      Visit
                    </span>
                    <span className="mt-0.5 block truncate text-[0.9rem] font-medium text-ink">
                      Get directions
                    </span>
                  </span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <LeadForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- find us ---------- */}
      <section id="visit" className="scroll-mt-24 border-t border-edge py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <SectionHead
                eyebrow="Find us"
                title={
                  <>
                    A real office in{" "}
                    <span className="text-gradient">{site.address.locality}</span> — come say
                    hello
                  </>
                }
                lead="We are on 80 Feet Road in BSK 1st Stage, near Bangalore One and a few minutes from Banashankari bus stand and metro. Walk in during working hours, or send a message and we will come to you."
              />

              <dl className="mt-9 grid gap-6 sm:grid-cols-2">
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

              <div className="mt-9 rounded-2xl bg-paper-2 p-6">
                <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-faint">
                  Getting here
                </h3>
                <ul className="mt-4 grid gap-2.5">
                  {TRAVEL.map((t) => (
                    <li key={t} className="flex items-start gap-2.5 text-[0.88rem] text-muted">
                      <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex items-center gap-2.5 rounded-full border border-ink/15 px-6 py-3.5 text-sm font-medium transition-all duration-300 hover:border-brand/50 hover:bg-brand-tint"
              >
                <IconDirections className="h-4 w-4 text-brand" />
                Get directions on Google Maps
                <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
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
                  className="h-[24rem] w-full rounded-[1.4rem] border-0 lg:h-full lg:min-h-[34rem]"
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="panel-tint mt-10 rounded-3xl p-8 sm:p-9">
              <h3 className="flex items-center gap-2.5 font-display text-[1.15rem] font-semibold tracking-tight">
                <IconPin className="h-4 w-4 text-brand" />
                Areas we serve
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {site.areasServed.map((a) => (
                  <li
                    key={a}
                    className="rounded-full border border-edge bg-paper px-3.5 py-1.5 text-[0.8rem] text-muted"
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="One message is all it takes to find out what's costing you customers."
        body={`${site.hours.label} · ${site.address.locality}, ${site.address.city}`}
        message={`Hi ${site.name}! I'd like a free growth audit for my business.`}
        secondary={{ href: "/faq/", label: "Read the FAQs" }}
      />

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${site.url}/` },
          { name: "Contact", url: `${site.url}/contact/` },
        ])}
      />
    </>
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
      <dt className="mb-2 flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-faint">
        <Icon className="h-3.5 w-3.5 text-brand" />
        {label}
      </dt>
      <dd className="text-[0.92rem] text-muted">{children}</dd>
    </div>
  );
}
