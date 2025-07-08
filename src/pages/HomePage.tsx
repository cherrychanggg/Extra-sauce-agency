import Navigation from "@/components/shared/Navigation";
import HeroSection from "@/components/sections/homepage/HeroSection";
import TrustedBySection from "@/components/sections/homepage/TrustedBySection";
import WhoIsThisForSection from "@/components/sections/homepage/WhoIsThisForSection";
import Testimonials from "@/components/Testimonials";
import ProcessSection from "@/components/sections/homepage/ProcessSection";
import ServicesOverviewSection from "@/components/sections/homepage/ServicesOverviewSection";
import FAQSection from "@/components/sections/homepage/FAQSection";
import CTASection from "@/components/sections/homepage/CTASection";
import Footer from "@/components/shared/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <TrustedBySection />
      <WhoIsThisForSection />
      <Testimonials />
      <ProcessSection />
      <ServicesOverviewSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default HomePage;