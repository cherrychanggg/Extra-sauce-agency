import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import CTASection from "@/components/sections/homepage/CTASection";
import ServicesOverviewSection from "@/components/sections/homepage/ServicesOverviewSection";

const Services = () => {

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center relative overflow-hidden bg-gradient-subtle pt-20">
        <div className="container-premium text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Choose the perfect service to transform your founder into a thought leader and build a profitable content engine.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid (reused from homepage) */}
      <ServicesOverviewSection />

      {/* Full-width CTA Section */}
      <div className="mt-20">
        <CTASection />
      </div>

      <Footer />
    </div>
  );
};

export default Services;