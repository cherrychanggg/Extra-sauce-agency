import { Button } from "@/components/ui/button";
import { Play, Pause, Users, Target, TrendingUp, Building, MessageSquare, DollarSign, BarChart3, Handshake, Zap, Eye, FileText, Lightbulb, PieChart, Coins, MousePointerClick, ChevronDown, ChevronUp, Sparkles } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { sauceRecipeContent } from "@/content/pages/saucerecipe";

const SauceRecipe = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [activeDepartment, setActiveDepartment] = useState("C-SUITE");
  const [selectedJourneyCard, setSelectedJourneyCard] = useState<number | null>(null);
  const [isStoryVisible, setIsStoryVisible] = useState(false);
  const [isClickToLearnVisible, setIsClickToLearnVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  
  const storyRef = useRef<HTMLDivElement>(null);
  const clickToLearnRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

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

  // Audio control functions
  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const steps = sauceRecipeContent.steps;

  const journeyStages = sauceRecipeContent.journeyStages;

  const departmentBenefits = sauceRecipeContent.departmentBenefits;

  const departments = sauceRecipeContent.departments;

  // Icon mapping function
  const getIcon = (iconName: string) => {
    const iconMap: { [key: string]: JSX.Element } = {
      TrendingUp: <TrendingUp className="w-8 h-8" />,
      Target: <Target className="w-8 h-8" />,
      Users: <Users className="w-8 h-8" />,
      Building: <Building className="w-8 h-8" />,
      MessageSquare: <MessageSquare className="w-8 h-8" />,
      Zap: <Zap className="w-8 h-8" />,
      FileText: <FileText className="w-8 h-8" />,
      Handshake: <Handshake className="w-8 h-8" />,
      BarChart3: <BarChart3 className="w-8 h-8" />,
      Eye: <Eye className="w-8 h-8" />,
      Lightbulb: <Lightbulb className="w-8 h-8" />,
      DollarSign: <DollarSign className="w-8 h-8" />,
      PieChart: <PieChart className="w-8 h-8" />,
      Coins: <Coins className="w-8 h-8" />
    };
    return iconMap[iconName] || <FileText className="w-8 h-8" />;
  };

  return (
    <section id="sauce-recipe" className="section-padding bg-background">
      <div className="container-premium">
        {/* Mission Statement */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 max-w-4xl mx-auto leading-tight">
            OUR MISSION IS TO HELP B2B COMPANIES{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              GROW PROFITABLY
            </span>{" "}
            WITH EXECUTIVE CONTENT
          </h2>
        </div>

        {/* Behind Extra Sauce Story */}
        <div className="flex justify-center mb-20" ref={storyRef}>
          <div className="relative max-w-4xl">
            {/* Story Label */}
            <div className={`absolute -top-4 left-8 group cursor-pointer z-10 transition-all duration-700 ${
              isStoryVisible 
                ? 'animate-fade-in opacity-100 scale-100' 
                : 'opacity-0 scale-75 translate-y-4'
            }`}>
              <div className="relative">
                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary rounded-lg blur-md opacity-70 group-hover:opacity-100 animate-pulse scale-110"></div>
                
                {/* Main button */}
                <div className="relative bg-gradient-to-r from-primary to-secondary text-primary-foreground px-8 py-3 rounded-lg text-sm font-bold shadow-xl transform -rotate-3 group-hover:rotate-0 group-hover:scale-110 transition-all duration-500 border-2 border-primary-foreground/20">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse"></div>
                    {sauceRecipeContent.storyTitle}
                    <div className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse animation-delay-300"></div>
                  </div>
                  
                  {/* Sparkle effects */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary-foreground rounded-full animate-ping opacity-60"></div>
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-secondary-foreground rounded-full animate-bounce opacity-40"></div>
                </div>
              </div>
            </div>
            
            {/* Main Story Card */}
            <div className="bg-gradient-to-br from-card/90 to-muted/50 backdrop-blur-sm border border-border/50 rounded-3xl p-12 shadow-elegant">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                    {sauceRecipeContent.storyTitle}
                  </h3>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  {sauceRecipeContent.storyParagraphs.map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </div>
              
              {/* Audio Player */}
              <div className="mt-8 flex items-center gap-4 bg-background/50 rounded-xl p-4">
                <audio 
                  ref={audioRef}
                  src="/howitstarted.mp3"
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  onEnded={handleAudioEnded}
                  preload="metadata"
                />
                <Button 
                  size="sm" 
                  onClick={toggleAudio}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full p-3"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </Button>
                <div className="flex-1">
                  <div className="text-sm font-medium text-foreground">{sauceRecipeContent.audioLabel}</div>
                  <div className="w-full bg-muted h-2 rounded-full mt-2">
                    <div 
                      className="bg-accent h-2 rounded-full transition-all duration-300" 
                      style={{ width: duration ? `${(currentTime / duration) * 100}%` : '0%' }}
                    ></div>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  {duration ? `${formatTime(currentTime)} / ${formatTime(duration)}` : sauceRecipeContent.audioDuration}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Walk Through Section */}
        <div className="text-center mb-16">
          <div className="inline-block border-b-2 border-primary pb-2 mb-12">
            <h3 className="text-lg font-semibold text-foreground">
              {sauceRecipeContent.walkThroughTitle}
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
                {sauceRecipeContent.walkThroughSubtitle}
              </h3>
            </div>
            <div className="flex justify-center mt-4" ref={clickToLearnRef}>
              <div className={`inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm border-2 border-primary/30 px-8 py-4 rounded-2xl text-base font-semibold text-primary shadow-lg transition-all duration-700 ${
                isClickToLearnVisible 
                  ? 'animate-fade-in opacity-100 scale-100' 
                  : 'opacity-0 scale-75 translate-y-4'
              } hover:scale-105 hover:shadow-xl hover:border-primary/50`}>
                <MousePointerClick className="w-6 h-6 text-primary animate-pulse" />
                {sauceRecipeContent.clickToLearn}
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
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
                    <div className={`w-20 h-20 rounded-full border-4 flex items-center justify-center transition-all duration-500 relative ${
                      selectedJourneyCard === index 
                        ? 'bg-primary/20 border-primary scale-110 shadow-lg shadow-primary/30' 
                        : 'bg-slate-700 border-primary/30 group-hover:bg-slate-600 group-hover:border-primary/50'
                    }`}>
                      {/* Pulsing ring effect for unselected cards */}
                      {selectedJourneyCard !== index && (
                        <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse scale-110"></div>
                      )}
                      
                      {selectedJourneyCard === index ? (
                        <div className="flex flex-col items-center animate-fade-in">
                          <Sparkles className="w-8 h-8 text-primary animate-pulse" />
                          <ChevronUp className="w-4 h-4 text-primary/80 -mt-1" />
                        </div>
                      ) : (
                        <div className="flex flex-col items-center group-hover:animate-pulse">
                          <MousePointerClick className="w-6 h-6 text-primary/80 group-hover:text-primary transition-colors duration-300" />
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
              <span className="text-primary">{sauceRecipeContent.processTitle}</span> Process
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {sauceRecipeContent.processSubtitle}
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
                {sauceRecipeContent.departmentBenefitsTitle}
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
                    {getIcon(benefit.iconName)}
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