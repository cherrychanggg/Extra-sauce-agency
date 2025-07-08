import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { User, Eye, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const VideoContentEngine = () => {
  const systemSteps = [
    {
      icon: <User className="w-8 h-8" />,
      title: "Account-Based Marketing Approach",
      description: "The video engine is built around conversations. You don't just create content—you create value with key prospects, strategic partners, or industry influencers by bringing them on as guests. It's a Trojan Horse for relationship-building."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "One Recording, Infinite Distribution", 
      description: "Each recorded episode fuels an entire ecosystem—short-form clips, written posts, newsletters, website blog, YouTube content, and even sales enablement assets. This gives you a high-leverage, scalable content system from just 2-4 hours a month of recording."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Category Positioning Through Narrative",
      description: "We don't just film and clip. We shape every episode around your strategic narrative, layering in POVs that shift buyer belief and elevate your positioning. Over time, your series becomes a magnet for trust, authority, and inbound deal flow."
    }
  ];

  const benefits = [
    {
      number: "1",
      title: "Reclaim hours for high-leverage work",
      description: "We run the entire engine so your calendar stays clear. 2-4hrs/mo of recording fuels weeks of content without the mental load of managing it."
    },
    {
      number: "2", 
      title: "Build relationships with key accounts",
      description: "This isn't vanity content. Your series becomes a platform to invite dream clients, partners, and investors into real conversations—building a real relationship before the demo."
    },
    {
      number: "3",
      title: "Sell how modern B2B buyers buy",
      description: "Your buyer is smart enough to find the top 1-2 options in your category. Your video content positions you as the obvious choice—educating, showing up, and qualifying them before they even talk to sales."
    },
    {
      number: "4",
      title: "A brand that sells while you sleep",
      description: "When your face, voice, and insights show up weekly across channels, trust compounds. Every recording creates dozens of assets, allowing you to show up everywhere your prospect hangs out online."
    },
    {
      number: "5",
      title: "Your sales team will love you",
      description: "Your content becomes a library of warm openers, objection busters, and assets they can send in real time. It turns every salesperson into a product expert and helps them convert more pipeline."
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
              <Link to="/book-strategy-call">
                <Button className="bg-white text-primary hover:bg-white/90 px-12 py-6 text-lg font-semibold rounded-2xl shadow-elegant hover:scale-105 transition-all duration-300">
                  Launch Your Engine
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Hero Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-premium">
          <div className="max-w-6xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-8">
              Turn your expertise into a video engine that closes pipeline.
            </h2>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Launch a binge-worthy video series—podcast, masterclass, or webinar—that fuels LinkedIn, YouTube, and your entire content engine while turning dream prospects into pipeline.
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
          </div>
        </div>
      </section>

      {/* System Section */}
      <section className="section-padding">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 max-w-4xl mx-auto">
              MORE THAN JUST VIDEO CLIPS. A SYSTEM FOR DEMAND AND SCALABILITY.
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The SAUCE Recipe™ sparks conversations with high-value prospects and keeps them coming back weekly to learn, trust, and eventually buy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {systemSteps.map((step, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-card/90 to-muted/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mx-auto mb-6 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors duration-300">
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
      <section className="section-padding bg-gradient-to-r from-secondary/90 via-accent/90 to-primary/90">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
              <div className="flex items-center gap-8">
                <div className="w-24 h-24 bg-white rounded-full overflow-hidden flex-shrink-0">
                  <img 
                    src="/chili.png" 
                    alt="Vik Sejal" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <blockquote className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    "Extra Sauce completely shifted how we approach lead generation. Instead of 
                    wasting time at tradeshows or chasing cold leads, we now have warm 
                    conversations weekly with prospects who already trust us. The content positions 
                    our product as the go-to in our space, and pipeline has never been stronger."
                  </blockquote>
                  <div className="text-primary font-semibold">
                    Vik Sejal<br />
                    <span className="text-white/80 text-sm">Head of Sales</span>
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
                <span className="text-foreground">VIDEO ENGINE</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our executive video engine doesn't just create content—it drives demand, deepens relationships, 
                and builds real market momentum. Here's how it delivers impact across every series:
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

export default VideoContentEngine;