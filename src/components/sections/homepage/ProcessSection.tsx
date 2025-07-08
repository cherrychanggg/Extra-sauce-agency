import { ArrowRight } from "lucide-react";
import { processSection } from "@/content/homepage";

const ProcessSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-premium">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            {processSection.headline}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {processSection.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {processSection.steps.map((step, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                {index + 1}
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-4">
                {step.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                {step.description}
              </p>
              
              <div className="text-sm text-primary font-semibold">
                {step.duration}
              </div>
              
              {index < processSection.steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-4 text-primary/30">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection; 