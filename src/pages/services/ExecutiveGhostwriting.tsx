import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, User, Eye, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import CTASection from "@/components/sections/homepage/CTASection";

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

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center relative overflow-hidden bg-gradient-subtle pt-20">
        <div className="container-premium text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
              Executive <span className="text-primary">Ghostwriting</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Transform your expertise into thought leadership content that positions you as an industry authority and drives qualified leads to your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/book-strategy-call">
                <Button className="btn-hero">
                  Get Started Today
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Hero Section */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container-premium">
          <div className="max-w-6xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-8">
              Become a <span className="text-primary">thought leader.</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Great executive content is the perfect blend of your expertise and personality.
            </p>

            {/* Metrics */}
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
          </div>
        </div>
      </section>

      {/* System Section */}
      <section className="py-12 lg:py-16">
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
                className="card-premium text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-4 leading-tight">
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
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto">
            <div className="card-premium p-12">
              <div className="flex items-center gap-8">
                <div className="w-24 h-24 bg-primary rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center">
                  <img
                    src="/sharlenegumbs.png"
                    alt="Sharlene Gumbs"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <blockquote className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                    "Manny's expertise and dedication have been instrumental in packaging our service 
                    offerings with clarity, crafting a compelling strategic narrative, and generating 
                    insightful content on LinkedIn that drives leads."
                  </blockquote>
                  <div className="text-primary font-semibold">
                    Sharlene Gumbs<br />
                    <span className="text-muted-foreground text-sm">CEO, Company</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 lg:py-16">
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

      {/* Full-width CTA Section */}
      <div className="mt-12">
        <CTASection />
      </div>

      <Footer />
    </div>
  );
};

export default ExecutiveGhostwriting;