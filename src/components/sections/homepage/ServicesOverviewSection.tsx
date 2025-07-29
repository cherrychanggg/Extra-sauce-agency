import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { servicesOverviewSection } from "@/content/homepage";

const ServicesOverviewSection = () => {
  const serviceColors = [
    { bgColor: "from-primary/10 to-secondary/10", borderColor: "border-primary/20" },
    { bgColor: "from-secondary/10 to-accent/10", borderColor: "border-secondary/20" },
    { bgColor: "from-accent/10 to-primary/10", borderColor: "border-accent/20" }
  ];

  return (
    <section className="section-padding bg-gradient-subtle relative">
      <div className="section-divider mb-20"></div>
      <div className="container-premium">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            We are not just another B2B content agency{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              - we align your marketing & sales efforts
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {servicesOverviewSection.subheadline}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          {servicesOverviewSection.services.map((service, index) => (
            <div 
              key={index}
              className={`card-premium p-8 group hover:scale-[1.03] hover:shadow-2xl transition-all duration-500 relative overflow-hidden bg-gradient-to-br ${serviceColors[index].bgColor} border-2 ${serviceColors[index].borderColor} hover:border-primary/40 flex flex-col h-full`}
            >
              <div className="flex-1 flex flex-col">
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
              <div className="mt-auto">
                <Link to={service.link}>
                  <Button className="w-full btn-hero group focus-enhanced whitespace-nowrap">
                    <span className="group-hover:scale-105 transition-transform duration-200">Learn more about {service.title}</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverviewSection;