import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Users, Target, TrendingUp, Clock } from "lucide-react";

const ExecutiveGhostwriting = () => {
  const benefits = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Thought Leadership Positioning",
      description: "Establish yourself as the go-to expert in your industry with strategic content that showcases your unique insights and experience."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Audience Growth & Engagement", 
      description: "Build a loyal following of potential customers, partners, and industry peers who actively engage with and share your content."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Lead Generation Engine",
      description: "Convert your content into qualified leads through strategic messaging that attracts and nurtures your ideal prospects."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Time-Efficient Execution",
      description: "Get consistent, high-quality content without the time investment. We handle everything from ideation to publication."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "Deep dive into your expertise, audience, and business goals to create a personalized content strategy."
    },
    {
      step: "02", 
      title: "Content Creation",
      description: "Our team crafts compelling posts and articles that capture your voice and showcase your thought leadership."
    },
    {
      step: "03",
      title: "Review & Refinement", 
      description: "You review and approve all content to ensure it perfectly represents your brand and messaging."
    },
    {
      step: "04",
      title: "Publishing & Optimization",
      description: "We handle publishing, engagement, and performance tracking to maximize your content's impact."
    }
  ];

  const features = [
    "3-5 LinkedIn posts per week",
    "Monthly long-form thought leadership articles",
    "Content calendar planning and strategy",
    "Personal brand messaging development", 
    "Audience engagement and community building",
    "Performance analytics and optimization",
    "Industry trend integration",
    "Cross-platform content adaptation"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding pt-32 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-secondary/90 to-accent/90"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="container-premium relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
              Executive <span className="text-accent">Ghostwriting</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
              Transform your expertise into thought leadership content that positions you as an industry authority and drives qualified leads to your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button className="bg-white text-primary hover:bg-white/90 px-12 py-6 text-lg font-semibold rounded-2xl shadow-elegant hover:scale-105 transition-all duration-300">
                Get Started Today
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary px-12 py-6 text-lg font-semibold rounded-2xl transition-all duration-300"
              >
                See Examples
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-premium">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Why Executive <span className="bg-gradient-primary bg-clip-text text-transparent">Ghostwriting</span> Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your expertise deserves to be heard. We help you share your insights consistently and strategically.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="card-premium p-8 group hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              What's <span className="bg-gradient-primary bg-clip-text text-transparent">Included</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to establish thought leadership and drive business results through content.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <span className="text-lg text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven system that transforms your expertise into compelling content that drives results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {process.map((step, index) => (
              <div 
                key={index}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-secondary/90 to-accent/90"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="container-premium relative z-10">
          <div className="text-center max-w-4xl mx-auto text-white">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8">
              Ready to become a thought leader?
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed opacity-90">
              Let's transform your expertise into content that positions you as an industry authority and drives qualified leads to your business.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button className="bg-white text-primary hover:bg-white/90 px-12 py-6 text-lg font-semibold rounded-2xl shadow-elegant hover:scale-105 transition-all duration-300">
                Start Your Content Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary px-12 py-6 text-lg font-semibold rounded-2xl transition-all duration-300"
              >
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExecutiveGhostwriting;