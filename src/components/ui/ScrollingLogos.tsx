import React from "react";

const logos = [
  // These are example URLs; replace with your own if needed
  "https://upload.wikimedia.org/wikipedia/commons/6/6b/Goalcast_logo.png",
  "https://www.alamlaw.com/wp-content/uploads/2020/09/ALAM-LAW-FIRM-LOGO.png",
  "https://fuelplus.ca/wp-content/uploads/2019/10/fuelplus-logo.png",
  "https://www.khalsaaid.org/wp-content/uploads/2021/01/Khalsa-Aid-Logo.png",
  "https://www.cymcorp.com/wp-content/uploads/2019/07/cymcorp-logo.png",
  "https://depixdesignlab.com/wp-content/uploads/2021/06/Depix-Logo-Black.png",
  "https://www.tvokids.com/sites/all/themes/tvokids/logo.png",
];

const ScrollingLogos = () => (
  <div className="py-12 bg-[#fff4f0]">
    <h2 className="text-center text-xl md:text-2xl font-bold text-[#ff4d4d] mb-10 tracking-wide">
      TRUSTED BY 20+ HIGH-GROWTH B2B & DTC COMPANIES
    </h2>
    <div className="overflow-hidden w-full">
      <div
        className="flex items-center whitespace-nowrap animate-scroll gap-12"
        style={{ animation: 'scroll 30s linear infinite' }}
      >
        {logos.concat(logos).map((logo, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-md flex items-center justify-center mx-2"
            style={{ width: 120, height: 120 }}
          >
            <img
              src={logo}
              alt={`Logo ${idx + 1}`}
              className="object-contain max-w-[80px] max-h-[80px]"
              draggable="false"
            />
          </div>
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  </div>
);

export default ScrollingLogos; 