import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import { companyNews } from "@/content/resources/companynews";
import { useState } from "react";
import EnhancedSEOHead from "@/components/SEO/EnhancedSEOHead";
import { organizationSchema } from "@/data/structured-data";

const CompanyNews = () => {
  const [selectedNewsId, setSelectedNewsId] = useState(companyNews[0]?.id || "1");
  
  const selectedNews = companyNews.find(news => news.id === selectedNewsId);
  
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const structuredData = [organizationSchema];

  return (
    <>
      <EnhancedSEOHead
        title="Company News | Extra Sauce Agency"
        description="Follow the moves behind our mission. Inside stories, system launches, and growth moments that are shaping how we help B2B companies build pipeline through executive-led content."
        keywords={["company news", "Extra Sauce", "announcements", "updates"]}
        canonicalUrl="https://www.extrasauceagency.com/resources/company-news"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="pt-20">
          {/* Header Section */}
          <div className="bg-gradient-to-br from-slate-50 to-white border-b">
            <div className="container max-w-6xl mx-auto px-6 py-16 text-center">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                STRAIGHT FROM HQ
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                The Wins, Experiments &<br />Industry Moves
              </h1>
              
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Follow the moves behind our mission. Inside stories, system launches, and growth moments that are shaping how we help B2B companies build pipeline through executive-led content.
              </p>
            </div>
          </div>

          {/* Date Tabs */}
          <div className="bg-white border-b">
            <div className="container max-w-6xl mx-auto px-6">
              <div className="flex justify-center">
                <div className="flex flex-wrap gap-0 bg-slate-100 rounded-lg p-1">
                  {companyNews.map((news, index) => (
                    <button
                      key={news.id}
                      onClick={() => setSelectedNewsId(news.id)}
                      className={`px-6 py-3 text-sm font-medium rounded-md transition-all duration-200 ${
                        selectedNewsId === news.id
                          ? "bg-primary text-white shadow-sm"
                          : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                      }`}
                    >
                      {formatDate(news.date)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* News Content */}
          {selectedNews && (
            <div className="bg-white">
              <div className="container max-w-4xl mx-auto px-6 py-16">
                {/* Date and Location */}
                <div className="text-primary font-medium text-sm mb-6">
                  {formatDate(selectedNews.date)} – {selectedNews.location}
                </div>
                
                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
                  {selectedNews.title}
                </h2>
                
                {/* Excerpt */}
                <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                  {selectedNews.excerpt}
                </p>
                
                {/* Content */}
                <article className="prose prose-lg max-w-none">
                  <div 
                    className="[&>div]:space-y-6 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_h2]:mt-8 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-slate-900 [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:text-lg [&_p]:text-slate-700 [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:space-y-2 [&_ul]:mb-6 [&_li]:text-lg [&_li]:text-slate-700 [&_li]:leading-relaxed [&_strong]:text-slate-900 [&_strong]:font-semibold [&_ol]:space-y-2 [&_ol]:mb-6 [&_blockquote]:my-8 [&_blockquote]:pl-6 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote_p]:text-lg [&_blockquote_p]:text-slate-800 [&_blockquote_p]:italic [&_blockquote_footer]:text-base [&_blockquote_footer]:text-slate-600 [&_blockquote_footer]:font-medium [&_blockquote_footer]:mt-2"
                    dangerouslySetInnerHTML={{ __html: selectedNews.content }}
                  />
                </article>
              </div>
            </div>
          )}
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default CompanyNews;