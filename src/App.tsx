import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import TheSauceRecipe from "./pages/TheSauceRecipe";
import Services from "./pages/Services";
import ExecutiveGhostwriting from "./pages/services/ExecutiveGhostwriting";
import VideoContentEngine from "./pages/services/VideoContentEngine";
import ContentLedGTMCoaching from "./pages/services/ContentLedGTMCoaching";
import BookingPage from "./pages/BookingPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";
import SuccessStories from "./pages/SuccessStories";
import Blogs from "./pages/resources/Blogs";
import Newsletters from "./pages/resources/Newsletters";
import CompanyNews from "./pages/resources/CompanyNews";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/the-sauce-recipe" element={<TheSauceRecipe />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/executive-ghostwriting" element={<ExecutiveGhostwriting />} />
          <Route path="/services/video-content-engine" element={<VideoContentEngine />} />
          <Route path="/services/content-led-gtm-coaching" element={<ContentLedGTMCoaching />} />
          <Route path="/book-strategy-call" element={<BookingPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/resources/blogs" element={<Blogs />} />
          <Route path="/resources/newsletters" element={<Newsletters />} />
          <Route path="/resources/company-news" element={<CompanyNews />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
