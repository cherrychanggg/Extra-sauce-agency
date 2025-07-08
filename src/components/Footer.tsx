import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";

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
                  <img src="/sauce.png" alt="Sauce Logo" className="w-7 h-7" />
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
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-primary" />
                  <p>Headquarters located in<br />Toronto, Canada</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary" />
                  <div>
                    <h4 className="font-semibold text-accent-foreground mb-1">Phone</h4>
                    <p>+1 (647) 537 0157</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary" />
                  <div>
                    <h4 className="font-semibold text-accent-foreground mb-1">Email</h4>
                    <p>manny@extrasauceagency.com</p>
                  </div>
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
            
            {/* Enhanced Social Links */}
            <div className="flex items-center space-x-4">
              {[
                { name: "LinkedIn", icon: Linkedin },
                { name: "Twitter", icon: Twitter },
                { name: "Instagram", icon: Instagram },
                { name: "YouTube", icon: Youtube }
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href="#"
                    className="w-12 h-12 bg-accent-foreground/10 hover:bg-primary rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg focus-enhanced group"
                    title={social.name}
                  >
                    <Icon className="w-5 h-5 text-accent-foreground group-hover:text-primary-foreground transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;