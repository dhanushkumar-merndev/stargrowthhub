/**
 * Renders a JSON-LD block.
 *
 * Structured data is what earns the rich result in Google — star rating,
 * opening hours, address, FAQ accordions and article cards all come from
 * here, not from the visible markup.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      // Content is authored by us, never user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
