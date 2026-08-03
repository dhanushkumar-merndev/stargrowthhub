import type { Metadata } from "next";

import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Services } from "@/components/sections/Services";
import { Results } from "@/components/sections/Results";
import { Process } from "@/components/sections/Process";
import { LocalArea } from "@/components/sections/LocalArea";
import { Gallery } from "@/components/sections/Gallery";
import { BlogTeaser } from "@/components/sections/BlogTeaser";
import { Faq, FAQS } from "@/components/sections/Faq";
import { Contact, ClosingBanner } from "@/components/sections/Contact";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} — Digital Marketing Agency in Banashankari, Bengaluru`,
  description:
    "5-star rated digital marketing agency in Banashankari, Bengaluru. SEO, Google Ads, Meta Ads, web design and branding that turn local searches into paying customers. Free growth audit.",
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} — Digital Marketing Agency in Bengaluru`,
    description: site.description,
    url: site.url,
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <Results />
      <Process />
      <LocalArea />
      {/* Renders only when photos exist in public/images/gallery. */}
      <Gallery />
      <BlogTeaser />
      <Faq />
      <Contact />
      <ClosingBanner />

      {/* Powers the expandable FAQ rich result in Google. */}
      <JsonLd data={faqSchema(FAQS)} />
    </>
  );
}
