import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";

const Blogs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        <div className="container-premium py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-primary">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Insights, strategies, and stories from the world of content-led growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog posts will go here */}
            <div className="bg-card rounded-xl p-6 shadow-sm border">
              <div className="h-48 bg-muted rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Blog Post Title</h3>
              <p className="text-muted-foreground mb-4">
                Coming soon - insightful content about content-led growth strategies.
              </p>
              <div className="text-sm text-primary">Read More →</div>
            </div>
            
            <div className="bg-card rounded-xl p-6 shadow-sm border">
              <div className="h-48 bg-muted rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Another Post</h3>
              <p className="text-muted-foreground mb-4">
                More great content coming your way soon.
              </p>
              <div className="text-sm text-primary">Read More →</div>
            </div>
            
            <div className="bg-card rounded-xl p-6 shadow-sm border">
              <div className="h-48 bg-muted rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Third Post</h3>
              <p className="text-muted-foreground mb-4">
                Stay tuned for expert insights and case studies.
              </p>
              <div className="text-sm text-primary">Read More →</div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blogs;