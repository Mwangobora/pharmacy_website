"use client";

import {
  BellRing,
  CalendarClock,
  LineChart,
  Pill,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { SectionBadge } from "@/components/ui/GradientBlobs";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { TiltCard } from "@/components/ui/TiltCard";

const SERVICES = [
  {
    icon: Pill,
    title: "Medicine Management",
    description: "A structured catalog with categories, units, batches, and pricing kept consistent across the pharmacy.",
  },
  {
    icon: Truck,
    title: "Procurement & Suppliers",
    description: "Record purchases from suppliers and watch stock and batch expiry update automatically on receipt.",
  },
  {
    icon: LineChart,
    title: "Sales & Billing",
    description: "Fast point-of-sale flows with accurate batch-level pricing and instant stock deduction.",
  },
  {
    icon: BellRing,
    title: "Stock Monitoring",
    description: "Live low-stock and out-of-stock alerts, so restocking happens before shelves go empty.",
  },
  {
    icon: CalendarClock,
    title: "Expiry Tracking",
    description: "Batch-level expiry dates surface automatically, keeping expired stock off the shelf.",
  },
  {
    icon: ShieldCheck,
    title: "Role-Based Access",
    description: "Admins, pharmacists, cashiers, and inventory staff each see only what their role needs.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <RevealOnScroll className="mx-auto max-w-2xl text-center">
          <SectionBadge>Services</SectionBadge>
          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything a pharmacy counter needs, <span className="gradient-text">built in.</span>
          </h2>
        </RevealOnScroll>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <RevealOnScroll key={service.title} delay={i * 0.08}>
              <TiltCard className="h-full p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <service.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              </TiltCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
