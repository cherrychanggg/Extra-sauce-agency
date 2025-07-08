import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ctaSection } from "@/content/homepage";

const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-hero relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-secondary/90 to-accent/90"></div>
      <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      
      <div className="container-premium relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">
            {ctaSection.headline}
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            {ctaSection.description}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/book-strategy-call">
              <Button className="bg-white text-primary hover:bg-white/90 px-12 py-6 text-lg font-semibold rounded-2xl shadow-elegant hover:scale-105 transition-all duration-300">
                {ctaSection.primaryButton}
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary px-12 py-6 text-lg font-semibold rounded-2xl transition-all duration-300"
            >
              {ctaSection.secondaryButton}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;