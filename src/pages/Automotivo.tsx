import React, { useEffect } from 'react';
import { ShieldCheck, MessageCircle, CalendarCheck, Calendar, ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Head from 'next/head';

const integrations = [
  { img: "/images/logo/Carcheck_Logo.png", name: "CarCheck", url: "https://carcheckbrasil.com.br/home" },
  { img: "/images/logo/Google-Logo.png", name: "Google Calendário", url: "https://calendar.google.com/" },
  { img: "/images/logo/MercadoPago-Logo.png", name: "Mercado Pago", url: "https://www.MercadoPago.com/" },
  { img: "/images/logo/WhatsApp-Logo.png", name: "WhatsApp Business", url: "https://business.whatsapp.com/" },
  { img: "/images/logo/HubSpot-Logo.png", name: "HubSpot", url: "https://br.hubspot.com/" },
  { img: "/images/logo/Detran-Logo.png", name: "Detran", url: "https://www.detran.sp.gov.br/" },
  { img: "/images/logo/PagSeguro-Logo.png", name: "PagSeguro", url: "https://pagseguro.uol.com.br/" },
  { img: "/images/logo/EasyCarros-Logo.png", name: "Easy Carros", url: "https://easycarros.com/" },
  { img: "/images/logo/Stone-Logo.png", name: "Stone", url: "https://www.stone.com.br/pt-BR" },
  { img: "/images/logo/Salesforce-Logo.png", name: "Salesforce", url: "https://www.salesforce.com/br/" }
];

function Automobilismo() {
  useEffect(() => {
        const script = document.createElement('script');
        script.src = "//js.hsforms.net/forms/embed/v2.js";
        script.charset = "utf-8";
        script.type = "text/javascript";
        script.onload = () => {
          if (window.hbspt) {
            window.hbspt.forms.create({
              portalId: "19489363",
              formId: "0668bdb2-43f9-4832-bd58-d976ccf933d5",
              region: "na1",
              target: "#hubspotForm"
            });
          }
        };
        document.body.appendChild(script);
      }, []);

  return (
    <>
      <Head>
        <title>Julia para Estacionamentos - Gestão Automatizada</title>
        <meta name="description" content="Solução de IA para estacionamentos: controle de vagas, reservas e atendimento automático" />
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
        {/* Header */}
        <header className="container mx-auto px-4 py-8">
          <nav className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img className="w-32" src="/images/logo.png" alt="logo Julia" />
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
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-b from-[#595757] to-white bg-clip-text text-transparent">
                  Centralize os atendimentos da sua empresa e aumente o fluxo de clientes satisfeitos!
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Automatize reservas, controle o fluxo de veículos e melhore a experiência dos seus clientes com nossa IA especializada.
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
                <img className="w-full max-w-[800px]" src="/images/Automotivo.png" alt="Atendimento virtual para estacionamentos" />
              </div>
            </div>
          </section>

          {/* Video Section */}
          <section className="py-20 bg-gray-900/50">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Veja como a Julia aumenta suas vendas</h2>
              <div className="max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden bg-gray-800">
                <iframe
                  className="w-full h-full"
                  src="https://w7startup.com.br/video/Oficina.mp4"
                  title="JulIA Demo"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <a href="#teste">
                <button className="mt-12 bg-[#25D366] hover:bg-[#075E54] rounded-lg px-8 py-3 text-lg md:text-xl text-white font-medium flex items-center gap-2 transition-colors duration-200 hover:shadow-lg mx-auto">
                  AGENDAR UMA REUNIÃO <ArrowRight className="w-5 h-5" />
                </button>
              </a>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                Soluções que a Julia oferece
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <CalendarCheck className="w-8 h-8 text-blue-400" />,
                    title: "Reservas automatizadas",
                    description: "Evite vagas ociosas e otimiza a ocupação. A JulIA gerencia reservas e confirma horários automaticamente."
                  },
                  {
                    icon: <MessageCircle className="w-8 h-8 text-teal-400" />,
                    title: "Atendimento rápido e digital",
                    description: "Responda dúvidas frequentes instantaneamente e agilize o atendimento dos clientes sem precisar de uma equipe 24h."
                  },
                  {
                    icon: <ShieldCheck className="w-8 h-8 text-green-400" />,
                    title: "Segurança e controle",
                    description: "A JulIA integra-se ao seu sistema para controlar acessos, garantir segurança e facilitar pagamentos."
                  }
                ].map((feature, index) => (
                  <div key={index} className="bg-gray-800/50 p-8 rounded-2xl hover:transform hover:-translate-y-1 transition-all">
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Integrations Section */}
          <section className="container mx-auto px-4 py-16 border-t border-gray-800">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Integrações Poderosas</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Nossa plataforma se integra perfeitamente com as principais ferramentas
              </p>
            </div>

            <Swiper
              slidesPerView={2}
              spaceBetween={20}
              loop={true}
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

            <h3 className="text-3xl font-bold mb-4 text-center">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">+ 500</span> integrações
            </h3>
          </section>

          {/* Demo Section */}
          <section id="teste" className="py-20 bg-gray-800/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Experimente a Julia agora mesmo
                </h2>
                <p className="text-xl text-gray-300 mb-12">
                  Teste nossa IA e veja como ela pode revolucionar seu atendimento
                </p>
                <div className="overflow-hidden rounded-2xl border border-gray-300">
                  <iframe 
                    src="https://platform.zaia.app/embed/chat/17834"
                    className="w-full h-80"
                    style={{ border: "none" }}
                    title="Demonstração do Chat Julia"
                  ></iframe>
                </div>
              </div>
            </div>
          </section>

          {/* Form Section with Image */}
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
                    src="images/julia_celular.png" 
                    alt="App Julia no celular" 
                    className="w-full h-full object-cover"
                    style={{ minHeight: '400px' }}
                  />
                </div>
                
                {/* Formulário - mesma altura que a imagem */}
                <div className="md:w-1/2">
                  <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl h-full">
                    <div id="hubspotForm"></div>
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
                <img className="w-32" src="/images/logo.png" alt="logo Julia" />
              </div>
              <div className="flex items-center gap-4 text-gray-400">
                <a href="https://www.instagram.com/hello.juliabr/" className="hover:text-blue-400 transition-colors">Instagram</a>
                <span>|</span>
                <a href="https://www.linkedin.com/company/hellojulia/" className="hover:text-blue-400 transition-colors">Linkedin</a>
                <span>|</span>
                <a href="mailto:ola@hellojulia.com.br" className="hover:text-blue-400 transition-colors">E-mail</a>
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
}

export default Automobilismo;