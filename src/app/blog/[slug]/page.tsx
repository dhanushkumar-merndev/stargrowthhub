import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { POSTS, getPost, relatedPosts, type Block } from "@/lib/posts";
import { RichText } from "@/components/RichText";
import { PostCard, formatDate } from "@/components/PostCard";
import { FaqItem } from "@/components/FaqItem";
import { Reveal } from "@/components/Reveal";
import { Backdrop } from "@/components/Backdrop";
import { Breadcrumbs } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { IconClock, IconWhatsApp } from "@/components/Icons";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { site, whatsappLink } from "@/lib/site";

type Params = { slug: string };

/** Pre-renders every article to static HTML at build time. */
export function generateStaticParams(): Params[] {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const url = `${site.url}/blog/${post.slug}/`;

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}/` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: [post.author],
      section: post.category,
      tags: post.keywords,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function PostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = relatedPosts(post.slug);

  return (
    <>
      <article>
        {/* ---------- header ---------- */}
        <header className="relative isolate overflow-hidden pb-12 pt-[calc(var(--nav-h)+3.5rem)]">
          <Backdrop />

          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <Breadcrumbs
              crumbs={[{ label: "Insights", href: "/blog/" }, { label: post.category }]}
            />

            <span className="mb-5 inline-block rounded-full bg-brand-tint px-3.5 py-1.5 text-[0.72rem] font-semibold text-brand">
              {post.category}
            </span>

            <h1 className="text-balance-tight font-display text-[clamp(2rem,4.8vw,3.1rem)] font-semibold leading-[1.1] tracking-[-0.032em]">
              {post.title}
            </h1>

            <p className="mt-5 text-[1.05rem] leading-relaxed text-muted">{post.description}</p>

            <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-edge pt-6 text-[0.82rem] text-faint">
              <span className="text-muted">{post.author}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1.5">
                <IconClock className="h-3.5 w-3.5" />
                {post.readingMinutes} min read
              </span>
            </div>
          </div>
        </header>

        {/* ---------- body ---------- */}
        <div className="mx-auto max-w-3xl px-5 pb-16 sm:px-8">
          <div className="prose-sgh">
            {post.blocks.map((block, i) => (
              <BlockView key={i} block={block} />
            ))}
          </div>

          {/* ---------- in-article CTA ---------- */}
          <aside className="panel-tint mt-14 rounded-3xl p-8 sm:p-9">
            <h2 className="font-display text-[1.35rem] font-semibold tracking-tight">
              Want us to do this for you?
            </h2>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
              We&apos;re a {site.tagline.toLowerCase()} based in {site.address.locality}. Send us a
              message and we&apos;ll audit your site, your Google profile and your competitors —
              free, within 48 hours.
            </p>
            <a
              href={whatsappLink(
                `Hi ${site.name}! I just read "${post.title}" and I'd like a free growth audit.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine mt-6 inline-flex items-center gap-2.5 rounded-full bg-brand px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-brand-deep hover:scale-[1.03]"
            >
              <IconWhatsApp className="h-5 w-5" />
              Message us on WhatsApp
            </a>
          </aside>

          {/* ---------- per-article FAQs ---------- */}
          {post.faqs && post.faqs.length > 0 && (
            <section className="mt-14">
              <h2 className="mb-6 font-display text-[1.5rem] font-semibold tracking-tight">
                Frequently asked
              </h2>
              <div className="space-y-3">
                {post.faqs.map((f) => (
                  <FaqItem key={f.q} question={f.q} answer={f.a} />
                ))}
              </div>
            </section>
          )}
        </div>
      </article>

      {/* ---------- related ---------- */}
      {related.length > 0 && (
        <section className="border-t border-edge bg-paper-2 py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <h2 className="mb-8 font-display text-[1.5rem] font-semibold tracking-tight">
              Keep reading
            </h2>
            <div className="grid gap-5 sm:grid-cols-2">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={i * 80} className="h-full">
                  <PostCard post={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <JsonLd
        data={[
          articleSchema(post),
          breadcrumbSchema([
            { name: "Home", url: `${site.url}/` },
            { name: "Insights", url: `${site.url}/blog/` },
            { name: post.title, url: `${site.url}/blog/${post.slug}/` },
          ]),
          ...(post.faqs?.length ? [faqSchema(post.faqs)] : []),
        ]}
      />
    </>
  );
}

/* ------------------------------------------------------------------ */

function BlockView({ block }: { block: Block }) {
  switch (block.t) {
    case "h2":
      return <h2 id={slugify(block.c)}>{block.c}</h2>;

    case "h3":
      return <h3>{block.c}</h3>;

    case "p":
      return (
        <p>
          <RichText>{block.c}</RichText>
        </p>
      );

    case "ul":
      return (
        <ul>
          {block.c.map((item, i) => (
            <li key={i}>
              <RichText>{item}</RichText>
            </li>
          ))}
        </ul>
      );

    case "ol":
      return (
        <ol>
          {block.c.map((item, i) => (
            <li key={i}>
              <RichText>{item}</RichText>
            </li>
          ))}
        </ol>
      );

    case "quote":
      return (
        <blockquote className="my-9 border-l-2 border-brand pl-6">
          <p className="font-display !text-[1.15rem] italic leading-relaxed !text-ink">
            {block.c}
          </p>
          {block.by && (
            <cite className="mt-2 block text-[0.82rem] not-italic text-faint">— {block.by}</cite>
          )}
        </blockquote>
      );

    case "callout":
      return (
        <aside className="my-9 rounded-2xl border border-brand/25 bg-brand-tint p-6">
          <p className="!mb-2 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-brand">
            {block.title}
          </p>
          <p className="!mb-0 text-[0.95rem] leading-relaxed !text-ink">
            <RichText>{block.c}</RichText>
          </p>
        </aside>
      );

    case "stats":
      return (
        <div className="my-10 grid gap-4 sm:grid-cols-3">
          {block.c.map((s) => (
            <div key={s.label} className="panel rounded-2xl p-5 text-center">
              <p className="!mb-0 font-display text-[1.6rem] font-semibold leading-tight tracking-tight text-brand">
                {s.value}
              </p>
              <p className="!mb-0 mt-1.5 text-[0.78rem] leading-snug text-faint">{s.label}</p>
            </div>
          ))}
        </div>
      );
  }
}

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
