import { Button } from "@/components/ui/button";
import { Linkedin, Mic, Instagram, Facebook, Video, ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import { companyInfo, companyLinks, servicesLinks, quickLinks, location, email, socialMedia } from "@/content/footer";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-premium py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="text-2xl font-bold text-primary">🌶️</div>
              <h3 className="text-xl font-bold text-foreground">{companyInfo.name}</h3>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {companyInfo.description}
            </p>
            <Link to={companyInfo.ctaButton.link}>
              <Button className="group relative overflow-hidden bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105 focus-enhanced">
                <span className="relative z-10">
                  {companyInfo.ctaButton.text}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </Link>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-6 text-sm uppercase tracking-wider text-foreground">
              {companyLinks.title}
            </h4>
            <ul className="space-y-3">
              {companyLinks.links.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold mb-6 text-sm uppercase tracking-wider text-foreground">
              {servicesLinks.title}
            </h4>
            <ul className="space-y-3">
              {servicesLinks.links.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-sm uppercase tracking-wider text-foreground">
              {quickLinks.title}
            </h4>
            <ul className="space-y-3">
              {quickLinks.links.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Contact */}
          <div>
            <h4 className="font-semibold mb-6 text-sm uppercase tracking-wider text-foreground">
              {location.title}
            </h4>
            <p className="text-muted-foreground mb-6">{location.address}</p>
            
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-foreground">
              {email.title}
            </h4>
            <a 
              href={`mailto:${email.address}`}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {email.address}
            </a>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-muted-foreground text-sm">
              © 2024 Extra Sauce. All rights reserved.
            </div>
            
            <div className="flex space-x-6">
              <a 
                href={socialMedia.linkedin}
                className="text-[#0077b5] hover:text-[#005885] transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href={socialMedia.tiktok}
                className="text-[#000000] hover:text-[#333333] transition-colors duration-300"
                aria-label="TikTok"
              >
                <Video className="w-5 h-5" />
              </a>
              <a 
                href={socialMedia.instagram}
                className="text-[#E4405F] hover:text-[#C13584] transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={socialMedia.facebook}
                className="text-[#1877F2] hover:text-[#166FE5] transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href={socialMedia.spotify}
                className="text-[#1DB954] hover:text-[#1ed760] transition-colors duration-300"
                aria-label="Podcast"
              >
                <Mic className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;