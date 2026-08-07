"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, PackageCheck, Users } from "lucide-react";
import { SectionBadge } from "@/components/ui/GradientBlobs";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { cn } from "@/lib/utils";

export function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <RevealOnScroll className="mx-auto max-w-2xl text-center">
          <SectionBadge>Features</SectionBadge>
          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
            Designed around how a pharmacy <span className="gradient-text">actually works.</span>
          </h2>
        </RevealOnScroll>

        <div className="mt-20 flex flex-col gap-24">
          <FeatureRow
            reverse={false}
            title="Stock updates itself"
            description="Every purchase, sale, adjustment, and expiry writes to one shared stock ledger. No more reconciling paper records against what's actually on the shelf — the low-stock badge in the sidebar reflects reality the moment it changes."
            points={["Batch-level stock tracking", "Automatic low-stock alerts", "Full stock transaction history"]}
            visual={<StockVisual />}
          />
          <FeatureRow
            reverse
            title="Receiving stock takes seconds"
            description="Log a supplier invoice once and PharmaSys creates the batches, applies pricing, and updates on-hand quantities in the same step — the same flow you'd use to restock a shelf, digitized."
            points={["One-step purchase intake", "Supplier & cost tracking", "Expiry dates captured automatically"]}
            visual={<ProcurementVisual />}
          />
          <FeatureRow
            reverse={false}
            title="Every role sees exactly what it needs"
            description="Cashiers get a fast checkout screen. Pharmacists see dispensing and stock. Admins see everything, including staff and permissions. Access is enforced by the system, not by convention."
            points={["System Administrator, Pharmacist, Cashier, Inventory Manager", "Granular permission assignment", "Full audit trail on sensitive actions"]}
            visual={<AccessVisual />}
          />
        </div>
      </div>
    </section>
  );
}

function FeatureRow({
  title,
  description,
  points,
  visual,
  reverse,
}: {
  title: string;
  description: string;
  points: string[];
  visual: React.ReactNode;
  reverse: boolean;
}) {
  return (
    <div className={cn("grid items-center gap-12 lg:grid-cols-2 lg:gap-16", reverse && "lg:[&>*:first-child]:order-2")}>
      <RevealOnScroll direction={reverse ? "left" : "right"}>
        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h3>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
        <ul className="mt-6 space-y-3">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-2.5 text-sm">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <ArrowUpRight className="h-3 w-3" />
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </RevealOnScroll>

      <RevealOnScroll direction={reverse ? "right" : "left"} delay={0.1}>
        {visual}
      </RevealOnScroll>
    </div>
  );
}

function VisualFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="card-glow rounded-3xl border border-border bg-card p-6 shadow-xl shadow-black/5">{children}</div>
  );
}

function StockVisual() {
  const bars = [40, 70, 55, 90, 65, 82];
  return (
    <VisualFrame>
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 text-sm font-semibold">
          <PackageCheck className="h-4 w-4 text-primary" /> Stock on hand
        </span>
        <span className="rounded-full bg-success/10 px-2.5 py-1 text-[11px] font-semibold text-success">Live</span>
      </div>
      <div className="mt-6 flex h-32 items-end gap-2.5">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6, ease: "easeOut" }}
            className={cn("flex-1 rounded-t-lg", i % 2 === 0 ? "bg-primary" : "bg-secondary")}
          />
        ))}
      </div>
      <div className="mt-3 flex justify-between text-[11px] text-muted-foreground">
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
      </div>
    </VisualFrame>
  );
}

function ProcurementVisual() {
  return (
    <VisualFrame>
      <span className="text-sm font-semibold">Purchase INV-2026-0142</span>
      <div className="mt-4 space-y-2.5">
        {["Batch created", "Stock quantity updated", "Expiry date recorded"].map((step, i) => (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="flex items-center gap-2.5 rounded-xl bg-muted/60 px-3.5 py-2.5 text-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
            {step}
          </motion.div>
        ))}
      </div>
    </VisualFrame>
  );
}

function AccessVisual() {
  const roles = [
    { name: "System Administrator", access: "Full access" },
    { name: "Pharmacist", access: "Sales & inventory view" },
    { name: "Cashier", access: "Sales & payments" },
    { name: "Inventory Manager", access: "Stock & procurement" },
  ];
  return (
    <VisualFrame>
      <span className="flex items-center gap-2 text-sm font-semibold">
        <Users className="h-4 w-4 text-primary" /> Roles &amp; permissions
      </span>
      <div className="mt-4 space-y-2">
        {roles.map((role, i) => (
          <motion.div
            key={role.name}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center justify-between rounded-xl border border-border px-3.5 py-2.5 text-sm"
          >
            <span className="font-medium">{role.name}</span>
            <span className="text-xs text-muted-foreground">{role.access}</span>
          </motion.div>
        ))}
      </div>
    </VisualFrame>
  );
}
