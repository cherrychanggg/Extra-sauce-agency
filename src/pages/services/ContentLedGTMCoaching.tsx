import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";
import { User, Eye, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import CTASection from "@/components/sections/homepage/CTASection";

const ContentLedGTMCoaching = () => {
  const systemSteps = [
    {
      icon: <User className="w-8 h-8" />,
      title: "We Execute Together, Not Just Slides",
      description: "We don't hand you a playbook and wish you luck. Every session is hands-on—we workshop your messaging, shape your content strategy, and troubleshoot in real time. You'll leave each call with clarity and action steps that move your GTM forward."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Battle-tested Across Organizations", 
      description: "Our system has been applied across agencies, SaaS companies, consultants, and solopreneurs. We shortcut the content learning curve, helping you find your voice, build demand, and drive revenue—without months of guessing and wasted cycles."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "We Specialize In GTM Content Execution",
      description: "We don't just coach—we build. From strategic narrative development to content systems that align with your sales motion, we help you create high-impact content that drives pipeline, and positions your brand as the go-to option."
    }
  ];

  const benefits = [
    {
      number: "1",
      title: "Fast track your results",
      description: "We cut the content strategy timeline in half with best-in-class execution, so you can launch sooner, post with purpose, and build pipeline without wasting months figuring it out alone."
    },
    {
      number: "2", 
      title: "Keep content creation in-house",
      description: "You don't need a big team to scale demand. We help you turn your insights into a repeatable content system—with structure, clarity, and strategic intent built in."
    },
    {
      number: "3",
      title: "Learn the art of content",
      description: "We teach you how to write, repurpose, and position content that converts. Build a voice that drives trust, opens conversations, and gets remembered—without sounding like everyone else online."
    },
    {
      number: "4",
      title: "Become the obvious choice",
      description: "When your content shows up consistently across the buyer journey, your credibility compounds. We help you build assets that put you in the top 1-2 options—before sales even enters the chat."
    },
    {
      number: "5",
      title: "Content systems tailored to you",
      description: "One proven system. Zero one-size-fits-all. Our coaching is tailored to your team, bandwidth, and GTM motions—so your content works with your company infrastructure, not against it."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center relative overflow-visible
       bg-gradient-subtle pt-20">
        <div className="container-premium text-center relative z-10">
          <div className="max-w-4xl mx-auto animate-scale-in">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
              Content Led <span className="text-primary">GTM Coaching</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Strategic coaching to integrate content into your entire go-to-market motion, from awareness to conversion, creating a predictable growth engine.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <Link to="/book-strategy-call">
                <Button className="btn-hero">
                  Start Your GTM Journey
                </Button>
              </Link>
            </div>
            
            {/* Metrics with floating element */}
            <div className="relative flex flex-col sm:flex-row items-center justify-center gap-8">
              {/* Animated floating element beside stats */}
              <div className="absolute left-[-300px] lg:left-[-350px] top-1/2 transform -translate-y-1/2 animate-fade-in animation-delay-2000 hidden xl:block">
                <div className="relative">
                  <div className="bg-slate-800 text-white p-6 rounded-lg shadow-xl max-w-xs transform rotate-[-2deg] hover:rotate-0 transition-transform duration-300">
                    <div className="text-sm font-bold text-green-400 mb-2">"You know how to ask the right questions to extract the right information from the chaos in my head as a founder."</div>
                    <div className="text-xs text-slate-300">
                      Over the years, we've built The Sauce Recipe™ that include the top frameworks and methodologies used by the biggest creators in the world.
                    </div>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </div>

              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">6 Sessions</div>
                <div className="text-sm text-muted-foreground">Full GTM Ready Execution</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">1-on-1 Video</div>
                <div className="text-sm text-muted-foreground">Call Structure</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{'>'} $30K</div>
                <div className="text-sm text-muted-foreground">Minimum Savings</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Hero Section */}

      {/* System Section */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 max-w-4xl mx-auto">
              THIS ISN'T THEORY, WE'RE IN THE TRENCHES WITH YOU.
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The SAUCE Recipe™ isn't theory. We roll up our sleeves and work alongside you to craft strategy, create content, and drive real GTM results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {systemSteps.map((step, index) => (
              <div 
                key={index}
                className="card-premium text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center text-accent mx-auto mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
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
                    src="/faysalkhaled.png"
                    alt="Faysal Khaled"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <blockquote className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                    "Working with Extra Sauce has been a game-changer for my business. Manny brings 
                    incredible clarity to our marketing and messaging, and their strategic narratives and 
                    content creation are top-notch. I love how systemized their process is; I can see 
                    real progress with every single session. Highly recommend!"
                  </blockquote>
                  <div className="text-primary font-semibold">
                    Faysal Khaled<br />
                    <span className="text-muted-foreground text-sm">Founder</span>
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
                <span className="text-foreground">CONTENT COACHING</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our content coaching offer doesn't just help you create better content—it helps you think, speak, and 
                show up like the go-to in your category. We build trust, drive pipeline, and give you the systems to scale—one 
                high-impact session at a time.
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

export default ContentLedGTMCoaching;