import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ctaSection } from "@/content/homepage";

const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-hero relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-secondary/90 to-accent/90"></div>
      <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-bounce"
            style={{
              left: `${10 + i * 10}%`,
              top: `${20 + i * 8}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: '2s'
            }}
          />
        ))}
      </div>
      
      <div className="container-premium relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Ready for a{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                strategy call?
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-white/30 rounded-full"></div>
            </span>
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how Extra Sauce can transform your founder into a thought leader and build a profitable content engine for your B2B SaaS company.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/book-strategy-call">
              <Button className="group relative overflow-hidden bg-white text-primary hover:bg-white/90 px-12 py-6 text-lg font-semibold rounded-2xl shadow-elegant hover:scale-105 transition-all duration-300">
                <span className="relative z-10 flex items-center">
                  Talk with Manny
                  <div className="ml-2 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                    <span className="text-xs">→</span>
                  </div>
                </span>
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="group border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary px-12 py-6 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105"
            >
              <span className="group-hover:scale-110 transition-transform duration-300">
                View Success Stories
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;