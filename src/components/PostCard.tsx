import Link from "next/link";

import { IconArrowRight, IconClock } from "./Icons";
import type { Post } from "@/lib/posts";

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function PostCard({ post, featured = false }: { post: Post; featured?: boolean }) {
  return (
    <article
      className={`panel card-hover spotlight group relative flex h-full flex-col overflow-hidden rounded-3xl ${
        featured ? "sm:col-span-2" : ""
      }`}
    >
      {/* Generated art — no photography needed, and nothing to download
          before the card paints. Diagonal hatch plus a corner highlight so
          it reads as a printed panel rather than a flat gradient fill. */}
      <div
        aria-hidden="true"
        className={`relative overflow-hidden ${featured ? "h-36" : "h-24"}`}
        style={{
          background: `linear-gradient(112deg, ${post.accent[0]} 0%, ${post.accent[0]} 28%, ${post.accent[1]} 100%)`,
        }}
      >
        <div className="bg-hatch absolute inset-0" />
        <div className="absolute -right-10 -top-14 h-36 w-36 rounded-full bg-white/25 blur-2xl transition-transform duration-700 group-hover:scale-125" />
        {/* seats the panel against the card body */}
        <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-black/12 to-transparent" />
      </div>

      {/* Category chip straddles the panel edge — gives the card a focal
          point without stacking another line of text in the header. */}
      <span className="pointer-events-none relative z-10 -mt-3.5 ml-6 w-fit rounded-full border border-edge bg-paper px-3 py-1 text-[0.7rem] font-semibold tracking-tight text-ink shadow-sm">
        {post.category}
      </span>

      <div className="flex flex-1 flex-col px-6 pb-6 pt-3 sm:px-7 sm:pb-7">
        <div className="mb-3 flex items-center gap-2.5 text-[0.72rem] text-faint">
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          <span aria-hidden="true">·</span>
          <span className="inline-flex items-center gap-1">
            <IconClock className="h-3 w-3" />
            {post.readingMinutes} min read
          </span>
        </div>

        <h3
          className={`font-display font-semibold leading-snug tracking-tight ${
            featured ? "text-[1.4rem]" : "text-[1.1rem]"
          }`}
        >
          <Link href={`/blog/${post.slug}/`} className="before:absolute before:inset-0">
            {post.title}
          </Link>
        </h3>

        <p className="mt-3 line-clamp-3 flex-1 text-[0.9rem] leading-relaxed text-muted">
          {post.description}
        </p>

        <span className="mt-5 inline-flex items-center gap-1.5 text-[0.85rem] font-medium text-brand">
          Read the guide
          <IconArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </article>
  );
}
