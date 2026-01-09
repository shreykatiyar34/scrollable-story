import LandingNavbar from "@/components/landing-page/LandingNavbar";
import HeroSection from "@/components/landing-page/HeroSection";
import HowItWorksSection from "@/components/landing-page/HowItWorksSection";
import AdaptsSection from "@/components/landing-page/AdaptsSection";
import TestimonialsSection from "@/components/landing-page/TestimonialsSection";
import FAQSection from "@/components/landing-page/FAQSection";
import CTASection from "@/components/landing-page/CTASection";
import LandingFooter from "@/components/landing-page/LandingFooter";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <LandingNavbar />
      <HeroSection />
      <HowItWorksSection />
      <AdaptsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <LandingFooter />
    </div>
  );
};

export default LandingPage;
