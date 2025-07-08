import { trustedBySection } from "@/content/homepage";

const companies = [
  {
    name: "Goalcast",
    logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&h=100&fit=crop&auto=format",
  },
  {
    name: "Alam Law",
    logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=100&fit=crop&auto=format",
  },
  {
    name: "FuelPlus",
    logo: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=200&h=100&fit=crop&auto=format",
  },
  {
    name: "Khalsa Aid",
    logo: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=200&h=100&fit=crop&auto=format",
  },
  {
    name: "CymCorp",
    logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=180&h=90&fit=crop&auto=format",
  },
  {
    name: "Depix",
    logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=180&h=90&fit=crop&auto=format",
  },
  {
    name: "TVO Kids",
    logo: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=180&h=90&fit=crop&auto=format",
  },
];

const TrustedBySection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background/0 to-background/100"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background/0 to-background/100"></div>
      </div>
      
      <div className="container-premium relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {trustedBySection.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
        </div>
        
        <div className="relative overflow-hidden rounded-3xl bg-white/30 backdrop-blur-sm border border-border/30 p-8">
          <div className="flex items-center whitespace-nowrap animate-scroll">
            {[...companies, ...companies].map((company, idx) => (
              <div
                key={idx}
                className="flex items-center mx-12 opacity-60 hover:opacity-100 transition-all duration-300 group"
              >
                <div className="relative">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-14 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                    draggable="false"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 35s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TrustedBySection;