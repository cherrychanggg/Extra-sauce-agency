
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Lightbulb, Target, Zap, Users, TrendingUp, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const SauceRecipeSection = () => {
  const steps = [
    {
      icon: Target,
      title: "Strategic Foundation",
      description: "We start by understanding your business goals, target audience, and competitive landscape to create a content strategy that drives real results.",
      features: ["Audience research", "Competitor analysis", "Goal alignment", "Content pillars"]
    },
    {
      icon: Lightbulb,
      title: "Content Creation",
      description: "Our team creates high-quality, engaging content that showcases your expertise and builds trust with your audience.",
      features: ["Video content", "Social media posts", "Blog articles", "Thought leadership"]
    },
    {
      icon: TrendingUp,
      title: "Distribution & Amplification",
      description: "We ensure your content reaches the right people at the right time through strategic distribution across multiple channels.",
      features: ["Multi-platform publishing", "Community engagement", "Influencer partnerships", "Paid amplification"]
    },
    {
      icon: MessageSquare,
      title: "Performance & Optimization",
      description: "We continuously monitor performance and optimize your content strategy based on data-driven insights.",
      features: ["Analytics tracking", "Performance reports", "Strategy refinement", "ROI measurement"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="section-padding pt-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container-premium relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              The{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                SAUCE™ Recipe
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Our proven methodology that transforms B2B SaaS founders into thought leaders 
              and builds profitable content engines that drive sustainable growth.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/book-strategy-call">
                <Button className="group relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-lg font-semibold rounded-2xl shadow-elegant hover:scale-105 transition-all duration-300">
                  <span className="relative z-10 flex items-center">
                    Get Your Recipe
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </Button>
              </Link>
              <Link to="/success-stories">
                <Button 
                  variant="outline" 
                  className="group border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground px-12 py-6 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105"
                >
                  <span className="group-hover:scale-110 transition-transform duration-300">
                    See Results
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Recipe Steps */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="container-premium">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
              Our 4-Step{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Recipe
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A systematic approach to building your founder-led content engine
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div 
                  key={index}
                  className="group relative p-8 rounded-3xl border bg-white/50 backdrop-blur-sm border-border/30 hover:border-primary/30 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
                >
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:shadow-lg transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {step.description}
                    </p>
                    
                    <ul className="space-y-3">
                      {step.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-subtle relative overflow-hidden">
        <div className="container-premium">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
              Ready to Cook Up{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Your Success?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how our SAUCE™ Recipe can transform your founder into a thought leader 
              and build a profitable content engine for your B2B SaaS company.
            </p>
            
            <Link to="/book-strategy-call">
              <Button className="group relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-lg font-semibold rounded-2xl shadow-elegant hover:scale-105 transition-all duration-300">
                <span className="relative z-10 flex items-center">
                  Book Your Strategy Call
                  <div className="ml-2 w-5 h-5 rounded-full bg-primary-foreground/20 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                    <span className="text-xs">→</span>
                  </div>
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SauceRecipeSection;
