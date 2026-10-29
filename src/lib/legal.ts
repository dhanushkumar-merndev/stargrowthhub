/**
 * Privacy policy and terms of service.
 *
 * Written to describe what this site actually does — no cookies of our own,
 * no analytics, no form backend — so if any of that changes (an analytics
 * tag, a CRM, a booking widget), the privacy policy has to change with it.
 * The service terms mirror the promises made on /faq; keep the two in step.
 *
 * Body blocks: a string is a paragraph, a string[] is a bullet list. Both
 * accept the `**bold**` markup that RichText understands.
 */

import { site, fullAddress } from "./site";

export type LegalBlock = string | string[];

export type LegalSection = {
  id: string;
  title: string;
  body: LegalBlock[];
};

export type LegalDoc = {
  /** ISO date. Bump it whenever the substance changes. */
  updated: string;
  /** Plain-language summary shown above the full text. */
  summary: string[];
  sections: LegalSection[];
};

export const PRIVACY: LegalDoc = {
  updated: "2026-10-29",
  summary: [
    "This website sets **no cookies of its own** and runs **no analytics, ad pixels or tracking scripts**.",
    "The enquiry form does not send anything to a server. It writes a WhatsApp message on your device, and we only receive it if you press send.",
    "We use what you tell us to reply to you and to do the work you hire us for. We never sell it or hand it to anyone for their own marketing.",
    `You can ask us to show, correct or delete what we hold about you at any time — write to ${site.email}.`,
  ],
  sections: [
    {
      id: "who-we-are",
      title: "Who we are",
      body: [
        `${site.legalName} is a digital marketing agency at ${fullAddress}, ${site.address.countryName}. In this policy, “we”, “us” and “our” mean ${site.name}, and “you” means anyone who visits this website or contacts us.`,
        "For the personal data covered here, we are the **Data Fiduciary** under India’s Digital Personal Data Protection Act, 2023 — the party that decides why and how it is used.",
      ],
    },
    {
      id: "what-we-collect",
      title: "What we collect, and how",
      body: [
        "**When you use the enquiry form.** You give us your name, your WhatsApp number and what you need help with, and optionally your business name, budget and a short message. All of this stays in your browser until you press “Send on WhatsApp”. That opens WhatsApp with the message filled in, and nothing reaches us until you send it there. Close WhatsApp without sending and we never see it.",
        "**When you message, email or call us.** We receive whatever you choose to include, along with your phone number or email address.",
        "**When you hire us.** To run your marketing we need access to things like your ad accounts, analytics, Google Business Profile and website. Those accounts can hold your own customers’ data. The section on your customers’ data below covers how we handle it.",
        "**When you browse the site.** Our hosting provider, Cloudflare, handles the technical data every web request carries — IP address, browser type, the page requested and the time — to serve the site and protect it from abuse. We do not use it to identify you, and we do not collect anything else as you browse.",
      ],
    },
    {
      id: "how-we-use-it",
      title: "What we use it for",
      body: [
        [
          "Replying to your enquiry and preparing the free growth audit you asked for.",
          "Delivering, reporting on and invoicing the services you hire us for.",
          "Meeting our legal, tax and accounting obligations.",
        ],
        "We do not sell or rent your data, add you to a mailing list you did not ask to join, or share it with anyone for their own marketing. If we ever want to use your details for something not listed here, we will ask first.",
      ],
    },
    {
      id: "who-else",
      title: "Who else handles it",
      body: [
        "We are a small team and keep the list short. The services below process data on our behalf, or because you chose to use them to reach us:",
        [
          "**WhatsApp (Meta)** — carries the messages you send us, under WhatsApp’s own privacy policy.",
          "**Google** — our email, and the map embedded on the home and contact pages.",
          "**Cloudflare** — hosts and delivers this website.",
          "**The ad and analytics platforms you already use**, such as Google Ads and Meta Business, when we work on your accounts.",
          "**Our accountant and government authorities**, only where Indian law requires it.",
        ],
        "Some of these providers store data outside India, under their own safeguards and in line with Indian law.",
      ],
    },
    {
      id: "cookies",
      title: "Cookies and embedded content",
      body: [
        "This website does not set any cookies and does not use analytics or advertising trackers. Our fonts are served from our own domain, so loading a page does not contact a font service.",
        "Two things on the site are run by other companies and follow their own policies:",
        [
          "**The Google Maps embed.** When the map loads, your browser connects to Google, which can see your IP address and may set its own cookies. If you would rather it did not, use the written address and directions instead of the map.",
          "**WhatsApp links.** Tapping any WhatsApp button takes you to WhatsApp, which is governed by Meta’s terms and privacy policy.",
        ],
      ],
    },
    {
      id: "retention",
      title: "How long we keep it",
      body: [
        "We keep enquiry conversations for as long as they are useful for following up. If an enquiry does not turn into work, we delete it within 12 months, or sooner if you ask.",
        "For clients, we keep project records for the length of the engagement, and invoices and payment records for as long as Indian tax and accounting law requires. When an engagement ends, we remove our access to your accounts as part of the handover.",
      ],
    },
    {
      id: "your-rights",
      title: "Your rights",
      body: [
        "Under the Digital Personal Data Protection Act, 2023, you can:",
        [
          "Ask what personal data we hold about you and how we have used it.",
          "Have it corrected, completed or brought up to date.",
          "Have it deleted, unless the law requires us to keep it.",
          "Withdraw your consent at any time. We stop using the data from that point; anything already done stays lawful.",
          "Nominate someone to exercise these rights for you if you die or become unable to.",
          "Complain to us, and if we do not resolve it, take it to the Data Protection Board of India.",
        ],
        `To use any of these rights, write to ${site.email} or message us on WhatsApp. We will reply within 30 days, and usually much sooner.`,
      ],
    },
    {
      id: "security",
      title: "How we protect it",
      body: [
        "Only the people working on your enquiry or account can see it. We keep it in the accounts we use to run the business, not in spreadsheets passed around by email. No system is perfectly secure. If a breach affects your data, we will tell you, and the Data Protection Board where the law requires it.",
      ],
    },
    {
      id: "client-data",
      title: "Your customers’ data, when you hire us",
      body: [
        "When we work inside your ad accounts, analytics, CRM or website, the data there — your leads, customer lists, conversion records — belongs to you. For that data, **you are the Data Fiduciary and we act on your instructions** as your processor.",
        [
          "We use it only to deliver the work you hired us for.",
          "We do not copy it into our own systems beyond what the work needs, or use it for any other client.",
          "When the engagement ends, we hand back or delete any working copies and remove our access.",
        ],
        "You remain responsible for having a lawful basis to collect your customers’ data, and for any consent your own forms and ads need to ask for.",
      ],
    },
    {
      id: "children",
      title: "Children",
      body: [
        "Our services are for businesses, and this site is not meant for anyone under 18. We do not knowingly collect a child’s personal data. If you think a child has sent us their details, let us know and we will delete them.",
      ],
    },
    {
      id: "other-sites",
      title: "Links to other websites",
      body: [
        "Our articles sometimes link to other websites and tools. We are not responsible for how they handle your data, so check their privacy policies before sharing anything with them.",
      ],
    },
    {
      id: "changes",
      title: "Changes to this policy",
      body: [
        "If we change what we collect or how we use it — for example, by adding analytics to this site — we will update this page and the date at the top. If you are a client and the change affects you, we will tell you directly.",
      ],
    },
    {
      id: "contact",
      title: "Contact and grievances",
      body: [
        `For questions, requests or complaints about your personal data, contact ${site.name} at ${site.email}, or write to us at ${fullAddress}. We aim to resolve any grievance within 30 days.`,
      ],
    },
  ],
};

export const TERMS: LegalDoc = {
  updated: "2026-10-29",
  summary: [
    "If you have a signed proposal or agreement with us, **it takes priority** over anything here.",
    "Work runs **month to month with 30 days’ notice**. No lock-in unless you choose one.",
    "Your ad budget goes **straight from you to Google or Meta**. Our fee is invoiced separately.",
    "Every account we set up is **yours, in your name**. Once paid for, the work we make for you is yours too.",
    "We commit to honest work and transparent reporting. **Nobody can guarantee rankings or results**, and we won’t pretend to.",
  ],
  sections: [
    {
      id: "about",
      title: "About these terms",
      body: [
        `These terms cover your use of this website and the services ${site.legalName} provides. By using the site or hiring us, you agree to them.`,
        "Every engagement is scoped in a written proposal. Where your proposal or a signed agreement says something different from these terms, the proposal or agreement wins.",
      ],
    },
    {
      id: "website",
      title: "Using this website",
      body: [
        "The articles, guides and figures on this site are general information about marketing, not professional advice for your particular business. Results quoted from past clients describe what happened for them and are not a forecast for you.",
        "Please do not try to disrupt the site, gain unauthorised access to it, or copy its content in bulk. The text, design and graphics belong to us. You are welcome to quote short passages with a link back.",
      ],
    },
    {
      id: "audit",
      title: "The free growth audit",
      body: [
        "The audit is free and comes with no obligation to hire us. It is yours to keep and use however you like. We base it on publicly available information and anything you choose to share. Any estimates in it are our professional judgement, not promises.",
      ],
    },
    {
      id: "engagement",
      title: "Proposals and starting work",
      body: [
        "Your proposal sets out the scope, deliverables, timeline and fees. Work starts once you confirm the proposal in writing — a reply by WhatsApp or email counts — and we receive any upfront payment it specifies.",
        "Anything not listed in the proposal is outside the scope. If you want to add something, we will quote it before starting, so you never get a bill you did not expect.",
      ],
    },
    {
      id: "fees",
      title: "Fees, ad spend and payment",
      body: [
        [
          "**Our fees** are quoted in Indian rupees. GST is added where it applies.",
          "**Ad spend is separate.** You pay Google, Meta and other platforms directly, from a billing profile in your name. We never mix your media budget into our invoice.",
          "**Invoices** are due by the date shown on them. If one is overdue, we will remind you before pausing any work, and work resumes once the invoice is settled.",
          "**Third-party costs** you approve, such as domains, hosting, stock images, premium plugins or printing, are billed at cost or paid by you directly.",
        ],
      ],
    },
    {
      id: "term",
      title: "Duration and cancellation",
      body: [
        "Ongoing services such as SEO, ads management and social media run month to month. Either side can end them with **30 days’ written notice**. If you agreed to a longer commitment, usually for a better rate, its terms apply instead.",
        "Fixed-scope projects such as websites and branding are billed by the milestones in your proposal. If a project is cancelled part-way through, you pay for the work completed up to that point, and we hand over everything that work produced.",
        "When we part ways, we hand over cleanly. We remove our access to your accounts, send you the working files, and answer questions from whoever takes over for two weeks afterwards.",
      ],
    },
    {
      id: "your-part",
      title: "What we need from you",
      body: [
        [
          "Access to the accounts we need, and accurate information about your business, offers and pricing.",
          "Feedback and approvals within a reasonable time. If approvals are late, the timeline moves back by the same amount.",
          "Confirmation that the logos, photos, text and other material you give us are yours to use.",
          "Compliance with the rules for your industry — for example, advertising codes for healthcare, education or real estate. We will flag anything that looks risky, but you know your regulatory position best.",
        ],
      ],
    },
    {
      id: "approvals",
      title: "Content approvals",
      body: [
        "We send ads, posts, page copy and designs to you for approval before anything is published. Once you approve a piece, you are responsible for the claims it makes about your business.",
      ],
    },
    {
      id: "ownership",
      title: "Who owns what",
      body: [
        [
          "**Accounts** — every ad account, analytics property, Business Profile, domain and hosting account we set up is created in your name, with you as owner, from day one.",
          "**Work we make for you** — once the relevant invoice is paid, the website code, designs, copy and creative we produce for you belong to you.",
          "**Our own tools** — the templates, methods and know-how we bring to every client stay ours. You get a permanent licence to use whatever is built into your deliverables.",
          "**Third-party material** — stock photos, fonts, themes and plugins are licensed from their makers, on the makers’ terms.",
        ],
        "We may list you as a client and show work that has been published publicly in our portfolio. If you would rather we did not, just tell us.",
      ],
    },
    {
      id: "no-guarantees",
      title: "What we can and cannot promise",
      body: [
        "We promise skilled, honest work, a clear monthly report you can check for yourself, and straight answers when something is not working.",
        "We cannot guarantee rankings, ad approval, lead volume or revenue. Google, Meta and the other platforms control their own algorithms, policies and review processes, and they change them without notice. If they have an outage, change a policy, disapprove an ad or suspend an account, and we did not cause it, we are not responsible — but we will help you sort it out.",
      ],
    },
    {
      id: "confidentiality",
      title: "Confidentiality",
      body: [
        "We each keep the other’s non-public information confidential — your sales figures, customer data and plans, and our pricing and methods — and use it only for the work. This continues after the engagement ends. It does not cover information that is already public, or that the law requires us to disclose.",
      ],
    },
    {
      id: "liability",
      title: "Limits on liability",
      body: [
        "We are not liable for indirect or consequential losses, such as lost profits, lost data or lost business opportunities. Our total liability for any claim connected with our services is limited to the fees you paid us in the three months before the claim arose.",
        "Nothing in these terms limits liability that Indian law does not allow to be limited, such as liability for fraud.",
      ],
    },
    {
      id: "law",
      title: "Governing law and disputes",
      body: [
        `These terms are governed by the laws of India. If a problem comes up, we will both try to resolve it by talking first. If that fails, the courts at ${site.address.city}, ${site.address.region} have exclusive jurisdiction.`,
      ],
    },
    {
      id: "changes",
      title: "Changes to these terms",
      body: [
        "We may update these terms from time to time, and the date at the top of this page shows the latest version. Changes do not affect work already agreed in a proposal unless you agree to them.",
      ],
    },
    {
      id: "contact",
      title: "Contact",
      body: [
        `Questions about these terms? Email ${site.email}, message us on WhatsApp, or visit us at ${fullAddress} during working hours (${site.hours.label}).`,
      ],
    },
  ],
};
