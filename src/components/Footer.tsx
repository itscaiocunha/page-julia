
const Footer = () => {
  return (
    <footer className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-4 ">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img className="w-32" src="/images/julia-name.png" alt="logo Julia" />
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              <a href="https://www.instagram.com/hello.juliabr/">Instagram</a> | 
              <a href="https://www.linkedin.com/company/hellojulia/">Linkedin</a> |
              <a href="mailto:ola@hellojulia.com.br">E-mail</a> |
              <a href="https://wa.me/5519993297037">WhatsApp</a>
            </div>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} JulIA. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
