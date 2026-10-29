import type { Metadata } from "next";

import { PageHero } from "@/components/PageHero";
import { LegalBody } from "@/components/LegalBody";
import { JsonLd } from "@/components/JsonLd";
import { IconCalendar } from "@/components/Icons";
import { formatDate } from "@/components/PostCard";
import { PRIVACY } from "@/lib/legal";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} handles your personal data: no cookies, no tracking, and an enquiry form that never touches a server. Your rights under India's DPDP Act, 2023.`,
  alternates: { canonical: "/privacy/" },
  openGraph: {
    title: `Privacy Policy | ${site.name}`,
    description: "No cookies, no tracking, and your rights under India's DPDP Act, 2023.",
    url: `${site.url}/privacy/`,
    type: "website",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        crumbs={[{ label: "Privacy policy" }]}
        title={
          <>
            Your data, handled <span className="text-gradient">plainly</span>
          </>
        }
        lead="What we collect, why we need it, who else handles it, and how to have it corrected or deleted. Short, because this site collects very little."
      >
        <p className="mt-8 inline-flex items-center gap-2 text-[0.85rem] text-faint">
          <IconCalendar className="h-4 w-4" />
          Last updated <time dateTime={PRIVACY.updated}>{formatDate(PRIVACY.updated)}</time>
        </p>
      </PageHero>

      <LegalBody doc={PRIVACY} related={{ href: "/terms/", label: "Read our terms of service" }} />

      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: `${site.url}/` },
            { name: "Privacy policy", url: `${site.url}/privacy/` },
          ]),
        ]}
      />
    </>
  );
}
