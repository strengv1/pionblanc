"use client"

import "../styles/frontpage.css"
import AdditionalInfoSection from "./_components/AdditionalInfoSection"
import DemoSection from "./_components/DemoSection"
import FinalHook from "./_components/FinalHook"
import HeroSection from "./_components/HeroSection"
// import PricingSection from "./_components/PricingSection"
import TestimonialsSection from "./_components/TestimonialsSection"

export default function LandingPage() {
  return (
    <div>
      <main className="flex-1 mb-9">

        {/* Hero Section */}
        <HeroSection />
        <AdditionalInfoSection />
        <div className="overflow-x-clip">
          <TestimonialsSection />
        </div>
        <DemoSection />
        <FinalHook />
        {/* <PricingSection /> */}
      </main>
    </div>
  )
}