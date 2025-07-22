import { Button } from "@/components/ui/button";
import { Linkedin, Mic, Instagram, Facebook, Video } from "lucide-react";
import { Link } from "react-router-dom";
import { useContentLoader } from "@/hooks/useContentLoader";

const Footer = () => {
  const { content: footer } = useContentLoader('/content/shared/footer-information.json');
  const { content: siteConfig } = useContentLoader('/content/global/site-configuration.json');

  if (!footer) return null;

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-premium py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="text-2xl font-bold text-primary">🌶️</div>
              <h3 className="text-xl font-bold text-foreground">{footer.companySection?.name}</h3>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {footer.companySection?.description}
            </p>
            <Link to={footer.companySection?.callToAction?.link || '/book-strategy-call'}>
              <Button variant="outline" className="rounded-xl">
                {footer.companySection?.callToAction?.text}
              </Button>
            </Link>
          </div>

          {/* Links Sections */}
          {footer.linkSections?.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-6 text-sm uppercase tracking-wider text-foreground">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links?.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.link} 
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Information */}
          <div>
            {footer.contactSections?.map((contact, index) => (
              <div key={index} className="mb-6">
                <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-foreground">
                  {contact.title}
                </h4>
                {contact.title === 'EMAIL' ? (
                  <a 
                    href={`mailto:${contact.content}`}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {contact.content}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{contact.content}</p>
                )}
              </div>
            ))}
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
                href={siteConfig?.socialMediaLinks?.linkedin}
                className="text-[#0077b5] hover:text-[#005885] transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href={siteConfig?.socialMediaLinks?.tiktok}
                className="text-[#000000] hover:text-[#333333] transition-colors duration-300"
                aria-label="TikTok"
              >
                <Video className="w-5 h-5" />
              </a>
              <a 
                href={siteConfig?.socialMediaLinks?.instagram}
                className="text-[#E4405F] hover:text-[#C13584] transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={siteConfig?.socialMediaLinks?.facebook}
                className="text-[#1877F2] hover:text-[#166FE5] transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href={siteConfig?.socialMediaLinks?.spotify}
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
