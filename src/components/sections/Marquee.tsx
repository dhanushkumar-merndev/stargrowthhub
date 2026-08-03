/** Every service listed on the Google Business Profile, verbatim. */
export const ALL_SERVICES = [
  "Search engine optimisation",
  "Paid advertising",
  "Social media marketing",
  "Web design",
  "Branding",
  "Logo design",
  "Graphic design",
  "Lead generation",
  "Pay-per-click consulting",
  "Content management",
  "Email marketing",
  "Link building",
  "Technical audits",
  "Affiliate marketing",
  "Business to business",
  "Direct mail",
  "Outdoor advertising",
  "Billboard design and consulting",
  "Print ads",
  "Digital marketing",
  "Online service",
] as const;

export function Marquee() {
  return (
    <section
      className="marquee-wrap relative border-y border-edge bg-paper-2 py-5"
      aria-label="Services we offer"
    >
      <div className="marquee-mask overflow-hidden">
        <div className="marquee-track flex w-max items-center gap-3">
          {/* Duplicated once so the loop is seamless; the copy is hidden from
              assistive tech and crawlers to avoid duplicate content. */}
          {[0, 1].map((pass) => (
            <ul
              key={pass}
              className="flex items-center gap-3"
              aria-hidden={pass === 1 ? "true" : undefined}
            >
              {ALL_SERVICES.map((s) => (
                <li
                  key={s}
                  className="flex shrink-0 items-center gap-2.5 whitespace-nowrap rounded-full border border-edge bg-paper px-4 py-2 text-[0.82rem] text-muted"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rotate-45 rounded-[2px] bg-brand" />
                  {s}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
