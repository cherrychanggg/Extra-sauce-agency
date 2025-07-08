import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhoIsTheSauceFor from "@/components/WhoIsTheSauceFor";
import Testimonials from "@/components/Testimonials";
import ServicesOverview from "@/components/ServicesOverview";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <WhoIsTheSauceFor />
      <Testimonials />
      <ServicesOverview />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
