import { About } from "@/components/site/About";
import { Benefits } from "@/components/site/Benefits";
import { CTASection } from "@/components/site/CTASection";
import { DashboardPreview } from "@/components/site/DashboardPreview";
import { Features } from "@/components/site/Features";
import { Hero } from "@/components/site/Hero";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Services } from "@/components/site/Services";
import { ShowcaseSection } from "@/components/site/ShowcaseSection";
import { Stats } from "@/components/site/Stats";

export default function Home() {
  return (
    <>
      <Hero />
      <ShowcaseSection />
      <About />
      <Services />
      <Features />
      <Stats />
      <HowItWorks />
      <DashboardPreview />
      <Benefits />
      <CTASection />
    </>
  );
}
