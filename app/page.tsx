import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { FacilitySection } from '@/components/facility-section'
import { FlowSection } from '@/components/flow-section'
import { ResultsSection } from '@/components/results-section'
import { PricingSection } from '@/components/pricing-section'
import { CampaignSection } from '@/components/campaign-section'
import { FaqSection } from '@/components/faq-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'
import { FloatingCTA } from '@/components/floating-cta'

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pb-20 md:pb-0">
        <HeroSection />
        <AboutSection />
        <FacilitySection />
        <FlowSection />
        <ResultsSection />
        <PricingSection />
        <CampaignSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
