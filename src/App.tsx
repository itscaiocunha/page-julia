import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Ecommerce from "./pages/landing/Ecommerce";
import Saude from "./pages/landing/Saude";
import Beleza from "./pages/landing/Beleza";
import Delivery from "./pages/landing/Delivery";
import Academia from "./pages/landing/Academia";
import Automobilismo from "./pages/landing/Automotivo";
import Turismo from "./pages/landing/Turismo";
import Telecomunicacao from "./pages/landing/Telecomunicacao";
import Summit from "./pages/landing/Summit";

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
          <Route path="/automotivo" element={<Automobilismo />} />
          <Route path="/turismo" element={<Turismo />} />
          <Route path="/telecomunicacao" element={<Telecomunicacao />} />
          <Route path="/summit" element={<Summit />} />
          {/* Nova rota para a política de privacidade */}
          <Route 
            path="/privacidade" 
            element={
              <div style={{ height: '100vh' }}>
                <iframe 
                  src="/politica-privacidade-julia.html" 
                  width="100%" 
                  height="100%" 
                  frameBorder="0"
                  title="Política de Privacidade"
                />
              </div>
            } 
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;