import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-subtle">
      {/* Background Gradient Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container-premium text-center relative z-10 pt-20">
        <div className="max-w-5xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-full mb-8">
            <span className="text-sm font-medium text-primary">
              🔥 Trusted by 20+ High-Growth B2B & DTC Companies
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">SAUCE™ Recipe</span> helps B2B SaaS companies build profitable{" "}
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              founder-led content engines
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Build a realm of influence with the modern B2B buyer by sharing your CEO's expertise 
            into binge-worthy social content that cultivates awareness, trust, and credibility.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Button className="btn-hero text-lg px-12 py-6">
              Book a demo with Manny
            </Button>
            <Button variant="outline" className="btn-ghost-premium text-lg px-12 py-6">
              View The Process
            </Button>
          </div>

          {/* Social Proof */}
          <div className="animate-slide-in-right delay-500">
            <p className="text-sm font-medium text-muted-foreground mb-6 uppercase tracking-wider">
              Trusted by 20+ High-Growth B2B & DTC Companies
            </p>
            <div className="flex items-center justify-center gap-8 lg:gap-12 opacity-60 hover:opacity-100 transition-opacity duration-500">
              {/* Company logos would go here - using placeholder divs */}
              {Array.from({ length: 6 }).map((_, i) => (
                <div 
                  key={i} 
                  className="w-20 h-12 bg-muted/50 rounded-lg flex items-center justify-center border border-border/50"
                >
                  <span className="text-xs font-medium text-muted-foreground">Logo</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;