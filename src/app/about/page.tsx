import type { Metadata } from "next";
import Link from "next/link";

import { PageHero, HeroStats, SectionHead } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { StarMark } from "@/components/Logo";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import {
  IconArrowRight,
  IconAward,
  IconCheck,
  IconClock,
  IconClose,
  IconPin,
  IconStar,
  IconAudience,
} from "@/components/Icons";
import { PROMISES, COMPARISON, LOCAL_REASONS, STORY } from "@/lib/company";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us — A Small Digital Marketing Team in Banashankari, Bengaluru",
  description:
    "Who runs Star Growth Hub, why we work the way we do, and what a Banashankari address means for a Bengaluru business. Rated 5.0 on Google.",
  keywords: [
    "about Star Growth Hub",
    "digital marketing agency Banashankari",
    "marketing team Bengaluru",
    "local marketing agency Bangalore",
  ],
  alternates: { canonical: "/about/" },
  openGraph: {
    title: `About | ${site.name}`,
    description:
      "A small, local digital marketing team in Banashankari, Bengaluru. You own the accounts; we report on enquiries, not impressions.",
    url: `${site.url}/about/`,
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who we are"
        crumbs={[{ label: "About" }]}
        title={
          <>
            A small team on 80 Feet Road that got tired of{" "}
            <span className="text-gradient">marketing theatre</span>
          </>
        }
        lead={`${site.name} is a ${site.category.toLowerCase()} in ${site.address.locality}, ${site.address.city}. We build the search, paid, social, web and brand work that brings local businesses customers — and we report it in numbers you can check yourself.`}
      >
        <HeroStats
          items={[
            { icon: IconStar, value: `${site.rating.value} on Google`, label: `${site.rating.count} reviews, all five stars` },
            { icon: IconPin, value: "Banashankari", label: "BSK 1st Stage, near Bangalore One" },
            { icon: IconClock, value: site.hours.label, label: site.hours.closed },
            { icon: IconAudience, value: "10 areas served", label: "across south Bengaluru and beyond" },
          ]}
        />
      </PageHero>

      {/* ---------- story ---------- */}
      <section className="border-t border-edge py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
            <div>
              <SectionHead eyebrow="Our story" title="Why this agency exists" />
              <div className="mt-8 space-y-5">
                {STORY.map((para, i) => (
                  <Reveal key={i} delay={i * 70}>
                    <p className="text-[1.02rem] leading-[1.8] text-muted">{para}</p>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal delay={120}>
              <div className="panel sticky top-28 rounded-3xl p-8">
                <StarMark className="h-16 w-16" />
                <p className="mt-6 font-display text-[1.3rem] font-semibold leading-snug tracking-tight">
                  &ldquo;Every report leads with enquiries and cost per lead, because those are
                  the only two numbers that reach your bank account.&rdquo;
                </p>
                <p className="mt-5 border-t border-edge pt-5 text-[0.84rem] text-faint">
                  {site.name} · {site.address.locality}, {site.address.city}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- promises ---------- */}
      <section className="border-t border-edge bg-paper-2 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHead
            eyebrow="What we hold to"
            title={
              <>
                Four promises we can actually be{" "}
                <span className="text-gradient">held to</span>
              </>
            }
            lead="Not values on a wall — each of these is something you can check, and call us on if we ever stop doing it."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROMISES.map((p, i) => (
              <Reveal key={p.title} delay={i * 70}>
                <div className="panel card-hover spotlight group h-full rounded-3xl p-7">
                  <span className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-tint text-brand transition-all duration-500 group-hover:bg-brand group-hover:text-white">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-[1.08rem] font-semibold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 text-[0.88rem] leading-relaxed text-muted">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- comparison ---------- */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHead
            eyebrow="The honest version"
            title="How this usually goes, and how we do it instead"
            lead="Written as a description of a common experience rather than an accusation — most agencies work this way because it is easier to sell, not because anyone set out to be unhelpful."
          />

          <Reveal delay={120}>
            {/* Table scrolls inside itself so the page body never does. */}
            <div className="panel mt-12 overflow-x-auto rounded-3xl">
              <table className="w-full min-w-[44rem] border-collapse text-left">
                <thead>
                  <tr className="border-b border-edge">
                    <th
                      scope="col"
                      className="px-6 py-5 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-faint sm:px-7"
                    >
                      &nbsp;
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-5 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-faint sm:px-7"
                    >
                      What usually happens
                    </th>
                    <th
                      scope="col"
                      className="bg-brand-tint px-6 py-5 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-brand sm:px-7"
                    >
                      With {site.name}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row) => (
                    <tr key={row.point} className="border-b border-edge last:border-0">
                      <th
                        scope="row"
                        className="px-6 py-5 align-top text-[0.9rem] font-semibold text-ink sm:px-7"
                      >
                        {row.point}
                      </th>
                      <td className="px-6 py-5 align-top sm:px-7">
                        <span className="flex items-start gap-2.5 text-[0.88rem] leading-relaxed text-faint">
                          <IconClose className="mt-0.5 h-4 w-4 shrink-0" />
                          {row.typical}
                        </span>
                      </td>
                      <td className="bg-brand-tint/40 px-6 py-5 align-top sm:px-7">
                        <span className="flex items-start gap-2.5 text-[0.88rem] leading-relaxed text-ink">
                          <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                          {row.ours}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- why local ---------- */}
      <section className="border-t border-edge bg-paper-2 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <SectionHead
              eyebrow="Why local matters"
              title="An agency two kilometres away is not a sentimental choice"
              lead="For a business selling to south Bengaluru, proximity is a working advantage, not a nice-to-have."
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {LOCAL_REASONS.map((r, i) => (
                <Reveal key={r.title} delay={i * 70}>
                  <div className="panel card-hover h-full rounded-3xl p-6">
                    <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-tint text-brand">
                      <r.icon className="h-4 w-4" />
                    </span>
                    <h3 className="font-display text-[1rem] font-semibold tracking-tight">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-[0.86rem] leading-relaxed text-muted">{r.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* areas served */}
          <Reveal delay={200}>
            <div className="panel mt-10 rounded-3xl p-8 sm:p-9">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <h3 className="flex items-center gap-2.5 font-display text-[1.15rem] font-semibold tracking-tight">
                    <IconPin className="h-4 w-4 text-brand" />
                    Areas we serve
                  </h3>
                  <p className="mt-2 max-w-lg text-[0.88rem] leading-relaxed text-muted">
                    Our office is in {site.address.locality}, and most of our clients are within a
                    short drive. Remote engagements across India are welcome too.
                  </p>
                </div>
                <Link
                  href="/contact/"
                  className="group inline-flex items-center gap-2 text-[0.88rem] font-semibold text-brand"
                >
                  Find the office
                  <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

              <ul className="mt-6 flex flex-wrap gap-2">
                {site.areasServed.map((a) => (
                  <li
                    key={a}
                    className="rounded-full border border-edge bg-paper-2 px-3.5 py-1.5 text-[0.8rem] text-muted"
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- credentials strip ---------- */}
      <section className="border-t border-edge py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              {
                icon: IconStar,
                title: `${site.rating.value} star rating`,
                body: `Every one of our ${site.rating.count} Google reviews is five stars.`,
              },
              {
                icon: IconAward,
                title: "21 services, one team",
                body: "Search, paid, social, web and brand — nothing outsourced to a third party.",
              },
              {
                icon: IconPin,
                title: "A real office",
                body: `${site.address.street}, ${site.address.landmark}. Walk in during working hours.`,
              },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <div className="panel-tint flex h-full gap-4 rounded-3xl p-7">
                  <c.icon className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <div>
                    <h3 className="font-display text-[1rem] font-semibold tracking-tight">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-[0.86rem] leading-relaxed text-muted">{c.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Come and argue with us about your marketing."
        body={`${site.address.street}, ${site.address.landmark} · ${site.hours.label}`}
        cta="Message the team"
        message={`Hi ${site.name}! I read your about page and I'd like to talk about my business.`}
        secondary={{ href: "/results/", label: "See the results" }}
      />

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${site.url}/` },
          { name: "About", url: `${site.url}/about/` },
        ])}
      />
    </>
  );
}
