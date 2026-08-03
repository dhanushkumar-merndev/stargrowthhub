# Drop your photos here

Any `.jpg`, `.jpeg`, `.png`, `.webp` or `.avif` file in this folder is picked up
automatically at build time and rendered in the "Inside the studio" section on
the home page. **If the folder is empty, that whole section simply doesn't
render** — the site never shows a broken or placeholder image.

## Getting your existing photos out of Google

Your Google Business Profile photos are yours, but Google doesn't offer a bulk
export and they can't be scraped. The reliable route:

1. Open your listing on **Google Maps → Photos**.
2. Open each photo and use **Download** (or right-click → Save image as).
3. Or, better: use the originals from whoever shot them — Google re-compresses
   uploads and the copies on Maps are lower quality than your source files.

## Naming

The filename becomes the caption and part of the alt text, so name them
descriptively. A numeric prefix controls the order.

```
01-our-office-on-80-feet-road.jpg   ->  "Our office on 80 feet road"
02-the-team.jpg                     ->  "The team"
03-client-strategy-session.jpg      ->  "Client strategy session"
```

The **first** image is rendered as a large 2×2 feature tile, so make it your
strongest one.

## Before you commit them

These are served as-is (static export means Next can't optimise them on the
fly), so size them yourself:

- Longest edge **1600px** is plenty. Anything larger is wasted bytes.
- Export as **WebP** at ~80% quality if you can — typically 60–70% smaller
  than JPEG at the same visible quality.
- Aim to keep each file **under 250 KB**.

[Squoosh](https://squoosh.app) does all three in the browser, free, with
nothing to install.
