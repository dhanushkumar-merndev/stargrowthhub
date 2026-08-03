import { Fragment, type ReactNode } from "react";

/**
 * Minimal inline formatter for post content: `**bold**` and `` `code` ``.
 * Deliberately tiny — it keeps the blog dependency-free and renders on the
 * server, so articles ship as plain HTML.
 */
export function RichText({ children }: { children: string }) {
  const parts: ReactNode[] = [];
  const pattern = /(\*\*[^*]+\*\*|`[^`]+`)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(children)) !== null) {
    if (match.index > last) parts.push(children.slice(last, match.index));

    const token = match[0];
    if (token.startsWith("**")) {
      parts.push(<strong key={key++}>{token.slice(2, -2)}</strong>);
    } else {
      parts.push(
        <code
          key={key++}
          className="rounded bg-paper-3 px-1.5 py-0.5 font-mono text-[0.85em] text-brand-deep"
        >
          {token.slice(1, -1)}
        </code>,
      );
    }
    last = match.index + token.length;
  }

  if (last < children.length) parts.push(children.slice(last));

  return <Fragment>{parts}</Fragment>;
}
