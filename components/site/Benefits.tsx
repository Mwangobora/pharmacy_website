"use client";

import { CalendarClock, ClipboardCheck, Gauge, LineChart, PackageSearch, Sparkles } from "lucide-react";
import { SectionBadge } from "@/components/ui/GradientBlobs";
import { RevealOnScroll, StaggerGroup, StaggerItem } from "@/components/ui/RevealOnScroll";

const BENEFITS = [
  { icon: Gauge, title: "Less manual work", description: "Stock, pricing, and sales calculations happen automatically instead of on paper." },
  { icon: PackageSearch, title: "Always know what's in stock", description: "Search any medicine and see exact quantities across every batch instantly." },
  { icon: ClipboardCheck, title: "Fewer stock shortages", description: "Low-stock alerts give staff time to reorder before a medicine runs out." },
  { icon: CalendarClock, title: "Catch expiry before it's a loss", description: "Batch expiry dates are tracked automatically, not remembered by hand." },
  { icon: LineChart, title: "Cleaner sales records", description: "Every sale is logged with the exact batch and price used — no missing receipts." },
  { icon: Sparkles, title: "Faster, more confident decisions", description: "Real numbers replace guesswork when deciding what to reorder and when." },
];

export function Benefits() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <RevealOnScroll className="mx-auto max-w-2xl text-center">
          <SectionBadge>Why PharmaSys</SectionBadge>
          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
            Built to remove the daily <span className="gradient-text">friction.</span>
          </h2>
        </RevealOnScroll>

        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {BENEFITS.map((benefit) => (
            <StaggerItem key={benefit.title}>
              <div className="h-full rounded-3xl border border-border bg-card p-6 transition-colors hover:border-primary/30">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                  <benefit.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{benefit.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
