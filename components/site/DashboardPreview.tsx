"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  Boxes,
  LayoutDashboard,
  Pill,
  Receipt,
  TrendingUp,
  Truck,
  Users,
  Wallet,
} from "lucide-react";
import { SectionBadge } from "@/components/ui/GradientBlobs";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { cn } from "@/lib/utils";

const NAV = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Boxes, label: "Inventory" },
  { icon: Truck, label: "Procurement" },
  { icon: Receipt, label: "Sales & Billing" },
  { icon: Users, label: "User Management" },
];

const TILES = [
  { icon: Wallet, label: "Revenue today", value: "TSh 1.2M", tone: "text-primary" },
  { icon: Boxes, label: "Stock value", value: "TSh 48.6M", tone: "text-secondary" },
  { icon: Receipt, label: "Sales this week", value: "312", tone: "text-accent-foreground" },
];

export function DashboardPreview() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <RevealOnScroll className="mx-auto max-w-2xl text-center">
          <SectionBadge>The dashboard</SectionBadge>
          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
            A command center for the whole <span className="gradient-text">pharmacy.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            This preview mirrors the real PharmaSys dashboard — it&apos;s a marketing view only, not a
            live connection to your system.
          </p>
        </RevealOnScroll>

        <div className="relative mt-16">
          <RevealOnScroll delay={0.1}>
            <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl shadow-black/10">
              <div className="flex">
                <div className="hidden w-52 shrink-0 border-r border-border bg-muted/40 p-4 sm:block">
                  <div className="flex items-center gap-2 px-2 pb-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                      <Pill className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-bold">PharmaSys</span>
                  </div>
                  <nav className="space-y-1">
                    {NAV.map((item) => (
                      <div
                        key={item.label}
                        className={cn(
                          "flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-medium",
                          item.active ? "bg-primary/10 text-primary" : "text-muted-foreground",
                        )}
                      >
                        <item.icon className="h-3.5 w-3.5" />
                        {item.label}
                      </div>
                    ))}
                  </nav>
                </div>

                <div className="flex-1 p-5 sm:p-7">
                  <p className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Admin Console</p>
                  <h3 className="text-lg font-semibold">Overview</h3>

                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    {TILES.map((tile, i) => (
                      <motion.div
                        key={tile.label}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="rounded-2xl border border-border p-4"
                      >
                        <tile.icon className={cn("h-4 w-4", tile.tone)} />
                        <p className={cn("mt-3 text-xl font-bold", tile.tone)}>{tile.value}</p>
                        <p className="text-xs text-muted-foreground">{tile.label}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-5 flex h-28 items-end gap-2 rounded-2xl border border-border p-4 sm:h-32">
                    {[35, 55, 42, 70, 58, 80, 64].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.06, duration: 0.5 }}
                        className={cn("flex-1 rounded-t-md", i === 5 ? "bg-primary" : "bg-muted-foreground/25")}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <FloatingCard
            className="left-2 -top-6 hidden sm:flex sm:left-[-2rem]"
            icon={<AlertTriangle className="h-3.5 w-3.5 text-warning" />}
            label="Low stock"
            value="15 medicines"
            delay={0.5}
          />
          <FloatingCard
            className="right-2 -bottom-6 hidden sm:flex sm:right-[-2rem]"
            icon={<TrendingUp className="h-3.5 w-3.5 text-secondary" />}
            label="Sales trending up"
            value="+18% this week"
            delay={0.7}
          />
        </div>
      </div>
    </section>
  );
}

function FloatingCard({
  icon,
  label,
  value,
  className,
  delay,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  className?: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className={cn(
        "glass animate-float absolute w-48 items-center gap-2.5 rounded-2xl px-4 py-3 shadow-xl shadow-black/10",
        className,
      )}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-center gap-2.5">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-background">{icon}</span>
        <div>
          <p className="text-[10px] uppercase tracking-wide text-muted-foreground">{label}</p>
          <p className="text-sm font-semibold">{value}</p>
        </div>
      </div>
    </motion.div>
  );
}
