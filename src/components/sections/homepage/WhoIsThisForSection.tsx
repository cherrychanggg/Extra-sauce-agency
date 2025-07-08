import { CheckCircle } from "lucide-react";
import { whoIsThisForSection } from "@/content/homepage";

const WhoIsThisForSection = () => {
  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="container-premium">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            {whoIsThisForSection.headline}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {whoIsThisForSection.subheadline}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {whoIsThisForSection.companies.map((company, index) => (
            <div 
              key={index}
              className="card-premium p-8 text-center group hover:scale-105 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <CheckCircle className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {company.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {company.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisForSection;