import "../styles/frontpage.css"
import AdditionalInfoSection from "./_components/AdditionalInfoSection"
import ComparisonSection from "./_components/ComparisonSection"
import DemoSection from "./_components/DemoSection"
import FinalHook from "./_components/FinalHook"
import HeroSection from "./_components/HeroSection"
import TestimonialsSection from "./_components/TestimonialsSection"

const LandingPage = () => {
  return (
    <div>
      <main className="flex-1 mb-9">
        <HeroSection />
        <AdditionalInfoSection />
        <div className="overflow-x-clip">
          <TestimonialsSection />
        </div>
        <DemoSection />
        <ComparisonSection />
        <FinalHook />
      </main>
    </div>
  );
};

export default LandingPage;