import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesOverview = () => {
  const services = [
    {
      title: "Video Content Engine",
      description: "Get a consistent video engine to position yourself as a thought leader and staying on top of mind.",
      features: [
        "20 Video Thumbnails / month",
        "Warm Outbound Strategy Installed",
        "Invite-Only Outbound Software",
        "Create 1 Long-form newsletter / mo",
        "Social selling consulting"
      ],
      link: "/services/video-content-engine",
      bgColor: "from-primary/10 to-secondary/10",
      borderColor: "border-primary/20"
    },
    {
      title: "Content-led GTM Coaching", 
      description: "Get consulting to build a pipeline-generating content engine & get your company ready for market.",
      features: [
        "Content Ideation + system building",
        "Website Optimization",
        "Social Selling consulting",
        "Invite-Only Outbound Software"
      ],
      link: "/services/content-led-gtm-coaching",
      bgColor: "from-secondary/10 to-accent/10",
      borderColor: "border-secondary/20"
    },
    {
      title: "Executive Ghostwriting",
      description: "Get high-quality thought leadership narrative-driven content created for you to build a realm of influence.",
      features: [
        "Ongoing social media optimization",
        "Social selling consulting", 
        "Invite-Only Outbound Software"
      ],
      link: "/services/executive-ghostwriting",
      bgColor: "from-accent/10 to-primary/10",
      borderColor: "border-accent/20"
    }
  ];

  return (
    <section className="section-padding bg-gradient-subtle relative">
      <div className="section-divider mb-20"></div>
      <div className="container-premium">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            We are not just another <span className="bg-gradient-primary bg-clip-text text-transparent">B2B content agency</span> - 
            <br />we align your marketing & sales efforts
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We've built a realm of influence and drove pipeline for our agency using the 
            same SAUCE™ Recipe we will be sharing with you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`card-premium p-8 group hover:scale-[1.03] hover:shadow-2xl transition-all duration-500 relative overflow-hidden bg-gradient-to-br ${service.bgColor} border-2 ${service.borderColor} hover:border-primary/40 flex flex-col justify-between h-full`}
            >
              <div className="flex-1 flex flex-col justify-between">
                {/* Header */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Areas of Focus */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                    AREAS OF FOCUS
                  </h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <Link to={service.link} className="mt-auto">
                <Button className="w-full btn-hero group focus-enhanced">
                  <span className="group-hover:scale-105 transition-transform duration-200">Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;