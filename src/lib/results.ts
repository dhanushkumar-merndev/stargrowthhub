/**
 * Everything the /results page renders.
 *
 * ────────────────────────────────────────────────────────────────────────
 *  A NOTE ON HONESTY — please read before editing
 *
 *  Published performance figures are claims a visitor (and, in India, the
 *  ASCI code) will take at face value. So this file separates two things:
 *
 *    • REVIEWS   — real, quoted verbatim from the Google Business Profile.
 *    • OUTCOMES  — illustrative placeholders. Replace with figures you can
 *                  evidence from a client dashboard, or delete the array and
 *                  the section removes itself.
 *    • CASE_STUDIES — deliberately EMPTY. The page renders this section only
 *                  when you add entries, so nothing invented ever ships. Fill
 *                  it in once you have a client who has agreed to be written
 *                  about, with numbers you can screenshot.
 * ────────────────────────────────────────────────────────────────────────
 */

import {
  IconChart,
  IconCompass,
  IconMessage,
  IconOwnership,
  IconRocket,
  IconSpeed,
  type Icon,
} from "@/components/Icons";

/**
 * Verbatim excerpts from the Google Business Profile review summary.
 *
 * These are the only two review quotes currently public, so they are the only
 * two shown — deliberately un-attributed, because inventing reviewer names
 * would be fabricating testimonials.
 *
 * TODO: as more reviews come in, paste the full text and the reviewer's first
 * name here. Real names with real quotes convert far better.
 */
export const REVIEWS: { quote: string; source: string; name?: string }[] = [
  { quote: "Great service and professional team.", source: "Google review" },
  { quote: "Incredible experience working with them.", source: "Google review" },
];

/**
 * TODO — REPLACE WITH YOUR REAL NUMBERS, OR EMPTY THE ARRAY.
 *
 * These are illustrative figures written as placeholders, not measurements
 * from your accounts. Published as-is they are unverified performance claims
 * on a live business site.
 */
export const OUTCOMES: {
  value: number;
  decimals?: number;
  suffix?: string;
  label: string;
  note: string;
  icon: Icon;
}[] = [
  {
    value: 214,
    suffix: "%",
    label: "average lift in organic enquiries",
    note: "across local service clients in their first two quarters",
    icon: IconChart,
  },
  {
    value: 41,
    suffix: "%",
    label: "reduction in cost per lead",
    note: "after restructuring paid search and landing pages",
    icon: IconCompass,
  },
  {
    value: 2.1,
    decimals: 1,
    suffix: "s",
    label: "typical Largest Contentful Paint",
    note: "on the sites we build, measured on mobile field data",
    icon: IconSpeed,
  },
];

export type CaseStudy = {
  client: string;
  industry: string;
  area: string;
  challenge: string;
  work: string[];
  metrics: { value: string; label: string }[];
  quote?: { text: string; by: string };
};

/**
 * Empty on purpose. The /results page hides this section entirely until you
 * add a study — so the site can never ship a case study nobody lived through.
 *
 * To add one, you need: the client's written permission, a dashboard
 * screenshot behind each number, and a date range. Shape:
 *
 *   {
 *     client: "Sharma Interiors",
 *     industry: "Interior design",
 *     area: "JP Nagar",
 *     challenge: "Ranked page two for every search that mattered…",
 *     work: ["Rebuilt the site on…", "Restructured Google Ads around…"],
 *     metrics: [{ value: "3.4x", label: "enquiries per month" }],
 *     quote: { text: "…", by: "Priya Sharma, Founder" },
 *   }
 */
export const CASE_STUDIES: CaseStudy[] = [];

/** How we measure — this part is process, not a claim, so it is safe to state. */
export const MEASUREMENT: { title: string; body: string; icon: Icon }[] = [
  {
    title: "A lead is a conversation, not a click",
    body: "We count calls, form submissions and WhatsApp messages — deduplicated, so one person who does all three counts once.",
    icon: IconMessage,
  },
  {
    title: "Tracking goes in before spend does",
    body: "Conversion events are wired and tested before a campaign goes live. Retro-fitted tracking is how agencies end up guessing.",
    icon: IconOwnership,
  },
  {
    title: "Measured on your visitors, not a lab",
    body: "Site speed comes from Core Web Vitals field data — what your customers on mobile data actually experience.",
    icon: IconRocket,
  },
  {
    title: "The dashboard is always open",
    body: "You do not wait for report day. The numbers are live in an account you own and can check any evening.",
    icon: IconChart,
  },
];
