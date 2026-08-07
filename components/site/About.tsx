"use client";

import { motion } from "framer-motion";
import { Boxes, Pill, Receipt, ShieldCheck, Truck } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SectionBadge } from "@/components/ui/GradientBlobs";
import { RevealOnScroll, StaggerGroup, StaggerItem } from "@/components/ui/RevealOnScroll";

const MODULES = [
  { icon: Boxes, label: "Inventory", className: "left-0 top-4" },
  { icon: Truck, label: "Procurement", className: "right-0 top-0" },
  { icon: Receipt, label: "Sales", className: "right-2 bottom-2" },
  { icon: ShieldCheck, label: "Access Control", className: "left-2 bottom-0" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">
        <RevealOnScroll direction="right">
          <SectionBadge>About PharmaSys</SectionBadge>
          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            One system, replacing spreadsheets, notebooks, and{" "}
            <span className="gradient-text">guesswork.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            PharmaSys is built specifically for pharmacy operations — from receiving stock off a
            supplier invoice to ringing up a sale at the counter. Every module shares the same
            source of truth, so what your team sees on the shop floor matches what&apos;s in the
            system, in real time.
          </p>

          <StaggerGroup className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3" stagger={0.12}>
            <StaggerItem>
              <AnimatedCounter value={100} suffix="+" className="text-2xl font-bold text-primary sm:text-3xl" />
              <p className="mt-1 text-xs text-muted-foreground">Medicines cataloged</p>
            </StaggerItem>
            <StaggerItem>
              <AnimatedCounter value={4} className="text-2xl font-bold text-secondary sm:text-3xl" />
              <p className="mt-1 text-xs text-muted-foreground">Staff roles built in</p>
            </StaggerItem>
            <StaggerItem>
              <AnimatedCounter value={99.9} decimals={1} suffix="%" className="text-2xl font-bold text-accent-foreground sm:text-3xl" />
              <p className="mt-1 text-xs text-muted-foreground">Stock accuracy</p>
            </StaggerItem>
          </StaggerGroup>
        </RevealOnScroll>

        <RevealOnScroll direction="left" delay={0.15}>
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <svg
              className="absolute inset-0 h-full w-full text-border"
              viewBox="0 0 100 100"
              fill="none"
              aria-hidden
            >
              <line x1="50" y1="50" x2="18" y2="24" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 2" />
              <line x1="50" y1="50" x2="84" y2="16" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 2" />
              <line x1="50" y1="50" x2="86" y2="82" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 2" />
              <line x1="50" y1="50" x2="16" y2="88" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 2" />
            </svg>

            <motion.div
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl bg-primary text-primary-foreground shadow-[0_20px_50px_-12px_var(--glow-primary)]"
            >
              <Pill className="h-10 w-10" />
            </motion.div>

            {MODULES.map((mod, i) => (
              <motion.div
                key={mod.label}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.12, duration: 0.5 }}
                className={`animate-float glass absolute flex w-28 flex-col items-center gap-2 rounded-2xl px-3 py-4 text-center shadow-lg shadow-black/5 ${mod.className}`}
                style={{ animationDelay: `${i * 0.6}s` }}
              >
                <mod.icon className="h-5 w-5 text-primary" />
                <span className="text-xs font-medium">{mod.label}</span>
              </motion.div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
