// SEO Helper Functions

export const generatePageTitle = (pageTitle?: string, siteName: string = "Extra Sauce Agency") => {
  if (!pageTitle) return siteName;
  return `${pageTitle} | ${siteName}`;
};

export const generateMetaDescription = (description: string, maxLength: number = 160) => {
  if (description.length <= maxLength) return description;
  return description.substring(0, maxLength - 3) + '...';
};

export const generateKeywords = (baseKeywords: string[], pageSpecificKeywords: string[] = []) => {
  return [...new Set([...baseKeywords, ...pageSpecificKeywords])];
};

export const generateCanonicalUrl = (baseUrl: string, path: string = '') => {
  return `${baseUrl}${path}`.replace(/\/+$/, '') || baseUrl;
};

// Schema.org helpers
export const generateBreadcrumbSchema = (breadcrumbs: Array<{name: string, url: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};

export const generateServiceSchema = (service: {
  name: string;
  description: string;
  provider: string;
  serviceType: string;
  offers?: Array<{name: string; description?: string}>;
}) => {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": service.provider
    },
    "serviceType": service.serviceType,
    "areaServed": ["North America", "United States", "Canada"]
  };

  if (service.offers && service.offers.length > 0) {
    schema.hasOfferCatalog = {
      "@type": "OfferCatalog",
      "name": `${service.name} Services`,
      "itemListElement": service.offers.map(offer => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": offer.name,
          "description": offer.description
        }
      }))
    };
  }

  return schema;
};

export const generateFAQSchema = (faqs: Array<{question: string; answer: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

// SEO content optimization helpers
export const optimizeHeadingStructure = (content: string) => {
  // Helper to ensure proper heading hierarchy
  // This would be used in content editing workflows
  return content;
};

export const extractKeywordsFromContent = (content: string): string[] => {
  // Basic keyword extraction (in real implementation, you'd use more sophisticated NLP)
  const words = content.toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length > 3);
  
  const frequency: Record<string, number> = {};
  words.forEach(word => {
    frequency[word] = (frequency[word] || 0) + 1;
  });
  
  return Object.entries(frequency)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 10)
    .map(([word]) => word);
};

// Image SEO helpers
export const generateImageAlt = (context: string, imageName?: string) => {
  if (imageName) {
    return `${context} - ${imageName}`;
  }
  return `${context} image`;
};

export const generateImageTitle = (context: string, description?: string) => {
  if (description) {
    return `${context}: ${description}`;
  }
  return context;
};