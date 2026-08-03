import type { Metadata } from "next";
import Link from "next/link";

import { sortedPosts } from "@/lib/posts";
import { PostCard } from "@/components/PostCard";
import { Reveal, Eyebrow } from "@/components/Reveal";
import { Backdrop } from "@/components/Backdrop";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Digital Marketing Insights for Bengaluru Businesses",
  description:
    "Practical guides on local SEO, Google Ads, Meta Ads, conversion and web performance — written by the team running these campaigns in Bengaluru every day.",
  alternates: { canonical: "/blog/" },
  openGraph: {
    title: `Insights | ${site.name}`,
    description:
      "Practical digital marketing guides for Bengaluru businesses — local SEO, paid ads, conversion and site speed.",
    url: `${site.url}/blog/`,
    type: "website",
  },
};

export default function BlogIndexPage() {
  const posts = sortedPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      <section className="relative isolate overflow-hidden pb-16 pt-[calc(var(--nav-h)+4rem)]">
        <Backdrop />

        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-6 text-[0.8rem] text-faint">
              <Link href="/" className="link-underline hover:text-ink">
                Home
              </Link>
              <span className="mx-2" aria-hidden="true">
                /
              </span>
              <span className="text-muted">Insights</span>
            </nav>

            <Eyebrow>Insights</Eyebrow>
            <h1 className="text-balance-tight max-w-3xl font-display text-[clamp(2.2rem,5.4vw,3.6rem)] font-semibold leading-[1.06] tracking-[-0.035em]">
              Digital marketing, explained{" "}
              <span className="text-gradient">without the jargon</span>
            </h1>
            <p className="mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-muted">
              Everything here comes from campaigns we actually run for businesses in and around{" "}
              {site.address.city}. No theory, no recycled listicles — just what works, what
              costs what, and what to do first.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured && (
              <Reveal className="h-full sm:col-span-2">
                <PostCard post={featured} featured />
              </Reveal>
            )}
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={(i + 1) * 70} className="h-full">
                <PostCard post={p} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="panel-tint mt-10 flex flex-col items-start justify-between gap-6 rounded-3xl p-8 sm:flex-row sm:items-center sm:p-10">
              <div>
                <h2 className="font-display text-[1.35rem] font-semibold tracking-tight">
                  Want this applied to your business?
                </h2>
                <p className="mt-2 max-w-md text-[0.92rem] leading-relaxed text-muted">
                  We&apos;ll audit your site, your Google profile and your competitors — and send
                  you the findings in 48 hours, free.
                </p>
              </div>
              <a
                href={whatsappLink(
                  `Hi ${site.name}! I read one of your articles and I'd like a free growth audit.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine shrink-0 rounded-full bg-brand px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-brand-deep hover:scale-[1.03]"
              >
                Get your free audit
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: `${site.url}/` },
            { name: "Insights", url: `${site.url}/blog/` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            "@id": `${site.url}/blog/#blog`,
            name: `${site.name} Insights`,
            url: `${site.url}/blog/`,
            publisher: { "@id": `${site.url}/#organization` },
            blogPost: posts.map((p) => ({
              "@type": "BlogPosting",
              headline: p.title,
              url: `${site.url}/blog/${p.slug}/`,
              datePublished: p.publishedAt,
            })),
          },
        ]}
      />
    </>
  );
}
