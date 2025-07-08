const WhoIsTheSauceFor = () => {
  const audienceCards = [
    {
      title: "You have an expert on your team to leverage",
      description: "This is typically the CEO or CTO of the organization, or someone who has expertise and deep knowledge in their field.",
      highlight: "expert"
    },
    {
      title: "You're seeing unsustainable growth with only outbound efforts",
      description: "Hiring another SDR costs 60K+ annually plus expenses for training, tradeshows, and tech, which creates high acquisition costs.",
      highlight: "unsustainable growth"
    },
    {
      title: "Your buyer prefers to do their own research",
      description: "Research shows ~60% of the buyer's journey is done independently and today's buyer is influenced by social media & communities.",
      highlight: "own research"
    },
    {
      title: "Companies that are looking to stand apart from the crowd",
      description: "Your prospect got 10 cold emails and 10 LinkedIn connect requests today. There are too many options in every category now.",
      highlight: "stand apart"
    },
    {
      title: "You're selling B2B products to sophisticated buyers",
      description: "Sophisticated buyers require trust and market authority, especially when considering a 100K+ average contract value.",
      highlight: "sophisticated buyers"
    },
    {
      title: "Companies that value the exponential gains from brand momentum",
      description: "When you hear CRM, you think of HubSpot - that's the value of being a category leader through impactful content.",
      highlight: "exponential gains"
    }
  ];

  return (
    <section id="who-is-sauce-for" className="section-padding bg-gradient-subtle relative">
      <div className="section-divider mb-20"></div>
      <div className="container-premium">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Who Is <span className="bg-gradient-primary bg-clip-text text-transparent">The Sauce</span> For?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our approach is for B2B companies that want to align their GTM strategy for today's buyer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {audienceCards.map((card, index) => (
            <div 
              key={index}
              className="card-premium group animate-fade-in-up hover:scale-[1.02] transition-all duration-500"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-primary-foreground font-bold text-lg">
                    {index + 1}
                  </span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4 leading-tight group-hover:text-primary transition-colors duration-300">
                {card.title.split(card.highlight)[0]}
                <span className="text-primary">{card.highlight}</span>
                {card.title.split(card.highlight)[1]}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsTheSauceFor;