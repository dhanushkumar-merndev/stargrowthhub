import type { Metadata } from "next";

import { PageHero } from "@/components/PageHero";
import { LegalBody } from "@/components/LegalBody";
import { JsonLd } from "@/components/JsonLd";
import { IconCalendar } from "@/components/Icons";
import { formatDate } from "@/components/PostCard";
import { TERMS } from "@/lib/legal";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms ${site.name} works on: rolling monthly engagements with 30 days' notice, ad spend paid directly by you, and every account in your name.`,
  alternates: { canonical: "/terms/" },
  openGraph: {
    title: `Terms of Service | ${site.name}`,
    description: "Monthly engagements, 30 days' notice, and everything we build in your name.",
    url: `${site.url}/terms/`,
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        crumbs={[{ label: "Terms of service" }]}
        title={
          <>
            The terms we <span className="text-gradient">work on</span>
          </>
        }
        lead="How engagements start and end, who pays for what, who owns the work, and what nobody in this industry can honestly promise."
      >
        <p className="mt-8 inline-flex items-center gap-2 text-[0.85rem] text-faint">
          <IconCalendar className="h-4 w-4" />
          Last updated <time dateTime={TERMS.updated}>{formatDate(TERMS.updated)}</time>
        </p>
      </PageHero>

      <LegalBody doc={TERMS} related={{ href: "/privacy/", label: "Read our privacy policy" }} />

      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: `${site.url}/` },
            { name: "Terms of service", url: `${site.url}/terms/` },
          ]),
        ]}
      />
    </>
  );
}
