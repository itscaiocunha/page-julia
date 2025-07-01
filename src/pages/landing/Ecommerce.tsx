import React, { useEffect } from 'react';
import { Zap, Shield, MessageSquare, Calendar, ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Head from 'next/head';

// Tipos TypeScript
type Integration = {
  img: string;
  name: string;
  url: string;
};

type PainPoint = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

// Componente de Ícone de Rede Social
const SocialLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="hover:text-blue-400 transition-colors duration-200"
    aria-label={`Link para ${children}`}
  >
    {children}
  </a>
);

// Componente de Ponto de Dor
const PainPointCard: React.FC<PainPoint> = ({ icon, title, description }) => (
  <div className="bg-gray-800/50 p-8 rounded-2xl hover:transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg">
    <div className="mb-4" aria-hidden="true">{icon}</div>
    <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
);

// Componente de Integração
const IntegrationCard: React.FC<Integration> = ({ img, name, url }) => (
  <SwiperSlide key={name}>
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex flex-col items-center group"
      aria-label={`Integração com ${name}`}
    >
      <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center mb-3 group-hover:border-blue-500 border-2 border-transparent transition-all duration-300 hover:shadow-md">
        <img 
          src={img} 
          alt={name} 
          className="w-24 h-24 object-contain p-2" 
          loading="lazy"
        />
      </div>
      <span className="text-sm text-gray-400 group-hover:text-blue-500 transition-colors duration-200">{name}</span>
    </a>
  </SwiperSlide>
);

const Ecommerce: React.FC = () => {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.type = "text/javascript";
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "19489363",
          formId: "43d372b2-91f1-47c1-8cde-0eefc3ad1d52",
          region: "na1",
          target: "#hubspotForm"
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  const painPoints: PainPoint[] = [
    {
      icon: <MessageSquare className="w-8 h-8 text-red-400" />,
      title: "Vendas 24/7",
      description: "Perca zero oportunidades de venda! A JulIA atende, qualifica e vende 24 horas por dia, 7 dias por semana."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Conversão Instantânea",
      description: "Aumente suas taxas de conversão com atendimento instantâneo e recomendações personalizadas."
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: "Vendas Qualificadas",
      description: "Cada interação é uma oportunidade de venda. A JulIA qualifica leads e fecha negócios automaticamente."
    }
  ];

  const integrations: Integration[] = [
    { img: "/images/logo/Shopify-Logo.png", name: "Shopify", url: "https://www.shopify.com.br/" },
    { img: "/images/logo/Nuvemshop-Logo.png", name: "Nuvemshop", url: "https://www.nuvemshop.com.br/" },
    { img: "/images/logo/HubSpot-Logo.png", name: "HubSpot", url: "https://www.hubspot.com/" },
    { img: "/images/logo/Jadlog-Logo.png", name: "Jadlog", url: "https://www.jadlog.com.br/" },
    { img: "/images/logo/MercadoPago-Logo.png", name: "Mercado Pago", url: "https://www.mercadopago.com.br/" },
    { img: "/images/logo/TotalExpress-Logo.png", name: "Total Express", url: "https://www.totalexpress.com.br/" },
    { img: "/images/logo/PagSeguro-Logo.png", name: "PagSeguro", url: "https://pagseguro.uol.com.br/" },
    { img: "/images/logo/Salesforce-Logo.png", name: "Salesforce", url: "https://www.salesforce.com/br/" },
    { img: "/images/logo/PayPal-Logo.png", name: "PayPal", url: "https://www.PayPal.com.br/" },
    { img: "/images/logo/Bitrix-Logo.png", name: "Bitrix24", url: "https://www.bitrix24.com.br/" }
  ];

  return (
    <>
      <Head>
        <title>JulIA - Solução de E-commerce com IA</title>
        <meta name="description" content="Potencialize as vendas do seu E-commerce com um atendimento rápido, personalizado e inteligente com JulIA" />
        <meta name="keywords" content="e-commerce, chatbot, IA, vendas, atendimento automático" />
        <meta property="og:title" content="JulIA - Solução de E-commerce com IA" />
        <meta property="og:description" content="Experiência personalizada e o fim do abandono de carrinho!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.hellojulia.com.br/ecommerce" />
        <meta property="og:image" content="/images/og-image.jpg" />
        <link rel="canonical" href="https://www.hellojulia.com.br/ecommerce" />
        
        {/* Fontes Roboto */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </Head>

        <style>
          {`
            html {
              font-family: 'Roboto', sans-serif;
            }
            h1, h2, h3, h4, h5, h6 {
              font-weight: 700;
              line-height: 1.2;
            }
            body {
              font-weight: 400;
              line-height: 1.6;
            }
          `}
        </style>

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        {/* Header Section */}
        <header className="container mx-auto px-4 py-8">
          <nav className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img 
                className="w-32" 
                src="/images/logo.png" 
                alt="Logo JulIA" 
                width={128}
                height={40}
                loading="eager"
              />
            </div>
            <a
              href="#cadastro"
              className="bg-[#25D366] hover:bg-[#075E54] rounded-lg text-white px-6 py-2 rounded-full font-bold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
              aria-label="Fale Conosco"
            >
              FALE CONOSCO
            </a>
          </nav>
        </header>

        <main>
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-b from-[#892CDB] to-white text-transparent bg-clip-text leading-tight">
                  Experiência personalizada e o fim do abandono de carrinho!
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-lg">
                  Potencialize as vendas do seu E-commerce com um atendimento rápido, personalizado e inteligente.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#teste">
                    <button className="bg-[#25D366] hover:bg-[#075E54] rounded-lg px-8 py-3 text-lg md:text-xl text-white font-medium flex items-center gap-2 transition-colors duration-200 hover:shadow-lg">
                      TESTE AGORA <ArrowRight className="w-5 h-5" />
                    </button>
                  </a>
                  <a href="#cadastro">
                    <button className="bg-[#25D366] hover:bg-[#075E54] rounded-lg px-8 py-3 text-lg md:text-xl text-white font-medium flex items-center gap-2 transition-colors duration-200 hover:shadow-lg">
                      AGENDAR UMA REUNIÃO <ArrowRight className="w-5 h-5" />
                    </button>
                  </a>
                </div>
              </div>
              <div className="relative flex justify-center">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
                <img 
                  className="w-full mx-auto rounded-[50px]" 
                  src="/avatar/EcommerceJulia.png"
                  alt="Demonstração do chat do E-commerce" 
                  width={800}
                  height={600}
                  loading="eager"
                />
              </div>
            </div>
          </section>

          {/* Video Section */}
          <section className="py-20 bg-gray-900/50">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Veja como a Julia pode aumentar suas vendas</h2>
              <div className="max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden bg-gray-800 shadow-2xl">
                <iframe
                  className="w-full h-full"
                  src="/videos/Ecommerce.mp4"
                  title="Demonstração Julia para E-commerce"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
                            <a href="#teste">
                <button className="mt-12 bg-[#25D366] hover:bg-[#075E54] rounded-lg px-8 py-3 text-lg md:text-xl text-white font-medium flex items-center gap-2 transition-colors duration-200 hover:shadow-lg mx-auto">
                  AGENDAR UMA REUNIÃO <ArrowRight className="w-5 h-5" />
                </button>
              </a>
            </div>
          </section>

          {/* Pain Points Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                Soluções que a Julia oferece
              </h2>
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-justify">
                {painPoints.map((pain, index) => (
                  <PainPointCard key={index} {...pain} />
                ))}
              </div>
            </div>
          </section>

          {/* Integrations Section */}
          <section className="container mx-auto px-4 py-16 border-t border-gray-800">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Integrações Poderosas</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Nossa plataforma se integra perfeitamente com as  <br/> principais ferramentas do mercado
              </p>
            </div>

            {/* Carrossel Swiper */}
            <Swiper
          slidesPerView={2}
          spaceBetween={20}
          loop={true} // Ativando rotação infinita
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay]}
          className="mb-12"
        >
          {integrations.map(({ img, name, url }) => (
            <SwiperSlide key={name}>
              <a href={url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center mb-3 group-hover:border-blue-500 border border-transparent transition-all duration-300">
                  <img src={img} alt={name} className="w-28 h-28 object-contain" />
                </div>
                <span className="text-sm text-gray-400 group-hover:text-blue-500 transition-colors">{name}</span>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

            <h3 className="text-3xl font-bold mb-4 text-center mt-8">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">+ 500</span> integrações
            </h3>
          </section>

          {/* Test AI Section */}
          <section id="teste" className="py-20 bg-gray-800/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Experimente a Julia agora mesmo
                </h2>
                <p className="text-xl text-gray-300 mb-12">
                  Teste nossa IA e veja como ela pode revolucionar seu atendimento
                </p>
                <div className="overflow-hidden rounded-2xl border border-gray-300 shadow-xl">
                  <iframe 
                    id="zaia-iframe" 
                    src="https://platform.zaia.app/embed/chat/17834"
                    className="w-full h-80"
                    style={{ border: "none" }}
                    title="Demonstração do Chat Julia"
                    loading="lazy"
                  ></iframe>
                </div>
                <p className="text-lg text-gray-400 mt-4">
                  Esta é uma versão de demonstração. Para acesso completo, agende uma demonstração abaixo.
                </p>
              </div>
            </div>
          </section>

          {/* Schedule Demo Section */}
          <section id="cadastro" className="py-20 bg-gray-900/50">
            <div className="container mx-auto px-4">
              {/* Título centralizado acima */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Agende uma demonstração
                </h2>
              </div>

              {/* Container pai para alinhamento perfeito */}
              <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 max-w-6xl mx-auto">
                {/* Imagem - oculta em mobile */}
                <div className="hidden md:block md:w-1/2 overflow-hidden rounded-2xl bg-gray-800">
                  <img 
                    src="images/julia_vendas.png" 
                    alt="App Julia no celular" 
                    className="w-full h-full object-cover"
                    style={{ minHeight: '400px' }}
                  />
                </div>
                
                {/* Formulário - mesma altura que a imagem */}
                <div className="md:w-1/2">
                  <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl h-full">
                    <div id="hubspotForm" className="h-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="py-12 border-t border-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <img 
                  className="w-32" 
                  src="/images/logo.png" 
                  alt="Logo Julia" 
                  width={128}
                  height={40}
                  loading="lazy"
                />
              </div>
              <div className="flex items-center gap-4 text-gray-400">
                <SocialLink href="https://www.instagram.com/hello.juliabr/">Instagram</SocialLink>
                <span>|</span>
                <SocialLink href="https://www.linkedin.com/company/hellojulia/">Linkedin</SocialLink>
                <span>|</span>
                <SocialLink href="mailto:ola@hellojulia.com.br">E-mail</SocialLink>
              </div>
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Julia. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Ecommerce;