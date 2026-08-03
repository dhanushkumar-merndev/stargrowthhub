/**
 * Blog content.
 *
 * Posts live as structured data rather than MDX so the whole site stays a
 * zero-dependency static export — every article is pre-rendered to plain
 * HTML at build time, which is exactly what crawlers want.
 *
 * To add a post: append an object to POSTS. The route, sitemap entry,
 * structured data and related-post links all pick it up automatically.
 */

export type Block =
  | { t: "p"; c: string }
  | { t: "h2"; c: string }
  | { t: "h3"; c: string }
  | { t: "ul"; c: string[] }
  | { t: "ol"; c: string[] }
  | { t: "quote"; c: string; by?: string }
  | { t: "callout"; title: string; c: string }
  | { t: "stats"; c: { value: string; label: string }[] };

export type Post = {
  slug: string;
  title: string;
  /** Meta description — keep under ~155 characters. */
  description: string;
  category: string;
  keywords: string[];
  publishedAt: string;
  updatedAt?: string;
  readingMinutes: number;
  author: string;
  /** Two-tone gradient used for the card + hero art. */
  accent: [string, string];
  blocks: Block[];
  faqs?: { q: string; a: string }[];
};

export const POSTS: Post[] = [
  {
    slug: "local-seo-google-maps-bengaluru",
    title: "How to Rank in the Google Maps 3-Pack in Bengaluru (2026 Checklist)",
    description:
      "A practical, step-by-step local SEO checklist to get your Bengaluru business into Google's Maps 3-pack — written by an agency that does it every week.",
    category: "Local SEO",
    keywords: [
      "local SEO Bengaluru",
      "Google Maps ranking",
      "Google Business Profile optimisation",
      "3-pack ranking Bangalore",
      "local SEO checklist 2026",
    ],
    publishedAt: "2026-07-28",
    readingMinutes: 9,
    author: "Star Growth Hub",
    accent: ["#E01B2D", "#FF7A85"],
    blocks: [
      {
        t: "p",
        c: "When someone in Jayanagar searches “dentist near me”, Google shows a map and three business listings above every other result. That block — the 3-pack — takes the overwhelming majority of clicks for local searches. Everything below it is fighting for scraps.",
      },
      {
        t: "p",
        c: "The good news: ranking in the 3-pack is far more winnable than ranking nationally. It is a local game with local competitors, and most of them have never optimised their listing properly. Here is the exact checklist we run for our Bengaluru clients.",
      },
      { t: "h2", c: "First, understand what Google actually measures" },
      {
        t: "p",
        c: "Google's local algorithm weighs three things. Every task in this guide maps back to one of them:",
      },
      {
        t: "ul",
        c: [
          "**Relevance** — how well your profile matches what the person searched. Driven by your category, services, description and the words in your reviews.",
          "**Distance** — how close you are to the searcher. You cannot change this, but you *can* change how wide your relevance radius stretches.",
          "**Prominence** — how well known and well regarded you are. Driven by review volume and velocity, citations, and links to your website.",
        ],
      },
      {
        t: "callout",
        title: "The distance trap",
        c: "You will never rank for “SEO agency Whitefield” from an office in Banashankari — and chasing it wastes budget. Win your actual catchment area first, then expand with location-specific landing pages backed by real proof.",
      },
      { t: "h2", c: "Step 1: Fix the foundations of your Google Business Profile" },
      {
        t: "p",
        c: "Most listings we audit lose easy ground here. Work through every one of these:",
      },
      {
        t: "ol",
        c: [
          "**Pick the most specific primary category.** “Marketing agency” beats “Advertising agency” if marketing is what you do. Your primary category carries far more weight than secondary ones — treat it as the single most important field on the profile.",
          "**Add every relevant secondary category**, but do not stuff. Five accurate categories outperform fifteen loose ones.",
          "**Make your NAP identical everywhere.** Name, address and phone must match character-for-character across your website, Justdial, IndiaMART, Sulekha, LinkedIn and every directory. “80 Feet Rd” on one and “80 Feet Road” on another is a real inconsistency signal.",
          "**Set precise opening hours**, including holiday hours. Profiles that go stale on hours get quietly demoted.",
          "**Drop your service-area pins** if you travel to clients, and list individual services with descriptions — each one is an indexable relevance signal.",
          "**Write the 750-character description** using the words customers actually search, not industry jargon.",
        ],
      },
      { t: "h2", c: "Step 2: Treat reviews as a ranking system, not a vanity metric" },
      {
        t: "p",
        c: "Review count, average rating, recency and *keyword content* all feed prominence. A steady trickle beats a one-time burst — twenty reviews arriving in a single week looks exactly like what it usually is, and Google's filters agree.",
      },
      {
        t: "p",
        c: "What consistently works for our clients:",
      },
      {
        t: "ul",
        c: [
          "Ask in person at the moment the customer is happiest, then follow up with a WhatsApp link to your review form within the hour.",
          "Use a short link so nobody has to hunt for the review button. Friction kills response rates more than reluctance does.",
          "Reply to **every** review, positive or negative, within 48 hours. Your replies are indexed — a reply mentioning “web design in Banashankari” is a legitimate relevance signal.",
          "Never buy reviews. Google's filters are far better than they were in 2020, and a purge can cost you years of accumulated trust.",
        ],
      },
      {
        t: "stats",
        c: [
          { value: "76%", label: "of local searches result in a visit or call within 24 hours" },
          { value: "3×", label: "more clicks for 3-pack listings than the first organic result" },
          { value: "48h", label: "target window for replying to any new review" },
        ],
      },
      { t: "h2", c: "Step 3: Post weekly, and post like a human" },
      {
        t: "p",
        c: "Google Posts are underused because they expire and feel like busywork. They still matter: an actively updated profile signals an actively trading business. One post a week — an offer, a finished project, a customer question answered — is enough. Add a photo to every one.",
      },
      {
        t: "p",
        c: "Photos deserve their own mention. Profiles with 20+ genuine photos consistently outperform sparse ones. Shoot your storefront, your team, your work in progress, and your finished results. Skip the stock imagery; Google's image classifiers and your customers both spot it instantly.",
      },
      { t: "h2", c: "Step 4: Build local relevance on your own website" },
      {
        t: "p",
        c: "Your Business Profile does not rank in isolation — Google reads your website to corroborate it. Three things move the needle:",
      },
      {
        t: "h3",
        c: "A real location page",
      },
      {
        t: "p",
        c: "Not a contact form with a map embed. A page with your full address in crawlable text, embedded map, opening hours, parking and landmark directions, and genuine detail about the area you serve.",
      },
      { t: "h3", c: "LocalBusiness structured data" },
      {
        t: "p",
        c: "Mark up your name, address, phone, geo-coordinates, opening hours and aggregate rating in JSON-LD. This removes any ambiguity about who and where you are — and it is the mechanism behind star ratings appearing in search results.",
      },
      { t: "h3", c: "Service pages that name the neighbourhood" },
      {
        t: "p",
        c: "One page per service, each mentioning the localities you genuinely serve. Write them for humans first — a page that reads like keyword soup converts nobody, and since Google's helpful-content systems matured it does not rank either.",
      },
      { t: "h2", c: "Step 5: Citations and local links" },
      {
        t: "p",
        c: "Citations are mentions of your NAP on other sites. In India the ones worth claiming are Justdial, Sulekha, IndiaMART, TradeIndia, Yellow Pages India, and your industry's trade directories. Claim them, make the details identical, then stop — citation building has sharply diminishing returns past the first twenty.",
      },
      {
        t: "p",
        c: "Local links are where the real leverage sits, and they are unglamorous: sponsor a neighbourhood event, join the local trade association, partner with a complementary business and cross-link case studies, get quoted in a Bengaluru publication. Five of these beat five hundred directory submissions.",
      },
      { t: "h2", c: "What to expect, honestly" },
      {
        t: "p",
        c: "Profile fixes can show movement in two to four weeks. Review velocity and local links compound over three to six months. Anyone promising a 3-pack position in thirty days is either working in a market with no competition or telling you what you want to hear.",
      },
      {
        t: "quote",
        c: "Local SEO is not a launch, it is a habit. The businesses that win are the ones still posting, still asking for reviews, and still updating their services in month nine.",
      },
    ],
    faqs: [
      {
        q: "How long does it take to rank in the Google Maps 3-pack in Bengaluru?",
        a: "Profile-level fixes often show movement in two to four weeks. Competitive categories in central Bengaluru usually take three to six months of consistent review generation, local link building and on-site work before you hold a stable 3-pack position.",
      },
      {
        q: "Do I need a physical address to rank on Google Maps?",
        a: "You need a genuine business address that you can verify, but you can hide it and operate as a service-area business if you visit customers rather than receive them. Virtual offices and coworking desks are risky — Google actively removes listings it identifies as address-only.",
      },
      {
        q: "How many Google reviews do I need to compete?",
        a: "Look at the businesses currently in the 3-pack for your main keyword. Matching their review count and beating their recency is a realistic target. In most Bengaluru neighbourhood categories that means 30 to 80 reviews with a steady flow of new ones.",
      },
    ],
  },

  {
    slug: "google-ads-vs-meta-ads-bengaluru",
    title: "Google Ads vs Meta Ads: Where Should a Bengaluru Business Spend First?",
    description:
      "A straight comparison of Google Ads and Meta Ads for Bengaluru small businesses — which channel suits which intent, realistic costs, and how to split a first budget.",
    category: "Paid Advertising",
    keywords: [
      "Google Ads vs Facebook Ads",
      "PPC agency Bengaluru",
      "Meta Ads India cost",
      "digital advertising Bangalore",
      "cost per lead India",
    ],
    publishedAt: "2026-07-14",
    readingMinutes: 8,
    author: "Star Growth Hub",
    accent: ["#9E0C1A", "#D9202F"],
    blocks: [
      {
        t: "p",
        c: "This is the question we field most often, and the honest answer is that it depends on one variable: does demand for what you sell already exist, or do you have to create it?",
      },
      {
        t: "p",
        c: "Get that right and the channel picks itself.",
      },
      { t: "h2", c: "The one-line difference" },
      {
        t: "ul",
        c: [
          "**Google Ads harvests existing demand.** Someone is already searching “emergency plumber Basavanagudi”. You pay to be the answer. High intent, higher cost per click, shorter path to a sale.",
          "**Meta Ads create demand.** Nobody opens Instagram looking for your yoga studio. You interrupt them with something compelling. Lower cost per click, more volume, a longer road to purchase.",
        ],
      },
      { t: "h2", c: "Choose Google Ads first if…" },
      {
        t: "ul",
        c: [
          "Your service is something people actively search for when a need arises — repairs, medical, legal, tuition, packers and movers, emergency trades.",
          "The purchase is urgent or problem-driven. Urgency collapses the consideration window and Google captures it at exactly the right moment.",
          "Your average order value comfortably absorbs a ₹40–₹250 click. In competitive Bengaluru categories such as real estate, education and healthcare, clicks land at the top of that band.",
          "You already know your numbers well enough to say what a lead is worth to you.",
        ],
      },
      { t: "h2", c: "Choose Meta Ads first if…" },
      {
        t: "ul",
        c: [
          "Your product is visual — interiors, fashion, food, salons, fitness, events, real estate walkthroughs.",
          "It is an impulse or discovery purchase rather than a researched one.",
          "Search volume for your category is genuinely thin. If nobody is searching, no amount of Google budget will manufacture the queries.",
          "You want to build an audience you can retarget cheaply for months afterwards.",
        ],
      },
      {
        t: "callout",
        title: "The move most agencies skip",
        c: "Run Meta first to build a warm audience, then retarget that audience on Google. Retargeted search clicks convert dramatically better than cold ones, and warm Meta audiences cost a fraction of cold prospecting.",
      },
      { t: "h2", c: "What things actually cost in Bengaluru" },
      {
        t: "p",
        c: "Rough 2026 ranges from campaigns we manage. Treat them as calibration, not a quote — your category, creative and landing page move these numbers substantially.",
      },
      {
        t: "stats",
        c: [
          { value: "₹18–₹250", label: "Google Ads cost per click, depending on category" },
          { value: "₹4–₹35", label: "Meta Ads cost per click for most local businesses" },
          { value: "₹250–₹2,500", label: "typical cost per qualified lead across both" },
        ],
      },
      {
        t: "p",
        c: "The spread inside those ranges is mostly not about the platform. It is about landing page quality, offer strength, and how fast you follow up. We have watched an identical campaign halve its cost per lead purely by moving the enquiry from an email form to WhatsApp.",
      },
      { t: "h2", c: "How to split a first ₹50,000" },
      {
        t: "p",
        c: "For a typical local service business starting from zero, this split de-risks the first two months:",
      },
      {
        t: "ol",
        c: [
          "**₹30,000 to Google Search** — exact and phrase match on your three highest-intent keywords. No broad match on day one; it will spend your budget educating the algorithm.",
          "**₹15,000 to Meta** — one prospecting campaign, three creative variants, tightly geo-fenced to the areas you actually serve.",
          "**₹5,000 to retargeting** across both, aimed at anyone who visited but did not enquire. This is almost always the cheapest conversion you will buy.",
        ],
      },
      {
        t: "p",
        c: "Give it six weeks before drawing conclusions. Anything less and you are reading noise.",
      },
      { t: "h2", c: "The mistakes that waste the most money" },
      {
        t: "ul",
        c: [
          "**No conversion tracking.** If you cannot see which keyword produced the enquiry, you are not running ads — you are donating. Set this up before the first rupee is spent.",
          "**Sending paid traffic to your homepage.** Every campaign deserves a page that answers the exact query it targets.",
          "**Ignoring negative keywords.** Without them you will pay for “free”, “jobs”, “salary” and “course” clicks for months.",
          "**Judging too early.** Algorithms need conversion volume to learn. Killing a campaign at day four guarantees you never find out whether it worked.",
          "**Slow follow-up.** A lead contacted within five minutes converts several times better than one contacted the next day. Your ad budget cannot fix a slow phone.",
        ],
      },
      { t: "h2", c: "The short answer" },
      {
        t: "p",
        c: "If people search for what you sell, start with Google. If they need to see it to want it, start with Meta. If you can afford both, run Meta for reach and Google for capture — and put your retargeting budget where it belongs, on the people who already raised their hand.",
      },
    ],
    faqs: [
      {
        q: "What is a realistic monthly ad budget for a small business in Bengaluru?",
        a: "₹25,000 to ₹50,000 per month in media spend is enough to gather meaningful data in most local categories. Below roughly ₹15,000 the campaigns rarely accumulate enough conversions for the platforms to optimise properly.",
      },
      {
        q: "Should I run Google Ads if I already rank organically?",
        a: "Usually yes, at least for your highest-intent commercial keywords. Owning both the ad slot and the organic listing increases total clicks rather than cannibalising them, and it denies a competitor the space directly above you.",
      },
      {
        q: "How long before Google Ads becomes profitable?",
        a: "Expect four to eight weeks of learning and optimisation before cost per lead stabilises. Campaigns that look profitable in week one are usually running on too little data to trust.",
      },
    ],
  },

  {
    slug: "website-traffic-but-no-leads",
    title: "Your Website Gets Traffic But No Leads — 9 Fixes That Actually Work",
    description:
      "Traffic without enquiries is a conversion problem, not a marketing one. Nine specific, tested fixes that turn existing visitors into leads.",
    category: "Conversion",
    keywords: [
      "website not converting",
      "increase website leads",
      "conversion rate optimisation India",
      "web design Bengaluru",
      "landing page conversion",
    ],
    publishedAt: "2026-06-30",
    readingMinutes: 7,
    author: "Star Growth Hub",
    accent: ["#C2152A", "#FF6B78"],
    blocks: [
      {
        t: "p",
        c: "A thousand visitors a month and three enquiries is not a traffic problem. Pouring more budget into the top of that funnel just moves more people past the same broken step.",
      },
      {
        t: "p",
        c: "Here are the nine issues we find most often when we audit a site that gets attention but no action — roughly in order of how much they cost.",
      },
      { t: "h2", c: "1. The page never says what you do, plainly" },
      {
        t: "p",
        c: "“Empowering brands through synergistic solutions” tells a visitor nothing. A stranger should understand what you sell, who it is for, and where you operate within about five seconds of landing. Say it in the headline, in the words a customer would use.",
      },
      { t: "h2", c: "2. Your call to action asks for too much" },
      {
        t: "p",
        c: "“Request a proposal” is a big commitment from someone who arrived ninety seconds ago. “Send us a WhatsApp” is not. Lower the height of the first step and volume rises immediately — you can qualify afterwards.",
      },
      {
        t: "callout",
        title: "Why WhatsApp outperforms forms in India",
        c: "A contact form is a black box — the visitor submits and hears nothing. WhatsApp is a conversation they already trust, on an app they already have open, with a visible record that the message was delivered. Across our clients, switching the primary CTA to WhatsApp routinely lifts enquiry volume by 40–120%.",
      },
      { t: "h2", c: "3. Nothing proves you are real" },
      {
        t: "p",
        c: "Visitors arrive sceptical by default. Reviews with names, a visible office address, photographs of actual people, named case studies with numbers — every one of these removes a reason to leave. A 5.0 rating is worth surprisingly little if it is buried in the footer instead of sitting beside the button.",
      },
      { t: "h2", c: "4. The site is slow on a mid-range Android phone" },
      {
        t: "p",
        c: "Not on your laptop on office wifi. On a ₹15,000 phone on 4G, which is how most of your traffic actually arrives. Every additional second before the page becomes usable measurably reduces conversions. Compress your images, drop the unused libraries, and stop loading four tracking scripts before the content paints.",
      },
      { t: "h2", c: "5. Your form asks for eight things" },
      {
        t: "p",
        c: "Every field is a chance to abandon. Name, number, and what they need is genuinely enough to start a conversation. Company size, budget range and how they heard about you can wait until you are talking.",
      },
      { t: "h2", c: "6. There is no price signal anywhere" },
      {
        t: "p",
        c: "You do not have to publish a rate card. But “projects typically start from ₹40,000” filters out the people who were never going to buy and reassures the ones who were. Total silence on price sends serious buyers to a competitor who was willing to be direct.",
      },
      { t: "h2", c: "7. The phone number is not tappable" },
      {
        t: "p",
        c: "Still remarkably common. Every phone number should be a `tel:` link, every WhatsApp number a `wa.me` link, and both should be reachable without scrolling on mobile.",
      },
      { t: "h2", c: "8. You are invisible to the people who left" },
      {
        t: "p",
        c: "Most first-time visitors will not convert — that is normal, not a failure. Without a retargeting pixel installed, every one of them is gone permanently. Install it today even if you do not plan to run retargeting for months; audiences build retroactively from the day the pixel goes live, never before.",
      },
      { t: "h2", c: "9. Nobody follows up fast enough" },
      {
        t: "p",
        c: "The single highest-leverage fix on this list, and it is not on the website at all. Leads contacted within five minutes convert several times better than leads contacted the following day. If enquiries land in an inbox nobody watches after 6pm, fix that before you spend another rupee on traffic.",
      },
      { t: "h2", c: "How to work through this" },
      {
        t: "ol",
        c: [
          "Open your own site on a mid-range phone, on mobile data, and try to enquire. Time it. Most people find at least three of the nine problems in that single exercise.",
          "Fix the headline and the primary call to action first — they touch every visitor.",
          "Then speed, then proof, then form length.",
          "Change one thing at a time and give each change two weeks, or you will never know what worked.",
        ],
      },
      {
        t: "quote",
        c: "Doubling conversion rate is almost always cheaper than doubling traffic — and the gain compounds against every rupee you spend on ads afterwards.",
      },
    ],
    faqs: [
      {
        q: "What is a good conversion rate for a small business website?",
        a: "For a local service business, 2–5% of visitors making an enquiry is healthy. Dedicated landing pages receiving matched paid traffic should reach 5–12%. Below 1% almost always points to a message, speed or trust problem rather than a traffic one.",
      },
      {
        q: "Is WhatsApp better than a contact form for lead generation in India?",
        a: "For most local businesses, yes. WhatsApp has near-universal adoption, gives the customer visible delivery confirmation, and lets you reply in minutes. The strongest setup is a short form that composes a pre-filled WhatsApp message on submit — you capture structured details and still land in a channel people answer.",
      },
    ],
  },

  {
    slug: "digital-marketing-cost-bengaluru",
    title: "What Digital Marketing Actually Costs in Bengaluru (2026 Pricing Guide)",
    description:
      "Real 2026 price ranges for SEO, Google Ads, social media and web design in Bengaluru — what each tier includes, and how to spot underpricing that will cost you.",
    category: "Pricing",
    keywords: [
      "digital marketing cost Bengaluru",
      "SEO packages price India",
      "social media management cost",
      "website design cost Bangalore",
      "marketing agency pricing 2026",
    ],
    publishedAt: "2026-06-16",
    readingMinutes: 8,
    author: "Star Growth Hub",
    accent: ["#7E0A16", "#C2152A"],
    blocks: [
      {
        t: "p",
        c: "Almost nobody publishes prices, which leaves business owners collecting quotes that range from ₹5,000 to ₹1,50,000 for what sounds like the same thing. Here is what the market genuinely looks like in Bengaluru in 2026, and what separates the tiers.",
      },
      { t: "h2", c: "Search engine optimisation" },
      {
        t: "ul",
        c: [
          "**₹8,000 – ₹15,000/month** — Local SEO only. Google Business Profile management, citations, a handful of on-page fixes. Realistic for a single-location business with modest competition.",
          "**₹20,000 – ₹45,000/month** — Full local + organic. Technical fixes, content production, link building, service pages. This is where most serious small businesses land.",
          "**₹50,000 – ₹1,50,000/month** — Competitive or multi-location campaigns. Dedicated content teams, digital PR, large-scale technical work.",
        ],
      },
      {
        t: "callout",
        title: "On the ₹3,000 SEO package",
        c: "At that price the maths does not allow for a human doing skilled work. It buys automated directory submissions and spun content — which at best does nothing and at worst earns a manual penalty that takes months to unwind. Doing nothing is genuinely a better option.",
      },
      { t: "h2", c: "Google Ads management" },
      {
        t: "p",
        c: "Charged as a percentage of spend, a flat retainer, or a hybrid. Typical structures:",
      },
      {
        t: "ul",
        c: [
          "**12–20% of ad spend** for accounts above roughly ₹1,00,000/month in media.",
          "**₹12,000 – ₹30,000/month flat** for smaller accounts, where a percentage would not cover the work.",
          "**Setup fee of ₹15,000 – ₹40,000** for a new account — genuine campaign architecture, tracking and landing pages take real time.",
        ],
      },
      {
        t: "p",
        c: "One thing to insist on: the ad account must be in your name, with you as owner. If an agency runs your ads inside their own account, you lose every bit of historical data the day you leave. This is a standard tactic and a completely unnecessary one.",
      },
      { t: "h2", c: "Social media management" },
      {
        t: "ul",
        c: [
          "**₹10,000 – ₹20,000/month** — 8–12 posts, basic graphics, scheduling, community replies.",
          "**₹25,000 – ₹50,000/month** — Adds original photography or video, reels, strategy and reporting.",
          "**₹60,000+/month** — Full content production, dedicated shoots, influencer coordination.",
        ],
      },
      {
        t: "p",
        c: "Note that paid ad spend is separate from management fees in every one of these tiers. If a quote does not make that distinction explicitly, ask before signing.",
      },
      { t: "h2", c: "Websites" },
      {
        t: "stats",
        c: [
          { value: "₹25k–₹60k", label: "Landing page or 3–5 page brochure site" },
          { value: "₹75k–₹2L", label: "Custom 10–20 page business site with CMS" },
          { value: "₹1.5L–₹6L", label: "E-commerce or web application" },
        ],
      },
      {
        t: "p",
        c: "The variable that drives cost most is not page count — it is how much of the content, photography and structure you supply versus how much the agency has to create.",
      },
      { t: "h2", c: "How to read a quote properly" },
      {
        t: "ol",
        c: [
          "**Ask what you own.** Domain, hosting, ad accounts, analytics, source code, content. The answer should be “all of it, in your name”.",
          "**Ask who does the work.** A named person you can talk to, or an unnamed pool? Both are fine — knowing which changes what you should expect.",
          "**Ask what happens in month one.** A specific answer signals a real plan. A vague one signals you are buying hours, not outcomes.",
          "**Ask for a client in your category** you can actually call.",
          "**Check the exit terms.** Notice period, data handover, whether anything stops working the day you leave.",
        ],
      },
      { t: "h2", c: "Where your first rupee should go" },
      {
        t: "p",
        c: "If your budget is genuinely limited, sequence beats spread. In order:",
      },
      {
        t: "ol",
        c: [
          "A fast, clear website that makes enquiring easy. Everything downstream multiplies against this.",
          "Google Business Profile plus a real review habit. Highest return per rupee available to a local business in India, full stop.",
          "One paid channel, tracked properly, run long enough to learn something.",
          "SEO content, which compounds — but slowly, and only if the three above are already working.",
        ],
      },
      {
        t: "quote",
        c: "Spreading ₹20,000 across five channels reliably produces nothing. Putting it behind one channel for six months produces data you can actually act on.",
      },
    ],
    faqs: [
      {
        q: "How much should a small business in Bengaluru spend on digital marketing?",
        a: "A common benchmark is 5–10% of revenue, weighted toward the higher end while you are still growing. In practice most Bengaluru small businesses start between ₹25,000 and ₹60,000 per month across management fees and ad spend combined.",
      },
      {
        q: "Are cheap SEO packages worth it?",
        a: "Below roughly ₹8,000 a month there is not enough budget for skilled human work, so these packages rely on automated submissions and low-quality content. At best nothing happens; at worst you inherit a link profile that needs cleaning up later.",
      },
      {
        q: "Should I pay a percentage of ad spend or a flat fee?",
        a: "Flat fees suit smaller accounts and keep incentives clean. Percentage models make sense above roughly ₹1,00,000 monthly spend, where the account genuinely needs proportionally more attention. Either is fine — what matters is that the ad account stays in your name.",
      },
    ],
  },

  {
    slug: "core-web-vitals-small-business",
    title: "Core Web Vitals for Small Business Sites: The 20% That Moves Rankings",
    description:
      "A plain-English guide to LCP, INP and CLS — what Google measures, what genuinely affects your rankings, and the fixes worth your time.",
    category: "Technical SEO",
    keywords: [
      "Core Web Vitals",
      "LCP INP CLS",
      "page speed optimisation",
      "technical SEO audit",
      "website speed India",
    ],
    publishedAt: "2026-05-29",
    readingMinutes: 7,
    author: "Star Growth Hub",
    accent: ["#E0233A", "#FF9AA2"],
    blocks: [
      {
        t: "p",
        c: "Core Web Vitals get discussed as though they were the whole of SEO. They are not — relevance and links matter far more. But they are a genuine tiebreaker between comparable pages, and more importantly, a slow site quietly costs you conversions whether or not it costs you rankings.",
      },
      { t: "h2", c: "The three metrics, without the jargon" },
      { t: "h3", c: "LCP — Largest Contentful Paint" },
      {
        t: "p",
        c: "How long until the biggest thing on screen appears. Usually your hero image or headline. **Target: under 2.5 seconds.** This is the one small business sites fail most often, and it is almost always an oversized hero image.",
      },
      { t: "h3", c: "INP — Interaction to Next Paint" },
      {
        t: "p",
        c: "When someone taps a button, how long before something visibly happens. **Target: under 200 milliseconds.** Failures here come from heavy JavaScript blocking the main thread — chat widgets, popup builders, and analytics stacks are the usual suspects.",
      },
      { t: "h3", c: "CLS — Cumulative Layout Shift" },
      {
        t: "p",
        c: "How much the page jumps around while loading. **Target: under 0.1.** Caused by images without dimensions, ads inserted after load, and web fonts swapping in late.",
      },
      {
        t: "callout",
        title: "Measure the right thing",
        c: "Google ranks on field data — real visits from real devices, in the Chrome UX Report. Lighthouse in your browser is lab data and often flatters a site badly. Use PageSpeed Insights and read the top section (field), not the bottom (lab).",
      },
      { t: "h2", c: "The fixes that account for most of the gain" },
      {
        t: "ol",
        c: [
          "**Compress and resize your images.** The most common single failure we find is a 3 MB hero photo scaled down in the browser. Serve WebP or AVIF, sized for the largest slot it actually occupies. This alone often fixes LCP outright.",
          "**Set width and height on every image.** Two attributes. Reserves the space so nothing jumps. Fixes most CLS in one pass.",
          "**Preload the LCP image** and stop lazy-loading it. Lazy-loading the hero is self-defeating — it is the element being measured.",
          "**Audit your third-party scripts.** Open the network tab and count. Most small business sites carry two or three tags nobody has needed for a year. Each one competes for the main thread.",
          "**Use `font-display: swap` and self-host your fonts.** Removes a render-blocking round trip to a third-party domain.",
          "**Put a CDN in front of the site.** Cloudflare's free tier is genuinely sufficient for most small business traffic, and it removes a large chunk of latency for visitors outside your hosting region.",
        ],
      },
      { t: "h2", c: "What is not worth your time" },
      {
        t: "ul",
        c: [
          "Chasing a perfect 100 score. The difference between 92 and 100 is invisible to users and to rankings.",
          "Micro-optimising CSS delivery on a site that still ships a 3 MB image.",
          "Switching frameworks for performance reasons alone. The framework is rarely the bottleneck; the assets are.",
        ],
      },
      { t: "h2", c: "A realistic order of work" },
      {
        t: "p",
        c: "Run PageSpeed Insights on your three most important pages, on mobile. Fix images first, then layout shift, then scripts. Re-measure after 28 days — field data is a rolling four-week window, so changes do not show up immediately no matter how well they worked.",
      },
      {
        t: "p",
        c: "Then stop. Once you are inside the thresholds, further speed work has almost no ranking value, and your effort is better spent on content and links.",
      },
    ],
    faqs: [
      {
        q: "Do Core Web Vitals really affect Google rankings?",
        a: "Yes, but as a modest tiebreaker rather than a primary factor. Between two pages of comparable relevance and authority, the faster one has an edge. A fast page will not outrank a genuinely more relevant slow one.",
      },
      {
        q: "How long after fixing my site do Core Web Vitals update?",
        a: "Field data in the Chrome UX Report uses a rolling 28-day window, so allow a full month after deploying fixes before judging the result in Search Console.",
      },
    ],
  },
];

export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);

export const sortedPosts = () =>
  [...POSTS].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));

export const relatedPosts = (slug: string, limit = 2) =>
  sortedPosts()
    .filter((p) => p.slug !== slug)
    .slice(0, limit);
