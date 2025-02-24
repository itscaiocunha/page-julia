import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Ecommerce from "./pages/Ecommerce";
import Saude from "./pages/Saude";
import Beleza from "./pages/Beleza";
import Delivery from "./pages/Delivery";
import Academia from "./pages/Academia";
import Automobilismo from "./pages/Automobilismo";
import Turismo from "./pages/Turismo";
import Telecomunicacao from "./pages/Telecomunicacao";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/saude" element={<Saude />} />
          <Route path="/beleza" element={<Beleza />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/academia" element={<Academia />} />
          <Route path="/automobilismo" element={<Automobilismo />} />
          <Route path="/turismo" element={<Turismo />} />
          <Route path="/telecomunicacao" element={<Telecomunicacao />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
