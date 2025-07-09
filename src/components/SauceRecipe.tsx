import { Button } from "@/components/ui/button";
import { Play, Users, Target, TrendingUp, Building } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const SauceRecipe = () => {
  const [currentStep, setCurrentStep] = useState(1);

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
      title: "HAVE NO IDEA HOW TO INVEST IN CONTENT & SOCIAL MEDIA",
      description: "Starting from scratch with content strategy and social media presence"
    },
    {
      title: "LOOKING TO PUT OUT EXECUTIVE THOUGHT LEADERSHIP CONTENT", 
      description: "Ready to establish thought leadership but need guidance and strategy"
    },
    {
      title: "READY TO BUILD A COMPANY VIDEO ENGINE THAT IS ENTERTAINING",
      description: "Scale content production with engaging video content systems"
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Executive Brand Growth",
      description: "We build your executive brand into a long-term asset. Every piece of content compounds — creating credibility, attracting opportunities, and building influence that lasts beyond your current company."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Organizational Synergy", 
      description: "When the founder's message leads, the rest of the team follows. Our framework aligns your UVP, narrative, and messaging across departments — so everyone speaks the same language to the market."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Leverage Your Unfair Advantage",
      description: "Your story is a strategic asset. Most mid-market companies hide their execs team behind the brand — but buyers connect with people. We help you stand out by putting your origin story and leadership front and center."
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Investor-Ready Positioning",
      description: "When investors search your brand, what do they find? We help you shape a memorable, high-conviction narrative that signals vision, traction, and leadership — before the first pitch deck is even opened."
    }
  ];

  const departments = [
    { name: "C-SUITE", active: false },
    { name: "SALES", active: false },
    { name: "MARKETING", active: true },
    { name: "FINANCE", active: false }
  ];

  return (
    <section id="sauce-recipe" className="section-padding bg-background">
      <div className="container-premium">
        {/* Mission Statement */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 max-w-4xl mx-auto leading-tight">
            OUR MISSION IS TO HELP B2B COMPANIES{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">*GROW PROFITABLY</span>{" "}
            WITH EXECUTIVE CONTENT
          </h2>
        </div>

        {/* Behind Extra Sauce Story */}
        <div className="flex justify-center mb-20">
          <div className="relative max-w-4xl">
            {/* Story Label */}
            <div className="absolute -top-4 left-8 bg-accent text-accent-foreground px-6 py-2 rounded-lg text-sm font-semibold shadow-lg transform -rotate-3 z-10">
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
          
          {/* Video Embed Placeholder */}
          <div className="max-w-4xl mx-auto bg-card border border-border rounded-2xl overflow-hidden shadow-elegant mb-12">
            <div className="aspect-video bg-gradient-to-br from-muted/50 to-background flex items-center justify-center relative">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto shadow-glow">
                  <Play className="w-8 h-8 text-primary-foreground ml-1" />
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-2">THE SAUCE RECIPE™</h4>
                <p className="text-lg text-primary font-semibold">VIDEO CONTENT ENGINE</p>
                <p className="text-sm text-muted-foreground mt-4">WHAT IF YOU COULD GET 15-16 HIGH-CONVERTING LEADS EVERY MONTH?</p>
              </div>
              {/* YouTube-style overlay */}
              <div className="absolute bottom-4 right-4">
                <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  CLICK TO LEARN 🎯
                </Button>
              </div>
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
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {journeyStages.map((stage, index) => (
              <div 
                key={index}
                className="card-premium p-8 text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <div className="w-8 h-8 bg-current rounded-full"></div>
                </div>
                <h4 className="text-lg font-bold text-accent mb-4 leading-tight">
                  {stage.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {stage.description}
                </p>
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
                variant={dept.active ? "default" : "outline"}
                size="sm"
                className={`rounded-full ${dept.active ? 'bg-primary text-primary-foreground' : 'bg-card text-foreground'}`}
              >
                {dept.name}
              </Button>
            ))}
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
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