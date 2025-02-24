
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center">
            <img src="/images/julia-name.png" alt="Julia" className="h-12 w-auto" />
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#ourhome" className="text-gray-700 hover:text-julia-blue transition-colors">O Que É?</a>
            <a href="#experiencia" className="text-gray-700 hover:text-julia-blue transition-colors">Teste Agora</a>
            <a href="#video" className="text-gray-700 hover:text-julia-blue transition-colors">Nossa Solução</a>
            <a href="#clients" className="text-gray-700 hover:text-julia-blue transition-colors">Clientes</a>
            <a href="#our-pricings" className="text-gray-700 hover:text-julia-blue transition-colors">Nossos Planos</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
