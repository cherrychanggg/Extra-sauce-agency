import Navigation from "@/components/shared/Navigation";
import HeroSection from "@/components/sections/homepage/HeroSection";
import TrustedBySection from "@/components/sections/homepage/TrustedBySection";
import WhoIsThisForSection from "@/components/sections/homepage/WhoIsThisForSection";
import TestimonialsSection from "@/components/sections/homepage/TestimonialsSection";
import ProcessSection from "@/components/sections/homepage/ProcessSection";
import ServicesOverviewSection from "@/components/sections/homepage/ServicesOverviewSection";
import FAQSection from "@/components/sections/homepage/FAQSection";
import CTASection from "@/components/sections/homepage/CTASection";
import Footer from "@/components/shared/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <TrustedBySection />
        <WhoIsThisForSection />
        <TestimonialsSection />
        <ProcessSection />
        <ServicesOverviewSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;