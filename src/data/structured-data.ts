// Structured Data for SEO
import { siteConfig } from "@/content/global/site-config";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Extra Sauce Agency",
  "description": "B2B SaaS content marketing agency specializing in founder-led marketing strategies",
  "url": "https://www.extrasauceagency.com",
  "logo": "https://www.extrasauceagency.com/sauce.png",
  "foundingDate": "2020",
  "telephone": "+1-647-957-9757",
  "email": "manny@getextrasauce.com",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "CA",
    "addressLocality": "Toronto",
    "addressRegion": "ON"
  },
  "sameAs": [
    "https://www.linkedin.com/company/extra-sauce-agency/",
    "https://www.tiktok.com/@findyoursauce",
    "https://www.instagram.com/extrasauceagency/",
    "https://www.facebook.com/ExtraSauceAgency"
  ],
  "areaServed": ["North America", "United States", "Canada"],
  "serviceType": [
    "B2B Content Marketing",
    "Founder-Led Marketing",
    "Executive Ghostwriting",
    "Video Content Creation",
    "GTM Coaching"
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Extra Sauce Agency",
  "url": "https://www.extrasauceagency.com",
  "description": "Drive your B2B SaaS startup's growth with Extra Sauce Agency's unique Founder-Led Marketing strategy",
  "publisher": {
    "@type": "Organization",
    "name": "Extra Sauce Agency"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.extrasauceagency.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const serviceSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Video Content Engine",
    "description": "Get a consistent video engine to position yourself as a thought leader and staying on top of mind.",
    "provider": {
      "@type": "Organization",
      "name": "Extra Sauce Agency"
    },
    "serviceType": "Video Content Marketing",
    "areaServed": ["North America", "United States", "Canada"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Video Content Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Long-form Video Series"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Short-form Video Creation"
          }
        }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Executive Ghostwriting",
    "description": "Get high-quality thought leadership narrative-driven content created for you to build a realm of influence.",
    "provider": {
      "@type": "Organization",
      "name": "Extra Sauce Agency"
    },
    "serviceType": "Content Writing & Strategy",
    "areaServed": ["North America", "United States", "Canada"]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service", 
    "name": "Content-led GTM Coaching",
    "description": "Get consulting to build a pipeline-generating content engine & get your company ready for market.",
    "provider": {
      "@type": "Organization",
      "name": "Extra Sauce Agency"
    },
    "serviceType": "Business Consulting",
    "areaServed": ["North America", "United States", "Canada"]
  }
];

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long until we should expect results?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You will be able to generate 11-16 high-converting leads in your inbox every month after generating an initial realm of influence anywhere from 2-5 months and the client's product typical sales cycle plays a role."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between founder-led marketing & personal branding?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Founder-led marketing focuses on building business value and driving pipeline through strategic content, while personal branding is more about individual reputation. We align your personal expertise with business goals."
      }
    },
    {
      "@type": "Question",
      "name": "Why should we work with your agency for B2B content?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We've built our own agency using the same SAUCE™ Recipe we share with clients. We understand the challenges of B2B growth and have proven systems that work across multiple industries."
      }
    }
  ]
};

export const breadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const homepageStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    organizationSchema,
    websiteSchema,
    faqSchema,
    ...serviceSchemas
  ]
};