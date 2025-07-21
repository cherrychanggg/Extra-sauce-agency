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
    logo: "/fuel.png",
  },
  {
    name: "Khalsa Aid",
    logo: "/khalsaaid.png",
  },
  {
    name: "CymCorp",
    logo: "/cymcorp.png",
  },
  {
    name: "Depix",
    logo: "/depix.png",
  },
  {
    name: "TVO Kids",
    logo: "/tvokids.png",
  },
];

const allCompanies = [...companies, ...companies]; // duplicate for seamless scroll

const TrustedBySection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="w-full relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {trustedBySection.title}
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mx-auto shadow-lg"></div>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            From startups to enterprise, we help high-growth companies build profitable content engines
          </p>
        </div>
        
        {/* Enhanced Logo Container */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-white/40 via-white/60 to-white/40 backdrop-blur-xl border border-white/30 shadow-2xl p-12 mx-auto max-w-7xl">
          {/* Fade edges for seamless scroll */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white/80 to-transparent z-10 pointer-events-none"></div>
          
          <div className="scrolling-logos-wrapper">
            <div className="scrolling-logos animate-scroll">
              {allCompanies.map((company, idx) => (
                <div
                  key={idx}
                  className="flex items-center opacity-70 hover:opacity-100 transition-all duration-500 group flex-shrink-0 hover:scale-110"
                >
                  <div className="relative p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20 shadow-lg group-hover:shadow-2xl group-hover:bg-white/80 transition-all duration-500">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="h-16 w-auto max-w-[140px] object-contain transition-all duration-500 filter grayscale group-hover:grayscale-0"
                      draggable="false"
                      onError={(e) => {
                        console.log(`Failed to load image for ${company.name}:`, company.logo);
                        e.currentTarget.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQ4IiB2aWV3Qm94PSIwIDAgMTIwIDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iNDgiIGZpbGw9IiNmM2Y0ZjYiLz48dGV4dCB4PSI2MCIgeT0iMjgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM2Yjc2ODAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiI+TG9nbzwvdGV4dD48L3N2Zz4=";
                      }}
                    />
                    {/* Enhanced glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-2xl -z-10"></div>
                    
                    {/* Company name tooltip */}
                    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-foreground text-background text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none">
                      {company.name}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-foreground"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .scrolling-logos-wrapper {
          overflow: hidden;
          width: 100%;
          position: relative;
        }
        .scrolling-logos {
          display: flex;
          gap: 3rem;
          width: max-content;
          align-items: center;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        
        /* Enhanced smooth scrolling */
        @media (prefers-reduced-motion: no-preference) {
          .animate-scroll {
            animation-timing-function: linear;
          }
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .scrolling-logos {
            gap: 2rem;
          }
          .animate-scroll {
            animation-duration: 20s;
          }
        }
      `}</style>
    </section>
  );
};

export default TrustedBySection;