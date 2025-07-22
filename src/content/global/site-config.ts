// GLOBAL SITE CONFIGURATION
// This file contains site-wide settings that affect the entire website

export const siteConfig = {
  // Basic Site Information
  siteName: "Extra Sauce Agency",
  siteDescription: "Building the future of B2B content marketing through strategic founder-led initiatives.",
  siteUrl: "https://www.extrasauceagency.com",
  
  // Contact Information
  contact: {
    phone: "+1 (647) 957 9757",
    email: "manny@getextrasauce.com",
    address: "Headquarters based in Toronto, Canada"
  },
  
  // Social Media Links
  socialMedia: {
    linkedin: "https://www.linkedin.com/company/extra-sauce-agency/",
    tiktok: "https://www.tiktok.com/@findyoursauce",
    instagram: "https://www.instagram.com/extrasauceagency/",
    facebook: "https://www.facebook.com/ExtraSauceAgency",
    spotify: "https://open.spotify.com/show/6b4SuGSg3MBwyCGhKU6Jv1?si=20f8ee0db1b4437c&nd=1&dlsi=3879f31603da40ae"
  },
  
  // Brand Assets
  branding: {
    logo: {
      chili: "/chili.png",
      sauce: "/sauce.png",
      altText: "Extra Sauce Logo"
    },
    colors: {
      primary: "hsl(14, 85%, 55%)", // Orange/Red
      secondary: "hsl(25, 95%, 60%)", // Warm Orange  
      accent: "hsl(8, 75%, 45%)" // Deep Sauce
    }
  },
  
  // SEO Settings
  seo: {
    defaultTitle: "Extra Sauce Agency | Unleash Growth with Founder-Led Marketing for B2B SaaS",
    defaultDescription: "Drive your B2B SaaS startup's growth with Extra Sauce Agency's unique Founder-Led Marketing strategy. Build authentic connections, enhance your brand's credibility, and generate demand by leveraging your founder's insights.",
    keywords: ["B2B marketing", "founder-led marketing", "content marketing", "SaaS growth", "thought leadership"],
    ogImage: "/og-image.png"
  },
  
  // Analytics & Tracking
  analytics: {
    googleAnalyticsId: "G-XXXXXXXXXX", // Replace with your GA4 ID
  },
  
  // Feature Flags
  features: {
    enableBlog: true,
    enableNewsletter: true,
    enableLiveChat: false,
    enableDarkMode: false
  },
  
  // Business Information
  business: {
    foundedYear: 2020,
    industry: "Digital Marketing",
    specialization: "B2B SaaS Content Marketing",
    teamSize: "5-10 employees",
    headquarters: "Toronto, Canada"
  }
};

// Export individual sections for easier imports
export const { contact, socialMedia, branding, seo, analytics, features, business } = siteConfig;