import type { ElementType, ReactNode } from "react";

/**
 * Marks a block for scroll-reveal. Renders plain HTML on the server — the
 * animation is layered on by ScrollFX only when the browser supports it.
 */
export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
}: {
  children: ReactNode;
  /** Stagger in milliseconds. */
  delay?: number;
  as?: ElementType;
  className?: string;
}) {
  return (
    <Tag
      data-reveal=""
      className={className}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}

/** Small uppercase section label with a red rule. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="mb-5 inline-flex items-center gap-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-brand">
      <span className="h-px w-8 bg-brand" />
      {children}
    </span>
  );
}
