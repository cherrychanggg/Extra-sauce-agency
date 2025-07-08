import { useState } from "react";
import { CheckCircle, ArrowRight } from "lucide-react";

const WhoIsTheSauceFor = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const audienceCards = [
    {
      title: "You have an expert on your team to leverage",
      description: "This is typically the CEO or CTO of the organization, or someone who has expertise and deep knowledge in their field.",
      highlight: "expert",
      icon: "👨‍💼"
    },
    {
      title: "You're seeing unsustainable growth with only outbound efforts",
      description: "Hiring another SDR costs 60K+ annually plus expenses for training, tradeshows, and tech, which creates high acquisition costs.",
      highlight: "unsustainable growth",
      icon: "📈"
    },
    {
      title: "Your buyer prefers to do their own research",
      description: "Research shows ~60% of the buyer's journey is done independently and today's buyer is influenced by social media & communities.",
      highlight: "own research",
      icon: "🔍"
    },
    {
      title: "Companies that are looking to stand apart from the crowd",
      description: "Your prospect got 10 cold emails and 10 LinkedIn connect requests today. There are too many options in every category now.",
      highlight: "stand apart",
      icon: "⭐"
    },
    {
      title: "You're selling B2B products to sophisticated buyers",
      description: "Sophisticated buyers require trust and market authority, especially when considering a 100K+ average contract value.",
      highlight: "sophisticated buyers",
      icon: "🎯"
    },
    {
      title: "Companies that value the exponential gains from brand momentum",
      description: "When you hear CRM, you think of HubSpot - that's the value of being a category leader through impactful content.",
      highlight: "exponential gains",
      icon: "🚀"
    }
  ];

  return (
    <section id="who-is-sauce-for" className="section-padding bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,107,107,0.1),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,154,107,0.1),transparent_50%)]"></div>
      </div>
      
      <div className="section-divider mb-20"></div>
      <div className="container-premium relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center px-6 py-3 bg-primary/10 rounded-full mb-6">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Perfect Fit Assessment</span>
          </div>
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
          {audienceCards.map((card, index) => (
            <div 
              key={index}
              className={`group relative p-8 rounded-3xl border transition-all duration-500 cursor-pointer ${
                hoveredCard === index 
                  ? 'bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/30 shadow-2xl scale-105' 
                  : 'bg-white/50 backdrop-blur-sm border-border/30 hover:border-primary/20'
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 transition-opacity duration-500 ${hoveredCard === index ? 'opacity-100' : ''}`}></div>
              
              <div className="relative z-10">
                {/* Icon and Number */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`text-4xl transition-transform duration-300 ${hoveredCard === index ? 'scale-110' : ''}`}>
                    {card.icon}
                  </div>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                    hoveredCard === index 
                      ? 'bg-primary text-primary-foreground scale-110' 
                      : 'bg-primary/10 text-primary'
                  }`}>
                    {index + 1}
                  </div>
                </div>
                
                {/* Title with Highlight */}
                <h3 className="text-xl font-bold mb-4 leading-tight transition-colors duration-300 group-hover:text-primary">
                  {card.title.split(card.highlight)[0]}
                  <span className="text-primary relative">
                    {card.highlight}
                    <div className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-primary/30 transition-all duration-300 ${hoveredCard === index ? 'scale-x-100' : 'scale-x-0'}`}></div>
                  </span>
                  {card.title.split(card.highlight)[1]}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {card.description}
                </p>

                {/* Check Icon */}
                <div className="flex items-center text-primary">
                  <CheckCircle className={`w-5 h-5 mr-2 transition-all duration-300 ${hoveredCard === index ? 'scale-110' : ''}`} />
                  <span className="text-sm font-medium">Perfect fit indicator</span>
                  <ArrowRight className={`w-4 h-4 ml-auto transition-all duration-300 ${hoveredCard === index ? 'translate-x-1' : ''}`} />
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-3xl border-2 border-primary/20 opacity-0 transition-opacity duration-300 ${hoveredCard === index ? 'opacity-100' : ''}`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-primary/20">
            <span className="text-lg font-medium text-foreground mr-4">
              Sound like your company?
            </span>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsTheSauceFor;