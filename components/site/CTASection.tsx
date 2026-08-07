"use client";

import { motion } from "framer-motion";
import { ArrowRight, LogIn, Mail, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GradientBlobs } from "@/components/ui/GradientBlobs";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { APP_ROUTES } from "@/lib/config";

const CONTACT = {
  email: "hello@pharmasys.co.tz",
  phone: "+255 700 000 000",
};

export function CTASection() {
  return (
    <section id="request-access" className="relative overflow-hidden py-24 sm:py-32">
      <GradientBlobs />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--primary), transparent 70%)" }}
        animate={{ scale: [1, 1.1, 1], rotate: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto max-w-4xl px-6 text-center">
        <RevealOnScroll>
          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            Transform the way your <span className="gradient-text">pharmacy operates.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            PharmaSys accounts are set up by your pharmacy&apos;s administrator — new pharmacies can
            request onboarding directly and we&apos;ll get your team access.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button href={`mailto:${CONTACT.email}`} size="lg" external icon={<ArrowRight className="h-4 w-4" />}>
              Request Access
            </Button>
            <Button href={APP_ROUTES.login} variant="outline" size="lg" external icon={<LogIn className="h-4 w-4" />}>
              Login
            </Button>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.3}>
          <div className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href={`mailto:${CONTACT.email}`}
              className="glass flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4 text-primary" />
              {CONTACT.email}
            </a>
            <a
              href={`tel:${CONTACT.phone.replace(/\s+/g, "")}`}
              className="glass flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4 text-secondary" />
              {CONTACT.phone}
            </a>
          </div>
          <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
            <MessageCircle className="h-3.5 w-3.5" />
            Already have an account? Ask your administrator, or log in above.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
