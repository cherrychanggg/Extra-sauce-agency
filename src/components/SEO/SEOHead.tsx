import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  canonicalUrl?: string;
  type?: 'website' | 'article';
  structuredData?: object;
}

const SEOHead = ({
  title = "Extra Sauce Agency | Unleash Growth with Founder-Led Marketing for B2B SaaS",
  description = "Drive your B2B SaaS startup's growth with Extra Sauce Agency's unique Founder-Led Marketing strategy. Build authentic connections, enhance your brand's credibility, and generate demand by leveraging your founder's insights.",
  keywords = ["B2B marketing", "founder-led marketing", "content marketing", "SaaS growth", "thought leadership", "executive ghostwriting", "video content engine"],
  ogImage = "https://www.extrasauceagency.com/og-image.png",
  canonicalUrl = "https://www.extrasauceagency.com",
  type = "website",
  structuredData
}: SEOHeadProps) => {
  
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords.join(', '));
    
    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:url', canonicalUrl, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:site_name', 'Extra Sauce Agency', true);
    
    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);
    
    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
    
    // Add structured data
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"][data-seo="dynamic"]') as HTMLScriptElement;
      if (!script) {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-seo', 'dynamic');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }
    
  }, [title, description, keywords, ogImage, canonicalUrl, type, structuredData]);

  return null; // This component doesn't render anything
};

export default SEOHead;