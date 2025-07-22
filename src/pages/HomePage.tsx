import Navigation from "@/components/shared/Navigation";
import HeroSection from "@/components/sections/homepage/HeroSection";
import TrustedBySection from "@/components/sections/homepage/TrustedBySection";
import WhoIsThisForSection from "@/components/sections/homepage/WhoIsThisForSection";
import Testimonials from "@/components/Testimonials";
import ProcessSection from "@/components/sections/homepage/ProcessSection";
import ServicesOverviewSection from "@/components/sections/homepage/ServicesOverviewSection";
import FAQSection from "@/components/sections/homepage/FAQSection";
import CTASection from "@/components/sections/homepage/CTASection";
import Footer from "@/components/shared/Footer";
import SEOHead from "@/components/SEO/SEOHead";
import { homepageStructuredData } from "@/data/structured-data";
import { siteConfig } from "@/content/global/site-config";

const HomePage = () => {
  return (
    <>
      <SEOHead
        title={siteConfig.seo.defaultTitle}
        description={siteConfig.seo.defaultDescription}
        keywords={[
          "B2B marketing",
          "founder-led marketing", 
          "content marketing",
          "SaaS growth",
          "thought leadership",
          "executive ghostwriting",
          "video content engine",
          "GTM coaching",
          "B2B SaaS marketing",
          "content strategy",
          "personal branding for executives",
          "demand generation"
        ]}
        ogImage="https://www.extrasauceagency.com/og-image.png"
        canonicalUrl="https://www.extrasauceagency.com"
        type="website"
        structuredData={homepageStructuredData}
      />
      
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <HeroSection />
          <TrustedBySection />
          <WhoIsThisForSection />
          <Testimonials />
          <ProcessSection />
          <ServicesOverviewSection />
          <FAQSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;