import type { Metadata } from "next";

import { PageHero, SectionHead } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { FaqItem } from "@/components/FaqItem";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { IconArrowRight, IconMessage, IconPhone, IconMail } from "@/components/Icons";
import { FAQ_GROUPS, ALL_FAQS } from "@/lib/faqs";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { site, whatsappLink, hasPhone } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQs — Costs, Timelines, Contracts and Account Ownership",
  description:
    "Straight answers on what a digital marketing agency in Bengaluru costs, how long SEO takes, who owns your ad accounts, and what happens if you want to leave.",
  keywords: [
    "digital marketing agency cost Bengaluru",
    "SEO timeline India",
    "marketing agency contract terms",
    "Google Ads account ownership",
  ],
  alternates: { canonical: "/faq/" },
  openGraph: {
    title: `FAQs | ${site.name}`,
    description:
      "Costs, timelines, contracts, ownership and what happens if you leave — answered plainly.",
    url: `${site.url}/faq/`,
    type: "website",
  },
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Questions"
        crumbs={[{ label: "FAQs" }]}
        title={
          <>
            Answers before you <span className="text-gradient">ask</span>
          </>
        }
        lead={`Everything people ask us before they hire us — including the awkward ones about price, guarantees and what happens if it does not work out. ${ALL_FAQS.length} answers, none of them hedged.`}
      >
        <ul className="mt-10 flex flex-wrap gap-2 border-t border-edge pt-8">
          {FAQ_GROUPS.map((g) => (
            <li key={g.id}>
              <a
                href={`#${g.id}`}
                className="inline-flex items-center gap-2 rounded-full border border-edge bg-paper px-4 py-2 text-[0.82rem] text-muted transition-all duration-300 hover:border-brand/50 hover:text-brand"
              >
                <g.icon className="h-3.5 w-3.5 text-brand" />
                {g.title}
              </a>
            </li>
          ))}
        </ul>
      </PageHero>

      {/* ---------- grouped questions ---------- */}
      <section className="border-t border-edge py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="space-y-16">
            {FAQ_GROUPS.map((group) => (
              <div key={group.id} id={group.id} className="scroll-mt-28">
                <Reveal>
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-tint text-brand">
                      <group.icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <h2 className="font-display text-[1.45rem] font-semibold tracking-tight">
                        {group.title}
                      </h2>
                      <p className="mt-1.5 text-[0.9rem] text-muted">{group.intro}</p>
                    </div>
                  </div>
                </Reveal>

                <div className="mt-7 space-y-3">
                  {group.items.map((f, i) => (
                    <Reveal key={f.q} delay={i * 45}>
                      <FaqItem question={f.q} answer={f.a} />
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- still stuck ---------- */}
      <section className="border-t border-edge bg-paper-2 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <SectionHead
            eyebrow="Not covered here"
            title="Ask us the awkward one"
            lead="If your question is not above, it is probably a good one. Message us and you will get a straight answer from someone who does the work — usually within two working hours."
            center
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <Reveal>
              <a
                href={whatsappLink(`Hi ${site.name}! I have a question that isn't on your FAQ page.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="panel card-hover spotlight group flex h-full items-center gap-4 rounded-3xl p-7"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-tint text-brand transition-all duration-500 group-hover:bg-brand group-hover:text-white">
                  <IconMessage className="h-5 w-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-display text-[1.05rem] font-semibold tracking-tight">
                    Ask on WhatsApp
                  </span>
                  <span className="mt-1 block text-[0.85rem] text-muted">
                    Typical reply: under 2 working hours
                  </span>
                </span>
                <IconArrowRight className="h-5 w-5 shrink-0 text-faint transition-transform duration-300 group-hover:translate-x-1 group-hover:text-brand" />
              </a>
            </Reveal>

            <Reveal delay={80}>
              <a
                href={hasPhone ? site.phoneHref : `mailto:${site.email}`}
                className="panel card-hover spotlight group flex h-full items-center gap-4 rounded-3xl p-7"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-ink/5 text-ink transition-all duration-500 group-hover:bg-brand group-hover:text-white">
                  {hasPhone ? <IconPhone className="h-5 w-5" /> : <IconMail className="h-5 w-5" />}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-display text-[1.05rem] font-semibold tracking-tight">
                    {hasPhone ? "Call the office" : "Email us"}
                  </span>
                  <span className="mt-1 block break-all text-[0.85rem] text-muted">
                    {hasPhone ? site.phone : site.email}
                  </span>
                </span>
                <IconArrowRight className="h-5 w-5 shrink-0 text-faint transition-transform duration-300 group-hover:translate-x-1 group-hover:text-brand" />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        title="Still deciding? Start with the part that costs nothing."
        body="A written audit of your site, your Google profile and your competitors, in 48 hours."
        message={`Hi ${site.name}! I read your FAQs and I'd like a free growth audit.`}
        secondary={{ href: "/contact/", label: "Contact the team" }}
      />

      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: `${site.url}/` },
            { name: "FAQs", url: `${site.url}/faq/` },
          ]),
          faqSchema(ALL_FAQS),
        ]}
      />
    </>
  );
}
