import { IconPlus } from "./Icons";

/**
 * One question/answer row.
 *
 * Native `<details>` — no JavaScript, keyboard accessible for free, and the
 * answer text is present in the HTML whether or not the row is open, which is
 * what makes the FAQPage rich result work.
 */
export function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group panel overflow-hidden rounded-2xl transition-colors duration-300 open:border-brand/30">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 transition-colors hover:text-brand [&::-webkit-details-marker]:hidden">
        <h3 className="text-[0.98rem] font-medium">{question}</h3>
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-edge text-brand transition-transform duration-300 group-open:rotate-45">
          <IconPlus className="h-3.5 w-3.5" />
        </span>
      </summary>
      <p className="px-6 pb-6 text-[0.92rem] leading-relaxed text-muted">{answer}</p>
    </details>
  );
}
