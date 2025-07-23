// Enhanced SEO helper functions and utilities

export const generateMetaTitle = (pageTitle: string, siteName = "Extra Sauce Agency"): string => {
  return `${pageTitle} | ${siteName}`;
};

export const truncateDescription = (description: string, maxLength = 160): string => {
  if (description.length <= maxLength) return description;
  
  const truncated = description.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  
  return lastSpace > 0 ? `${truncated.substring(0, lastSpace)}...` : `${truncated}...`;
};

export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

export const generateCanonicalUrl = (path: string, baseUrl = "https://www.extrasauceagency.com"): string => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
};

export const formatDate = (date: string | Date): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toISOString();
};

export const extractKeywords = (content: string, additionalKeywords: string[] = []): string[] => {
  // Simple keyword extraction - can be enhanced with more sophisticated NLP
  const words = content.toLowerCase().match(/\b\w{3,}\b/g) || [];
  const frequency: { [key: string]: number } = {};
  
  words.forEach(word => {
    frequency[word] = (frequency[word] || 0) + 1;
  });
  
  // Get most frequent words (excluding common stop words)
  const stopWords = new Set(['the', 'and', 'for', 'are', 'but', 'not', 'you', 'all', 'can', 'had', 'her', 'was', 'one', 'our', 'out', 'day', 'get', 'has', 'him', 'his', 'how', 'its', 'may', 'new', 'now', 'old', 'see', 'two', 'who', 'boy', 'did', 'she', 'use', 'her', 'way', 'many', 'than', 'them', 'well', 'were']);
  
  const keywords = Object.entries(frequency)
    .filter(([word, freq]) => freq > 1 && !stopWords.has(word) && word.length > 3)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 10)
    .map(([word]) => word);
  
  return [...new Set([...additionalKeywords, ...keywords])];
};

export const generateBreadcrumbs = (pathname: string) => {
  const paths = pathname.split('/').filter(Boolean);
  const breadcrumbs: Array<{name: string, href: string, current?: boolean}> = [{ name: 'Home', href: '/' }];
  
  let currentPath = '';
  paths.forEach((path, index) => {
    currentPath += `/${path}`;
    const name = path.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    breadcrumbs.push({
      name,
      href: currentPath,
      current: index === paths.length - 1
    });
  });
  
  return breadcrumbs;
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