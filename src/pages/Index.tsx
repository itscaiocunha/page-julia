import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent} from "@/components/ui/card";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Importe os estilos do Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

type PricingPeriod = 'monthly' | 'half-yearly' | 'annual' | 'custom';

declare global {
  interface Window {
    hbspt: any;
  }
}

// Tipos TypeScript
type Integration = {
  img: string;
  name: string;
  url: string;
};

// Tipos TypeScript
type Integration2 = {
  img: string;
  name: string;
  url: string;
};

const Index = () => {
  const [period, setPeriod] = useState<PricingPeriod>('monthly');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.type = "text/javascript";
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "19489363",
          formId: "696432cc-1ad9-45a6-99aa-ec5ece4a8bea",
          region: "na1",
          target: "#hubspotForm"
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const clients = [
    { name: 'Chevrolet', logo: '/images/Chevrolet-Logo.png', url: '#' },
    { name: 'ArtErvas', logo: '/images/Shantui-Logo.png', url: '#' },
    { name: 'Falcão das Milhas', logo: '/images/Falcao-Logo.png', url: '#' },
    { name: 'Banuba', logo: '/images/Banuba-Logo.png', url: '#' },
    { name: 'Thai Valle', logo: '/images/Thai-Logo.png', url: '#' },
    { name: 'Yamadiesel', logo: '/images/Yamadiesel-Logo.png', url: '#' },
    { name: 'Wehandle', logo: '/images/Wehandle-logo.png', url: '#' },
    { name: 'IcoBatatas', logo: '/images/IcoBatatas-Logo.png', url: '#' },
    { name: 'Cida Pastori', logo: '/images/Cida-Logo.png', url: '#' }
  ];
  
  const integrations: Integration[] = [
    { img: "/images/logo/mercadolivre.png", name: "MercadoLivre", url: "https://www.mercadolivre.com.br/" },
    { img: "/images/logo/meta.webp", name: "Meta", url: "https://www.facebook.com.br/" },
    { img: "/images/logo/tiktok.png", name: "Tiktok", url: "https://www.tiktok.com.br/" },
    { img: "/images/logo/Shopify-Logo.png", name: "Shopify", url: "https://www.shopify.com.br/" },
    { img: "/images/logo/Nuvemshop-Logo.png", name: "Nuvemshop", url: "https://www.nuvemshop.com.br/" },
    { img: "/images/logo/iFood-Logo.png", name: "iFood", url: "https://www.iFood.com.br/" },
    { img: "/images/logo/HubSpot-Logo.png", name: "HubSpot", url: "https://www.hubspot.com/" },
    { img: "/images/logo/Jadlog-Logo.png", name: "Jadlog", url: "https://www.jadlog.com.br/" },
    { img: "/images/logo/MercadoPago-Logo.png", name: "Mercado Pago", url: "https://www.mercadopago.com.br/" },
    { img: "/images/logo/TotalExpress-Logo.png", name: "Total Express", url: "https://www.totalexpress.com.br/" },
    { img: "/images/logo/PagSeguro-Logo.png", name: "PagSeguro", url: "https://pagseguro.uol.com.br/" },
    { img: "/images/logo/Salesforce-Logo.png", name: "Salesforce", url: "https://www.salesforce.com/br/" },
    { img: "/images/logo/PayPal-Logo.png", name: "PayPal", url: "https://www.PayPal.com.br/" },
    { img: "/images/logo/Bitrix-Logo.png", name: "Bitrix24", url: "https://www.bitrix24.com.br/" },
    { img: "/images/logo/Trustpilot-Logo.png", name: "Trustpilot", url: "https://br.trustpilot.com/" },
    { img: "/images/logo/Jadlog-Logo.png", name: "JadLog", url: "https://jadlog.com.br/" }
  ];

  const integrations2 = [
  { img: "/images/logo/Gympass-Logo.png", name: "Gympass", url: "https://www.Gympass.com.br/" },
  { img: "/images/logo/Doctoralia-Logo.png", name: "Doctoralia", url: "https://www.doctoralia.com.br/" },
  { img: "/images/logo/Google-Logo.png", name: "Google Calendário", url: "https://calendar.google.com/" },
  { img: "/images/logo/Totvs-Logo.png", name: "Totvs", url: "https://www.totvs.com/" },
  { img: "/images/logo/WhatsApp-Logo.png", name: "WhatsApp Business", url: "https://business.whatsapp.com/" },
  { img: "/images/logo/Zenklub-Logo.png", name: "Zenklub", url: "https://zenklub.com.br/" },
  { img: "/images/logo/ConexaSaude-Logo.png", name: "Conexa Saúde", url: "https://www.conexasaude.com.br/" },
  { img: "/images/logo/PagSeguro-Logo.png", name: "PagSeguro", url: "https://pagseguro.uol.com.br/" },
  { img: "/images/logo/MVSistemas-Logo.png", name: "MV Sistemas", url: "https://www.mv.com.br/" },
  { img: "/images/logo/PayPal-Logo.png", name: "PayPal", url: "https://www.paypal.com/br/home" },
  { img: "/images/logo/iClinic-Logo.png", name: "iClinic", url: "https://iclinic.com.br/" },
  { img: "/images/logo/RDStation-Logo.png", name: "RD Station CRM", url: "https://www.rdstation.com/produtos/crm/" },
];

  const plans = {
    monthly: [
      {
        name: 'Startup+',
        features: [
          'Inteligência Artificial',
          '5 mil interações',
          '1 Agente Autônomo',
          '5.000.000 de caracteres para treinar o Cérebro',
          'Suporte 8/7'
        ],
        link: 'https://www.hellojulia.com.br/formulario'
      },
      {
        name: 'Premium',
        features: [
          'Inteligência Artificial',
          '10 mil interações',
          '1 Agente Autônomo',
          '8.000.000 de caracteres para treinar o Cérebro',
          'Suporte 12/7'
        ],
        featured: true,
        link: 'https://www.hellojulia.com.br/formulario'
      },
      {
        name: 'Master',
        features: [
          'Atendimento dedicado',
          '20 mil interações',
          '1 Agente Autônomo',
          '12.000.000 de caracteres para treinar o Cérebro',
          'Suporte 24/7'
        ],
        link: 'https://www.hellojulia.com.br/formulario'
      }
    ],
    'half-yearly': [
      {
        name: 'Startup+',
        features: [
          'Inteligência Artificial',
          '7 mil interações',
          '1 Agente Autônomo',
          '5.000.000 de caracteres para treinar o Cérebro',
          'Suporte 8/7'
        ],
        link: 'https://www.hellojulia.com.br/formulario'
      },
      {
        name: 'Premium',
        features: [
          'Inteligência Artificial',
          '10 mil interações',
          '1 Agente Autônomo',
          '8.000.000 de caracteres para treinar o Cérebro',
          'Suporte 12/7'
        ],
        featured: true,
        link: 'https://www.hellojulia.com.br/formulario'        
      },
      {
        name: 'Master',
        features: [
          'Atendimento dedicado',
          '20 mil interações',
          '1 Agente Autônomo',
          '12.000.000 de caracteres para treinar o Cérebro',
          'Suporte 24/7'
        ],
        link: 'https://www.hellojulia.com.br/formulario'
      }
    ],
    annual: [
      {
        name: 'Startup+',
        features: [
          'Inteligência Artificial',
          '7 mil interações',
          '1 Agente Autônomo',
          '5.000.000 de caracteres para treinar o Cérebro',
          'Suporte 8/7'
        ],
        link: 'https://www.hellojulia.com.br/formulario'
      },
      {
        name: 'Premium',
        features: [
          'Inteligência Artificial',
          '10 mil interações',
          '1 Agente Autônomo',
          '8.000.000 de caracteres para treinar o Cérebro',
          'Suporte 12/7'
        ],
        featured: true,
        link: 'https://www.hellojulia.com.br/formulario'
      },
      {
        name: 'Master',
        features: [
          'Atendimento dedicado',
          '20 mil interações',
          '1 Agente Autônomo',
          '12.000.000 de caracteres para treinar o Cérebro',
          'Suporte 24/7'
        ],
        link: 'https://www.hellojulia.com.br/formulario'
      }
    ],
    custom: [
      {
        name: 'Plano Personalizado',
        features: [
          'Soluções customizadas',
          'Interações ilimitadas',
          'Agentes Autônomos ilimitados',
          'Cérebro personalizado',
          'Suporte Dedicado 24/7'
        ],
        link: 'https://www.hellojulia.com.br/formulario'
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className={`top-0 left-0 right-0 z-50 transition-all duration-300 `}>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[30px]"> {/* Espaço fixo de 30px */}
              <a href="#" className="flex items-center">
                <img src="/images/juliawhite.png" alt="Julia" className="h-8 sm:h-12 w-auto" /> {/* Altura menor em mobile */}
              </a>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#ourhome" className="text-white-700 hover:text-julia-blue transition-colors">O que é?</a>
              <a href="#experiencia" className="text-white-700 hover:text-julia-blue transition-colors">Experimente agora</a>
              <a href="#video" className="text-white-700 hover:text-julia-blue transition-colors">Nossa solução</a>
              <a href="#clients" className="text-white-700 hover:text-julia-blue transition-colors">Nossos clientes</a>
              <a href="#our-pricings" className="text-white-700 hover:text-julia-blue transition-colors">Nossos planos</a>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id='ourhome' className="py-5 md:py-32 overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="order-2 md:order-1"
              >
                <h1 className="text-4xl md:text-6xl text-julia-blue font-bold mb-6">
                  <span className="text-white">ATENDIMENTO</span>
                  {' '}HUMANIZADO <span className="text-white">E</span>{' '}
                  <span className="text-julia-blue">INTELIGENTE</span>
                </h1>
                <p className="text-lg md:text-xl text-white-600 mb-8">
                  Deseja ter um agente disponível 24 horas por dia para um atendimento personalizado e que responda até mesmo às questões mais complexas da sua empresa?
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-julia-blue to-julia-darkBlue text-white px-8 py-4 mr-6 rounded-lg font-semibold"
                  onClick={() => document.getElementById('our-pricings')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  TESTE GRÁTIS
                </motion.button>                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-julia-blue to-julia-darkBlue text-white px-8 py-4 rounded-lg font-semibold"
                  onClick={() => document.getElementById('our-pricings')?.scrollIntoView({ behavior: 'smooth' })}
                >
                <a href="https://wa.me/5511916578050">FALE COM ESPECIALISTA</a>
                </motion.button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="order-1 md:order-2"
              >
                <img 
                  src="/images/retratoJulia.jpg" 
                  alt="Julia, Assistente com IA" 
                  className="w-full max-w-md mx-auto rounded-[50px]"
                />
              </motion.div>
            </div>
          </div>
        </section>

         {/* Integrations Section */}
                  <section className="container mx-auto px-4 py-16 border-t border-gray-800">
                    <div className="text-center mb-16">
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Integrações</h2>
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
                  {integrations2.map(({ img, name, url }) => (
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

        {/* Experience Section */}
        <section id="experiencia" className="py-20 bg-julia-sectionblue">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Tenha uma experiência com a Julia
              </h2>
              <p className="text-xl text-white/90 mb-12">
                Converse com a JulIA e pergunte tudo sobre o Grupo W7
              </p>
              
              <div>
                <iframe 
                  id="zaia-iframe"
                  src="https://platform.hellojulia.com.br/embed/chat/44982"
                  className="w-full h-[400px] rounded-lg border border-white/20"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section id="clients" className="py-20 bg-secondary/50">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Nossos cases
            </h1>
        <h2 className="text-xl text-white/90 mb-12 leading-relaxed">
                Histórias reais de inovação: como a inteligência artificial está gerando impacto em diferentes setores.
              </h2>
            {/* Carrossel com Swiper */}
            <div className="relative">
              <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  1024: { slidesPerView: 4 },
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={true}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                pagination={{
                  clickable: true,
                  el: '.swiper-pagination',
                }}
                className="py-8"
              >
                {clients.map((client, index) => (
                  <SwiperSlide key={client.name}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="glass rounded-xl p-6 sm:p-8 flex items-center justify-center bg-white hover:shadow-2xl transition-transform transform hover:scale-105 h-full"
                    >
                      <img 
                        src={client.logo} 
                        alt={client.name} 
                        className="h-48 w-auto max-w-full object-contain"
                      />
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
      

              {/* Navegação do carrossel */}
              <div className="swiper-button-prev text-primary hover:text-primary/80 transition-colors"></div>
              <div className="swiper-button-next text-primary hover:text-primary/80 transition-colors"></div>
              <div className="swiper-pagination mt-4"></div>
            </div>
            
          </div>
        </section>

        {/* Video Section */}
        <section id="video" className="py-20 bg-julia-sectionblue">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Agente Integrado
              </h2>
              
              <h2 className="text-xl text-white/90 mb-12 leading-relaxed">
                Crie um agente integrado no WhatsApp, Instagram ou site em apenas 5 minutos, capaz de qualificar leads, agendar reuniões e direcioná-los para o checkout.
              </h2>
              
              <div className="flex justify-center">
                <iframe width="660" height="415" src="https://www.youtube.com/embed/rhJJSpa6hRE?si=LUWgQb2rsLvmEdaw" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Tickets Section */}
        <section id="our-pricings" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">
                Nossos Planos
              </h2>
              <p className="text-white-600 text-lg">
                As melhores opções para começar a fidelizar agora de forma rápida, fácil e segura.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {plans[period].map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`rounded-2xl p-8 ${
                    plan.featured
                      ? 'bg-gradient-to-br from-julia-blue to-julia-darkBlue text-white transform scale-105'
                      : 'bg-white shadow-xl text-black'
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <svg
                          className={`w-5 h-5 ${plan.featured ? 'text-white' : 'text-julia-blue'}`}
                          fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href={plan.link}
                    className={`block text-center py-3 rounded-lg transition-transform hover:scale-105 font-bold ${
                      plan.featured
                        ? 'bg-white text-julia-blue'
                        : 'bg-gradient-to-r from-julia-blue to-julia-darkBlue text-white'
                    }`}
                  >
                    TESTE 7 DIAS GRÁTIS
                  </a>
                  
                  {plan.period && (
                    <p className="text-sm text-center mt-4 opacity-75">
                      Interação extra: R$ 0,05 por interação
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200">
        <div className="container mx-auto px-4 ">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <img className="w-32" src="/images/juliawhite.png" alt="logo Julia" />
            </div>
            <div className="flex items-center gap-4 bg-blue-400 to-purple-500 text-transparent bg-clip-text font-semibold">
              <a href="https://www.instagram.com/hello.juliabr/">Instagram</a> <span className='text-white'>|</span>
              <a href="https://www.linkedin.com/company/hellojulia/">LinkedIn</a> <span className='text-white'>|</span>              
              <a href="https://wa.me/5519993297037">WhatsApp</a>
            </div>
            <p className="text-gray-500 text-sm text-center md:text-right">
              © {new Date().getFullYear()} JulIA. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;