import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TheSauceRecipe from "./pages/TheSauceRecipe";
import Services from "./pages/Services";
import ExecutiveGhostwriting from "./pages/services/ExecutiveGhostwriting";
import VideoContentEngine from "./pages/services/VideoContentEngine";
import ContentLedGTMCoaching from "./pages/services/ContentLedGTMCoaching";
import BookingPage from "./pages/BookingPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/the-sauce-recipe" element={<TheSauceRecipe />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/executive-ghostwriting" element={<ExecutiveGhostwriting />} />
          <Route path="/services/video-content-engine" element={<VideoContentEngine />} />
          <Route path="/services/content-led-gtm-coaching" element={<ContentLedGTMCoaching />} />
          <Route path="/book-strategy-call" element={<BookingPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
