import React, { useState } from "react";

const logos = [
  {
    name: "Goalcast",
    url: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Goalcast_logo.png",
    industry: "Media"
  },
  {
    name: "Alam Law",
    url: "https://www.alamlaw.com/wp-content/uploads/2020/09/ALAM-LAW-FIRM-LOGO.png",
    industry: "Legal"
  },
  {
    name: "FuelPlus",
    url: "https://fuelplus.ca/wp-content/uploads/2019/10/fuelplus-logo.png",
    industry: "Energy"
  },
  {
    name: "Khalsa Aid",
    url: "https://www.khalsaaid.org/wp-content/uploads/2021/01/Khalsa-Aid-Logo.png",
    industry: "Non-profit"
  },
  {
    name: "CymCorp",
    url: "https://www.cymcorp.com/wp-content/uploads/2019/07/cymcorp-logo.png",
    industry: "Technology"
  },
  {
    name: "Depix",
    url: "https://depixdesignlab.com/wp-content/uploads/2021/06/Depix-Logo-Black.png",
    industry: "Design"
  },
  {
    name: "TVO Kids",
    url: "https://www.tvokids.com/sites/all/themes/tvokids/logo.png",
    industry: "Education"
  },
];

const ScrollingLogos = () => {
  const [hoveredLogo, setHoveredLogo] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-premium relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 tracking-tight">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              20+ High-Growth
            </span>{" "}
            Companies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From startups to enterprise, we help B2B and DTC companies build profitable content engines.
          </p>
        </div>

        {/* Logo Grid - Modern Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center max-w-6xl mx-auto mb-12">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="group relative"
              onMouseEnter={() => setHoveredLogo(idx)}
              onMouseLeave={() => setHoveredLogo(null)}
            >
              <div className={`
                relative p-6 rounded-2xl transition-all duration-300 cursor-pointer
                ${hoveredLogo === idx 
                  ? 'bg-white shadow-2xl scale-110 border border-primary/20' 
                  : 'bg-white/60 backdrop-blur-sm hover:bg-white/80 border border-white/20'
                }
              `}>
                <img
                  src={logo.url}
                  alt={`${logo.name} logo`}
                  className="w-20 h-20 object-contain mx-auto filter transition-all duration-300 group-hover:scale-110"
                  draggable="false"
                />
                
                {/* Hover Tooltip */}
                <div className={`
                  absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-foreground text-background text-xs font-medium rounded-lg whitespace-nowrap transition-all duration-300
                  ${hoveredLogo === idx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}
                `}>
                  {logo.name} • {logo.industry}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-foreground"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Animated Scrolling Strip */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 p-6">
          <div className="flex items-center whitespace-nowrap animate-scroll">
            {[...logos, ...logos].map((logo, idx) => (
              <div
                key={idx}
                className="flex items-center mx-8 opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                <img
                  src={logo.url}
                  alt={`${logo.name} logo`}
                  className="h-8 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  draggable="false"
                />
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
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ScrollingLogos;