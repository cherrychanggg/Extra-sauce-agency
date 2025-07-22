import { CheckCircle, Users, TrendingUp, Search, Zap, Building, Trophy } from "lucide-react";
import { whoIsThisForSection } from "@/content/homepage";

const WhoIsThisForSection = () => {
  return (
    <section className="section-padding bg-gradient-subtle relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,107,107,0.1),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,154,107,0.1),transparent_50%)]"></div>
      </div>
      
      <div className="section-divider mb-20"></div>
      <div className="container-premium relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            Who Is{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                The Sauce
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 rounded-full"></div>
            </span>{" "}
            For?
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Our approach is for B2B companies that want to align their GTM strategy for today's buyer.
            <span className="block mt-2 text-primary font-medium">Check if you're a perfect fit ↓</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {whoIsThisForSection.companies.map((company, index) => {
            const icons = [Users, TrendingUp, Search, Zap, Building, Trophy];
            const IconComponent = icons[index] || CheckCircle;
            return (
            <div 
              key={index}
              className="group relative p-8 rounded-3xl border bg-white/50 backdrop-blur-sm border-border/30 hover:border-primary/30 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl cursor-pointer"
            >
              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:shadow-lg transition-all duration-300">
                  <IconComponent className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {company.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {company.description}
                </p>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisForSection;