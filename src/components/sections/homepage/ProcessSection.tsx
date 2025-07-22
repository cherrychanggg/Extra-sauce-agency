import { ArrowRight } from "lucide-react";
import { processSection } from "@/content/homepage";

const ProcessSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container-premium relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            From Idea to{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Implementation
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our proven methodology transforms your vision into reality through strategic planning, expert execution, and measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {processSection.steps.map((step, index) => (
            <div 
              key={index}
              className="relative text-center group"
            >
              {/* Connection Line */}
              {index < processSection.steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-4 z-10">
                  <ArrowRight className="w-6 h-6 text-primary/30 group-hover:text-primary transition-colors duration-300" />
                </div>
              )}
              
              {/* Step Number Circle */}
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                  {index + 1}
                </div>
                <div className="absolute inset-0 w-20 h-20 bg-gradient-primary rounded-full mx-auto opacity-0 group-hover:opacity-30 group-hover:scale-150 transition-all duration-500 blur-xl"></div>
              </div>
              
              {/* Content */}
              <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-6 border border-border/30 group-hover:border-primary/30 transition-all duration-300 hover:shadow-xl">
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {step.description}
                </p>
                
                <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full">
                  <span className="text-sm text-primary font-semibold">
                    {step.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection; 