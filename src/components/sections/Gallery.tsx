import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { Reveal, Eyebrow } from "../Reveal";
import { site } from "@/lib/site";

const GALLERY_DIR = path.join(process.cwd(), "public", "images", "gallery");
const ALLOWED = /\.(jpe?g|png|webp|avif)$/i;

/**
 * Reads public/images/gallery at build time.
 *
 * This is a server component in a statically exported app, so the directory
 * is scanned once during `next build` — nothing touches the filesystem at
 * runtime. Drop photos in that folder and they appear; leave it empty and
 * the whole section disappears rather than rendering broken frames.
 */
function readGallery(): string[] {
  try {
    return fs
      .readdirSync(GALLERY_DIR)
      .filter((f) => ALLOWED.test(f))
      .sort();
  } catch {
    return [];
  }
}

/** "02-team-at-work.jpg" -> "Team at work" */
function captionFrom(filename: string) {
  const base = filename.replace(ALLOWED, "").replace(/^\d+[-_]/, "");
  const words = base.replace(/[-_]+/g, " ").trim();
  return words.charAt(0).toUpperCase() + words.slice(1);
}

export function Gallery() {
  const files = readGallery();
  if (files.length === 0) return null;

  return (
    <section id="gallery" className="relative scroll-mt-24 border-t border-edge py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>Inside the studio</Eyebrow>
            <h2 className="text-balance-tight font-display text-[clamp(2rem,4.6vw,3.1rem)] font-semibold leading-[1.1] tracking-[-0.03em]">
              The team behind the <span className="text-gradient">numbers</span>
            </h2>
            <p className="mt-5 text-[1.02rem] leading-relaxed text-muted">
              Our office on 80 Feet Road in {site.address.locality} — where the campaigns,
              creative and late-evening reporting calls actually happen.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid auto-rows-[14rem] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {files.map((file, i) => {
            // First image spans a 2x2 block for a magazine-style layout.
            const featured = i === 0;
            return (
              <Reveal
                key={file}
                delay={i * 60}
                className={featured ? "col-span-2 row-span-2" : ""}
              >
                <figure className="panel card-hover group relative h-full w-full overflow-hidden rounded-2xl bg-paper-3">
                  <Image
                    src={`/images/gallery/${file}`}
                    alt={`${captionFrom(file)} — ${site.name}, ${site.address.locality}, ${site.address.city}`}
                    fill
                    sizes={featured ? "(max-width: 640px) 100vw, 50vw" : "(max-width: 640px) 50vw, 25vw"}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent p-4 text-[0.78rem] text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {captionFrom(file)}
                  </figcaption>
                </figure>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
