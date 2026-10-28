import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Index from "./pages/Index";
import Work from "./pages/Work";
import Axiom from "./pages/Axiom";
import About from "./pages/About";
import Thoughts from "./pages/Thoughts";
import Bookmarks from "./pages/Bookmarks";
import ProjectPage from "./pages/ProjectPage";
import CaseStudy from "./pages/CaseStudy";
import NotFound from "./pages/NotFound";
import Tutoring from "./pages/Tutoring";
import Resume from "./pages/Resume";
import Extraordinaire from "./pages/Extraordinaire";

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
          <Route path="/experience" element={<Navigate to="/resume" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Navigate to="/#contact" replace />} />
          <Route path="/thoughts" element={<Thoughts />} />
          <Route path="/thinking" element={<Thoughts />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/tutoring" element={<Tutoring />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/building" element={<Navigate to="/work#more-builds" replace />} />
          <Route path="/extraordinaire" element={<Extraordinaire />} />
          <Route path="/extraordinaire/:categoryId" element={<Extraordinaire />} />
          <Route path="/extraordinaire/:categoryId/:entryId" element={<Extraordinaire />} />

          {/* Case studies */}
          <Route path="/case-studies" element={<Navigate to="/work#case-studies" replace />} />
          <Route path="/case-studies/:slug" element={<CaseStudy />} />

          {/* Existing project pages */}
          <Route path="/project/axiom" element={<Axiom />} />
          <Route path="/project/:slug" element={<ProjectPage />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
