import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { heroSection } from "@/content/homepage";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true); // Start visible for faster LCP

  useEffect(() => {
    // Defer non-critical mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    // Delay mouse tracking to improve initial render
    const timeoutId = setTimeout(() => {
      window.addEventListener('mousemove', handleMouseMove);
    }, 100);
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-subtle">
      {/* Enhanced Interactive Background */}
      <div className="absolute inset-0">
        {/* Interactive Mouse Gradient */}
        <div 
          className="absolute inset-0 opacity-30 transition-opacity duration-300"
          style={{
            background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 107, 107, 0.15), transparent 50%)`
          }}
        />
        
        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-primary/15 to-secondary/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-accent/15 to-primary/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-primary/20 rounded-full animate-bounce`}
              style={{
                left: `${20 + i * 10}%`,
                top: `${30 + i * 8}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '3s'
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="w-full text-center relative z-10 pt-16 mx-auto px-4 lg:px-6">
        <div className={`max-w-8xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Enhanced Badge with Glassmorphism */}
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-xl border border-primary/30 rounded-full mb-8 hover:bg-white/20 transition-all duration-300 group shadow-lg hover:shadow-primary/25">
            <Sparkles className="w-4 h-4 text-primary mr-2 animate-pulse" />
            <span className="text-sm font-semibold text-primary group-hover:text-primary/80 transition-colors">
              {heroSection.badge}
            </span>
          </div>

          {/* Optimized Main Headline for LCP - Simplified for faster render */}
          <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] mb-8 tracking-tight hero-title">
            Our{" "}
            <span className="relative inline-block text-primary bg-white/10 backdrop-blur-xl border border-primary/30 rounded-2xl px-6 py-2 shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105 glass-effect">
              SAUCE™ Recipe
            </span>{" "}
            helps B2B<br />
            companies build profitable{" "}
            <span className="text-secondary">
              content engines
            </span>
          </h1>

          {/* Enhanced Subheadline */}
          <p className="text-lg lg:text-xl text-muted-foreground mb-10 max-w-5xl mx-auto leading-relaxed">
            Build a realm of influence with the modern B2B buyer by sharing your CEO's expertise 
            into <span className="text-primary font-semibold">binge-worthy social content</span> that cultivates awareness, trust, and credibility.
          </p>

          {/* Enhanced CTA Buttons */}
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
            
            <Link to="/the-sauce-recipe">
              <Button 
                variant="outline" 
                className="group relative overflow-hidden border-2 border-primary/30 text-foreground bg-white/50 backdrop-blur-sm px-12 py-6 text-lg font-semibold rounded-2xl hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:scale-105 focus-enhanced">
                <Sparkles className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                {heroSection.secondaryButton}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;