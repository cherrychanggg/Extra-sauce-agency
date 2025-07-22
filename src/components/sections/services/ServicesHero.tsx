
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ServicesHero = () => {
  return (
    <section className="section-padding pt-32 bg-gradient-subtle relative overflow-hidden">
      <div className="container-premium">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions to transform your founder into a thought leader and build profitable content engines.
          </p>
          
          <Button className="group relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-lg font-semibold rounded-2xl shadow-elegant hover:scale-105 transition-all duration-300">
            <span className="relative z-10 flex items-center">
              Explore Services
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
