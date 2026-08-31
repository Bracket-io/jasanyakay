import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Thoughts from "./pages/Thoughts";
import Bookmarks from "./pages/Bookmarks";
import ProjectPage from "./pages/ProjectPage";
import CaseStudies from "./pages/CaseStudies";
import CaseStudy from "./pages/CaseStudy";
import NotFound from "./pages/NotFound";
import Tutoring from "./pages/Tutoring";
import Resume from "./pages/Resume";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>
        <Routes>
          {/* Main pages */}
          <Route path="/" element={<Index />} />
          <Route path="/portfolio" element={<Work />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thoughts" element={<Thoughts />} />
          <Route path="/thinking" element={<Thoughts />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/recognition" element={<Bookmarks />} />
          <Route path="/tutoring" element={<Tutoring />} />
          <Route path="/resume" element={<Resume />} />

          {/* Case studies */}
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:slug" element={<CaseStudy />} />

          {/* Existing project pages */}
          <Route path="/project/:slug" element={<ProjectPage />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;