import { Button } from "@/components/ui/button";
import { Play, Users, Target, TrendingUp, Building, MessageSquare, DollarSign, BarChart3, Handshake, Zap, Eye, FileText, Lightbulb, PieChart, Coins, MousePointerClick, ChevronDown, ChevronUp, Sparkles } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const SauceRecipe = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [activeDepartment, setActiveDepartment] = useState("C-SUITE");
  const [selectedJourneyCard, setSelectedJourneyCard] = useState<number | null>(null);
  const [isStoryVisible, setIsStoryVisible] = useState(false);
  const [isClickToLearnVisible, setIsClickToLearnVisible] = useState(false);
  
  const storyRef = useRef<HTMLDivElement>(null);
  const clickToLearnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === storyRef.current && entry.isIntersecting) {
            setIsStoryVisible(true);
          }
          if (entry.target === clickToLearnRef.current && entry.isIntersecting) {
            setIsClickToLearnVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (storyRef.current) observer.observe(storyRef.current);
    if (clickToLearnRef.current) observer.observe(clickToLearnRef.current);

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: 1,
      title: "Become An Extension Of You",
      description: "Schedule the kick-off call to get access to your client portal and a communication portal with us."
    },
    {
      number: 2,
      title: "Enter The MarketFit Spinner™",
      description: "We optimize the omnichannel presence to present your audience and offer your audience feels damn to say no to."
    },
    {
      number: 3,
      title: "Begin A Scroll-Stopping Engine™",
      description: "We begin sharing your thought leadership in an insightful and entertaining way for your realm of influence."
    },
    {
      number: 4,
      title: "Begin Our Social Selling Strategy",
      description: "We increase response rates for your sales efforts by starting conversations with people in your realm of influence."
    },
    {
      number: 5,
      title: "Watch your DMs start to blow up",
      description: "You start to notice your DMs with more active conversations from qualified pipeline."
    },
    {
      number: 6,
      title: "Are you ready to handle more qualified sales opportunities?",
      description: "Ready to take the next step in your content journey?"
    }
  ];

  const journeyStages = [
    {
      initialTitle: "HAVE NO IDEA HOW TO INVEST IN CONTENT & SOCIAL MEDIA",
      expandedTitle: "READY TO MAKE CONTENT IN-HOUSE?",
      expandedDescription: "We'll coach you or your team to produce quality content that stops the scroll and builds influence with your buyer.",
      link: "/services/content-led-gtm-coaching"
    },
    {
      initialTitle: "LOOKING TO PUT OUT EXECUTIVE THOUGHT LEADERSHIP CONTENT",
      expandedTitle: "READY TO BE A TRUSTED LEADER?",
      expandedDescription: "We'll turn your executive team into trusted thought leaders by being their secret social media ghostwriter.",
      link: "/services/executive-ghostwriting"
    },
    {
      initialTitle: "READY TO BUILD A COMPANY VIDEO ENGINE THAT IS ENTERTAINING",
      expandedTitle: "WANT TO LEVEL UP WITH VIDEO?",
      expandedDescription: "Work with dream clients & scale revenue with an executive video engine (e.g. podcast, webinar, episodic series)",
      link: "/services/video-content-engine"
    }
  ];

  const departmentBenefits = {
    "C-SUITE": [
      {
        icon: <TrendingUp className="w-8 h-8" />,
        title: "Executive Brand Growth",
        description: "We build your executive brand into a long-term asset. Every piece of content compounds — creating credibility, attracting opportunities, and building influence that lasts beyond your current company."
      },
      {
        icon: <Target className="w-8 h-8" />,
        title: "Leverage Your Unfair Advantage",
        description: "Your story is a strategic asset. Most mid-market companies hide their exec team behind the brand — but buyers connect with people. We help you stand out by putting your origin story and leadership front and center."
      },
      {
        icon: <Users className="w-8 h-8" />,
        title: "Organizational Synergy",
        description: "When the founder's message leads, the rest of the team follows. Our framework aligns your UVP, narrative, and messaging across departments — so everyone speaks the same language to the market."
      },
      {
        icon: <Building className="w-8 h-8" />,
        title: "Investor-Ready Positioning",
        description: "When investors search your brand, what do they find? We help you shape a memorable, high-conviction narrative that signals vision, traction, and leadership — before the first pitch deck is even opened."
      }
    ],
    "SALES": [
      {
        icon: <MessageSquare className="w-8 h-8" />,
        title: "Warmer Leads, Shorter Cycles",
        description: "Sales shouldn't start at zero. Our content builds familiarity and trust with buyers before the first touchpoint — so your reps walk into conversations halfway to closed."
      },
      {
        icon: <Zap className="w-8 h-8" />,
        title: "Unlock Huge Deal Opportunities",
        description: "Having your exec team build trusted brands in the industry will open doors for sales opportunities that wouldn't of happened otherwise due to the influence your leadership has in the space."
      },
      {
        icon: <FileText className="w-8 h-8" />,
        title: "Content That Sells For You",
        description: "We don't just make noise — we create sales enablement disguised as thought leadership. Every post answers objections, frames the problem, and moves buyers closer to \"yes.\""
      },
      {
        icon: <Handshake className="w-8 h-8" />,
        title: "Raving Fans On Sale Calls",
        description: "No more chasing ghost prospects. Our content warms up buyers before they ever book a meeting — so when they show up, they already trust your brand and just need help crossing the finish line."
      }
    ],
    "MARKETING": [
      {
        icon: <BarChart3 className="w-8 h-8" />,
        title: "Content-led Pipeline Growth",
        description: "No more relying solely on outbound or paid. Founder-led content attracts, educates, and qualifies buyers — turning your content into a pipeline engine, not just a support function."
      },
      {
        icon: <Eye className="w-8 h-8" />,
        title: "Deep Customer Resonance",
        description: "Your founder has insights that no keyword tool can surface. We help you extract and package those into content that actually speaks your buyer's language — not just marketing jargon."
      },
      {
        icon: <Lightbulb className="w-8 h-8" />,
        title: "Unique Thought Leadership",
        description: "Instead of waiting months to \"build brand,\" we plug into your founder's POV and turn it into scroll-stopping, conversation-starting content that elevates your positioning fast."
      },
      {
        icon: <FileText className="w-8 h-8" />,
        title: "Less Content Bottlenecks",
        description: "Say goodbye to the content drought. Our system gives your marketing team a consistent stream of authentic, strategic content — without waiting on approvals or reinventing the wheel."
      }
    ],
    "FINANCE": [
      {
        icon: <DollarSign className="w-8 h-8" />,
        title: "Lower CAC Over Time",
        description: "Content doesn't just educate — it compounds. By investing in founder-led content, you build brand equity that drives inbound interest and reduces your dependency on expensive paid channels."
      },
      {
        icon: <PieChart className="w-8 h-8" />,
        title: "Asset Creation, Not Just Spend",
        description: "Every post, video, and POV we create becomes a long-term business asset — not a sunk cost. It's an investment in your market positioning that pays off across sales, hiring, fundraising, and brand value."
      },
      {
        icon: <TrendingUp className="w-8 h-8" />,
        title: "Higher ROI on GTM Efforts",
        description: "Instead of hiring more SDRs or spinning up new ad campaigns, we maximize the impact of your existing GTM team by letting your founder become a magnet for qualified buyers."
      },
      {
        icon: <Coins className="w-8 h-8" />,
        title: "Increases Enterprise Value",
        description: "Brands with visible, credible founders tend to attract better deal terms, partnerships, and media attention. Founder-led content adds intangible value — strengthen future valuation during M&A or early-stage funding."
      }
    ]
  };

  const departments = ["C-SUITE", "SALES", "MARKETING", "FINANCE"];

  return (
    <section id="sauce-recipe" className="section-padding bg-background">
      <div className="container-premium">
        {/* Mission Statement */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 max-w-4xl mx-auto leading-tight">
            OUR MISSION IS TO HELP B2B COMPANIES{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">™GROW PROFITABLY</span>{" "}
            WITH EXECUTIVE CONTENT
          </h2>
        </div>

        {/* Behind Extra Sauce Story */}
        <div className="flex justify-center mb-20" ref={storyRef}>
          <div className="relative max-w-4xl">
            {/* Story Label */}
            <div className={`absolute -top-4 left-8 bg-accent text-accent-foreground px-6 py-2 rounded-lg text-sm font-semibold shadow-lg transform -rotate-3 z-10 transition-all duration-700 ${
              isStoryVisible 
                ? 'animate-fade-in opacity-100 scale-100' 
                : 'opacity-0 scale-75 translate-y-4'
            }`}>
              THE STORY
            </div>
            
            {/* Main Story Card */}
            <div className="bg-gradient-to-br from-card/90 to-muted/50 backdrop-blur-sm border border-border/50 rounded-3xl p-12 shadow-elegant">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                    BEHIND EXTRA SAUCE
                  </h3>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>We didn't start in B2B marketing.</p>
                  <p>Our founder built a luxury streetwear brand from scratch. Grew it in public for over 5 years.</p>
                  <p>And that's where he discovered the secret sauce: executive content builds trust faster than sales calls ever could.</p>
                  <p>By showing up consistently, telling his story, and owning the narrative — he created real demand.</p>
                  <p>Today, he helps B2B founders do the same.</p>
                  <p>Extra Sauce turns founder experience into executive content that grows revenue and reach.</p>
                </div>
              </div>
              
              {/* Audio Player */}
              <div className="mt-8 flex items-center gap-4 bg-background/50 rounded-xl p-4">
                <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full p-3">
                  <Play className="w-4 h-4" />
                </Button>
                <div className="flex-1">
                  <div className="text-sm font-medium text-foreground">How Extra Sauce Started...</div>
                  <div className="w-full bg-muted h-2 rounded-full mt-2">
                    <div className="bg-accent h-2 rounded-full w-1/3"></div>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">06:30 / 13:25</div>
              </div>
            </div>
          </div>
        </div>

        {/* Walk Through Section */}
        <div className="text-center mb-16">
          <div className="inline-block border-b-2 border-primary pb-2 mb-12">
            <h3 className="text-lg font-semibold text-foreground">
              WALK THROUGH <span className="text-primary">THE SAUCE® RECIPE</span>
            </h3>
          </div>
          
          {/* Embedded YouTube Video */}
          <div className="max-w-4xl mx-auto bg-card border border-border rounded-2xl overflow-hidden shadow-elegant mb-12">
            <div className="aspect-video bg-gradient-to-br from-muted/50 to-background flex items-center justify-center relative">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/uAaoV40NhuQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Content Journey */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-block border-b-2 border-primary pb-2">
              <h3 className="text-lg font-semibold text-foreground">
                WHERE ARE YOU IN YOUR <span className="text-primary">CONTENT JOURNEY?</span>
              </h3>
            </div>
            <div className="flex justify-center mt-4" ref={clickToLearnRef}>
              <div className={`inline-flex items-center gap-2 bg-background/60 backdrop-blur-sm border-2 border-dashed border-primary/40 px-4 py-2 rounded-xl text-sm font-medium text-muted-foreground shadow-sm transition-all duration-700 ${
                isClickToLearnVisible 
                  ? 'animate-fade-in opacity-100 scale-100' 
                  : 'opacity-0 scale-75 translate-y-4'
              }`}>
                <MousePointerClick className="w-4 h-4 text-primary" />
                CLICK TO LEARN
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {journeyStages.map((stage, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onClick={() => setSelectedJourneyCard(selectedJourneyCard === index ? null : index)}
              >
                <div className={`bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 text-center transition-all duration-500 border border-slate-700/50 hover:border-primary/30 shadow-xl hover:shadow-2xl min-h-[300px] flex flex-col justify-between overflow-hidden ${
                  selectedJourneyCard === index 
                    ? 'scale-105 border-primary/50 shadow-primary/20' 
                    : 'hover:scale-105'
                }`}>
                  {/* Icon - Shows opening/revealing state */}
                  <div className="flex justify-center mb-8 relative">
                    <div className={`w-20 h-20 rounded-full border-4 border-primary/30 flex items-center justify-center transition-all duration-500 ${
                      selectedJourneyCard === index 
                        ? 'bg-primary/20 border-primary scale-110 shadow-lg shadow-primary/30' 
                        : 'bg-slate-700 group-hover:bg-slate-600'
                    }`}>
                      {selectedJourneyCard === index ? (
                        <div className="flex flex-col items-center animate-fade-in">
                          <Sparkles className="w-8 h-8 text-primary animate-pulse" />
                          <ChevronUp className="w-4 h-4 text-primary/80 -mt-1" />
                        </div>
                      ) : (
                        <div className="flex flex-col items-center">
                          <div className="w-6 h-6 bg-primary rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <ChevronDown className="w-4 h-4 text-primary/60 group-hover:text-primary/80 transition-colors duration-300 mt-1" />
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-center">
                    <h4 className={`text-xl font-bold text-white mb-6 leading-tight transition-all duration-500 ${
                      selectedJourneyCard === index ? 'text-primary/90' : ''
                    }`}>
                      {selectedJourneyCard === index ? stage.expandedTitle : stage.initialTitle}
                    </h4>
                  
                    {selectedJourneyCard === index && (
                      <div className="animate-fade-in">
                        <p className="text-white/80 text-sm leading-relaxed mb-4 transform transition-all duration-500 ease-out">
                          {stage.expandedDescription}
                        </p>
                      </div>
                    )}
                  </div>
                  
                  {/* Action button when expanded */}
                  {selectedJourneyCard === index && (
                    <div className="mt-6 animate-fade-in">
                      <Link to={stage.link}>
                        <button className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg">
                          EXPLORE SERVICE ✨
                        </button>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Steps - Interactive */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              <span className="text-primary">The SAUCE Recipe™</span> Process
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our proven 6-step methodology that transforms your expertise into a profitable content engine.
            </p>
          </div>

          {/* Step Navigation */}
          <div className="flex justify-center items-center gap-4 mb-8 flex-wrap">
            {steps.map((step, index) => (
              <Button
                key={index}
                variant={currentStep === step.number ? "default" : "outline"}
                size="sm"
                className={`rounded-full ${currentStep === step.number ? 'bg-primary text-primary-foreground' : 'bg-card text-foreground'}`}
                onClick={() => setCurrentStep(step.number)}
              >
                STEP {step.number}
              </Button>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="w-full max-w-4xl mx-auto mb-12">
            <div className="h-2 bg-muted rounded-full">
              <div 
                className="h-2 bg-gradient-primary rounded-full transition-all duration-500"
                style={{ width: `${(currentStep / steps.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Current Step Display */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary/90 to-secondary/90 rounded-3xl p-12 text-center text-white shadow-elegant">
              <div className="text-sm font-semibold text-primary-foreground/80 mb-4">
                STEP {currentStep}
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-accent">
                {steps[currentStep - 1].title}
              </h3>
              <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                {steps[currentStep - 1].description}
              </p>
              
              {/* Special CTA for Step 6 */}
              {currentStep === 6 && (
                <div className="mt-8">
                  <Link to="/book-strategy-call">
                    <Button className="bg-white text-primary hover:bg-white/90 px-12 py-6 text-lg font-semibold rounded-2xl shadow-elegant hover:scale-105 transition-all duration-300">
                      Book a Strategy Call
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Department Benefits */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-block border-b-2 border-primary pb-2">
              <h3 className="text-lg font-semibold text-foreground">
                HOW DOES THE SAUCE RECIPE® <span className="text-primary">BENEFIT THE ORGANIZATION</span>
              </h3>
            </div>
          </div>

          {/* Department Filters */}
          <div className="flex justify-center items-center gap-4 mb-12 flex-wrap">
            {departments.map((dept, index) => (
              <Button
                key={index}
                variant={activeDepartment === dept ? "default" : "outline"}
                size="sm"
                className={`rounded-full ${activeDepartment === dept ? 'bg-primary text-primary-foreground' : 'bg-card text-foreground'}`}
                onClick={() => setActiveDepartment(dept)}
              >
                {dept}
              </Button>
            ))}
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {departmentBenefits[activeDepartment as keyof typeof departmentBenefits]?.map((benefit, index) => (
              <div 
                key={index}
                className="card-premium p-8 group hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-accent mb-2">
                      {benefit.title}
                    </h4>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SauceRecipe;