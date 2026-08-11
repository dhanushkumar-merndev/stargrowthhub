/**
 * Every question we get asked, grouped.
 *
 * Answers are written to be self-contained because they are also fed to
 * FAQPage structured data — Google renders them without the surrounding page,
 * so an answer that depends on the question above it reads as nonsense in the
 * search result.
 *
 * The home page shows a short selection; /faq shows all of them.
 */

import { site } from "./site";
import {
  IconAudience,
  IconClock,
  IconOwnership,
  IconPin,
  IconRupee,
  IconSeo,
  type Icon,
} from "@/components/Icons";

export type Faq = { q: string; a: string };

export type FaqGroup = {
  id: string;
  title: string;
  intro: string;
  icon: Icon;
  items: Faq[];
};

export const FAQ_GROUPS: FaqGroup[] = [
  {
    id: "pricing",
    title: "Pricing & commitment",
    intro: "What this costs, and what you are tied into.",
    icon: IconRupee,
    items: [
      {
        q: "What does a digital marketing agency in Bengaluru actually cost?",
        a: "Most of our local clients invest between ₹25,000 and ₹60,000 per month across management and ad spend combined. Websites typically start around ₹40,000. We scope every engagement after a free audit, so you get a specific number rather than a package price.",
      },
      {
        q: "Is there a long-term contract?",
        a: "No lock-in before you have seen results. We work on rolling monthly engagements with a 30-day notice period. Longer commitments are available if you prefer them, usually at a better rate.",
      },
      {
        q: "Is my ad budget separate from your fee?",
        a: "Yes, always. Your media budget is paid by you, directly to Google or Meta, from a billing profile in your name. Our management fee is invoiced separately. You will never see the two blended into one number on an invoice from us.",
      },
      {
        q: "What is the smallest budget you will work with?",
        a: "For paid campaigns we ask for a minimum of roughly ₹20,000 a month in media spend, because below that there is not enough data to optimise honestly. SEO, web design and branding projects have no such floor and can start much smaller.",
      },
      {
        q: "Do you charge for the audit?",
        a: "No. The growth audit is free and yours to keep whether or not you hire us. It takes us a few hours of real work, so we only ask that you actually read it.",
      },
    ],
  },
  {
    id: "results",
    title: "Results & timelines",
    intro: "How long things take, and what counts as working.",
    icon: IconClock,
    items: [
      {
        q: "How long before I see results from SEO?",
        a: "Google Business Profile and technical fixes often move within two to four weeks. Competitive organic rankings usually take three to six months of consistent content, reviews and link building. Paid campaigns produce leads in the first week but take four to eight weeks to reach a stable cost per lead.",
      },
      {
        q: "What is included in the free growth audit?",
        a: "A review of your website's speed and conversion path, your Google Business Profile, your current rankings against local competitors, and where your enquiries come from today. You receive the findings in writing within 48 hours, with no obligation to hire us.",
      },
      {
        q: "Can you guarantee first-page rankings?",
        a: "No, and you should be wary of anyone who does. Nobody controls Google's ranking systems. What we do commit to is a measurable target cost per lead, a monthly report you can audit, and the freedom to leave with 30 days' notice if the numbers do not move.",
      },
      {
        q: "What do you report on each month?",
        a: "Enquiries received across calls, forms and WhatsApp; cost per qualified lead by channel; ranking movement on your money keywords and Maps position; and Core Web Vitals measured on real visitors. Impressions and reach appear only as context, never as the headline.",
      },
    ],
  },
  {
    id: "working",
    title: "Working together",
    intro: "Who does the work, and who owns it afterwards.",
    icon: IconOwnership,
    items: [
      {
        q: "Do I own my Google Ads account and website?",
        a: "Always. Every ad account, analytics property, domain and website we set up is created in your name with you as the owner. If you ever leave, everything stays with you — including the historical data.",
      },
      {
        q: "Who will I actually be talking to?",
        a: "The people running your campaigns. We are a small team in Banashankari, so there is no account manager relaying messages between you and someone you never meet. You get a direct WhatsApp line during working hours.",
      },
      {
        q: "What happens if I want to leave?",
        a: "Give 30 days' notice and we hand over cleanly: you already own every account, so there is nothing to transfer. We remove our access, send you the working files, and answer questions from whoever takes over for a fortnight afterwards.",
      },
      {
        q: "Do you white-label for other agencies?",
        a: "Yes, for SEO, web development and design. Message us with the scope and we will tell you honestly whether we have the capacity to take it on well.",
      },
    ],
  },
  {
    id: "services",
    title: "Services & scope",
    intro: "What we do, and what we will tell you to skip.",
    icon: IconSeo,
    items: [
      {
        q: "Which industries do you work with?",
        a: "Mostly local service businesses — clinics, real estate, education, interiors, retail, professional services and B2B firms around Bengaluru. If we do not think we can move the needle for your category, we will tell you at the audit stage.",
      },
      {
        q: "Can I hire you for just one service?",
        a: "Yes. Plenty of clients start with only Google Business Profile work, a single landing page, or a logo. We would rather do one thing properly than sell a bundle you do not need yet.",
      },
      {
        q: "Do you handle content and creative, or do I supply it?",
        a: "We handle it. Copy, statics, reels and page content are produced in-house and sent to you for approval before anything is published. If you have an in-house designer, we are happy to work to their brand guidelines instead.",
      },
      {
        q: "Will you rebuild my existing website or work with it?",
        a: "Whichever is cheaper for you. If your site is on a platform we can make fast and rankable, we fix it. If it is a page-builder site that will fight us on every Core Web Vital, we will say so and quote a rebuild rather than bill you monthly for patching it.",
      },
    ],
  },
  {
    id: "local",
    title: "Location & availability",
    intro: "Where we are and how to reach us.",
    icon: IconPin,
    items: [
      {
        q: "Where is Star Growth Hub located?",
        a: `We are at ${site.address.street}, near Bangalore One in BSK 1st Stage, ${site.address.locality}, ${site.address.city} ${site.address.postalCode} — close to Banashankari bus stand and metro station. We are open ${site.hours.label.toLowerCase()} and closed on Sundays.`,
      },
      {
        q: "Do you work with businesses outside Banashankari?",
        a: "Yes. We work across Bengaluru and with clients elsewhere in India remotely. Our office is in Banashankari, so south Bengaluru clients tend to see us in person more often, but location is not a requirement.",
      },
      {
        q: "Can I just walk in?",
        a: `You can, during working hours — ${site.hours.label}. A message first means someone who can actually answer your questions is at the desk rather than on a client call.`,
      },
      {
        q: "How quickly do you reply?",
        a: "Usually within two working hours on WhatsApp. Anything sent after 7pm or on a Sunday gets answered the next working morning.",
      },
    ],
  },
  {
    id: "audience",
    title: "If you are just starting out",
    intro: "For businesses with no marketing in place yet.",
    icon: IconAudience,
    items: [
      {
        q: "I have no website and no Google listing. Where do I start?",
        a: "With the Google Business Profile — it is free, it takes a week to set up properly, and for a local business it produces enquiries faster than anything else. A fast landing page comes second, ads third. We will not sell you a full website in month one if a profile and one page will do.",
      },
      {
        q: "Is SEO or Google Ads better for a new business?",
        a: "Ads first, SEO alongside. Ads tell you within a fortnight which searches actually convert for your business, and that evidence makes the SEO work far cheaper because you are no longer guessing which pages to build.",
      },
      {
        q: "How many enquiries should I expect?",
        a: "It depends entirely on search volume in your category and area, which is exactly what the free audit measures. We would rather show you a real number from your own market than quote an industry average that means nothing for a clinic in Padmanabhanagar.",
      },
    ],
  },
];

/** Flat list — used for FAQPage structured data on /faq. */
export const ALL_FAQS: Faq[] = FAQ_GROUPS.flatMap((g) => g.items);

/**
 * The eight questions asked most often, in the order a first-time visitor
 * tends to think of them. Shown on the home page.
 */
export const HOME_FAQS: Faq[] = [
  "Where is Star Growth Hub located?",
  "What does a digital marketing agency in Bengaluru actually cost?",
  "How long before I see results from SEO?",
  "Do I own my Google Ads account and website?",
  "Can you guarantee first-page rankings?",
  "Do you work with businesses outside Banashankari?",
  "Is there a long-term contract?",
  "What is included in the free growth audit?",
]
  .map((q) => ALL_FAQS.find((f) => f.q === q))
  .filter((f): f is Faq => Boolean(f));
