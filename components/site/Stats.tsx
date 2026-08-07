"use client";

import { AlertOctagon, Boxes, ShieldCheck, Users } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { GradientBlobs } from "@/components/ui/GradientBlobs";
import { StaggerGroup, StaggerItem } from "@/components/ui/RevealOnScroll";

const STATS = [
  { icon: Boxes, value: 100, suffix: "+", label: "Medicines managed per pharmacy" },
  { icon: AlertOctagon, value: 0, label: "Stock-outs missed by the system" },
  { icon: Users, value: 4, label: "Dedicated staff roles" },
  { icon: ShieldCheck, value: 99.9, decimals: 1, suffix: "%", label: "Recorded stock accuracy" },
];

export function Stats() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <GradientBlobs variant="mesh" />
      <div className="mx-auto max-w-6xl px-6">
        <StaggerGroup className="glass grid grid-cols-2 gap-8 rounded-4xl px-8 py-12 sm:grid-cols-4 sm:px-12">
          {STATS.map((stat) => (
            <StaggerItem key={stat.label} className="text-center">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <stat.icon className="h-5 w-5" />
              </div>
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                decimals={stat.decimals}
                className="mt-4 block text-3xl font-bold tracking-tight sm:text-4xl"
              />
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">{stat.label}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
