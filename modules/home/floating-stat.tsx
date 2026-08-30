import { cn } from "@/lib/utils";

interface FloatingStatProps {
  value: string;
  label: string;
  className?: string;
  /** Flip order so the dot/line sit on the right of the text instead of the left. */
  reverse?: boolean;
}

export function FloatingStat({
  value,
  label,
  className,
  reverse = false,
}: FloatingStatProps) {
  const dot = (
    <span className="relative flex h-2 w-2 shrink-0">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/50" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
    </span>
  );

  const line = (
    <div className="h-px w-8 shrink-0 border-t border-dashed border-white/25" />
  );

  const text = (
    <div className={cn("leading-tight", reverse ? "text-right" : "text-left")}>
      <p className="font-heading text-sm font-semibold text-white">{value}</p>
      <p className="text-xs text-white/45">{label}</p>
    </div>
  );

  return (
    <div
      className={cn(
        "pointer-events-none absolute z-10 hidden items-center gap-2 md:flex",
        className
      )}
    >
      {reverse ? (
        <>
          {text}
          {line}
          {dot}
        </>
      ) : (
        <>
          {dot}
          {line}
          {text}
        </>
      )}
    </div>
  );
}
