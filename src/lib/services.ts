/**
 * The service catalogue — one source of truth for the home page summary, the
 * dedicated /services page, the footer, the marquee and the Service structured
 * data.
 *
 * `icon` holds a component *reference* from the site icon vocabulary, so this
 * stays a plain data module with no JSX in it.
 */

import {
  IconAds,
  IconAudience,
  IconBranding,
  IconChart,
  IconClipboard,
  IconDesktop,
  IconDocument,
  IconEdit,
  IconGlobe,
  IconLayers,
  IconLeads,
  IconLink,
  IconMail,
  IconMegaphone,
  IconMobile,
  IconSeo,
  IconSettings,
  IconSocial,
  IconSpeed,
  IconWeb,
  IconHandshake,
  IconClick,
  IconServer,
  type Icon,
} from "@/components/Icons";

export type Pillar = {
  /** Anchor id on /services — also used for deep links from the nav. */
  slug: string;
  title: string;
  /** One line for cards and menus. */
  short: string;
  /** Card paragraph on the home page. */
  blurb: string;
  /** The longer pitch, used on the services page only. */
  detail: string;
  icon: Icon;
  /** Chips under the card. */
  points: string[];
  /** Concrete artefacts the client receives. */
  deliverables: string[];
  /** "This is for you if…" — helps a visitor self-select. */
  fitFor: string[];
  /** What we hold ourselves to. */
  outcome: string;
  timeline: string;
};

export const PILLARS: Pillar[] = [
  {
    slug: "seo",
    title: "Search engine optimisation",
    short: "Rank for the searches that actually convert",
    blurb:
      "Technical audits, on-page work, content and link building that put you on page one for the searches that actually convert — then keep you there.",
    detail:
      "Most SEO work fails because it chases traffic instead of customers. We start from the searches that end in an enquiry — \"dentist in Jayanagar\", \"interior designers near me\", \"CA firm Basavanagudi\" — and work backwards: fix what is technically blocking you, build the pages those searches deserve, then earn the local signals and links that decide who sits in the top three.",
    icon: IconSeo,
    points: ["Technical SEO audits", "Local & Maps SEO", "Content strategy", "Link building"],
    deliverables: [
      "Full technical audit with prioritised fixes",
      "Keyword and intent map for every page",
      "Google Business Profile optimisation and posting",
      "On-page rewrites, schema and internal linking",
      "Monthly ranking and enquiry report",
    ],
    fitFor: [
      "You appear on page two for searches you should own",
      "Competitors with worse service outrank you on Maps",
      "Your site gets traffic but almost none of it calls",
    ],
    outcome: "Ranked in the local 3-pack for your money keywords, with enquiries you can count.",
    timeline: "First movement in 2–4 weeks, compounding from month three",
  },
  {
    slug: "google-ads",
    title: "Google Ads & PPC",
    short: "Every rupee traced to a lead you can count",
    blurb:
      "Search, Performance Max and retargeting campaigns built around conversion tracking, so every rupee is traceable to a lead you can count.",
    detail:
      "An ad account without conversion tracking is a slot machine. We rebuild campaigns around what a lead is actually worth to you: clean account structure, search terms pruned weekly, landing pages that match the ad, and tracking wired end to end so you can see which keyword produced which WhatsApp message.",
    icon: IconAds,
    points: ["Search campaigns", "Performance Max", "Conversion tracking", "Landing pages"],
    deliverables: [
      "Account build or rebuild in an account you own",
      "Conversion tracking for calls, forms and WhatsApp",
      "Negative keyword and search-term management",
      "Dedicated landing pages where they earn their keep",
      "Weekly optimisation, monthly cost-per-lead reporting",
    ],
    fitFor: [
      "You are spending on ads without knowing the cost per lead",
      "An agency runs your account but you cannot log into it",
      "You need enquiries this month, not in six months",
    ],
    outcome: "A stable, falling cost per qualified lead — and the data to prove where it came from.",
    timeline: "Live in week one, stable cost per lead by week six",
  },
  {
    slug: "social",
    title: "Meta & social media",
    short: "Instagram and Facebook that sell, not just post",
    blurb:
      "Instagram and Facebook campaigns plus the day-to-day content that makes them work — creative, community and reporting in one place.",
    detail:
      "Paid social only works when the organic feed behind it looks alive. We run both: a content calendar that gives people a reason to trust you, and Meta campaigns pointed at the audiences most likely to buy. Creative, captions, replies and reporting come from the same team, so the ads and the feed never contradict each other.",
    icon: IconSocial,
    points: ["Meta Ads", "Content calendars", "Reels & creative", "Community management"],
    deliverables: [
      "Monthly content calendar, approved before it runs",
      "Reels, statics and story creative produced in-house",
      "Meta Ads campaigns with pixel and event tracking",
      "Comment and DM management within working hours",
      "Monthly performance and audience report",
    ],
    fitFor: [
      "Your profile has followers but generates no enquiries",
      "You post whenever someone remembers to",
      "Your category is visual — food, interiors, fashion, fitness, clinics",
    ],
    outcome: "A feed that closes the sale your ads started, with tracked enquiries from both.",
    timeline: "Calendar live in week two, first campaign results by week four",
  },
  {
    slug: "web",
    title: "Web design & development",
    short: "Fast, mobile-first sites built to convert",
    blurb:
      "Fast, mobile-first websites engineered to convert. Built on Core Web Vitals from the first line, with enquiry paths that land in WhatsApp.",
    detail:
      "Most small-business sites in Bengaluru are slow, built on page builders and impossible to rank. We build fast, statically rendered sites with the enquiry path designed first — usually straight into WhatsApp, because that is where Indian customers actually reply. Speed is a requirement, not an optimisation pass at the end.",
    icon: IconWeb,
    points: ["Landing pages", "Business websites", "Speed optimisation", "WhatsApp enquiries"],
    deliverables: [
      "Design and build, mobile-first, on a domain you own",
      "Core Web Vitals inside Google's 'good' thresholds",
      "Structured data, sitemaps and clean URLs from day one",
      "WhatsApp, call and form enquiry paths with tracking",
      "Handover, training and a month of post-launch support",
    ],
    fitFor: [
      "Your site takes more than three seconds on mobile data",
      "You cannot edit your own website without paying someone",
      "Visitors arrive and leave without ever contacting you",
    ],
    outcome: "A site that loads fast, ranks cleanly and turns visits into WhatsApp conversations.",
    timeline: "Landing page in 1–2 weeks, full site in 3–5 weeks",
  },
  {
    slug: "branding",
    title: "Branding & design",
    short: "Look like the obvious choice in your category",
    blurb:
      "Logos, identity systems, print and outdoor. The work that makes a small business look like the obvious choice in its category.",
    detail:
      "Branding is not a logo — it is the reason someone picks you over the identical shop two doors down. We build identity systems that hold up everywhere they land: signage on 80 Feet Road, a hoarding on Outer Ring Road, an Instagram grid, a quotation PDF. One set of rules, applied consistently, doing the persuading before you speak.",
    icon: IconBranding,
    points: ["Logo design", "Brand identity", "Print & billboards", "Graphic design"],
    deliverables: [
      "Logo suite in every format you will ever be asked for",
      "Colour, type and usage guidelines in one document",
      "Stationery, signage and packaging artwork",
      "Billboard, hoarding and print-ad design",
      "Editable source files, handed over and yours",
    ],
    fitFor: [
      "Your branding was made once, years ago, by whoever was free",
      "Every vendor renders your logo slightly differently",
      "You are entering a category where the competition looks sharper",
    ],
    outcome: "One coherent identity that works at Instagram size and billboard size.",
    timeline: "Identity in 2–3 weeks, full system in 4–6 weeks",
  },
  {
    slug: "lead-generation",
    title: "Lead generation",
    short: "Fill the pipeline, and know what filled it",
    blurb:
      "Email, affiliate and B2B outreach that fills the pipeline — with tracking that shows which channel produced which customer.",
    detail:
      "For B2B and high-ticket businesses, the buyer is not searching yet. We build the outbound side: segmented lists, email sequences that read like a person wrote them, affiliate and referral routes, and attribution that survives a six-month sales cycle so you know which channel earned the contract.",
    icon: IconLeads,
    points: ["Email marketing", "B2B outreach", "Affiliate marketing", "Attribution"],
    deliverables: [
      "Prospect list building and segmentation",
      "Email sequences, written and scheduled",
      "Affiliate and referral programme setup",
      "CRM-ready lead capture and routing",
      "Channel-by-channel attribution reporting",
    ],
    fitFor: [
      "Your deals are large and the buying cycle is long",
      "You sell to businesses rather than walk-in customers",
      "Referrals carry you and you want a second reliable channel",
    ],
    outcome: "A predictable second pipeline that does not depend on someone remembering you.",
    timeline: "First sequences live in 2 weeks, pipeline data from month two",
  },
];

export function getPillar(slug: string) {
  return PILLARS.find((p) => p.slug === slug);
}

/**
 * Every service listed on the Google Business Profile, verbatim — the marquee,
 * the services page grid and the offer catalogue all read from here.
 */
export const ALL_SERVICES: { name: string; icon: Icon }[] = [
  { name: "Search engine optimisation", icon: IconSeo },
  { name: "Paid advertising", icon: IconAds },
  { name: "Social media marketing", icon: IconSocial },
  { name: "Web design", icon: IconDesktop },
  { name: "Branding", icon: IconBranding },
  { name: "Logo design", icon: IconEdit },
  { name: "Graphic design", icon: IconLayers },
  { name: "Lead generation", icon: IconLeads },
  { name: "Pay-per-click consulting", icon: IconClick },
  { name: "Content management", icon: IconDocument },
  { name: "Email marketing", icon: IconMail },
  { name: "Link building", icon: IconLink },
  { name: "Technical audits", icon: IconServer },
  { name: "Affiliate marketing", icon: IconHandshake },
  { name: "Business to business", icon: IconAudience },
  { name: "Direct mail", icon: IconMail },
  { name: "Outdoor advertising", icon: IconMegaphone },
  { name: "Billboard design and consulting", icon: IconClipboard },
  { name: "Print ads", icon: IconDocument },
  { name: "Digital marketing", icon: IconGlobe },
  { name: "Online service", icon: IconSettings },
];

/** Plain names — for schema, the marquee and anywhere an icon is noise. */
export const SERVICE_NAMES = ALL_SERVICES.map((s) => s.name);

/**
 * Categories we actually have reps in. Being specific beats claiming "all
 * industries" — a visitor recognises themselves or rules themselves out, and
 * both outcomes save everyone a call.
 */
export const INDUSTRIES: { name: string; note: string; icon: Icon }[] = [
  {
    name: "Clinics & healthcare",
    note: "Dentists, dermatologists, physiotherapy and diagnostic centres competing on Maps.",
    icon: IconSpeed,
  },
  {
    name: "Real estate & interiors",
    note: "Builders, brokers and interior studios where one lead pays for the quarter.",
    icon: IconLayers,
  },
  {
    name: "Education & coaching",
    note: "Institutes and tutors with admission cycles that live or die on timing.",
    icon: IconDocument,
  },
  {
    name: "Retail & D2C",
    note: "Shops and brands that need footfall from Maps and orders from Instagram.",
    icon: IconMobile,
  },
  {
    name: "Professional services",
    note: "CAs, lawyers, consultants and agencies selling on credibility.",
    icon: IconClipboard,
  },
  {
    name: "B2B & manufacturing",
    note: "Long sales cycles where attribution matters more than impressions.",
    icon: IconChart,
  },
];
