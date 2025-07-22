import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useContentLoader } from "@/hooks/useContentLoader";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { content: navigation } = useContentLoader('/content/shared/navigation-menu.json');
  const { content: siteConfig } = useContentLoader('/content/global/site-configuration.json');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            <img 
              src={siteConfig?.brandAssets?.logo?.chili || '/chili.png'} 
              alt={siteConfig?.brandAssets?.logo?.altText || 'Extra Sauce Agency'} 
              className="w-8 h-8 hover:scale-110 transition-transform duration-300"
              onError={(e) => {
                e.currentTarget.src = '/chili.png';
              }}
            />
            <img 
              src={siteConfig?.brandAssets?.logo?.sauce || '/sauce.png'} 
              alt={siteConfig?.brandAssets?.logo?.altText || 'Extra Sauce Agency'} 
              className="w-32 h-8 object-contain hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                e.currentTarget.src = '/sauce.png';
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation?.mainNavigation?.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium link-animated"
              >
                {item.name}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-foreground hover:text-primary transition-colors duration-300 font-medium link-animated flex items-center space-x-1">
                <span>Services</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-2 w-56 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  {navigation?.servicesDropdown?.items?.map((item) => (
                    <Link
                      key={item.name}
                      to={item.link}
                      className="block px-4 py-2 text-foreground hover:text-primary hover:bg-accent transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Resources Dropdown */}
            <div className="relative group">
              <button className="text-foreground hover:text-primary transition-colors duration-300 font-medium link-animated flex items-center space-x-1">
                <span>Resources</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  {navigation?.resourcesDropdown?.items?.map((item) => (
                    <Link
                      key={item.name}
                      to={item.link}
                      className="block px-4 py-2 text-foreground hover:text-primary hover:bg-accent transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to={navigation?.callToActionButton?.link || '/book-strategy-call'}>
              <Button className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/25">
                {navigation?.callToActionButton?.text}
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
              {navigation?.mainNavigation?.map((item) => (
                <Link
                  key={item.name}
                  to={item.link}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Services Section */}
              <div className="border-t border-border/30 pt-4">
                <div className="text-foreground font-medium mb-2">Services</div>
                {navigation?.servicesDropdown?.items?.map((item) => (
                  <Link
                    key={item.name}
                    to={item.link}
                    className="block text-foreground hover:text-primary transition-colors duration-300 py-2 pl-4"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              
              {/* Mobile Resources Section */}
              <div className="border-t border-border/30 pt-4">
                <div className="text-foreground font-medium mb-2">Resources</div>
                {navigation?.resourcesDropdown?.items?.map((item) => (
                  <Link
                    key={item.name}
                    to={item.link}
                    className="block text-foreground hover:text-primary transition-colors duration-300 py-2 pl-4"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              
              <Link to={navigation?.callToActionButton?.link || '/book-strategy-call'}>
                <Button className="btn-hero mt-4">
                  {navigation?.callToActionButton?.text}
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
