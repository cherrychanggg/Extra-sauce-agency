import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";

const CompanyNews = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        <div className="container-premium py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Company <span className="text-primary">News</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest announcements, milestones, and company updates
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {/* News items */}
            <article className="bg-card rounded-xl p-8 shadow-sm border">
              <div className="flex items-start justify-between mb-4">
                <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Company Update
                </div>
                <span className="text-muted-foreground text-sm">October 2024</span>
              </div>
              <h2 className="text-2xl font-semibold mb-4">Company News Coming Soon</h2>
              <p className="text-muted-foreground">
                We're preparing exciting updates about our company milestones, partnerships, and growth. 
                Stay tuned for announcements about our journey in revolutionizing content-led growth.
              </p>
            </article>
            
            <article className="bg-card rounded-xl p-8 shadow-sm border">
              <div className="flex items-start justify-between mb-4">
                <div className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                  Partnership
                </div>
                <span className="text-muted-foreground text-sm">Coming Soon</span>
              </div>
              <h2 className="text-2xl font-semibold mb-4">Strategic Partnerships</h2>
              <p className="text-muted-foreground">
                Learn about our strategic partnerships and collaborations that help us deliver 
                even better results for our clients in their content-led growth journey.
              </p>
            </article>
            
            <article className="bg-card rounded-xl p-8 shadow-sm border">
              <div className="flex items-start justify-between mb-4">
                <div className="bg-accent/10 text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Team Growth
                </div>
                <span className="text-muted-foreground text-sm">Coming Soon</span>
              </div>
              <h2 className="text-2xl font-semibold mb-4">Team Expansion</h2>
              <p className="text-muted-foreground">
                Discover how we're growing our team with top talent to better serve our clients 
                and continue innovating in the content marketing space.
              </p>
            </article>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CompanyNews;