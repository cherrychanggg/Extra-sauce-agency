import { trustedBySection } from "@/content/homepage";

const TrustedBySection = () => {
  const companies = [
    { name: "Sociallly", logo: "/chili.png" },
    { name: "ACME Corp", logo: "/chili.png" },
    { name: "TechFlow", logo: "/chili.png" },
    { name: "DataSync", logo: "/chili.png" },
    { name: "CloudBase", logo: "/chili.png" },
    { name: "InnovateCo", logo: "/chili.png" }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-premium">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-8">{trustedBySection.title}</h2>
        </div>
        
        {/* Scrolling Animation */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {/* First set */}
            {companies.map((company, index) => (
              <div key={index} className="flex-shrink-0 mx-8">
                <img 
                  src={company.logo} 
                  alt={company.name}
                  className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                />
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {companies.map((company, index) => (
              <div key={`dup-${index}`} className="flex-shrink-0 mx-8">
                <img 
                  src={company.logo} 
                  alt={company.name}
                  className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;