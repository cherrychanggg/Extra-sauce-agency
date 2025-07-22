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
      impact: "300% increase in demo bookings",
      metrics: [
        { label: "Demo Bookings", value: "+300%", icon: TrendingUp },
        { label: "Pipeline Quality", value: "5x Better", icon: BarChart3 }
      ],
      caseStudyUrl: "/success-stories",
      verified: true,
      linkedinUrl: "https://linkedin.com"
    },
    {
      quote: "I just want to say, I have a good ghostwriter.",
      author: "Nadia Isani",
      title: "CEO & Founder", 
      company: "InnovateLabs",
      avatar: "/nadiairani.png",
      impact: "Built thought leadership presence",
      metrics: [
        { label: "LinkedIn Reach", value: "10x Growth", icon: Users },
        { label: "Brand Authority", value: "+250%", icon: TrendingUp }
      ],
      caseStudyUrl: "/success-stories",
      verified: true,
      linkedinUrl: "https://linkedin.com"
    },
    {
      quote: "Manny came in and helped us streamline our social media distribution system and kept us up to date with the best strategies. We've seen massive growth the last 6 months.",
      author: "Alex Salois",
      title: "Senior Content Manager",
      company: "GrowthTech", 
      avatar: "/alexsalois.png",
      impact: "500% growth in 6 months",
      metrics: [
        { label: "Growth Rate", value: "+500%", icon: TrendingUp },
        { label: "Reach", value: "2M+ Views", icon: Users }
      ],
      caseStudyUrl: "/success-stories",
      verified: true,
      linkedinUrl: "https://linkedin.com"
    },
    {
      quote: "Manny's expertise & dedication have been instrumental in crafting a compelling strategic narrative, and generating insightful content on LinkedIn that drives leads.",
      author: "Sharlene Gumbs",
      title: "CEO & Founder",
      company: "ScaleUp Inc",
      avatar: "/sharlenegumbs.png", 
      impact: "Consistent lead generation",
      metrics: [
        { label: "Lead Quality", value: "+180%", icon: BarChart3 },
        { label: "Pipeline Value", value: "$2.1M+", icon: DollarSign }
      ],
      caseStudyUrl: "/success-stories",
      verified: true,
      linkedinUrl: "https://linkedin.com"
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
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
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

        {/* Featured Testimonial Carousel */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="relative">
            <div className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/20 shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left: Quote & Author */}
                <div>
                  {/* Verification Badge */}
                  <div className="flex items-center gap-2 mb-6">
                    <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Verified Client
                    </Badge>
                    <Button variant="ghost" size="sm" className="h-8 px-2">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl lg:text-2xl font-medium text-foreground mb-8 leading-relaxed">
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

                  {/* CTA */}
                  <Button variant="outline" className="group">
                    View Full Case Study
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {/* Right: Metrics & Results */}
                <div className="space-y-6">
                  <div className="text-center lg:text-left">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Results Achieved</h3>
                    <p className="text-muted-foreground">Measurable impact in real numbers</p>
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {testimonials[currentTestimonial].metrics.map((metric, index) => {
                      const Icon = metric.icon;
                      return (
                        <Card key={index} className="text-center p-6 border-primary/10 bg-gradient-to-br from-primary/5 to-secondary/5">
                          <CardContent className="p-0">
                            <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="text-2xl font-bold text-foreground mb-1">{metric.value}</div>
                            <div className="text-sm text-muted-foreground">{metric.label}</div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>

                  {/* Impact Badge */}
                  <div className="text-center lg:text-left">
                    <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border border-primary/20">
                      <TrendingUp className="w-4 h-4 mr-2 text-primary" />
                      <span className="text-sm font-semibold text-primary">
                        {testimonials[currentTestimonial].impact}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border-white/20 hover:bg-white hover:scale-110 transition-all duration-300"
              onClick={prevTestimonial}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border-white/20 hover:bg-white hover:scale-110 transition-all duration-300"
              onClick={nextTestimonial}
            >
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-primary scale-125' 
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>


        {/* Quick Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className={`group cursor-pointer transition-all duration-500 overflow-hidden ${
                index === currentTestimonial
                  ? 'border-primary/30 shadow-xl scale-105 bg-gradient-to-br from-primary/5 to-secondary/5'
                  : 'border-primary/10 hover:border-primary/20 hover:shadow-lg hover:-translate-y-1'
              }`}
              onClick={() => setCurrentTestimonial(index)}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Verified
                  </Badge>
                  <Button variant="ghost" size="sm" className="h-8 px-2">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                </div>

                {/* Author */}
                <div className="flex items-center">
                  {testimonial.avatar ? (
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-primary group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold mr-4 group-hover:scale-110 transition-transform duration-300">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                  <div>
                    <div className="font-bold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.title} • {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Quote */}
                <blockquote className="text-foreground font-medium mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Mini Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {testimonial.metrics.slice(0, 2).map((metric, metricIndex) => {
                    const Icon = metric.icon;
                    return (
                      <div key={metricIndex} className="text-center p-3 bg-primary/5 rounded-lg border border-primary/10">
                        <Icon className="w-5 h-5 text-primary mx-auto mb-1" />
                        <div className="text-sm font-bold text-foreground">{metric.value}</div>
                        <div className="text-xs text-muted-foreground">{metric.label}</div>
                      </div>
                    );
                  })}
                </div>

                <Button variant="outline" size="sm" className="w-full group/btn">
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;