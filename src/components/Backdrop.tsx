/**
 * Ambient background for light sections.
 *
 * Three layers, all barely there: a fine dot lattice for texture, widely
 * spaced hairline rules for structure, and soft warm washes so a large white
 * area never reads as flat. Everything fades out well before it reaches the
 * body copy. Purely decorative — hidden from assistive tech.
 */
export function Backdrop({
  pattern = true,
  className = "",
}: {
  pattern?: boolean;
  className?: string;
}) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 -z-10 ${className}`}>
      {pattern && (
        <>
          <div className="bg-dots absolute inset-0" />
          <div className="bg-rules absolute inset-0" />
        </>
      )}

      {/* warm blush, upper left */}
      <div
        className="wash animate-drift left-[-14%] top-[-22%] h-[42rem] w-[42rem] opacity-80"
        style={{ background: "radial-gradient(circle, #ffe1e4 0%, #fff5f5 42%, transparent 70%)" }}
      />
      {/* soft peach, upper right */}
      <div
        className="wash animate-drift right-[-16%] top-[-8%] h-[36rem] w-[36rem] opacity-70"
        style={{
          background: "radial-gradient(circle, #fff0e6 0%, transparent 68%)",
          animationDelay: "-9s",
        }}
      />
      {/* cool grey, lower left — stops the warm tones tipping the page pink */}
      <div
        className="wash animate-drift bottom-[-26%] left-[22%] h-[34rem] w-[34rem] opacity-60"
        style={{
          background: "radial-gradient(circle, #eef0f4 0%, transparent 70%)",
          animationDelay: "-16s",
        }}
      />

      {/* fade the whole thing into the page so sections below sit on clean white */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-paper" />
    </div>
  );
}
