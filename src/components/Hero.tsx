import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-subtle">
      {/* Enhanced Background Gradient Orbs with Float Animation */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/30 rounded-full blur-3xl float-animation"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/25 rounded-full blur-3xl float-animation-delayed"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/20 rounded-full blur-2xl animate-glow-pulse"></div>
      
      <div className="container-premium text-center relative z-10 pt-20">
        <div className="max-w-5xl mx-auto animate-fade-in">
          {/* Enhanced Badge with Glassmorphism */}
          <div className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-md border border-primary/30 rounded-full mb-10 hover:bg-white/20 transition-all duration-300 group">
            <div className="w-3 h-3 bg-primary rounded-full mr-3 animate-bounce-gentle"></div>
            <span className="text-sm font-semibold text-primary group-hover:text-primary/80 transition-colors">
              Trusted by 20+ High-Growth B2B & DTC Companies
            </span>
          </div>

          {/* Enhanced Main Headline */}
          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-10">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">SAUCE™ Recipe</span> helps B2B SaaS companies build profitable{" "}
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              founder-led content engines
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Build a realm of influence with the modern B2B buyer by sharing your CEO's expertise 
            into binge-worthy social content that cultivates awareness, trust, and credibility.
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
            <Button className="btn-hero text-lg px-12 py-6 focus-enhanced group">
              <span className="group-hover:scale-105 transition-transform duration-200">Book a demo with Manny</span>
            </Button>
            <Button variant="outline" className="btn-ghost-premium text-lg px-12 py-6 focus-enhanced hover:shadow-lg">
              View The Process
            </Button>
          </div>

          {/* Social Proof */}
          {/* Removed redundant logo placeholder section */}
        </div>

        {/* Scroll Indicator */}
        {/* Removed animated down arrow for a cleaner look */}
      </div>
    </section>
  );
};

export default Hero;