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

  const periodLabels: { [key in PricingPeriod]: string } = {
    monthly: 'Mensal',
    'half-yearly': 'Semestral',
    annual: 'Anual',
    custom: 'Personalizado'
  };
  
  const plans = {
    monthly: [
      {
        name: 'Startup+',
        price: '449,00',
        period: ' por mês',
        features: [
          'Inteligência Artificial',
          '7 mil interações',
          '1 Agente Autônomo',
          '5.000.000 de caracteres para treinar o Cérebro',
          'Suporte 8/7'
        ],
        link: '#contact'
      },
      {
        name: 'Premium',
        price: '899,00',
        period: ' por mês',
        features: [
          'Inteligência Artificial',
          '10 mil interações',
          '1 Agente Autônomo',
          '8.000.000 de caracteres para treinar o Cérebro',
          'Suporte 12/7'
        ],
        featured: true,
        link: '#contact'
      },
      {
        name: 'Master',
        price: '1.299,00',
        period: ' por mês',
        features: [
          'Atendimento dedicado',
          '20 mil interações',
          '1 Agente Autônomo',
          '12.000.000 de caracteres para treinar o Cérebro',
          'Suporte 24/7'
        ],
        link: '#contact'
      }
    ],
    'half-yearly': [
      {
        name: 'Startup+',
        price: '2.499,00',
        period: ' por 6 meses',
        features: [
          'Inteligência Artificial',
          '7 mil interações',
          '1 Agente Autônomo',
          '5.000.000 de caracteres para treinar o Cérebro',
          'Suporte 8/7'
        ],
        link: '#contact'
      },
      {
        name: 'Premium',
        price: '4.999,00',
        period: ' por 6 meses',
        features: [
          'Inteligência Artificial',
          '10 mil interações',
          '1 Agente Autônomo',
          '8.000.000 de caracteres para treinar o Cérebro',
          'Suporte 12/7'
        ],
        featured: true,
        link: '#contact'
      },
      {
        name: 'Master',
        price: '7.199,00',
        period: ' por 6 meses',
        features: [
          'Atendimento dedicado',
          '20 mil interações',
          '1 Agente Autônomo',
          '12.000.000 de caracteres para treinar o Cérebro',
          'Suporte 24/7'
        ],
        link: '#contact'
      }
    ],
    annual: [
      {
        name: 'Startup+',
        price: '4.799,00',
        period: ' por 12 meses',
        features: [
          'Inteligência Artificial',
          '7 mil interações',
          '1 Agente Autônomo',
          '5.000.000 de caracteres para treinar o Cérebro',
          'Suporte 8/7'
        ],
        link: '#contact'
      },
      {
        name: 'Premium',
        price: '9.599,00',
        period: ' por 12 meses',
        features: [
          'Inteligência Artificial',
          '10 mil interações',
          '1 Agente Autônomo',
          '8.000.000 de caracteres para treinar o Cérebro',
          'Suporte 12/7'
        ],
        featured: true,
        link: '#contact'
      },
      {
        name: 'Master',
        price: '13.799,00',
        period: ' por 12 meses',
        features: [
          'Atendimento dedicado',
          '20 mil interações',
          '1 Agente Autônomo',
          '12.000.000 de caracteres para treinar o Cérebro',
          'Suporte 24/7'
        ],
        link: '#contact'
      }
    ],
    custom: [
      {
        name: 'Plano Personalizado',
        price: 'Sob consulta',
        period: '',
        features: [
          'Soluções customizadas',
          'Interações ilimitadas',
          'Agentes Autônomos ilimitados',
          'Cérebro personalizado',
          'Suporte Dedicado 24/7'
        ],
        link: '#contact'
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[30px]"> {/* Espaço fixo de 30px */}
              <a href="#" className="flex items-center">
                <img src="/images/julia-name.png" alt="Julia" className="h-8 sm:h-12 w-auto" /> {/* Altura menor em mobile */}
              </a>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#ourhome" className="text-gray-700 hover:text-julia-blue transition-colors">O que é?</a>
              <a href="#experiencia" className="text-gray-700 hover:text-julia-blue transition-colors">Experimente agora</a>
              <a href="#video" className="text-gray-700 hover:text-julia-blue transition-colors">Nossa solução</a>
              <a href="#clients" className="text-gray-700 hover:text-julia-blue transition-colors">Nossos clientes</a>
              <a href="#our-pricings" className="text-gray-700 hover:text-julia-blue transition-colors">Nossos planos</a>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id='ourhome' className="py-20 md:py-32 overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="order-2 md:order-1"
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="text-gradient">ATENDIMENTO</span>
                  {' '}HUMANIZADO E{' '}
                  <span className="text-gradient">INTELIGENTE</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8">
                  Deseja ter um agente disponível 24 horas por dia para um atendimento personalizado e que responda até mesmo às questões mais complexas da sua empresa?
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-julia-blue to-julia-darkBlue text-white px-8 py-4 rounded-lg font-semibold"
                  onClick={() => document.getElementById('our-pricings')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  SAIBA MAIS
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

        {/* Experience Section */}
        <section id="experiencia" className="py-20 bg-julia-blue">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Tenha uma experiência com a Julia
              </h2>
              <p className="text-xl text-white/90 mb-12">
                Converse com a JulIA e pergunte tudo sobre o Grupo W7
              </p>
              
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-2">
                <iframe 
                  id="zaia-iframe"
                  src="https://platform.zaia.app/embed/chat/44982"
                  className="w-full h-[400px] rounded-lg border border-white/20"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section id="clients" className="py-20 bg-secondary/50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gradient mb-16">
              Nossos cases
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
                      className="glass rounded-xl p-6 sm:p-8 flex items-center justify-center bg-black hover:shadow-2xl transition-transform transform hover:scale-105 h-full"
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
        <section id="video" className="py-20 bg-julia-blue">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Agente Integrado
              </h2>
              
              <p className="text-xl text-white/90 mb-12 leading-relaxed">
                Crie um agente integrado no WhatsApp, Instagram ou site em apenas 5 minutos, capaz de qualificar leads, agendar reuniões e direcioná-los para o checkout.
              </p>
              
              <div className="flex justify-center">
                <video 
                  controls 
                  className="w-full h-auto mx-auto rounded-xl"
                >
                  <source src="/videos/julia_video.mp4" type="video/mp4" className="" />
                </video>
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
              <p className="text-gray-600 text-lg">
                As melhores opções para começar a fidelizar agora de forma rápida, fácil e segura.
              </p>
            </div>

            <div className="flex justify-center flex-wrap gap-4 mb-12">
              {(Object.keys(plans) as PricingPeriod[]).map((p) => (
                <button
                  key={p}
                  onClick={() => setPeriod(p)}
                  className={`px-6 py-2 rounded-full transition-all ${
                    period === p 
                      ? 'bg-julia-blue text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {periodLabels[p]}
                </button>
              ))}
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
                      : 'bg-white shadow-xl'
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <div className="mb-8">
                    <span className="text-4xl font-bold">
                        {plan.price !== 'Sob consulta' ? 'R$ ' : ''}{plan.price}
                    </span>
                    <br />
                    <span className="text-sm opacity-75">{plan.period}</span>
                  </div>
                  
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

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-secondary/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Fale <span className="text-primary">Conosco</span>
                  </h2>
                  <p className="text-muted-foreground md:text-xl">
                    Tem dúvidas sobre a Julia? Estamos aqui para ajudar.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-6 flex items-start space-x-4">
                      <div className="p-2 bg-primary/10 rounded-full mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary">
                          <rect width="20" height="16" x="2" y="4" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold">E-mail</h3>
                        <a href="mailto:ola@hellojulia.com.br">ola@hellojulia.com.br</a>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6 flex items-start space-x-4">
                      <div className="p-2 bg-primary/10 rounded-full mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary">
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold">Localização</h3>
                        <p className="text-muted-foreground">São Paulo - Brasil</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div className="w-full">
                <Card>
                  <CardContent className="p-6">
                    <div className="bg-white rounded-2xl h-full">
                      <div id="hubspotForm" className="w-full"></div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200">
        <div className="container mx-auto px-4 ">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <img className="w-32" src="/images/julia-name.png" alt="logo Julia" />
            </div>
            <div className="flex items-center gap-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text font-semibold">
              <a href="https://www.instagram.com/hello.juliabr/">Instagram</a> | 
              <a href="https://www.linkedin.com/company/hellojulia/">LinkedIn</a> |
              <a href="mailto:ola@hellojulia.com.br">E-mail</a> |
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