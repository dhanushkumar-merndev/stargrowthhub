import { Reveal, Eyebrow } from "../Reveal";
import { ALL_SERVICES } from "./Marquee";
import { site, whatsappLink } from "@/lib/site";

const PILLARS = [
  {
    title: "Search engine optimisation",
    blurb:
      "Technical audits, on-page work, content and link building that put you on page one for the searches that actually convert — then keep you there.",
    points: ["Technical SEO audits", "Local & Maps SEO", "Content strategy", "Link building"],
    icon: SearchIcon,
  },
  {
    title: "Google Ads & PPC",
    blurb:
      "Search, Performance Max and retargeting campaigns built around conversion tracking, so every rupee is traceable to a lead you can count.",
    points: ["Search campaigns", "Performance Max", "Conversion tracking", "Landing pages"],
    icon: TargetIcon,
  },
  {
    title: "Meta & social media",
    blurb:
      "Instagram and Facebook campaigns plus the day-to-day content that makes them work — creative, community and reporting in one place.",
    points: ["Meta Ads", "Content calendars", "Reels & creative", "Community management"],
    icon: SocialIcon,
  },
  {
    title: "Web design & development",
    blurb:
      "Fast, mobile-first websites engineered to convert. Built on Core Web Vitals from the first line, with enquiry paths that land in WhatsApp.",
    points: ["Landing pages", "Business websites", "Speed optimisation", "WhatsApp enquiries"],
    icon: CodeIcon,
  },
  {
    title: "Branding & design",
    blurb:
      "Logos, identity systems, print and outdoor. The work that makes a small business look like the obvious choice in its category.",
    points: ["Logo design", "Brand identity", "Print & billboards", "Graphic design"],
    icon: BrushIcon,
  },
  {
    title: "Lead generation",
    blurb:
      "Email, affiliate and B2B outreach that fills the pipeline — with tracking that shows which channel produced which customer.",
    points: ["Email marketing", "B2B outreach", "Affiliate marketing", "Attribution"],
    icon: FunnelIcon,
  },
];

export function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>What we do</Eyebrow>
            <h2 className="text-balance-tight font-display text-[clamp(2rem,4.6vw,3.1rem)] font-semibold leading-[1.1] tracking-[-0.03em]">
              One team for everything that brings you{" "}
              <span className="text-gradient">customers</span>
            </h2>
            <p className="mt-5 text-[1.02rem] leading-relaxed text-muted">
              Most agencies do one thing and outsource the rest. We run search, paid, social,
              web and brand under one roof in {site.address.city} — which means your channels
              actually talk to each other.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 70}>
              <article className="panel card-hover spotlight group h-full rounded-3xl p-7">
                <span className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-tint text-brand transition-all duration-500 group-hover:bg-brand group-hover:text-white">
                  <p.icon className="h-6 w-6" />
                </span>

                <h3 className="font-display text-[1.22rem] font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-[0.92rem] leading-relaxed text-muted">{p.blurb}</p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {p.points.map((pt) => (
                    <li
                      key={pt}
                      className="rounded-full border border-edge px-2.5 py-1 text-[0.72rem] text-faint"
                    >
                      {pt}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Full service list — genuine keyword surface area, and useful to a
            visitor scanning for the one thing they came for. */}
        <Reveal delay={120}>
          <div className="panel-tint mt-8 rounded-3xl p-7 sm:p-9">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h3 className="font-display text-lg font-semibold tracking-tight">
                Everything we offer
              </h3>
              <a
                href={whatsappLink(
                  `Hi ${site.name}! I'd like to know more about one of your services.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-sm font-medium text-brand"
              >
                Ask about a specific service →
              </a>
            </div>
            <ul className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
              {ALL_SERVICES.map((s) => (
                <li key={s} className="flex items-start gap-2.5 text-[0.88rem] text-muted">
                  <span className="mt-[0.42rem] h-1.5 w-1.5 shrink-0 rotate-45 rounded-[2px] bg-brand" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- icons (inline, no icon library) ---------- */

type IconProps = { className?: string };

function SearchIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function TargetIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="1.3" fill="currentColor" />
    </svg>
  );
}
function SocialIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="6" cy="12" r="2.6" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6" r="2.6" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="18" r="2.6" stroke="currentColor" strokeWidth="2" />
      <path
        d="m8.4 10.8 6.7-3.4M8.4 13.2l6.7 3.4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
function CodeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="m8.5 8-4 4 4 4M15.5 8l4 4-4 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function BrushIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 20c0-2.2 1.3-3 2.5-3S9 17.8 9 20c0 .8-1.6 1.5-3 1.5S4 20.8 4 20Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M8.5 16.5 19 6a2 2 0 0 0-3-3L5.5 13.5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}
function FunnelIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M3.5 5h17l-6.5 7.5V20l-4-2.5v-5L3.5 5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}
