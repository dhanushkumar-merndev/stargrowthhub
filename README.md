# Star Growth Hub — website

Animated, SEO-first marketing site for **Star Growth Hub**, a digital marketing
agency in Banashankari, Bengaluru.

Next.js 16 (App Router) · React 19 · Tailwind v4 · **fully static export** ·
deploys free to Cloudflare Pages.

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # -> ./out  (13 static pages)
pnpm preview    # build, then serve ./out locally
```

---

## ⚠️ Before you go live

Everything business-specific lives in **one file**: [`src/lib/site.ts`](src/lib/site.ts).
Open it and replace the four values marked `TODO`:

| Field | Why it matters |
|---|---|
| `whatsappNumber` | **Empty — `pnpm build` fails until you set it.** Every form, button and CTA on the site points here, and a placeholder would send real enquiries to a stranger. Digits only, country code first, no `+` (e.g. `919876543210`). `pnpm dev` still runs, so you can preview before filling it in. |
| `phone` / `phoneHref` | Shown in the nav, footer and contact section. Left empty, every phone link **hides itself** rather than displaying a fake number — and `telephone` is omitted from the structured data instead of published wrong. |
| `url` | Used for canonical tags, Open Graph URLs, the sitemap and all structured data. Must be your real domain, no trailing slash. |
| `social.google` | Your Google Maps listing link (Maps → Share → Copy link). This is what tells Google the site and the listing are the same business. |

`social.linkedin` is set from the profile on your listing — worth confirming the exact URL, since the search snippet didn't show whether it sits under `/in/` or `/company/`.

Nothing else needs editing to launch.

### What came from your Google Business Profile

Name, category, the full 21-service list, address, the "near Bangalore One" landmark,
opening hours (Mon–Sat 10–7, closed Sunday), the 5.0/5 rating and both public review
quotes are all taken from the listing and live in `site.ts` or `Marquee.tsx`.

**No phone number was on the listing**, and it isn't published anywhere else public —
so it's the one detail only you can supply.

`areasServed` is a sensible guess at your catchment (south Bengaluru localities near
Banashankari). Edit it to match where you actually take work — it feeds the local-SEO
section and the `areaServed` structured data.

---

## How the WhatsApp form works

There is no backend, no database and no form service — which is exactly why
this hosts for free.

On submit, [`LeadForm.tsx`](src/components/LeadForm.tsx) validates the fields,
packs every answer into a formatted message, and opens
`https://wa.me/<number>?text=<encoded message>` in a new tab. The enquiry
arrives in your WhatsApp fully written out; the customer just taps send.

```
*New enquiry from stargrowthhub.com*

*Name:* Priya Sharma
*Business:* Sharma Interiors
*Phone:* 98765 43210
*Needs help with:* SEO / Google ranking
*Budget:* ₹25,000 – ₹50,000 / month
*Details:* We want more calls from Google.
```

It also includes a hidden honeypot field, so bots that auto-fill forms are
silently dropped.

---

## The hero globe

[`GlobeArcs.tsx`](src/components/GlobeArcs.tsx) is an orthographic globe with
great-circle arcs radiating from the office — real projection and slerp maths,
computed at build time and emitted as plain SVG. No map library, no tiles, no
API key, no client JS, ~25 KB of markup.

A MapLibre/Mapbox map would have meant ~200 KB of JavaScript, a tile provider
with usage caps, and a hero that only exists after JS runs — which would have
undone both the performance and the SEO work.

Two deliberate choices:

- **The destination dots are unlabelled.** Labelled arcs to London and Tokyo on
  an agency site read as "we have clients there". Only Bengaluru is labelled.
  If you do have clients in specific cities, add them to `REACH` and switch the
  markers to labelled ones.
- **The sphere is a dot lattice, not a coastline map** — abstract on purpose, so
  it never implies geography it can't back up.

To tint it with the brand red, change the `#14141c` strokes to `#e01b2d`. To
re-centre it, edit `VIEW` (currently `[64, 17]`); anything on the far side of
the globe is dropped automatically.

## Adding photos

Drop image files into [`public/images/gallery/`](public/images/gallery/) and an
"Inside the studio" section appears on the home page automatically. Leave the
folder empty and the section doesn't render at all — no placeholders, nothing
broken. See the [README in that folder](public/images/gallery/README.md) for
naming and sizing.

## Brand assets

The favicon set in [`public/`](public/) is the source of truth for the logo —
`favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png`,
`android-chrome-192x192.png`, `android-chrome-512x512.png` and
`site.webmanifest`. They're wired up through `metadata.icons` in
[`layout.tsx`](src/app/layout.tsx), and the same mark is used by the nav
([`Logo.tsx`](src/components/Logo.tsx)), the social card and the
`Organization` structured data.

**Worth doing:** supply the logo as an **SVG**. The PNGs are app icons, so the
star only fills ~60% of the canvas and the header has to render a 48px box to
show a 29px glyph. An SVG would be a fraction of the weight, sharp at any size,
and free of that padding — swap it into `StarMark` and drop the sizing
compensation.

---

## Adding a blog post

Append one object to `POSTS` in [`src/lib/posts.ts`](src/lib/posts.ts). The
route, sitemap entry, `BlogPosting` structured data, FAQ rich result, footer
link and related-post links are all generated from it.

Body content is a list of typed blocks — `p`, `h2`, `h3`, `ul`, `ol`, `quote`,
`callout`, `stats`. Inline `**bold**` and `` `code` `` work inside any of them.

---

## What makes this SEO-solid

- **Every page is real HTML.** Static export means no client-side rendering —
  Googlebot gets the finished page on first request.
- **Animations never hide content.** Scroll-reveal elements are *visible* in the
  shipped HTML; JavaScript adds the class that hides them only after confirming
  it can animate them back in. No JS, or a crawler that doesn't run it, still
  sees a complete page. `prefers-reduced-motion` disables the lot.
- **Structured data** — `LocalBusiness` + `MarketingAgency` (address, geo,
  opening hours, 5.0 aggregate rating, full service catalogue), `WebSite`,
  `FAQPage`, `BreadcrumbList`, `BlogPosting`.
- **Generated social card** at `/opengraph-image`, built at compile time.
- `sitemap.xml` and `robots.txt` generated from the same content source.
- Geo meta tags (`geo.region`, `geo.position`, `ICBM`) for local relevance.
- ~42 KB gzipped for the home page; Cloudflare Brotli takes it lower.
- No icon library, no animation library, no image files on the critical path —
  the hero visual is SVG and CSS.

### After launch

1. Add the domain to **Google Search Console**, submit `sitemap.xml`.
2. Run the pages through the
   [Rich Results Test](https://search.google.com/test/rich-results) to confirm
   the LocalBusiness and FAQ markup is picked up.
3. Put the live URL in the **website field of your Google Business Profile** —
   the single highest-value link a local business has.
4. Recheck Core Web Vitals in Search Console after ~28 days (field data uses a
   rolling 28-day window).

---

## Deploying to Cloudflare Pages (free)

Static hosting, unlimited bandwidth, free TLS, global CDN. No Workers, no
functions, no billing account.

### Option A — CLI (fastest)

```bash
pnpm build
npx wrangler pages deploy out --project-name=stargrowthhub
```

First run prompts a browser login and creates the project. After that,
`pnpm deploy` does both steps.

### Option B — Git-connected (auto-deploy on push)

Push this folder to GitHub, then in the Cloudflare dashboard:
**Workers & Pages → Create → Pages → Connect to Git**, and set:

| Setting | Value |
|---|---|
| Framework preset | `None` |
| Build command | `pnpm build` |
| Build output directory | `out` |
| Node version | `22` (already pinned in `.node-version`) |

Every push to your default branch redeploys; pull requests get preview URLs.

### Custom domain

**Pages project → Custom domains → Set up a domain.** If the domain is already
on Cloudflare the DNS record is created for you; otherwise point your registrar
at the nameservers Cloudflare gives you. TLS is automatic.

Then update `url` in `src/lib/site.ts` to the real domain and redeploy — the
canonical tags, sitemap and structured data all read from it.

### `public/_headers`

Applied at the edge on deploy. It sets the `Content-Type` on the generated
social card (Next emits it without a file extension, so WhatsApp and LinkedIn
would otherwise refuse the preview), caches hashed assets for a year, and adds
baseline security headers.
