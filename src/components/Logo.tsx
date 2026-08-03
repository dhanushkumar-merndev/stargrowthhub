import Image from "next/image";

/**
 * The real Star Growth Hub mark, from the brand favicon set in public/.
 *
 * Served from apple-touch-icon.png (180×180) rather than the 32px favicon so
 * it stays crisp on retina at the size it renders. Static export means Next
 * can't resize on the fly, so the source has to carry the pixels.
 *
 * Note the box is deliberately larger than it looks: the source is an app
 * icon, so the star only fills ~60% of the canvas and the rest is padding.
 * A 48px box therefore paints a ~29px glyph, which is what actually balances
 * the wordmark. The pale disc behind it is invisible on white.
 *
 * If you have the logo as an SVG, drop it in and swap this out — it would be
 * a fraction of the weight, sharp at any size, and free of the padding.
 */
export function StarMark({
  className = "h-12 w-12",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/apple-touch-icon.png"
      alt=""
      width={180}
      height={180}
      priority={priority}
      className={`${className} object-contain`}
    />
  );
}

export function Logo({
  className = "",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      {/* -my-2 keeps the oversized mark from inflating the 72px nav row. */}
      <StarMark className="-my-2 h-12 w-12 shrink-0" priority={priority} />
      {/* Three words, as the business is actually named on Google and
          LinkedIn — not a compacted "StarGrowthHub" wordmark. */}
      <span className="font-display text-[1.15rem] font-semibold leading-none tracking-tight text-ink">
        Star <span className="text-brand">Growth</span> Hub
      </span>
    </span>
  );
}
