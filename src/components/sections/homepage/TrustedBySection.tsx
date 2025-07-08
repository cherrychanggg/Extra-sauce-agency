import { trustedBySection } from "@/content/homepage";

const companies = [
  {
    name: "Goalcast",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Goalcast_logo.png",
  },
  {
    name: "Alam Law",
    logo: "https://www.alamlaw.com/wp-content/uploads/2020/09/ALAM-LAW-FIRM-LOGO.png",
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
    <section className="section-padding bg-background">
      <div className="container-premium">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-8">{trustedBySection.title}</h2>
        </div>
        <div className="relative overflow-hidden rounded-2xl">
          <div className="flex items-center whitespace-nowrap animate-scroll">
            {[...companies, ...companies].map((company, idx) => (
              <div
                key={idx}
                className="flex items-center mx-8 opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
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

export default TrustedBySection;