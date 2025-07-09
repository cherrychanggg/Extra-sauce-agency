import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "Executive Ghostwriting",
      subtitle: "Transform your expertise into thought leadership content",
      description: "We turn your insights into compelling LinkedIn posts, articles, and thought leadership content that positions you as an industry authority.",
      features: [
        "Weekly LinkedIn content creation",
        "Long-form thought leadership articles", 
        "Industry-specific messaging",
        "Personal brand development",
        "Content calendar management"
      ],
      link: "/services/executive-ghostwriting",
      gradient: "from-primary to-secondary"
    },
    {
      title: "Video Content Engine",
      subtitle: "Scale your message with engaging video content",
      description: "Build a systematic video content production process that turns your expertise into binge-worthy content that drives leads and builds trust.",
      features: [
        "Video content strategy",
        "Production workflow setup",
        "Multi-platform distribution",
        "Performance optimization",
        "Audience engagement tactics"
      ],
      link: "/services/video-content-engine",
      gradient: "from-secondary to-accent"
    },
    {
      title: "Content Led GTM Coaching",
      subtitle: "Build a content-driven go-to-market strategy",
      description: "Strategic coaching to integrate content into your entire go-to-market motion, from awareness to conversion.",
      features: [
        "GTM strategy development",
        "Content-sales alignment",
        "Lead generation systems",
        "Team training & processes",
        "Performance tracking & optimization"
      ],
      link: "/services/content-led-gtm-coaching",
      gradient: "from-accent to-primary"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding pt-32 bg-gradient-subtle">
        <div className="container-premium text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Choose the perfect service to transform your founder into a thought leader and build a profitable content engine.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-premium">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index}
                className="card-premium p-8 group hover:scale-105 transition-all duration-300 relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-lg text-primary font-medium mb-4">
                      {service.subtitle}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <Link to={service.link}>
                    <Button className="w-full btn-hero group">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-20">
            <div className="card-premium p-12 max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Not sure which service is right for you?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Book a strategy call with Manny to discuss your specific needs and find the perfect solution for your business.
              </p>
              <Button className="btn-hero text-lg px-12 py-6">
                Book Strategy Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;