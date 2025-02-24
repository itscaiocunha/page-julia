
const Footer = () => {
  return (
    <footer className="py-12 border-t">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-600 mb-4">
          © 2024 W7 Startup. Todos os direitos reservados
        </p>
        
        <div className="flex justify-center items-center gap-6 mb-4">
          <span className="text-gray-600">Siga-nos:</span>
          <a 
            href="https://www.instagram.com/hello.juliabr/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-julia-blue hover:text-julia-darkBlue transition-colors"
          >
            Instagram
          </a>
          <a 
            href="https://www.linkedin.com/company/hellojulia" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-julia-blue hover:text-julia-darkBlue transition-colors"
          >
            LinkedIn
          </a>
          <a 
            href="https://wa.me/5519993297037" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-julia-blue hover:text-julia-darkBlue transition-colors"
          >
            WhatsApp
          </a>
        </div>
        
        <p className="text-gray-600">
          Contato:{' '}
          <a 
            href="mailto:ola@hellojulia.com.br"
            className="text-julia-blue hover:text-julia-darkBlue transition-colors"
          >
            ola@hellojulia.com.br
          </a>
        </p>
        
        <p className="text-gray-600 mt-4">
          Feito com ♥️ para revolucionar o atendimento com a JulIA.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
