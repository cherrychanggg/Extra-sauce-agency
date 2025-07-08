import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Users, Target, Zap, BarChart3 } from "lucide-react";

const ContentLedGTMCoaching = () => {
  const benefits = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Aligned GTM Strategy",
      description: "Integrate content seamlessly into your entire go-to-market motion from awareness to conversion and retention."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Enablement", 
      description: "Train your sales, marketing, and leadership teams to leverage content effectively throughout the customer journey."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Accelerated Pipeline",
      description: "Build a content engine that consistently generates qualified leads and shortens your sales cycle."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Measurable Results",
      description: "Implement tracking and optimization systems to measure content ROI and continuously improve performance."
    }
  ];

  const process = [
    {
      step: "01",
      title: "GTM Assessment",
      description: "Audit your current go-to-market strategy and identify content opportunities across the entire customer journey."
    },
    {
      step: "02", 
      title: "Strategy Development",
      description: "Create a comprehensive content-led GTM strategy with clear objectives, tactics, and success metrics."
    },
    {
      step: "03",
      title: "Team Training", 
      description: "Equip your team with the knowledge, tools, and processes to execute your content-led GTM strategy effectively."
    },
    {
      step: "04",
      title: "Implementation & Optimization",
      description: "Launch your strategy with ongoing coaching, performance monitoring, and continuous optimization."
    }
  ];

  const features = [
    "Comprehensive GTM strategy development",
    "Content-sales alignment workshops",
    "Lead generation system setup",
    "Team training and enablement sessions", 
    "Performance tracking and analytics setup",
    "Monthly coaching and optimization calls",
    "Custom playbooks and frameworks",
    "Technology stack recommendations",
    "Conversion funnel optimization",
    "Ongoing strategic support and guidance"
  ];

  const outcomes = [
    {
      title: "Increased Lead Quality",
      description: "Generate higher-quality leads that are pre-educated and more likely to convert through strategic content."
    },
    {
      title: "Shorter Sales Cycles",
      description: "Reduce time-to-close by nurturing prospects with valuable content before they reach your sales team."
    },
    {
      title: "Better Team Alignment",
      description: "Create cohesion between marketing, sales, and leadership teams with unified messaging and goals."
    },
    {
      title: "Scalable Growth Engine",
      description: "Build sustainable systems that continue generating results and can scale with your business growth."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding pt-32 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/90 via-primary/90 to-secondary/90"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="container-premium relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
              Content Led <span className="text-accent">GTM Coaching</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
              Strategic coaching to integrate content into your entire go-to-market motion, from awareness to conversion, creating a predictable growth engine.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button className="bg-white text-primary hover:bg-white/90 px-12 py-6 text-lg font-semibold rounded-2xl shadow-elegant hover:scale-105 transition-all duration-300">
                Start Your GTM Journey
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary px-12 py-6 text-lg font-semibold rounded-2xl transition-all duration-300"
              >
                Book Strategy Call
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
              Why Content Led <span className="bg-gradient-primary bg-clip-text text-transparent">GTM</span> Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Align your entire organization around content that educates, nurtures, and converts your ideal customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="card-premium p-8 group hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
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

      {/* Expected Outcomes Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Expected <span className="bg-gradient-primary bg-clip-text text-transparent">Outcomes</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real results that transform your business and create sustainable growth through strategic content.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {outcomes.map((outcome, index) => (
              <div 
                key={index}
                className="card-premium p-8 group hover:scale-105 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {outcome.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {outcome.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="section-padding">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              What's <span className="bg-gradient-primary bg-clip-text text-transparent">Included</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive coaching and strategic guidance to transform your go-to-market approach.
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
      <section className="section-padding bg-gradient-subtle">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A systematic approach to transforming your go-to-market strategy through strategic content integration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {process.map((step, index) => (
              <div 
                key={index}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-glow">
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
        <div className="absolute inset-0 bg-gradient-to-r from-accent/90 via-primary/90 to-secondary/90"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="container-premium relative z-10">
          <div className="text-center max-w-4xl mx-auto text-white">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8">
              Ready to transform your GTM strategy?
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed opacity-90">
              Let's build a content-led go-to-market strategy that aligns your team, accelerates growth, and creates predictable results.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button className="bg-white text-primary hover:bg-white/90 px-12 py-6 text-lg font-semibold rounded-2xl shadow-elegant hover:scale-105 transition-all duration-300">
                Start Your Transformation
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

export default ContentLedGTMCoaching;