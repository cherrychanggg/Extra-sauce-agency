import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Users, Target, TrendingUp, Clock, User, Eye, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const ExecutiveGhostwriting = () => {
  const systemSteps = [
    {
      icon: <User className="w-8 h-8" />,
      title: "Finding Your Content Market Fit",
      description: "We test hooks, formats, and messaging to uncover what resonates with your audience. From scroll-stopping posts to strategic storytelling—we find the tone and topics that make your content stick."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Establish Your Strategic Narrative", 
      description: "We position you at the center of relevant industry shifts, not trends. This builds urgency and confidence so prospects leave outdated solutions behind and lean into your voice of authority."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Grow Community With Social Selling",
      description: "We align content with your inbound & outbound sales motions to create conversation, not just impressions. Build a realm of influence and a network that's ready to buy."
    }
  ];

  const benefits = [
    {
      number: "1",
      title: "Get back to your core business",
      description: "We handle the content engine so you can focus on strategic priorities. No more getting lost in social media or second-guessing posts."
    },
    {
      number: "2", 
      title: "A personal brand that compounds",
      description: "Thought leadership isn't a thing—it's a long-term asset. We help you build credibility that scales with your career and attracts the right kind of attention."
    },
    {
      number: "3",
      title: "Build a tribe with the right clients",
      description: "Your content becomes a filter for qualified, like-minded buyers—so the leads you attract are already aligned and ready to move forward."
    },
    {
      number: "4",
      title: "Stop wasting your AE hours",
      description: "Cold outbound reply rates have tanked in 2025. Your AEs shouldn't waste time chasing cold leads—they should be closing warm ones. Strategic ghostwritten content builds authority."
    },
    {
      number: "5",
      title: "Consistency & Scaleable",
      description: "Your ghostwritten content becomes the foundation for communication alignment across the organization and get our proprietary systems to scale content."
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

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding pt-32 bg-gradient-subtle relative overflow-hidden">
        <div className="container-premium">
          <div className="max-w-6xl mx-auto text-center animate-fade-in">
            <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-semibold mb-8">
              EXECUTIVE GHOSTWRITING
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
              Become a <span className="text-foreground">thought leader.</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Great executive content is the perfect blend of your expertise and personality.
            </p>

            {/* Pricing/Timeline Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">4 Hr/mo</div>
                <div className="text-sm text-muted-foreground">Minimal time investment</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">11-18/mo</div>
                <div className="text-sm text-muted-foreground">Qualified Meetings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">~3 Months</div>
                <div className="text-sm text-muted-foreground">Expected ROI</div>
              </div>
            </div>

            <Link to="/book-strategy-call">
              <Button variant="outline" className="px-8 py-3 text-lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* System Section */}
      <section className="section-padding">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 max-w-4xl mx-auto">
              THE SYSTEM THAT WORKS FOR BUSY EXECUTIVES
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The SAUCE Recipe™ turns your executive insights into a realm of influence on social media.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {systemSteps.map((step, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-card/90 to-muted/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-accent mb-4 leading-tight">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section-padding bg-gradient-to-r from-primary/90 via-secondary/90 to-accent/90">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
              <div className="flex items-center gap-8">
                <div className="w-24 h-24 bg-white rounded-full overflow-hidden flex-shrink-0">
                  <img 
                    src="/chili.png" 
                    alt="Marlene Gamba" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <blockquote className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    "Manny's expertise and dedication have been instrumental in packaging our service 
                    offerings with clarity, crafting a compelling strategic narrative, and generating 
                    insightful content on LinkedIn that drives leads."
                  </blockquote>
                  <div className="text-primary font-semibold">
                    Marlene Gamba<br />
                    <span className="text-white/80 text-sm">CEO, Company</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-background">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Left Side */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                <span className="text-primary">BENEFITS:</span><br />
                <span className="text-foreground">GHOSTWRITING</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our executive ghostwriting service doesn't just save you time—it builds real market presence. Here's 
                how we deliver value across every post:
              </p>
            </div>

            {/* Right Side - Benefits List */}
            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-6">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0 mt-1">
                    {benefit.number}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
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
      <section className="section-padding bg-gradient-to-r from-primary to-secondary">
        <div className="container-premium text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Ready for a strategy call?
          </h2>
          <Link to="/book-strategy-call">
            <Button className="bg-white text-primary hover:bg-white/90 px-12 py-6 text-lg font-semibold rounded-2xl shadow-elegant hover:scale-105 transition-all duration-300">
              Talk with Manny
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExecutiveGhostwriting;