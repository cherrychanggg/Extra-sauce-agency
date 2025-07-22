import { useState } from "react";
import { Quote, Star, ArrowLeft, ArrowRight, ExternalLink, TrendingUp, Users, DollarSign, BarChart3, CheckCircle, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "We've had old prospects come back to book a demo and thought we were a completely different company.",
      author: "Vik Soni",
      title: "Head of Sales",
      company: "TechCorp",
      avatar: "/viksoni.png",
      companyLogo: "/viksoni.png", // Using avatar as company identifier
      industry: "B2B Software",
      companySize: "50-200 employees",
      impact: "300% increase in demo bookings",
      metrics: [
        { label: "Demo Bookings", value: "+300%", icon: TrendingUp },
        { label: "Pipeline Quality", value: "5x Better", icon: BarChart3 }
      ],
      caseStudyUrl: "/success-stories",
      verified: true,
      linkedinUrl: "https://linkedin.com",
      primaryColor: "from-blue-500 to-blue-600"
    },
    {
      quote: "I just want to say, I have a good ghostwriter.",
      author: "Nadia Isani",
      title: "CEO & Founder", 
      company: "InnovateLabs",
      avatar: "/nadiairani.png",
      companyLogo: "/nadiairani.png",
      industry: "AI/ML",
      companySize: "10-50 employees",
      impact: "Built thought leadership presence",
      metrics: [
        { label: "LinkedIn Reach", value: "10x Growth", icon: Users },
        { label: "Brand Authority", value: "+250%", icon: TrendingUp }
      ],
      caseStudyUrl: "/success-stories",
      verified: true,
      linkedinUrl: "https://linkedin.com",
      primaryColor: "from-purple-500 to-purple-600"
    },
    {
      quote: "Manny came in and helped us streamline our social media distribution system and kept us up to date with the best strategies. We've seen massive growth the last 6 months.",
      author: "Alex Salois",
      title: "Senior Content Manager",
      company: "GrowthTech", 
      avatar: "/alexsalois.png",
      companyLogo: "/alexsalois.png",
      industry: "Marketing Tech",
      companySize: "100-500 employees",
      impact: "500% growth in 6 months",
      metrics: [
        { label: "Growth Rate", value: "+500%", icon: TrendingUp },
        { label: "Reach", value: "2M+ Views", icon: Users }
      ],
      caseStudyUrl: "/success-stories",
      verified: true,
      linkedinUrl: "https://linkedin.com",
      primaryColor: "from-green-500 to-green-600"
    },
    {
      quote: "Manny's expertise & dedication have been instrumental in crafting a compelling strategic narrative, and generating insightful content on LinkedIn that drives leads.",
      author: "Sharlene Gumbs",
      title: "CEO & Founder",
      company: "ScaleUp Inc",
      avatar: "/sharlenegumbs.png", 
      companyLogo: "/sharlenegumbs.png",
      industry: "B2B SaaS",
      companySize: "20-100 employees",
      impact: "Consistent lead generation",
      metrics: [
        { label: "Lead Quality", value: "+180%", icon: BarChart3 },
        { label: "Pipeline Value", value: "$2.1M+", icon: DollarSign }
      ],
      caseStudyUrl: "/success-stories",
      verified: true,
      linkedinUrl: "https://linkedin.com",
      primaryColor: "from-orange-500 to-orange-600"
    }
  ];


  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-gradient-to-br from-muted/20 via-background to-muted/20 relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/3 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-1/3 w-40 h-40 bg-accent/3 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="section-divider mb-20"></div>
      <div className="container-premium relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            Real{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Results
            </span>{" "}
            from Real Clients
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See the measurable impact we've delivered for B2B leaders and their companies.
          </p>
        </div>

        {/* Main Testimonials Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Left: Testimonials List */}
            <div className="space-y-4">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`group cursor-pointer transition-all duration-500 ease-out transform ${
                    index === currentTestimonial
                      ? 'translate-x-2 scale-[1.02]'
                      : 'hover:translate-x-1 hover:scale-[1.01]'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Card 
                    className={`transition-all duration-500 ease-out relative overflow-hidden ${
                      index === currentTestimonial
                        ? 'border-primary/40 shadow-xl bg-gradient-to-br from-primary/8 to-secondary/8 ring-1 ring-primary/20'
                        : 'border-border/50 hover:border-primary/30 hover:shadow-lg bg-white/40 backdrop-blur-sm'
                    }`}
                  >
                    {/* Company Brand Strip */}
                    <div className={`h-1 w-full bg-gradient-to-r ${testimonial.primaryColor} transition-all duration-300 ${
                      index === currentTestimonial ? 'opacity-100' : 'opacity-60 group-hover:opacity-80'
                    }`}></div>
                    
                    <CardContent className="p-6">
                      {/* Company Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${testimonial.primaryColor} p-2 shadow-md transition-transform duration-300 group-hover:scale-110`}>
                            <img
                              src={testimonial.companyLogo}
                              alt={`${testimonial.company} logo`}
                              className="w-full h-full rounded-lg object-cover"
                            />
                          </div>
                          <div>
                            <div className="font-bold text-foreground text-lg">{testimonial.company}</div>
                            <div className="text-sm text-muted-foreground flex items-center space-x-2">
                              <span>{testimonial.industry}</span>
                              <span>•</span>
                              <span>{testimonial.companySize}</span>
                            </div>
                          </div>
                        </div>
                        
                        <Badge variant="secondary" className={`transition-all duration-300 ${
                          index === currentTestimonial ? 'bg-green-100 text-green-800 border-green-200' : 'opacity-70'
                        }`}>
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Verified
                        </Badge>
                      </div>

                      {/* Author */}
                      <div className="flex items-center mb-4">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          className="w-10 h-10 rounded-full object-cover mr-3 border-2 border-white shadow-sm"
                        />
                        <div>
                          <div className="font-semibold text-foreground">{testimonial.author}</div>
                          <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                        </div>
                      </div>

                      {/* Quote */}
                      <blockquote className="text-foreground leading-relaxed relative">
                        <div className={`absolute -left-2 -top-1 text-3xl bg-gradient-to-r ${testimonial.primaryColor} bg-clip-text text-transparent opacity-30 font-serif`}>"</div>
                        {testimonial.quote}
                      </blockquote>

                      {/* Quick Metric Preview */}
                      <div className="mt-4 pt-4 border-t border-border/50">
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-muted-foreground">Key Result:</div>
                          <Badge variant="outline" className={`bg-gradient-to-r ${testimonial.primaryColor} bg-opacity-10 border-current`}>
                            {testimonial.metrics[0].value} {testimonial.metrics[0].label}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Right: Featured Testimonial */}
            <div className="lg:sticky lg:top-8">
              <div className="animate-fade-in transition-all duration-700 ease-out">
                <Card className="border-primary/20 shadow-2xl bg-gradient-to-br from-white/95 to-white/80 backdrop-blur-xl relative overflow-hidden">
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className={`h-full w-full bg-gradient-to-br ${testimonials[currentTestimonial].primaryColor}`}></div>
                  </div>
                <CardHeader className="pb-4 relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${testimonials[currentTestimonial].primaryColor} p-3 shadow-xl`}>
                        <img
                          src={testimonials[currentTestimonial].companyLogo}
                          alt={`${testimonials[currentTestimonial].company} logo`}
                          className="w-full h-full rounded-xl object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-foreground">{testimonials[currentTestimonial].company}</h4>
                        <p className="text-muted-foreground">{testimonials[currentTestimonial].industry} • {testimonials[currentTestimonial].companySize}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200 animate-pulse">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Verified Client
                      </Badge>
                      <Button variant="ghost" size="sm" className="h-8 px-2 hover:scale-110 transition-transform">
                        <Linkedin className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Results Achieved</h3>
                    <p className="text-muted-foreground">Measurable impact in real numbers</p>
                  </div>

                  {/* Featured Quote */}
                  <blockquote className="text-xl font-medium text-foreground mb-6 leading-relaxed">
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center mb-6">
                    {testimonials[currentTestimonial].avatar ? (
                      <img
                        src={testimonials[currentTestimonial].avatar}
                        alt={testimonials[currentTestimonial].author}
                        className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-primary"
                      />
                    ) : (
                      <div className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-lg mr-4">
                        {testimonials[currentTestimonial].author.split(' ').map(n => n[0]).join('')}
                      </div>
                    )}
                    <div>
                      <div className="font-bold text-lg text-foreground">
                        {testimonials[currentTestimonial].author}
                      </div>
                      <div className="text-muted-foreground">
                        {testimonials[currentTestimonial].title} • {testimonials[currentTestimonial].company}
                      </div>
                    </div>
                  </div>

                  <Button variant="outline" className="group mb-6">
                    View Full Case Study
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardHeader>

                <CardContent className="pt-0 relative z-10">
                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {testimonials[currentTestimonial].metrics.map((metric, index) => {
                      const Icon = metric.icon;
                      return (
                        <div 
                          key={index} 
                          className={`group text-center p-4 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl border border-primary/10 hover:border-primary/20 transition-all duration-500 hover:scale-105 hover:shadow-md`}
                          style={{ animationDelay: `${index * 200}ms` }}
                        >
                          <div className={`w-10 h-10 bg-gradient-to-r ${testimonials[currentTestimonial].primaryColor} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="text-2xl font-bold text-foreground mb-1 transition-colors duration-300">{metric.value}</div>
                          <div className="text-sm text-muted-foreground">{metric.label}</div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Impact Badge */}
                  <div className="text-center">
                    <Badge variant="outline" className={`px-6 py-3 bg-gradient-to-r ${testimonials[currentTestimonial].primaryColor} bg-opacity-10 text-foreground border-current hover:scale-105 transition-transform duration-300 shadow-md`}>
                      <TrendingUp className="w-4 h-4 mr-2" />
                      {testimonials[currentTestimonial].impact}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Testimonials;