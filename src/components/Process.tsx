import { ArrowDown } from "lucide-react";

const Process = () => {
  const processSteps = [
    {
      title: "Becoming an extension of you",
      description: "Schedule the kick-off call to get access to your client portal and a communication portal with us.",
      phase: "Start"
    },
    {
      title: "Enter The MarketFit Spinner™",
      description: "We optimize the omnichannel presence to present your audience and offer your audience feels damn to say no to.",
      phase: "Discovery"
    },
    {
      title: "Begin A Scroll-Stopping Engine™",
      description: "We begin sharing your thought leadership in an insightful and entertaining way for your realm of influence.",
      phase: "Content"
    },
    {
      title: "Begin Our Social Selling Strategy",
      description: "We increase response rates for your sales efforts by starting conversations with people in your realm of influence.",
      phase: "Amplify"
    },
    {
      title: "Watch your DMs start to blow up",
      description: "You start to notice your DMs with more active conversations from qualified pipeline.",
      phase: "Results"
    }
  ];

  return (
    <section id="process" className="section-padding bg-gradient-subtle">
      <div className="container-premium">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            The <span className="bg-gradient-primary bg-clip-text text-transparent">Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our proven methodology that transforms B2B leaders into thought leaders and drives qualified pipeline.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Process Flow */}
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  {/* Step Number & Phase */}
                  <div className="flex-shrink-0 text-center lg:text-left">
                    <div className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center shadow-glow mb-4 mx-auto lg:mx-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-primary-foreground font-bold text-2xl">
                        {index + 1}
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-primary uppercase tracking-wider">
                      {step.phase}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow card-premium text-center lg:text-left">
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                {index < processSteps.length - 1 && (
                  <div className="flex justify-center mt-8">
                    <ArrowDown className="w-8 h-8 text-primary animate-bounce" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 animate-fade-in">
          <div className="card-premium max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Generate high-quality leads for your business
            </h3>
            <div className="space-y-3 text-muted-foreground mb-8">
              <p>1. Learn how to get prospects DMing you on social media (no LinkedIn)</p>
              <p>2. Learn how to implement & the value of founder-led marketing</p>
              <p>3. Get resources on building a B2B content machine</p>
            </div>
            <button className="btn-hero">
              Get On A Strategy Call With Manny
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;