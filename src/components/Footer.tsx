import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground">
      {/* Main Footer */}
      <div className="section-padding">
        <div className="container-premium">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                  <span className="text-primary-foreground font-bold text-xl">ES</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xl text-accent-foreground">EXTRA SAUCE</span>
                  <span className="text-xs text-accent-foreground/70 font-medium tracking-wider">
                    FIND YOUR SAUCE
                  </span>
                </div>
              </div>
              <p className="text-accent-foreground/80 mb-6 max-w-md leading-relaxed">
                Helping B2B SaaS companies build profitable founder-led content engines 
                that generate qualified pipeline through thought leadership.
              </p>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl">
                Book A Strategy Call
              </Button>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-accent-foreground mb-6 uppercase tracking-wider text-sm">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {[
                  "Privacy Policy",
                  "Terms & Conditions",
                  "The Sauce Recipe",
                  "Success Stories"
                ].map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-accent-foreground/70 hover:text-accent-foreground transition-colors duration-300 link-animated"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold text-accent-foreground mb-6 uppercase tracking-wider text-sm">
                Location
              </h3>
              <div className="space-y-4 text-accent-foreground/70">
                <p>Headquarters located in<br />Toronto, Canada</p>
                
                <div>
                  <h4 className="font-semibold text-accent-foreground mb-2">Phone</h4>
                  <p>+1 (647) 537 0157</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-accent-foreground mb-2">Email</h4>
                  <p>manny@extrasauceagency.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-accent-foreground/20 py-8">
        <div className="container-premium">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <p className="text-accent-foreground/60 text-sm">
              © 2024 Extra Sauce Agency. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {[
                { name: "LinkedIn", icon: "💼" },
                { name: "Twitter", icon: "🐦" },
                { name: "Instagram", icon: "📸" },
                { name: "YouTube", icon: "📺" }
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-10 h-10 bg-accent-foreground/10 hover:bg-primary rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                  title={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;