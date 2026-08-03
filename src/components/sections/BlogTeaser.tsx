import Link from "next/link";
import { Reveal, Eyebrow } from "../Reveal";
import { PostCard } from "../PostCard";
import { sortedPosts } from "@/lib/posts";

export function BlogTeaser() {
  const posts = sortedPosts().slice(0, 3);

  return (
    <section id="insights" className="relative scroll-mt-24 border-t border-edge py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <Eyebrow>Insights</Eyebrow>
            <h2 className="text-balance-tight max-w-xl font-display text-[clamp(2rem,4.6vw,3.1rem)] font-semibold leading-[1.1] tracking-[-0.03em]">
              What we&apos;ve learned running campaigns in{" "}
              <span className="text-gradient">Bengaluru</span>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <Link
              href="/blog/"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3.5 text-sm font-medium transition-all duration-300 hover:border-brand/50 hover:bg-brand-tint"
            >
              All articles
              <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80} className="h-full">
              <PostCard post={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
