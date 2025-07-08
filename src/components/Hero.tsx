import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-subtle">
      {/* Modern Geometric Background Pattern */}
      <div className="absolute inset-0">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary/20 rounded-3xl rotate-45 animate-spin-slow"></div>
          <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-secondary/20 rounded-2xl rotate-12 animate-bounce-gentle"></div>
          <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-accent/10 rounded-full animate-pulse"></div>
        </div>
        
        {/* Subtle Mesh Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        
        {/* Modern Line Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1"/>
              <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
          <path d="M0,50 Q25,20 50,50 T100,50" stroke="url(#lineGradient)" strokeWidth="0.5" fill="none" className="animate-pulse"/>
          <path d="M0,70 Q25,40 50,70 T100,70" stroke="url(#lineGradient)" strokeWidth="0.3" fill="none" className="animate-pulse" style={{animationDelay: '1s'}}/>
        </svg>
      </div>
      
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