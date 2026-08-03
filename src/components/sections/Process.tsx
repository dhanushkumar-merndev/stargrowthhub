import { Reveal, Eyebrow } from "../Reveal";

const STEPS = [
  {
    n: "01",
    title: "Free growth audit",
    body:
      "We look at your website, your Google Business Profile, your competitors' rankings and where your enquiries currently come from. You get the findings whether or not you hire us.",
    duration: "48 hours",
  },
  {
    n: "02",
    title: "A plan with numbers on it",
    body:
      "Which channels, what budget, what we expect them to return and by when. No twelve-month lock-in before you have seen a single result.",
    duration: "Week 1",
  },
  {
    n: "03",
    title: "Build and launch",
    body:
      "Site fixes, campaign builds, tracking, content. Everything is set up in accounts you own, so the work stays yours no matter what happens later.",
    duration: "Weeks 2–4",
  },
  {
    n: "04",
    title: "Report, refine, scale",
    body:
      "A monthly dashboard covering enquiries, cost per lead and rankings — plus a call to decide what gets more budget and what gets cut.",
    duration: "Ongoing",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="relative scroll-mt-24 border-y border-edge bg-paper-2 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>How we work</Eyebrow>
            <h2 className="text-balance-tight font-display text-[clamp(2rem,4.6vw,3.1rem)] font-semibold leading-[1.1] tracking-[-0.03em]">
              Four steps, and you know where you stand at every one
            </h2>
          </Reveal>
        </div>

        <ol className="relative mt-14 grid gap-6 lg:grid-cols-4">
          {/* connecting line */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-0 right-0 top-[3.4rem] hidden h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent lg:block"
          />

          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 90} as="li">
              <div className="panel card-hover spotlight relative h-full rounded-3xl p-7">
                <div className="flex items-start justify-between">
                  <span className="font-display text-[2.4rem] font-semibold leading-none tracking-tight text-brand/25">
                    {s.n}
                  </span>
                  <span className="rounded-full border border-edge px-2.5 py-1 text-[0.68rem] uppercase tracking-wider text-faint">
                    {s.duration}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-[1.12rem] font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-muted">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
