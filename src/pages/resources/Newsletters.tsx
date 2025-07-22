import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { newsletterPageContent } from "@/content/resources/newsletters";

const Newsletters = () => {
  const { hero, benefits, form } = newsletterPageContent;

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
                  {hero.title.split('CONTENT-LED')[0]}
                  <span className="text-primary">CONTENT-LED<br />
                  GTM REPORT.</span>
                </h1>
                
                <div className="mb-8">
                  <p className="text-lg mb-4">
                    {hero.subtitle} <span className="text-primary">{hero.launchDate}</span> — Join the List
                  </p>
                  
                  <p className="text-muted-foreground mb-6">
                    {hero.description}
                  </p>
                  
                  <div className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
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
                      {form.fields.email.label}
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={form.fields.email.placeholder}
                      className="w-full"
                      required={form.fields.email.required}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                        {form.fields.firstName.label}
                      </label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder={form.fields.firstName.placeholder}
                        className="w-full"
                        required={form.fields.firstName.required}
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                        {form.fields.lastName.label}
                      </label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder={form.fields.lastName.placeholder}
                        className="w-full"
                        required={form.fields.lastName.required}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="hearAbout" className="block text-sm font-medium mb-2">
                      {form.fields.hearAbout.label}
                    </label>
                    <Textarea
                      id="hearAbout"
                      placeholder={form.fields.hearAbout.placeholder}
                      className="w-full"
                      rows={4}
                      required={form.fields.hearAbout.required}
                    />
                  </div>
                  
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg font-semibold">
                    {form.submitButton}
                  </Button>
                </div>
                
                {/* Placeholder for Webflow form */}
                <div className="mt-6 p-4 bg-muted/30 rounded-lg border-2 border-dashed border-muted-foreground/30">
                  <p className="text-center text-muted-foreground text-sm">
                    {form.webflowNote}
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