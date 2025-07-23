import EnhancedSEOHead from './EnhancedSEOHead';
import { organizationSchema } from '@/data/structured-data';

interface ServiceSEOProps {
  serviceName: string;
  description: string;
  slug: string;
  benefits?: string[];
  price?: string;
  duration?: string;
  features?: string[];
}

const ServiceSEO = ({
  serviceName,
  description,
  slug,
  benefits = [],
  price,
  duration,
  features = []
}: ServiceSEOProps) => {
  const canonicalUrl = `https://www.extrasauceagency.com/services/${slug}`;
  const fullTitle = `${serviceName} | Extra Sauce Agency Services`;
  
  // Create service structured data
  const serviceSchema = {
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "Extra Sauce Agency",
      "url": "https://www.extrasauceagency.com"
    },
    "serviceType": "B2B Marketing Service",
    "areaServed": ["North America", "United States", "Canada"],
    "url": canonicalUrl,
    "offers": {
      "@type": "Offer",
      "name": serviceName,
      "description": description,
      "seller": {
        "@type": "Organization",
        "name": "Extra Sauce Agency"
      },
      "availability": "https://schema.org/InStock",
      "validFrom": new Date().toISOString(),
      ...(price && { "price": price }),
      ...(duration && { "duration": duration })
    }
  };

  // Add FAQ schema if benefits exist
  const faqSchema = benefits.length > 0 ? {
    "@type": "FAQPage",
    "mainEntity": benefits.map((benefit, index) => ({
      "@type": "Question",
      "name": `What is included in ${serviceName}?`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": benefit
      }
    }))
  } : null;

  // Create breadcrumb schema
  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.extrasauceagency.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://www.extrasauceagency.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": serviceName,
        "item": canonicalUrl
      }
    ]
  };

  const structuredData = [
    organizationSchema,
    serviceSchema,
    breadcrumbSchema,
    ...(faqSchema ? [faqSchema] : [])
  ];

  const keywords = [
    serviceName.toLowerCase(),
    "B2B marketing",
    "founder-led marketing",
    "content marketing",
    "SaaS growth",
    "marketing services",
    "business growth",
    ...features.map(f => f.toLowerCase())
  ];

  return (
    <EnhancedSEOHead
      title={fullTitle}
      description={description}
      keywords={keywords}
      ogImage="https://www.extrasauceagency.com/og-image.png"
      canonicalUrl={canonicalUrl}
      type="website"
      structuredData={structuredData}
    />
  );
};

export default ServiceSEO;