import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface EnhancedSEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  canonicalUrl?: string;
  type?: 'website' | 'article';
  structuredData?: object | object[];
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  noindex?: boolean;
  nofollow?: boolean;
}

const EnhancedSEOHead = ({
  title = "Extra Sauce Agency | Unleash Growth with Founder-Led Marketing for B2B SaaS",
  description = "Drive your B2B SaaS startup's growth with Extra Sauce Agency's unique Founder-Led Marketing strategy. Build authentic connections, enhance your brand's credibility, and generate demand by leveraging your founder's insights.",
  keywords = ["B2B marketing", "founder-led marketing", "content marketing", "SaaS growth", "thought leadership", "executive ghostwriting", "video content engine"],
  ogImage = "https://www.extrasauceagency.com/og-image.png",
  canonicalUrl = "https://www.extrasauceagency.com",
  type = "website",
  structuredData,
  author,
  publishedTime,
  modifiedTime,
  section,
  tags,
  noindex = false,
  nofollow = false
}: EnhancedSEOHeadProps) => {
  const location = useLocation();
  
  useEffect(() => {
    // Update document title with proper format
    document.title = title;
    
    // Update meta tags helper function
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

    // Remove existing meta tags that might conflict
    const removeMetaTag = (name: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      const meta = document.querySelector(selector);
      if (meta) {
        meta.remove();
      }
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords.join(', '));
    
    // Robots meta tag
    const robotsContent = `${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`;
    updateMetaTag('robots', robotsContent);
    
    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:url', canonicalUrl, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:site_name', 'Extra Sauce Agency', true);
    updateMetaTag('og:locale', 'en_US', true);
    
    // Article-specific Open Graph tags
    if (type === 'article') {
      if (author) updateMetaTag('article:author', author, true);
      if (publishedTime) updateMetaTag('article:published_time', publishedTime, true);
      if (modifiedTime) updateMetaTag('article:modified_time', modifiedTime, true);
      if (section) updateMetaTag('article:section', section, true);
      if (tags) {
        // Remove existing article tags
        document.querySelectorAll('meta[property="article:tag"]').forEach(tag => tag.remove());
        // Add new tags
        tags.forEach(tag => {
          const tagMeta = document.createElement('meta');
          tagMeta.setAttribute('property', 'article:tag');
          tagMeta.content = tag;
          document.head.appendChild(tagMeta);
        });
      }
    }
    
    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);
    updateMetaTag('twitter:site', '@extrasauce');
    
    // Additional Twitter tags for articles
    if (type === 'article' && author) {
      updateMetaTag('twitter:creator', author);
    }
    
    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
    
    // Add alternate language links for international SEO
    let alternateLang = document.querySelector('link[rel="alternate"][hreflang="en"]') as HTMLLinkElement;
    if (!alternateLang) {
      alternateLang = document.createElement('link');
      alternateLang.rel = 'alternate';
      alternateLang.hreflang = 'en';
      document.head.appendChild(alternateLang);
    }
    alternateLang.href = canonicalUrl;
    
    // Add structured data
    if (structuredData) {
      // Remove existing dynamic structured data
      const existingScript = document.querySelector('script[type="application/ld+json"][data-seo="dynamic"]');
      if (existingScript) {
        existingScript.remove();
      }
      
      // Add new structured data
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo', 'dynamic');
      
      // Handle both single objects and arrays
      const data = Array.isArray(structuredData) ? structuredData : [structuredData];
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@graph": data
      });
      
      document.head.appendChild(script);
    }
    
    // Add preconnect links for performance
    const preconnectUrls = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://www.google-analytics.com'
    ];
    
    preconnectUrls.forEach(url => {
      if (!document.querySelector(`link[rel="preconnect"][href="${url}"]`)) {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = url;
        if (url.includes('gstatic')) {
          link.crossOrigin = 'anonymous';
        }
        document.head.appendChild(link);
      }
    });
    
    // Add DNS prefetch for external domains
    const dnsPrefetchUrls = [
      'https://www.googletagmanager.com',
      'https://connect.facebook.net'
    ];
    
    dnsPrefetchUrls.forEach(url => {
      if (!document.querySelector(`link[rel="dns-prefetch"][href="${url}"]`)) {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = url;
        document.head.appendChild(link);
      }
    });
    
  }, [title, description, keywords, ogImage, canonicalUrl, type, structuredData, author, publishedTime, modifiedTime, section, tags, noindex, nofollow, location.pathname]);

  return null;
};

export default EnhancedSEOHead;