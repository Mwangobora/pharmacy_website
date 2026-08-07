"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Button } from "@/components/ui/Button";
import { GradientBlobs, SectionBadge } from "@/components/ui/GradientBlobs";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { PharmacyScene3D } from "@/components/three/PharmacyScene3D";
import { APP_ROUTES } from "@/lib/config";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      <GradientBlobs />

      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionBadge>Built for pharmacies in Tanzania</SectionBadge>
          </motion.div>

          <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            <AnimatedText text="Run your pharmacy on one connected platform" delay={0.15} />{" "}
            <RevealOnScroll direction="none" delay={0.55} className="inline-block">
              <span className="gradient-text">from stock to sale.</span>
            </RevealOnScroll>
          </h1>

          <RevealOnScroll delay={0.7}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              PharmaSys keeps inventory, procurement, sales, and staff access in sync in real time —
              so stock counts are always accurate, restocking is one click away, and every sale is
              recorded automatically.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.85}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button href="#request-access" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
                Get Started
              </Button>
              <Button href={APP_ROUTES.login} variant="outline" size="lg" external icon={<PlayCircle className="h-4 w-4" />}>
                Login to PharmaSys
              </Button>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={1}>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" />
                Role-based access control
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-secondary" />
                Real-time stock sync
              </div>
            </div>
          </RevealOnScroll>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative aspect-square w-full max-w-lg mx-auto rounded-[2.5rem] border border-border/70 bg-linear-to-br from-primary/10 via-card to-secondary/10">
            <PharmacyScene3D className="absolute inset-0" />

            <FloatingStatCard
              className="left-[-8%] top-[12%]"
              icon={<Sparkles className="h-3.5 w-3.5 text-primary" />}
              label="Stock on hand"
              value="12,480 units"
              delay={1.1}
            />
            <FloatingStatCard
              className="right-[-6%] top-[42%]"
              icon={<TrendingUp className="h-3.5 w-3.5 text-secondary" />}
              label="Today's sales"
              value="TSh 1.2M"
              delay={1.3}
            />
            <FloatingStatCard
              className="left-[2%] bottom-[6%]"
              icon={<ShieldCheck className="h-3.5 w-3.5 text-warning" />}
              label="Low-stock alerts"
              value="3 medicines"
              delay={1.5}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FloatingStatCard({
  icon,
  label,
  value,
  className,
  delay = 0,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      className={`glass animate-float absolute z-10 w-44 rounded-2xl px-4 py-3 shadow-xl shadow-black/5 ${className ?? ""}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-background">{icon}</span>
        <div>
          <p className="text-[10px] uppercase tracking-wide text-muted-foreground">{label}</p>
          <p className="text-sm font-semibold">{value}</p>
        </div>
      </div>
    </motion.div>
  );
}
