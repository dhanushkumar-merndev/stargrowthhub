import type { MetadataRoute } from "next";
import { POSTS } from "@/lib/posts";
import { site } from "@/lib/site";

// Emitted as a static sitemap.xml at build time.
export const dynamic = "force-static";

/**
 * Priority ordering reflects what we most want crawled and ranked: the home
 * page, then the two commercial pages a searcher lands on from a service
 * query, then supporting pages, then articles.
 */
const ROUTES: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/services/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/contact/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/results/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/blog/", priority: 0.8, changeFrequency: "weekly" },
  { path: "/process/", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about/", priority: 0.7, changeFrequency: "monthly" },
  { path: "/faq/", priority: 0.7, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    ...ROUTES.map((r) => ({
      url: `${site.url}${r.path}`,
      lastModified: now,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })),
    ...POSTS.map((post) => ({
      url: `${site.url}/blog/${post.slug}/`,
      lastModified: new Date(post.updatedAt ?? post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
