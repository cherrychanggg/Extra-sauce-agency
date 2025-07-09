import { Button } from "@/components/ui/button";
import { Linkedin, Music, Instagram, Facebook, Hash } from "lucide-react";
import { Link } from "react-router-dom";
import { companyInfo, quickLinks, location, contact, email, socialMedia } from "@/content/footer";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary/90 via-secondary/90 to-accent/90 text-white">
      <div className="container-premium section-padding">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="text-2xl font-bold text-primary">🌶️</div>
              <h3 className="text-xl font-bold">{companyInfo.name}</h3>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              {companyInfo.description}
            </p>
            <Link to={companyInfo.ctaButton.link}>
              <Button className="bg-white/10 text-white border border-white/20 hover:bg-white/20 rounded-xl">
                {companyInfo.ctaButton.text}
              </Button>
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-sm uppercase tracking-wider">
              {quickLinks.title}
            </h4>
            <ul className="space-y-3">
              {quickLinks.links.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-white/80 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-semibold mb-6 text-sm uppercase tracking-wider">
              {location.title}
            </h4>
            <p className="text-white/80">{location.address}</p>
          </div>

          {/* Contact */}
          <div>
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider">
                {contact.title}
              </h4>
              <p className="text-white/80">{contact.phone}</p>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider">
                {email.title}
              </h4>
              <a 
                href={`mailto:${email.address}`}
                className="text-white/80 hover:text-white transition-colors duration-300"
              >
                {email.address}
              </a>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-white/60 text-sm">
              © 2024 Extra Sauce. All rights reserved.
            </div>
            
            <div className="flex space-x-6">
              <a 
                href={socialMedia.linkedin}
                className="text-white/60 hover:text-white transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href={socialMedia.tiktok}
                className="text-white/60 hover:text-white transition-colors duration-300"
                aria-label="TikTok"
              >
                <Hash className="w-5 h-5" />
              </a>
              <a 
                href={socialMedia.instagram}
                className="text-white/60 hover:text-white transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={socialMedia.facebook}
                className="text-white/60 hover:text-white transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href={socialMedia.spotify}
                className="text-white/60 hover:text-white transition-colors duration-300"
                aria-label="Spotify"
              >
                <Music className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;