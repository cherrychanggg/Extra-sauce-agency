
import { Link } from "react-router-dom";
import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Calendar, Mail, TrendingUp, Users, ArrowRight, CheckCircle } from "lucide-react";
import { useContentLoader } from "@/hooks/useContentLoader";

const Newsletters = () => {
  const { content, loading, error } = useContentLoader('/content/pages/resources/newsletters.json');

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading newsletter content...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !content) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container-premium py-20">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Content Loading Error</h1>
            <p className="text-muted-foreground mb-8">Unable to load newsletter content. Please try again later.</p>
            <Link to="/">
              <Button>Return Home</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const { heroSection, newsletter, archive, stats } = content;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding pt-32 bg-gradient-subtle">
        <div className="container-premium text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            {heroSection?.headline || "Newsletter"}
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            {heroSection?.description || "Weekly insights for B2B growth."}
          </p>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="section-padding">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Mail className="w-6 h-6 text-primary" />
                <Badge variant="secondary">Weekly Newsletter</Badge>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {newsletter?.title || "Join Our Newsletter"}
              </h2>
              
              {/* Benefits List */}
              {newsletter?.benefits && (
                <div className="space-y-4 mb-8">
                  {newsletter.benefits.map((benefit: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Stats */}
              {stats && (
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{stats.subscribers}</div>
                    <div className="text-sm text-muted-foreground">Subscribers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{stats.openRate}</div>
                    <div className="text-sm text-muted-foreground">Open Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{stats.frequency}</div>
                    <div className="text-sm text-muted-foreground">Frequency</div>
                  </div>
                </div>
              )}

              {/* Signup Form */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input 
                    placeholder={newsletter?.placeholder || "Enter your email"} 
                    className="flex-1" 
                    type="email"
                  />
                  <Button className="group">
                    {newsletter?.buttonText || "Subscribe"}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  {newsletter?.privacyText || "No spam. Unsubscribe anytime."}
                </p>
              </div>
            </div>

            {/* Testimonial */}
            <div className="card-premium p-8">
              {newsletter?.testimonial && (
                <>
                  <div className="text-2xl mb-6">"</div>
                  <blockquote className="text-lg mb-6 leading-relaxed">
                    {newsletter.testimonial.quote}
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">{newsletter.testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{newsletter.testimonial.title}</div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Archive */}
      {archive && (
        <section className="section-padding bg-gradient-subtle">
          <div className="container-premium">
            <div className="text-center mb-16">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                {archive.title || "Recent Issues"}
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Catch up on our latest insights and strategies.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {archive.issues?.map((issue: any) => (
                <div key={issue.id} className="card-premium group hover:scale-105 transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {new Date(issue.date).toLocaleDateString()}
                    </div>
                    <h4 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {issue.title}
                    </h4>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {issue.description}
                    </p>
                    <Button variant="outline" size="sm" className="group">
                      Read Issue
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default Newsletters;
