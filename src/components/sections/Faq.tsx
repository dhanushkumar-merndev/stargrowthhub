import { Reveal, Eyebrow } from "../Reveal";
import { site } from "@/lib/site";

/** Also fed to FAQPage structured data — keep answers self-contained. */
export const FAQS = [
  {
    q: "Where is Star Growth Hub located?",
    a: `We are at 18, 1st Floor, 80 Feet Road, near Bangalore One in BSK 1st Stage, Srinivasnagar, Banashankari, Bengaluru 560050 — close to Banashankari bus stand and metro station. We are open ${site.hours.label.toLowerCase()} and closed on Sundays.`,
  },
  {
    q: "What does a digital marketing agency in Bengaluru actually cost?",
    a: "Most of our local clients invest between ₹25,000 and ₹60,000 per month across management and ad spend combined. Websites typically start around ₹40,000. We scope every engagement after a free audit, so you get a specific number rather than a package price.",
  },
  {
    q: "How long before I see results from SEO?",
    a: "Google Business Profile and technical fixes often move within two to four weeks. Competitive organic rankings usually take three to six months of consistent content, reviews and link building. Paid campaigns produce leads in the first week but take four to eight weeks to reach a stable cost per lead.",
  },
  {
    q: "Do I own my Google Ads account and website?",
    a: "Always. Every ad account, analytics property, domain and website we set up is created in your name with you as the owner. If you ever leave, everything stays with you — including the historical data.",
  },
  {
    q: "Do you work with businesses outside Banashankari?",
    a: "Yes. We work across Bengaluru and with clients elsewhere in India remotely. Our office is in Banashankari, so south Bengaluru clients tend to see us in person more often, but location is not a requirement.",
  },
  {
    q: "Is there a long-term contract?",
    a: "No lock-in before you have seen results. We work on rolling monthly engagements with a 30-day notice period. Longer commitments are available if you prefer them, usually at a better rate.",
  },
  {
    q: "What is included in the free growth audit?",
    a: "A review of your website's speed and conversion path, your Google Business Profile, your current rankings against local competitors, and where your enquiries come from today. You receive the findings in writing within 48 hours, with no obligation to hire us.",
  },
  {
    q: "Which industries do you work with?",
    a: "Mostly local service businesses — clinics, real estate, education, interiors, retail, professional services and B2B firms around Bengaluru. If we do not think we can move the needle for your category, we will tell you at the audit stage.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal>
          <div className="text-center">
            <Eyebrow>Questions</Eyebrow>
            <h2 className="text-balance-tight font-display text-[clamp(2rem,4.6vw,3.1rem)] font-semibold leading-[1.1] tracking-[-0.03em]">
              Answers before you <span className="text-gradient">ask</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 space-y-3">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 50}>
              {/* Native <details> — zero JavaScript, keyboard accessible,
                  and the answer text is always present in the HTML. */}
              <details className="group panel overflow-hidden rounded-2xl transition-colors duration-300 open:border-brand/30">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-medium transition-colors hover:text-brand [&::-webkit-details-marker]:hidden">
                  <h3 className="text-[0.98rem] font-medium">{f.q}</h3>
                  <span className="relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-edge text-brand transition-transform duration-300 group-open:rotate-45">
                    <svg viewBox="0 0 12 12" className="h-3 w-3" aria-hidden="true">
                      <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <p className="px-6 pb-6 text-[0.92rem] leading-relaxed text-muted">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
