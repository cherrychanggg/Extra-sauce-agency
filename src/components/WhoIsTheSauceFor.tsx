import { useState } from "react";
import { CheckCircle, ArrowRight, Users, TrendingUp, Search, Star, Target, Rocket, Sparkles } from "lucide-react";

const WhoIsTheSauceFor = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const audienceCards = [
    {
      title: "You have an expert on your team to leverage",
      description: "This is typically the CEO or CTO of the organization, or someone who has expertise and deep knowledge in their field.",
      highlight: "expert",
      icon: Users,
      color: "from-blue-500/20 to-indigo-500/20",
      iconColor: "text-blue-500"
    },
    {
      title: "You're seeing unsustainable growth with only outbound efforts",
      description: "Hiring another SDR costs 60K+ annually plus expenses for training, tradeshows, and tech, which creates high acquisition costs.",
      highlight: "unsustainable growth",
      icon: TrendingUp,
      color: "from-red-500/20 to-orange-500/20",
      iconColor: "text-red-500"
    },
    {
      title: "Your buyer prefers to do their own research",
      description: "Research shows ~60% of the buyer's journey is done independently and today's buyer is influenced by social media & communities.",
      highlight: "own research",
      icon: Search,
      color: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-500"
    },
    {
      title: "Companies that are looking to stand apart from the crowd",
      description: "Your prospect got 10 cold emails and 10 LinkedIn connect requests today. There are too many options in every category now.",
      highlight: "stand apart",
      icon: Star,
      color: "from-yellow-500/20 to-amber-500/20",
      iconColor: "text-yellow-500"
    },
    {
      title: "You're selling B2B products to sophisticated buyers",
      description: "Sophisticated buyers require trust and market authority, especially when considering a 100K+ average contract value.",
      highlight: "sophisticated buyers",
      icon: Target,
      color: "from-purple-500/20 to-violet-500/20",
      iconColor: "text-purple-500"
    },
    {
      title: "Companies that value the exponential gains from brand momentum",
      description: "When you hear CRM, you think of HubSpot - that's the value of being a category leader through impactful content.",
      highlight: "exponential gains",
      icon: Rocket,
      color: "from-pink-500/20 to-rose-500/20",
      iconColor: "text-pink-500"
    }
  ];

  return (
    <section id="who-is-sauce-for" className="section-padding bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,107,107,0.1),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,154,107,0.1),transparent_50%)]"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-16 w-24 h-24 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-secondary/5 to-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Sparkle Effects */}
        <div className="absolute top-32 right-1/4">
          <Sparkles className="w-6 h-6 text-primary/30 animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
        <div className="absolute bottom-32 left-1/4">
          <Sparkles className="w-4 h-4 text-secondary/40 animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>
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
          {audienceCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div 
                key={index}
                className={`group relative p-8 rounded-3xl border transition-all duration-500 cursor-pointer animate-fade-in ${
                  hoveredCard === index 
                    ? 'bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/30 shadow-2xl scale-105 transform-gpu' 
                    : 'bg-white/50 backdrop-blur-sm border-border/30 hover:border-primary/20'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Enhanced Background Gradient on Hover */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${card.color} opacity-0 transition-opacity duration-500 ${hoveredCard === index ? 'opacity-100' : ''}`}></div>
                
                <div className="relative z-10">
                  {/* Enhanced Icon and Check Mark */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`relative p-3 rounded-2xl bg-gradient-to-r from-background/80 to-muted/50 backdrop-blur-sm transition-all duration-300 ${hoveredCard === index ? 'scale-110 shadow-lg' : ''}`}>
                      <IconComponent className={`w-8 h-8 ${card.iconColor} transition-all duration-300 ${hoveredCard === index ? 'scale-110' : ''}`} />
                      
                      {/* Pulse effect on hover */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${card.color} opacity-0 transition-opacity duration-300 ${hoveredCard === index ? 'opacity-100 animate-pulse' : ''}`}></div>
                    </div>
                    
                    {/* Checkmark indicator */}
                    <div className={`transition-all duration-300 ${hoveredCard === index ? 'scale-110 opacity-100' : 'scale-95 opacity-70'}`}>
                      <CheckCircle className={`w-6 h-6 ${card.iconColor} transition-all duration-300`} />
                    </div>
                  </div>
                  
                  {/* Enhanced Title with Highlight */}
                  <h3 className="text-xl font-bold mb-4 leading-tight transition-colors duration-300 group-hover:text-primary">
                    {card.title.split(card.highlight)[0]}
                    <span className="text-primary relative">
                      {card.highlight}
                      <div className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-primary/30 transition-all duration-300 ${hoveredCard === index ? 'scale-x-100' : 'scale-x-0'}`}></div>
                    </span>
                    {card.title.split(card.highlight)[1]}
                  </h3>
                  
                  {/* Enhanced Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6 transition-colors duration-300 group-hover:text-foreground/80">
                    {card.description}
                  </p>
                  
                  {/* Bottom Arrow Effect on Hover */}
                  <div className={`flex items-center transition-all duration-300 ${hoveredCard === index ? 'opacity-100 translate-x-2' : 'opacity-0 translate-x-0'}`}>
                    <span className="text-sm text-primary font-medium mr-2">Perfect fit</span>
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </div>
                </div>

                {/* Enhanced Hover Effect Border */}
                <div className={`absolute inset-0 rounded-3xl border-2 border-primary/20 opacity-0 transition-all duration-300 ${hoveredCard === index ? 'opacity-100 shadow-primary/10 shadow-2xl' : ''}`}></div>
                
                {/* Glow effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/10 to-secondary/10 blur-xl opacity-0 transition-opacity duration-500 ${hoveredCard === index ? 'opacity-50' : ''}`}></div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhoIsTheSauceFor;