import { trustedBySection } from "@/content/homepage";

const companies = [
  {
    name: "Goalcast",
    logo: "/goalcast.png",
  },
  {
    name: "Alam Law",
    logo: "/alam.png",
  },
  {
    name: "FuelPlus",
    logo: "https://fuelplus.ca/wp-content/uploads/2019/10/fuelplus-logo.png",
  },
  {
    name: "Khalsa Aid",
    logo: "https://www.khalsaaid.org/wp-content/uploads/2021/01/Khalsa-Aid-Logo.png",
  },
  {
    name: "CymCorp",
    logo: "https://www.cymcorp.com/wp-content/uploads/2019/07/cymcorp-logo.png",
  },
  {
    name: "Depix",
    logo: "https://depixdesignlab.com/wp-content/uploads/2021/06/Depix-Logo-Black.png",
  },
  {
    name: "TVO Kids",
    logo: "https://www.tvokids.com/sites/all/themes/tvokids/logo.png",
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