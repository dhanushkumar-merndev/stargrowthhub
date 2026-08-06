import Image from "next/image";

/** The supplied Star Growth Hub logo mark. */
export function StarMark({
  className = "h-12 w-12",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/logo.png"
      alt=""
      width={2070}
      height={1766}
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
      <StarMark className="-my-2 h-12 w-12 shrink-0" priority={priority} />
      <span className="font-display text-[1.15rem] font-semibold leading-none tracking-tight text-ink">
        Star <span className="text-brand">Growth</span> Hub
      </span>
    </span>
  );
}
