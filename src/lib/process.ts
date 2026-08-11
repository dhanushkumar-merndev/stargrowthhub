/**
 * How an engagement actually runs. The home page shows the four headline
 * steps; /process expands the same data with what happens inside each one.
 */

import {
  IconChart,
  IconClipboard,
  IconCompass,
  IconDocument,
  IconEye,
  IconMessage,
  IconOwnership,
  IconRefresh,
  IconRocket,
  type Icon,
} from "@/components/Icons";

export type Step = {
  n: string;
  title: string;
  /** Card copy on the home page. */
  body: string;
  duration: string;
  icon: Icon;
  /** The expanded breakdown shown on /process. */
  inside: string[];
  /** What lands in the client's hands at the end of the step. */
  output: string;
};

export const STEPS: Step[] = [
  {
    n: "01",
    title: "Free growth audit",
    body:
      "We look at your website, your Google Business Profile, your competitors' rankings and where your enquiries currently come from. You get the findings whether or not you hire us.",
    duration: "48 hours",
    icon: IconCompass,
    inside: [
      "Site speed and Core Web Vitals measured on real mobile data",
      "Google Business Profile scored against the businesses outranking you",
      "Keyword gaps against your three closest local competitors",
      "Every enquiry path on your site walked end to end, on a phone",
      "A read on what your current spend is actually returning",
    ],
    output: "A written audit, sent within 48 hours, yours to keep either way.",
  },
  {
    n: "02",
    title: "A plan with numbers on it",
    body:
      "Which channels, what budget, what we expect them to return and by when. No twelve-month lock-in before you have seen a single result.",
    duration: "Week 1",
    icon: IconClipboard,
    inside: [
      "Channel mix chosen for your margins, not our convenience",
      "Budget split between management and media, stated separately",
      "Target cost per lead and the volume that budget should buy",
      "The order of work, and what we are deliberately not doing yet",
      "A call to argue with any of it before anything is signed",
    ],
    output: "A one-page plan with the numbers we expect to hit and when.",
  },
  {
    n: "03",
    title: "Build and launch",
    body:
      "Site fixes, campaign builds, tracking, content. Everything is set up in accounts you own, so the work stays yours no matter what happens later.",
    duration: "Weeks 2–4",
    icon: IconRocket,
    inside: [
      "Accounts created in your name with you as owner, us as manager",
      "Conversion tracking wired before a single rupee of spend goes out",
      "Technical fixes, page builds and content shipped in priority order",
      "Campaigns launched small, then scaled once the data says to",
      "A shared dashboard you can open any day, not just on report day",
    ],
    output: "Live campaigns, live tracking, and logins that belong to you.",
  },
  {
    n: "04",
    title: "Report, refine, scale",
    body:
      "A monthly dashboard covering enquiries, cost per lead and rankings — plus a call to decide what gets more budget and what gets cut.",
    duration: "Ongoing",
    icon: IconRefresh,
    inside: [
      "Weekly optimisation: search terms, creative, bids, page fixes",
      "Monthly report on enquiries, cost per lead and rankings",
      "A call to decide what scales up and what gets cut",
      "Quarterly re-audit, because competitors move too",
      "Direct access to the people doing the work, not a middle layer",
    ],
    output: "A monthly dashboard you own, and a decision about where next month's budget goes.",
  },
];

/** What we need from the client — stated up front so nothing stalls in week two. */
export const WHAT_WE_NEED: { title: string; body: string; icon: Icon }[] = [
  {
    title: "Access, not passwords",
    body: "Manager-level access to your Google, Meta and analytics accounts. You stay the owner throughout.",
    icon: IconOwnership,
  },
  {
    title: "One decision-maker",
    body: "Someone who can approve creative and budget without a committee. It is the single biggest predictor of how fast this moves.",
    icon: IconMessage,
  },
  {
    title: "An honest brief",
    body: "What actually sells, what your margins are, and which enquiries waste your time. We cannot optimise for a target we do not know.",
    icon: IconDocument,
  },
  {
    title: "A month of patience",
    body: "Paid campaigns need four to six weeks to stabilise. Pulling a lever every three days is the most common way clients lose money.",
    icon: IconEye,
  },
];

/** What sits inside the monthly report. */
export const REPORTING = [
  { label: "Enquiries received", note: "Calls, forms and WhatsApp messages, deduplicated", icon: IconMessage },
  { label: "Cost per qualified lead", note: "By channel, compared with last month", icon: IconChart },
  { label: "Ranking movement", note: "Your money keywords, plus Maps position", icon: IconCompass },
  { label: "Site performance", note: "Core Web Vitals from real visitors, not lab tests", icon: IconRocket },
];
