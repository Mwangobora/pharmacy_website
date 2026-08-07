import { cn } from "@/lib/utils";

interface GradientBlobsProps {
  className?: string;
  variant?: "mesh" | "grid" | "both";
}

/** Decorative ambient background: soft gradient mesh + optional faint grid. Pure CSS, no JS. */
export function GradientBlobs({ className, variant = "both" }: GradientBlobsProps) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)} aria-hidden>
      {(variant === "mesh" || variant === "both") && <div className="absolute inset-0 gradient-mesh" />}
      {(variant === "grid" || variant === "both") && (
        <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(60%_60%_at_50%_20%,black,transparent)]" />
      )}
    </div>
  );
}

export function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      {children}
    </span>
  );
}
