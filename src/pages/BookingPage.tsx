import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { InlineWidget } from "react-calendly";

const BookingPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "We've had old prospects come back to book a demo and thought we were a completely different company.",
      author: "Vik Saini",
      title: "Head Of Sales",
      avatar: "/viksoni.png"
    },
    {
      quote: "I just want to say, I have a good ghostwriter.",
      author: "Nadia Irani", 
      title: "CEO & Founder",
      avatar: "/nadiairani.png"
    },
    {
      quote: "Manny came in and helped us streamline our social media distribution system and kept us up to date with the best strategies. We've seen massive growth the last 6 months.",
      author: "Alex Salois",
      title: "Senior Content Manager", 
      avatar: "/alexsalois.png"
    },
    {
      quote: "Manny's expertise & dedication have been instrumental in crafting a compelling strategic narrative, and generating insightful content on LinkedIn that drives leads.",
      author: "Sharlene Gumbs ",
      title: "CEO & Founder",
      avatar: "/sharlenegumbs.png"
    },
    {
      quote: "I've been able to connect with the exact decision-makers in the companies we want to work with - The relationship is so much better this way than a cold approach.",
      author: "Phillip Lunn ",
      title: "CEO & Founder",
      avatar: "/philliplunn.png"
    },
  ];

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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

  const allCompanies = [...companies, ...companies]; 

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 sm:pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col xl:grid xl:grid-cols-2 gap-6 sm:gap-8 xl:gap-16 items-start">
            {/* Left Content */}
            <div className="order-2 xl:order-1 w-full">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl 2xl:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight">
                Stop wasting your sales team's time with{" "}
                <span className="text-primary">unqualified leads.</span>
              </h1>
              
              <div className="mb-6 sm:mb-8">
                <p className="text-primary font-semibold mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg xl:text-base">
                  Book a 1:1 call with our team to uncover how to build a high-leverage 
                  content engine around your executive leadership, powered by The SAUCE Recipe™
                </p>
                
                <div className="space-y-3 sm:space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-2 sm:gap-3">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-accent mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground text-sm sm:text-base lg:text-lg xl:text-sm 2xl:text-base leading-relaxed">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Company Logos Scrolling Section */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4 text-center">
                  Trusted by
                </h3>
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-white/30 backdrop-blur-sm border border-border/30 py-4 px-2 sm:p-6">
                  <div className="scrolling-logos-wrapper">
                    <div className="scrolling-logos animate-scroll">
                      {allCompanies.map((company, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-center opacity-60 hover:opacity-100 transition-all duration-300 group flex-shrink-0 min-w-[60px] sm:min-w-[80px]"
                        >
                          <div className="relative flex items-center justify-center h-12 sm:h-16">
                            <img
                              src={company.logo}
                              alt={company.name}
                              className="h-6 sm:h-8 md:h-10 w-auto max-w-[60px] sm:max-w-[80px] md:max-w-[100px] object-contain transition-all duration-300 group-hover:scale-110"
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

              <div className="mb-6 sm:mb-8">
                <div 
                  className="relative bg-white/30 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-border/30" 
                  style={{
                    background: '#FE615A', 
                    minHeight: 'auto',
                    overflow: 'visible'
                  }}
                >
                  {/* Navigation Arrows */}
                  <button
                    onClick={prevTestimonial}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 z-10"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-4 h-4 text-white" />
                  </button>
                  
                  <button
                    onClick={nextTestimonial}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 z-10"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-4 h-4 text-white" />
                  </button>

                  <div className="px-12 py-2">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4">
                      <div className="w-12 h-12 bg-white rounded-full overflow-hidden flex-shrink-0 mx-auto sm:mx-0">
                        <img 
                          src={testimonials[currentTestimonial].avatar}
                          alt={testimonials[currentTestimonial].author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 text-center sm:text-left">
                        <blockquote className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-2 leading-relaxed">
                          "{testimonials[currentTestimonial].quote}"
                        </blockquote>
                        <div className="text-white/90 text-sm font-medium">
                          {testimonials[currentTestimonial].author}<br />
                          <span className="text-white/70 text-xs">
                            {testimonials[currentTestimonial].title}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Pagination dots */}
                    <div className="flex justify-center gap-2 pt-2">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentTestimonial(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentTestimonial ? 'bg-white' : 'bg-white/50'
                          }`}
                          aria-label={`Go to testimonial ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Calendly Widget */}
            <div className="w-full order-1 xl:order-2">
              <div className="w-full max-w-2xl xl:max-w-none mx-auto">
                {/* Header */}
                <div className="text-center mb-4 sm:mb-6">
                  <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-2xl 2xl:text-3xl font-bold mb-2 sm:mb-4">
                    Schedule Your <span className="text-primary">Strategy Call</span>
                  </h2>
                  <p className="text-muted-foreground text-xs sm:text-sm md:text-base xl:text-sm 2xl:text-base px-2">
                    Book a one-on-one session with our content experts and discover how founder-led content can transform your B2B pipeline
                  </p>
                </div>

                {/* Calendly Embed */}
                <div className="card-premium p-0 overflow-hidden rounded-xl sm:rounded-2xl border-2 border-orange-400 shadow-lg bg-gradient-to-br from-orange-50 via-white to-white">
                  <div className="h-[400px] sm:h-[500px] md:h-[600px] xl:h-[700px] 2xl:h-[750px]">
                    <InlineWidget 
                      url="https://calendly.com/extrasauceagency"
                      styles={{
                        height: '100%',
                        width: '100%'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      
      <style>{`
        .scrolling-logos-wrapper {
          overflow: hidden;
          width: 100%;
          position: relative;
          height: 48px;
        }
        @media (min-width: 640px) {
          .scrolling-logos-wrapper {
            height: 64px;
          }
        }
        .scrolling-logos {
          display: flex;
          gap: 0.75rem;
          width: max-content;
          align-items: center;
          height: 100%;
        }
        @media (min-width: 640px) {
          .scrolling-logos {
            gap: 1.5rem;
          }
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default BookingPage;