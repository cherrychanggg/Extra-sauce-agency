import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import ScrollToTop from "./components/shared/ScrollToTop";
import ServiceWorkerRegistration from "./components/performance/ServiceWorkerRegistration";
import CriticalResourcePreloader from "./components/performance/CriticalResourcePreloader";
import HomePage from "./pages/HomePage";

// Lazy load non-critical pages
const TheSauceRecipe = lazy(() => import("./pages/TheSauceRecipe"));
const ExecutiveGhostwriting = lazy(() => import("./pages/services/ExecutiveGhostwriting"));
const VideoContentEngine = lazy(() => import("./pages/services/VideoContentEngine"));
const ContentLedGTMCoaching = lazy(() => import("./pages/services/ContentLedGTMCoaching"));
const BookingPage = lazy(() => import("./pages/BookingPage"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const NotFound = lazy(() => import("./pages/NotFound"));
const SuccessStories = lazy(() => import("./pages/SuccessStories"));
const Blogs = lazy(() => import("./pages/resources/Blogs"));
const BlogPost = lazy(() => import("./pages/resources/BlogPost"));
const Newsletters = lazy(() => import("./pages/resources/Newsletters"));
const CompanyNews = lazy(() => import("./pages/resources/CompanyNews"));

// Loading component for lazy routes
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ServiceWorkerRegistration />
      <CriticalResourcePreloader />
      <ScrollToTop />
      <Analytics />
      <SpeedInsights />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/the-sauce-recipe" element={<TheSauceRecipe />} />
            <Route path="/services/executive-ghostwriting" element={<ExecutiveGhostwriting />} />
            <Route path="/services/video-content-engine" element={<VideoContentEngine />} />
            <Route path="/services/content-led-gtm-coaching" element={<ContentLedGTMCoaching />} />
            <Route path="/book-strategy-call" element={<BookingPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/resources/blogs" element={<Blogs />} />
            <Route path="/resources/blogs/:slug" element={<BlogPost />} />
            <Route path="/resources/newsletters" element={<Newsletters />} />
            <Route path="/resources/company-news" element={<CompanyNews />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
