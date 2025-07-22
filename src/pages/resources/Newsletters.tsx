import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Newsletters = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        <div className="container-premium py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  SUBSCRIBE TO THE<br />
                  WEEKLY <span className="text-primary">CONTENT-LED<br />
                  GTM REPORT.</span>
                </h1>
                
                <div className="mb-8">
                  <p className="text-lg mb-4">
                    First Issue Drops <span className="text-primary">October</span> — Join the List
                  </p>
                  
                  <p className="text-muted-foreground mb-6">
                    Once a week, we'll send you a 5-minute read with proven executive content tactics to 
                    help you drive qualified pipeline for your company.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Tactical GTM breakdowns from real campaigns</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Founder-led plays that are working right now</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Behind-the-scenes execution we don't share anywhere else</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mt-6">
                    Don't miss out. <span className="text-foreground font-medium">Subscribe now</span>
                  </p>
                </div>
              </div>
              
              {/* Right Form */}
              <div className="bg-card p-8 rounded-xl shadow-lg border">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      EMAIL *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="123@hotmail.com"
                      className="w-full"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                        FIRST NAME *
                      </label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="123"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                        LAST NAME *
                      </label>
                      <Input
                        id="lastName"
                        type="text"
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="hearAbout" className="block text-sm font-medium mb-2">
                      HOW DID YOU HEAR ABOUT US?
                    </label>
                    <Textarea
                      id="hearAbout"
                      placeholder="123"
                      className="w-full"
                      rows={4}
                    />
                  </div>
                  
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg font-semibold">
                    SUBSCRIBE
                  </Button>
                </div>
                
                {/* Placeholder for Webflow form */}
                <div className="mt-6 p-4 bg-muted/30 rounded-lg border-2 border-dashed border-muted-foreground/30">
                  <p className="text-center text-muted-foreground text-sm">
                    [Webflow Form Placeholder - Replace with actual Webflow embed code]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Newsletters;