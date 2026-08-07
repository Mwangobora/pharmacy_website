"use client";

import { AnimatePresence, motion } from "framer-motion";
import { AlertTriangle, CreditCard, PackageCheck, ShoppingCart, Truck } from "lucide-react";
import { useEffect, useState } from "react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionBadge } from "@/components/ui/GradientBlobs";
import { cn } from "@/lib/utils";

const SLIDES = [
  {
    id: "inventory",
    label: "Live Inventory",
    icon: PackageCheck,
    description: "Stock levels update the instant a sale or purchase happens.",
    panel: <InventoryPanel />,
  },
  {
    id: "sales",
    label: "Point of Sale",
    icon: ShoppingCart,
    description: "Ring up sales fast, with batch-level pricing handled automatically.",
    panel: <SalesPanel />,
  },
  {
    id: "procurement",
    label: "Procurement",
    icon: Truck,
    description: "Receive stock from suppliers and watch inventory update live.",
    panel: <ProcurementPanel />,
  },
];

const SLIDE_DURATION = 4600;

export function ShowcaseSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((v) => (v + 1) % SLIDES.length), SLIDE_DURATION);
    return () => clearInterval(id);
  }, [active]);

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <RevealOnScroll className="mx-auto max-w-2xl text-center">
          <SectionBadge>See it in motion</SectionBadge>
          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
            A pharmacy platform that feels <span className="gradient-text">effortless</span> to run
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1} className="mt-14">
          <div className="glass overflow-hidden rounded-[2rem] p-2 shadow-2xl shadow-black/10 sm:p-3">
            {/* browser chrome */}
            <div className="flex items-center gap-2 rounded-t-2xl px-3 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" style={{ background: "#f87171" }} />
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#fbbf24" }} />
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#4ade80" }} />
              <div className="ml-3 flex-1 truncate rounded-full bg-background/70 px-3 py-1 text-center text-xs text-muted-foreground">
                app.pharmasys.co.tz/dashboard
              </div>
            </div>

            <div className="relative min-h-[22rem] overflow-hidden rounded-2xl bg-background sm:min-h-[26rem]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={SLIDES[active].id}
                  initial={{ opacity: 0, y: 18, scale: 0.99 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -18, scale: 0.99 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 p-5 sm:p-8"
                >
                  {SLIDES[active].panel}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </RevealOnScroll>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {SLIDES.map((slide, i) => (
            <button
              key={slide.id}
              onClick={() => setActive(i)}
              className={cn(
                "group relative overflow-hidden rounded-2xl border px-4 py-3.5 text-left transition-colors",
                i === active ? "border-primary/40 bg-primary/5" : "border-border hover:bg-muted/60",
              )}
            >
              <div className="flex items-center gap-2.5">
                <slide.icon className={cn("h-4 w-4", i === active ? "text-primary" : "text-muted-foreground")} />
                <span className="text-sm font-semibold">{slide.label}</span>
              </div>
              <p className="mt-1.5 text-xs text-muted-foreground">{slide.description}</p>
              {i === active && (
                <motion.div
                  key={active}
                  className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-primary"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function InventoryPanel() {
  const rows = [
    { name: "Artemether-Lumefantrine (ALU)", stock: "1,078 tablets", status: "OK", tone: "success" as const },
    { name: "Amoxicillin 500mg Capsules", stock: "2,118 capsules", status: "OK", tone: "success" as const },
    { name: "Amitriptyline 25mg Tablets", stock: "20 tablets", status: "Low", tone: "warning" as const },
    { name: "Furosemide 40mg Tablets", stock: "0 tablets", status: "Out", tone: "destructive" as const },
  ];

  return (
    <div>
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold">Medicines</h3>
        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">100 tracked</span>
      </div>
      <div className="mt-4 space-y-2">
        {rows.map((row, i) => (
          <motion.div
            key={row.name}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.08 * i, duration: 0.4 }}
            className="flex items-center justify-between rounded-xl border border-border bg-card px-3.5 py-2.5"
          >
            <div className="min-w-0">
              <p className="truncate text-sm font-medium">{row.name}</p>
              <p className="text-xs text-muted-foreground">{row.stock}</p>
            </div>
            <span
              className={cn(
                "shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold",
                row.tone === "success" && "bg-success/10 text-success",
                row.tone === "warning" && "bg-warning/10 text-warning",
                row.tone === "destructive" && "bg-destructive/10 text-destructive",
              )}
            >
              {row.status === "Low" && <AlertTriangle className="mr-1 inline h-3 w-3" />}
              {row.status}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function SalesPanel() {
  const items = [
    { name: "Paracetamol 500mg", qty: 2, price: 50 },
    { name: "ORS Sachets", qty: 3, price: 500 },
    { name: "Amoxicillin 500mg", qty: 1, price: 150 },
  ];
  const total = items.reduce((sum, i) => sum + i.qty * i.price, 0);

  return (
    <div className="mx-auto max-w-sm">
      <div className="flex items-center gap-2">
        <ShoppingCart className="h-4 w-4 text-primary" />
        <h3 className="text-sm font-semibold">New Sale — Invoice #3021</h3>
      </div>
      <div className="mt-4 space-y-2">
        {items.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.08 * i, duration: 0.4 }}
            className="flex items-center justify-between rounded-xl border border-border bg-card px-3.5 py-2.5 text-sm"
          >
            <span>
              {item.name} <span className="text-muted-foreground">× {item.qty}</span>
            </span>
            <span className="font-medium">TSh {(item.qty * item.price).toLocaleString()}</span>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-4 flex items-center justify-between rounded-xl bg-primary px-4 py-3 text-primary-foreground"
      >
        <span className="flex items-center gap-2 text-sm font-medium">
          <CreditCard className="h-4 w-4" /> Total due
        </span>
        <span className="text-base font-bold">TSh {total.toLocaleString()}</span>
      </motion.div>
    </div>
  );
}

function ProcurementPanel() {
  return (
    <div className="mx-auto max-w-sm">
      <div className="flex items-center gap-2">
        <Truck className="h-4 w-4 text-primary" />
        <h3 className="text-sm font-semibold">Purchase — Medical Stores Department</h3>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="mt-4 rounded-2xl border border-border bg-card p-4"
      >
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Invoice</span>
          <span className="font-medium">INV-2026-0142</span>
        </div>
        <div className="mt-2 flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Amoxicillin 500mg × 500</span>
          <span className="font-medium">TSh 75,000</span>
        </div>
        <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-muted">
          <motion.div
            className="h-full rounded-full bg-secondary"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.3, duration: 1.1, ease: "easeOut" }}
          />
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-3 flex items-center gap-1.5 text-xs font-medium text-success"
        >
          <PackageCheck className="h-3.5 w-3.5" /> Stock received — inventory updated automatically
        </motion.p>
      </motion.div>
    </div>
  );
}
