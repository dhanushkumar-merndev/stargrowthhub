/**
 * Copy about the business itself — the things that belong on /about and in the
 * "why us" strip on the home page, kept out of the components so the wording
 * can be edited in one place.
 */

import {
  IconChart,
  IconHandshake,
  IconMessage,
  IconOwnership,
  IconPin,
  IconRupee,
  IconShield,
  IconSpeed,
  type Icon,
} from "@/components/Icons";

/** The four promises we repeat everywhere, because we can be held to all four. */
export const PROMISES: { title: string; body: string; icon: Icon }[] = [
  {
    title: "You own everything",
    body: "Ad accounts, analytics, domains, source files. Created in your name, handed over on day one, still yours if you leave.",
    icon: IconOwnership,
  },
  {
    title: "Numbers, not adjectives",
    body: "We report enquiries and cost per lead. Impressions and reach are context, never the headline on a report.",
    icon: IconChart,
  },
  {
    title: "No lock-in",
    body: "Rolling monthly engagements with 30 days' notice. If the work stops paying for itself, you should be free to stop.",
    icon: IconShield,
  },
  {
    title: "You talk to the team",
    body: "The people running your campaigns are the people replying on WhatsApp. No account manager in between.",
    icon: IconMessage,
  },
];

/**
 * The honest comparison. Written as "what usually happens" rather than naming
 * anyone — it is a description of a common experience, not an accusation.
 */
export const COMPARISON: { point: string; typical: string; ours: string }[] = [
  {
    point: "Account ownership",
    typical: "Campaigns run inside the agency's own account, invisible to you",
    ours: "Every account in your name, with you as owner from day one",
  },
  {
    point: "Reporting",
    typical: "A monthly deck of impressions, reach and engagement rate",
    ours: "Enquiries, cost per qualified lead and ranking movement",
  },
  {
    point: "Contract",
    typical: "Six or twelve months signed before a single result",
    ours: "Rolling monthly, 30 days' notice, no exit fee",
  },
  {
    point: "Who does the work",
    typical: "A pitch team you meet once, then an intern who executes",
    ours: "The same small team, reachable on WhatsApp during working hours",
  },
  {
    point: "Scope",
    typical: "A retainer bundle that includes things you did not ask for",
    ours: "Only what the audit says will move the number, quoted line by line",
  },
];

/** Why a Banashankari address matters for a Bengaluru client. */
export const LOCAL_REASONS: { title: string; body: string; icon: Icon }[] = [
  {
    title: "We know the search behaviour here",
    body: "What people in south Bengaluru type, in which language, and at what hour. That is not something you learn from a national keyword tool.",
    icon: IconPin,
  },
  {
    title: "We can stand in your shop",
    body: "For local businesses, the difference between a good campaign and a great one is usually something you only notice on site.",
    icon: IconHandshake,
  },
  {
    title: "Rates that fit a local P&L",
    body: "We price for businesses in Bengaluru, not for a client list in another currency. The audit will tell you if the maths does not work.",
    icon: IconRupee,
  },
  {
    title: "Same time zone, same day",
    body: "A campaign issue at 11am gets looked at at 11am, not at the start of someone else's working day.",
    icon: IconSpeed,
  },
];

/**
 * How the agency describes itself in prose. Kept here so /about and the
 * Organization description never drift apart.
 */
export const STORY: string[] = [
  "Star Growth Hub started with a straightforward observation: the businesses around us on 80 Feet Road were good at what they did and almost invisible online. The ones that had hired someone were usually paying a monthly fee for a report nobody read, in an ad account they could not log into.",
  "So we built the agency we would have wanted as a client. Everything is set up in your name. Every report leads with enquiries and cost per lead, because those are the only two numbers that reach your bank account. And nothing is locked in for a year before you have seen it work.",
  "We are deliberately small. That means we take on fewer clients than we could, and it means the person who audits your site is the person who fixes it. It also means we will tell you when a service you asked for is not the thing standing between you and more customers.",
];
