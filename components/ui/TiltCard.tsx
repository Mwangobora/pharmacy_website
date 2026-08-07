"use client";

import { motion, useMotionTemplate, useSpring } from "framer-motion";
import { type MouseEvent, type ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  /** Max rotation in degrees. */
  intensity?: number;
  glow?: boolean;
}

export function TiltCard({ children, className, intensity = 8, glow = true }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const rotateX = useSpring(0, { stiffness: 220, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 220, damping: 20 });
  const scale = useSpring(1, { stiffness: 220, damping: 20 });
  const glowX = useSpring(50, { stiffness: 200, damping: 24 });
  const glowY = useSpring(50, { stiffness: 200, damping: 24 });

  const background = useMotionTemplate`radial-gradient(280px circle at ${glowX}% ${glowY}%, color-mix(in oklch, var(--primary) 22%, transparent), transparent 70%)`;

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    rotateY.set((px - 0.5) * intensity * 2);
    rotateX.set((0.5 - py) * intensity * 2);
    glowX.set(px * 100);
    glowY.set(py * 100);
  };

  const handleEnter = () => scale.set(1.02);
  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, scale, transformPerspective: 900 }}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-border bg-card [transform-style:preserve-3d]",
        className,
      )}
    >
      {glow && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background }}
        />
      )}
      <div style={{ transform: "translateZ(24px)" }} className="relative">
        {children}
      </div>
    </motion.div>
  );
}
