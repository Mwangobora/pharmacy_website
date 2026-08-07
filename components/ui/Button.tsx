import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "md" | "lg";

const base =
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground shadow-[0_8px_30px_-8px_var(--glow-primary)] hover:shadow-[0_12px_36px_-6px_var(--glow-primary)] hover:-translate-y-0.5",
  secondary: "bg-foreground text-background hover:-translate-y-0.5 hover:opacity-90",
  outline: "border border-border bg-transparent hover:bg-muted hover:-translate-y-0.5",
  ghost: "bg-transparent hover:bg-muted",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-6 text-sm",
  lg: "h-14 px-8 text-base",
};

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement>, "type"> {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  icon?: ReactNode;
  /** Renders an <a>/<Link> instead of a <button> when set. */
  href?: string;
  /** Force external <a> behavior. Defaults to auto-detecting "http" links. */
  external?: boolean;
  type?: "button" | "submit" | "reset";
}

export function Button({ variant = "primary", size = "md", className, children, icon, href, external, ...rest }: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    const isExternal = external ?? href.startsWith("http");
    const anchorRest = rest as AnchorHTMLAttributes<HTMLAnchorElement>;

    if (isExternal) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...anchorRest}>
          {children}
          {icon}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...anchorRest}>
        {children}
        {icon}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
      {icon}
    </button>
  );
}
