import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const BookingPage = () => {
  const benefits = [
    "Unpack the latest algorithm shifts across LinkedIn & YouTube—and how to leverage them for pipeline, not vanity metrics.",
    "Get personalized, founder-led content strategy tailored to your GTM motion, ICP, and current buying committee dynamics.",
    "Align your executive brand with social selling workflows to drive conversations with high-intent leads—not just impressions."
  ];

  const companies = [
    { name: "Sociallly", logo: "/chili.png" },
    { name: "ACME", logo: "/chili.png" },
    { name: "FUEL+", logo: "/chili.png" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                Stop wasting your sales team's time with{" "}
                <span className="text-primary">unqualified leads.</span>
              </h1>
              
              <div className="mb-8">
                <p className="text-primary font-semibold mb-6">
                  Book a 1:1 call with our team to uncover how to build a high-leverage 
                  content engine around your executive leadership, powered by The SAUCE Recipe™
                </p>
                
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Company Logos */}
              <div className="grid grid-cols-3 gap-8 items-center opacity-60">
                {companies.map((company, index) => (
                  <div key={index} className="flex items-center justify-center">
                    <img 
                      src={company.logo} 
                      alt={company.name}
                      className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Booking Widget */}
            <div className="lg:sticky lg:top-32">
              <div className="card-premium p-8 max-w-md mx-auto">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">
                    Schedule Your <span className="text-primary">Strategy Call</span>
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Book a one-on-one session with our content experts and discover how 
                    founder-led content can transform your B2B pipeline
                  </p>
                </div>

                {/* Mock Calendar Widget */}
                <div className="bg-muted/30 rounded-xl p-6 mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-sm">ES</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Extra Sauce Agency</h4>
                      <p className="text-xs text-muted-foreground">
                        Welcome to my scheduling page. Please follow the instructions to add an event to my calendar.
                      </p>
                    </div>
                  </div>

                  <div className="border border-border rounded-lg p-4 bg-background">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm font-medium">GTM Strategy Session</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-4">
                      In an ever-evolving digital landscape, your SaaS company requires a do-it-
                      for-you GTM strategy that not only aligns with your vision but also 
                      accelerates your growth.
                    </p>
                    
                    {/* Mock Time Slots */}
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full text-left justify-start text-sm">
                        10:00 AM - Available
                      </Button>
                      <Button variant="outline" className="w-full text-left justify-start text-sm">
                        2:00 PM - Available  
                      </Button>
                      <Button variant="outline" className="w-full text-left justify-start text-sm">
                        4:00 PM - Available
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-xs text-muted-foreground mb-4">Cookie settings</p>
                  <Button className="w-full btn-hero">
                    Book Your Strategy Call
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <section className="section-padding bg-gradient-to-r from-primary/90 via-secondary/90 to-accent/90">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
              <div className="flex items-center gap-8">
                <div className="w-24 h-24 bg-white rounded-full overflow-hidden flex-shrink-0">
                  <img 
                    src="/chili.png" 
                    alt="Testimonial" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <blockquote className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    "We've had old prospects come back to book a demo and thought we were a 
                    completely different company."
                  </blockquote>
                  <div className="text-primary font-semibold">
                    Vik Sejal<br />
                    <span className="text-white/80 text-sm">Head Of Sales</span>
                  </div>
                </div>
              </div>
              
              {/* Pagination dots */}
              <div className="flex justify-center gap-2 mt-8">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                <div className="w-2 h-2 bg-white/50 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="container-premium text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            See The Sauce Recipe™ Live
          </h2>
          <p className="text-xl text-primary mb-8 max-w-2xl mx-auto">
            Discover why executive-led content is outperforming traditional demand gen in 2025.
          </p>
          <Button variant="outline" className="px-8 py-4 text-lg">
            Schedule Conversation →
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BookingPage;