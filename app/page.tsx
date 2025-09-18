import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { BenefitsSection } from "@/components/benefits-section"
import { PricingSection } from "@/components/pricing-section"
import { ScalabilitySection } from "@/components/scalability-section"
import { Operations247Section } from "@/components/operations-247-section"
import { CTASection } from "@/components/cta-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <BenefitsSection />
      <PricingSection />
      <ScalabilitySection />
      <Operations247Section />
      <CTASection />
    </main>
  )
}
