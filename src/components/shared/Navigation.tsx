import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { navigationItems, ctaButton, logo } from "@/content/navigation";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const servicesDropdownItems = [
    {
      name: "Executive Ghostwriting",
      href: "/services/executive-ghostwriting",
      description: "Transform your expertise into thought leadership content"
    },
    {
      name: "Video Content Engine", 
      href: "/services/video-content-engine",
      description: "Scale your message with engaging video content"
    },
    {
      name: "Content-led GTM Coaching",
      href: "/services/content-led-gtm-coaching", 
      description: "Build a content-driven go-to-market strategy"
    }
  ];
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl shadow-elegant border-b border-border/30"
          : "bg-transparent"
      }`}
    >
      <div className="container-premium">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo.chiliImage} alt={logo.altText} className="w-16 h-16 hover:scale-110 transition-transform duration-300" />
            <img src={logo.sauceImage} alt={logo.altText} className="w-48 h-48 hover:scale-105 transition-transform duration-300" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              item.name === "Services" ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                >
                  <Link
                    to={item.href}
                    className="text-foreground hover:text-primary transition-colors duration-300 font-medium link-animated flex items-center"
                  >
                    {item.name}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  
                  {/* Services Dropdown */}
                  {isServicesDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-xl border border-border/30 rounded-2xl shadow-2xl p-6 z-50">
                      <div className="space-y-4">
                        {servicesDropdownItems.map((service, index) => (
                          <Link
                            key={index}
                            to={service.href}
                            className="block p-4 rounded-xl hover:bg-primary/5 transition-all duration-300 group"
                          >
                            <div className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-1">
                              {service.name}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {service.description}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : item.href.startsWith('#') ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium link-animated"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium link-animated"
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to={ctaButton.link}>
              <Button className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/25">
                {ctaButton.text}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-border/50">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                item.name === "Services" ? (
                  <div key={item.name} className="space-y-2">
                    <Link
                      to={item.href}
                      className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2 block"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    <div className="pl-4 space-y-2">
                      {servicesDropdownItems.map((service, index) => (
                        <Link
                          key={index}
                          to={service.href}
                          className="block text-muted-foreground hover:text-primary transition-colors duration-300 py-1 text-sm"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : item.href.startsWith('#') ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <Link to={ctaButton.link}>
                <Button className="btn-hero mt-4">
                  {ctaButton.text}
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;