import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Video, Zap, Target, BarChart3 } from "lucide-react";

const VideoContentEngine = () => {
  const benefits = [
    {
      icon: <Video className="w-8 h-8" />,
      title: "Systematic Video Production",
      description: "Build a repeatable system that consistently produces high-quality video content without overwhelming your schedule."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Higher Engagement Rates", 
      description: "Video content generates 1200% more shares than text and images combined. Capture attention and drive engagement."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Multi-Platform Distribution",
      description: "Repurpose your video content across LinkedIn, YouTube, Instagram, and other platforms to maximize reach and impact."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Lead Generation Power",
      description: "Convert viewers into qualified leads with strategic video content that educates, entertains, and drives action."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Strategy & Planning",
      description: "Define your video content strategy, target audience, and key messaging pillars for maximum impact."
    },
    {
      step: "02", 
      title: "Production Setup",
      description: "Establish efficient recording workflows, equipment recommendations, and content templates for consistency."
    },
    {
      step: "03",
      title: "Content Creation", 
      description: "Regular video creation sessions with professional editing, optimization, and multi-platform formatting."
    },
    {
      step: "04",
      title: "Distribution & Analytics",
      description: "Strategic publishing across platforms with performance tracking and optimization for continuous improvement."
    }
  ];

  const features = [
    "Weekly video content strategy sessions",
    "Professional video editing and post-production",
    "Multi-platform content optimization",
    "YouTube channel setup and optimization", 
    "LinkedIn video marketing strategy",
    "Content repurposing across all channels",
    "Performance analytics and reporting",
    "Equipment and setup recommendations",
    "Video SEO optimization",
    "Engagement strategy and community building"
  ];

  const videoTypes = [
    {
      title: "Thought Leadership Videos",
      description: "Share insights, industry trends, and expert opinions that position you as an authority."
    },
    {
      title: "Behind-the-Scenes Content",
      description: "Humanize your brand with authentic glimpses into your company culture and processes."
    },
    {
      title: "Educational Series",
      description: "Create valuable tutorials and educational content that helps your audience solve problems."
    },
    {
      title: "Customer Success Stories",
      description: "Showcase real results and testimonials through compelling video case studies."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding pt-32 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-accent/90 to-primary/90"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="container-premium relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
              Video Content <span className="text-accent">Engine</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
              Build a systematic video content production process that turns your expertise into binge-worthy content that drives leads and builds trust.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button className="bg-white text-primary hover:bg-white/90 px-12 py-6 text-lg font-semibold rounded-2xl shadow-elegant hover:scale-105 transition-all duration-300">
                Launch Your Engine
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary px-12 py-6 text-lg font-semibold rounded-2xl transition-all duration-300"
              >
                Watch Demo
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
              Why Video <span className="bg-gradient-primary bg-clip-text text-transparent">Content</span> Wins
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Video is the most engaging content format. Build trust, drive engagement, and convert viewers into customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="card-premium p-8 group hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors duration-300">
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

      {/* Video Types Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Types of <span className="bg-gradient-primary bg-clip-text text-transparent">Video Content</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Diversify your content strategy with multiple video formats that engage different audience segments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {videoTypes.map((type, index) => (
              <div 
                key={index}
                className="card-premium p-8 group hover:scale-105 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {type.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {type.description}
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
              Everything you need to build and scale a professional video content engine.
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
              A systematic approach to building your video content engine from strategy to execution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {process.map((step, index) => (
              <div 
                key={index}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold text-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-glow">
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
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-accent/90 to-primary/90"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="container-premium relative z-10">
          <div className="text-center max-w-4xl mx-auto text-white">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8">
              Ready to build your video engine?
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed opacity-90">
              Transform your expertise into engaging video content that builds trust, drives engagement, and converts viewers into customers.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button className="bg-white text-primary hover:bg-white/90 px-12 py-6 text-lg font-semibold rounded-2xl shadow-elegant hover:scale-105 transition-all duration-300">
                Start Creating Videos
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

export default VideoContentEngine;