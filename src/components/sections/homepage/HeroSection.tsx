import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { heroSection } from "@/content/homepage";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-subtle">
      {/* Interactive Mouse Gradient */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 107, 107, 0.1), transparent 40%)`
        }}
      />
      
      {/* Subtle Gradient Orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container-premium text-center relative z-10 pt-20">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Enhanced Badge */}
          <div className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-xl border border-primary/30 rounded-full mb-10 hover:bg-white/20 transition-all duration-300 group shadow-lg">
            <Sparkles className="w-4 h-4 text-primary mr-3 animate-pulse" />
            <span className="text-sm font-semibold text-primary group-hover:text-primary/80 transition-colors">
              {heroSection.badge}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl lg:text-8xl font-bold leading-[0.9] mb-12 tracking-tight">
            Our{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
                SAUCE™ Recipe
              </span>
            </span>{" "}
            helps B2B SaaS companies build profitable{" "}
            <span className="bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">
              founder-led content engines
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-muted-foreground mb-16 max-w-4xl mx-auto leading-relaxed font-medium">
            {heroSection.subheadline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
            <Link to="/book-strategy-call">
              <Button className="group relative overflow-hidden bg-gradient-to-r from-primary to-secondary text-primary-foreground px-12 py-6 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105 focus-enhanced">
                <span className="relative z-10 flex items-center">
                  {heroSection.primaryButton}
                  <div className="ml-2 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                    <ArrowDown className="w-3 h-3 rotate-[-45deg]" />
                  </div>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </Link>
            
            <Button 
              variant="outline" 
              className="group relative overflow-hidden border-2 border-primary/30 text-foreground bg-white/50 backdrop-blur-sm px-12 py-6 text-lg font-semibold rounded-2xl hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:scale-105 focus-enhanced"
            >
              <Sparkles className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              {heroSection.secondaryButton}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;