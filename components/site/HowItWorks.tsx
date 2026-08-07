"use client";

import { motion } from "framer-motion";
import { BarChart3, KeyRound, ListChecks, LogIn, PackagePlus, ShoppingBag, UserPlus } from "lucide-react";
import { SectionBadge } from "@/components/ui/GradientBlobs";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const STEPS = [
  { icon: UserPlus, title: "An admin creates your account", description: "Staff accounts are created and assigned a role by your pharmacy's System Administrator." },
  { icon: LogIn, title: "Log in securely", description: "Sign in with your email and password to reach the dashboard for your role." },
  { icon: KeyRound, title: "Get scoped access", description: "You see only the modules your role needs — dispensing, checkout, stock, or full administration." },
  { icon: PackagePlus, title: "Add medicines & receive stock", description: "Catalog medicines and record purchases from suppliers as stock arrives." },
  { icon: ListChecks, title: "Monitor stock in real time", description: "Low-stock and expiry alerts surface automatically as inventory moves." },
  { icon: ShoppingBag, title: "Record every sale", description: "Checkout deducts stock instantly and keeps pricing accurate at the batch level." },
  { icon: BarChart3, title: "Review reports", description: "Track sales, stock value, and supplier activity from the dashboard." },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <RevealOnScroll className="mx-auto max-w-2xl text-center">
          <SectionBadge>How it works</SectionBadge>
          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
            From login to <span className="gradient-text">daily operations.</span>
          </h2>
        </RevealOnScroll>

        <div className="relative mt-16">
          <div
            className="absolute left-5 top-0 bottom-0 w-px bg-linear-to-b from-primary via-secondary to-accent sm:left-1/2"
            aria-hidden
          />
          <ol className="space-y-10">
            {STEPS.map((step, i) => (
              <li key={step.title} className="relative">
                <div className={`sm:flex sm:items-center sm:gap-10 ${i % 2 === 1 ? "sm:flex-row-reverse" : ""}`}>
                  <div className="hidden sm:block sm:w-1/2" />

                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="absolute left-5 top-0 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-4 border-background bg-primary text-primary-foreground shadow-lg sm:left-1/2"
                  >
                    <step.icon className="h-4 w-4" />
                  </motion.div>

                  <RevealOnScroll
                    direction={i % 2 === 1 ? "left" : "right"}
                    className="ml-16 sm:ml-0 sm:w-1/2"
                  >
                    <div className="card-glow rounded-2xl border border-border bg-card p-5">
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary">Step {i + 1}</p>
                      <h3 className="mt-1 text-base font-semibold">{step.title}</h3>
                      <p className="mt-1.5 text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </RevealOnScroll>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
