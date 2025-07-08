import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Check, Clock, Video, Calendar } from "lucide-react";
import { useState } from "react";

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '',
    goals: '',
    budget: '',
    challenges: '',
    timeline: '',
    hearAbout: ''
  });

  const benefits = [
    "Unpack the latest algorithm shifts across LinkedIn & YouTube—and how to leverage them for pipeline, not vanity metrics.",
    "Get personalized, founder-led content strategy tailored to your GTM motion, ICP, and current buying committee dynamics.",
    "Align your executive brand with social selling workflows to drive conversations with high-intent leads—not just impressions."
  ];

  const companies = [
    { name: "Goalcast", logo: "/goalcast.png" },
    { name: "Alam Law", logo: "/alam.png" },
    { name: "FuelPlus", logo: "/fuel.png" },
    { name: "Khalsa Aid", logo: "/khalsaaid.png" },
    { name: "CymCorp", logo: "/cymcorp.png" },
    { name: "Depix", logo: "/depix.png" },
    { name: "TVO Kids", logo: "/tvokids.png" },
  ];

  const allCompanies = [...companies, ...companies]; // duplicate for seamless scroll

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // For now, we'll just show an alert
    alert('Thank you! Your strategy call request has been submitted.');
  };

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

              {/* Company Logos Scrolling Section */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
                  Trusted by
                </h3>
                <div className="relative overflow-hidden rounded-2xl bg-white/30 backdrop-blur-sm border border-border/30 p-6">
                  <div className="scrolling-logos-wrapper">
                    <div className="scrolling-logos animate-scroll">
                      {allCompanies.map((company, idx) => (
                        <div
                          key={idx}
                          className="flex items-center opacity-60 hover:opacity-100 transition-all duration-300 group flex-shrink-0"
                        >
                          <div className="relative">
                            <img
                              src={company.logo}
                              alt={company.name}
                              className="h-12 w-auto max-w-[120px] object-contain transition-all duration-300 group-hover:scale-110"
                              draggable="false"
                              onError={(e) => {
                                console.log(`Failed to load image for ${company.name}:`, company.logo);
                                e.currentTarget.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQ4IiB2aWV3Qm94PSIwIDAgMTIwIDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iNDgiIGZpbGw9IiNmM2Y0ZjYiLz48dGV4dCB4PSI2MCIgeT0iMjgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM2Yjc2ODAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiI+TG9nbzwvdGV4dD48L3N2Zz4=";
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:sticky lg:top-32">
              <div className="card-premium p-8 max-w-md mx-auto">
                {/* Header */}
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-sm">ES</span>
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-bold">GTM Strategy Session</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>45 min</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-muted/30 rounded-lg p-4 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Video className="w-4 h-4" />
                      <span>Web conferencing details provided upon confirmation</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <Calendar className="w-4 h-4" />
                      <span>2:00pm - 2:45pm, Wednesday, July 9, 2025</span>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Eastern Time - US & Canada
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="guests" className="text-sm font-medium">
                      Add Guests
                    </Label>
                    <Input
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      placeholder="Optional"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="goals" className="text-sm font-medium">
                      What specific, measurable goals do you aim to achieve in the next 90 days through Founder-led Marketing? *
                    </Label>
                    <Textarea
                      id="goals"
                      name="goals"
                      value={formData.goals}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="budget" className="text-sm font-medium">
                      Could you provide insight into the budget and thought leadership resources you're prepared to allocate for your digital marketing initiative? *
                    </Label>
                    <Textarea
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="challenges" className="text-sm font-medium">
                      What are the revenue challenges that have prompted you to seek external assistance? *
                    </Label>
                    <Textarea
                      id="challenges"
                      name="challenges"
                      value={formData.challenges}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="timeline" className="text-sm font-medium">
                      What is the ideal timeline for implementing founder-led marketing in your organization? *
                    </Label>
                    <Textarea
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      rows={2}
                    />
                  </div>

                  <div>
                    <Label htmlFor="hearAbout" className="text-sm font-medium">
                      How did you hear about us? *
                    </Label>
                    <Input
                      id="hearAbout"
                      name="hearAbout"
                      value={formData.hearAbout}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div className="text-xs text-muted-foreground py-2">
                    By proceeding, you confirm that you have read and agree to Calendly's Terms of Use and Privacy Notice.
                  </div>

                  <Button type="submit" className="w-full btn-hero">
                    Schedule Event
                  </Button>

                  <div className="text-center">
                    <button type="button" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                      Cookie settings
                    </button>
                  </div>
                </form>
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
                    src="/viksoni.png" 
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
      
      <style>{`
        .scrolling-logos-wrapper {
          overflow: hidden;
          width: 100%;
          position: relative;
        }
        .scrolling-logos {
          display: flex;
          gap: 2rem;
          width: max-content;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 15s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default BookingPage;