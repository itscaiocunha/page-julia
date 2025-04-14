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

const Summit = () => {
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
    { name: 'Banuba', logo: '/images/Banuba-Logo.png', url: '#' },
    { name: 'Yamadiesel', logo: '/images/Yamadiesel-Logo.png', url: '#' },
    { name: 'Wehandle', logo: '/images/Wehandle-logo.png', url: '#' },
    { name: 'IcoBatatas', logo: '/images/IcoBatatas-Logo.png', url: '#' },
  ];

  const plans = {
    monthly: [
      {
        name: 'Startup+',
        price: '85,54',
        real: '449,00',
        period: ' per month',
        features: [
          'Artificial Intelligence',
          '7 thousand interactions',
          '1 Autonomous Agent',
          '5,000,000/million characters to train the Brain',
          '8/7 Support'
        ],
        link: '#contact'
      },
      {
        name: 'Premium',
        price: '153,86',
        real: '899,00',
        period: ' per month',
        features: [
          'Artificial Intelligence',
          '10 thousand interactions',
          '1 Autonomous Agent',
          '8.000.000/million characters to train the Brain',
          '12/7 Support'
        ],
        featured: true,
        link: '#contact'
      },
      {
        name: 'Master',
        price: '222,31',
        real: '1.299,00',
        period: ' per month',
        features: [
          'Dedicated service',
          '20 thousand interactions',
          '1 Autonomous Agent',
          '12.000.000/million characters to train the Brain',
          '24/7 Support'
        ],
        link: '#contact'
      }
    ],
    'half-yearly': [
      {
        name: 'Startup+',
        price: '427,72',
        real: '2.499,00',
        period: ' per 6 month',
        features: [
          'Artificial Intelligence',
          '7 thousand interactions',
          '1 Autonomous Agent',
          '5,000,000/million characters to train the Brain',
          '8/7 Support'
        ],
        link: '#contact'
      },
      {
        name: 'Premium',
        price: '855,61',
        real: '4.999,00',
        period: ' per 6 month',
        features: [
          'Artificial Intelligence',
          '10 thousand interactions',
          '1 Autonomous Agent',
          '8.000.000/million characters to train the Brain',
          '12/7 Support'
        ],
        featured: true,
        link: '#contact'
      },
      {
        name: 'Master',
        price: '1.232,16',
        real: '7.199,00',
        period: ' per 6 month',
        features: [
          'Dedicated service',
          '20 thousand interactions',
          '1 Autonomous Agent',
          '12.000.000/million characters to train the Brain',
          '24/7 Support'
        ],
        link: '#contact'
      }
    ],
    annual: [
      {
        name: 'Startup+',
        price: '821,38',
        real: '4.799,00',
        period: ' per 12 month',
        features: [
          'Artificial Intelligence',
          '7 thousand interactions',
          '1 Autonomous Agent',
          '5,000,000/million characters to train the Brain',
          '8/7 Support'
        ],
        link: '#contact'
      },
      {
        name: 'Premium',
        price: '1.642,93',
        real: '9.599,00',
        period: ' per 12 month',
        features: [
          'Artificial Intelligence',
          '10 thousand interactions',
          '1 Autonomous Agent',
          '8.000.000/million characters to train the Brain',
          '12/7 Support'
        ],
        featured: true,
        link: '#contact'
      },
      {
        name: 'Master',
        price: '2.361,79',
        real: '13.799,00',
        period: ' per 12 month',
        features: [
          'Dedicated service',
          '20 thousand interactions',
          '1 Autonomous Agent',
          '12.000.000/million characters to train the Brain',
          '24/7 Support'
        ],
        link: '#contact'
      }
    ],
    custom: [
      {
        name: 'Custom Plan',
        price: 'Consultation',
        real: '',
        period: '',
        features: [
          'Customized solutions',
          'Unlimited interactions',
          'Unlimited Autonomous Agents',
          'Custom brain',
          '24/7 Dedicated Support'
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
            <a href="#" className="flex items-center">
              <img src="/images/julia-name.png" alt="Julia" className="h-12 w-auto" />
            </a>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#ourhome" className="text-gray-700 hover:text-julia-blue transition-colors">What is it?</a>
              <a href="#experiencia" className="text-gray-700 hover:text-julia-blue transition-colors">Try it now</a>
              <a href="#video" className="text-gray-700 hover:text-julia-blue transition-colors">Our solution</a>
              <a href="#clients" className="text-gray-700 hover:text-julia-blue transition-colors">Our customers</a>
              <a href="#our-pricings" className="text-gray-700 hover:text-julia-blue transition-colors">Our plans</a>
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
                  <span className="text-gradient">HUMANIZED</span>
                  {' '}AND{' '}
                  <span className="text-gradient">INTELLIGENT </span>
                   SERVICE{' '}
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8">
                  Do you want to have an agent available 24 hours a day to provide personalized service and respond to even the most complex issues in your company?
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-julia-blue to-julia-darkBlue text-white px-8 py-4 rounded-lg font-semibold"
                  onClick={() => document.getElementById('our-pricings')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  FIND OUT MORE
                </motion.button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="order-1 md:order-2"
              >
                <img 
                  src="/images/JuliaRJ.png" 
                  alt="Julia AI Assistant" 
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
                Have an experience with Julia
              </h2>
              <p className="text-xl text-white/90 mb-12">
                Talk to JulIA and ask everything about the W7 Group
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
              Our cases
            </h2>

            {/* Carrossel com Swiper */}
            <div className="relative">
              <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  1024: {
                    slidesPerView: 4,
                  },
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
                Integrated Agent
              </h2>
              
              <p className="text-xl text-white/90 mb-12 leading-relaxed">
                Create an integrated agent on WhatsApp, Instagram or website in just 5 minutes, capable of qualifying leads, scheduling meetings and directing them to checkout.
              </p>
              
              <div className="flex justify-center">
                  <video 
                    controls 
                    className="w-full h-auto mx-auto rounded-xl"
                  >
                    <source src="/videos/Responda_1.mp4" type="video/mp4" className="" />
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
            Our Plans
          </h2>
          <p className="text-gray-600 text-lg">
            The best options to start building loyalty now in a quick, easy and safe way.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          {['monthly', 'half-yearly', 'annual', 'custom'].map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p as PricingPeriod)}
              className={`px-6 py-2 rounded-full transition-all ${
                period === p 
                  ? 'bg-julia-blue text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {p.charAt(0).toUpperCase() + p.slice(1)}
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
                <span className="text-4xl font-bold">US$ {plan.price}</span>
                <span className="text-sm"> (R$ {plan.real})</span>
                <br />
                <span className="text-sm opacity-75">{plan.period}</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <svg
                      className={`w-5 h-5 ${plan.featured ? 'text-white' : 'text-julia-blue'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
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
                    : 'bg-gradient-to-r from-julia-blue to-julia-darkBlue text-white font-bold'
                }`}
              >
                TRY 7 DAYS FREE
              </a>
              
              <p className="text-sm text-center mt-4 opacity-75">
                Extra interaction: R$ 0.05/interaction
              </p>
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
                    Contact <span className="text-primary">Us</span>
                  </h2>
                  <p className="text-muted-foreground md:text-xl">
                    Have questions about Julia? We're here to help.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-6 flex items-start space-x-4">
                      <div className="p-2 bg-primary/10 rounded-full mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 text-primary"
                        >
                          <rect width="20" height="16" x="2" y="4" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold">Email</h3>
                        <a href="mailto:ola@hellojulia.com.br">
                          ola@hellojulia.com.br
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6 flex items-start space-x-4">
                      <div className="p-2 bg-primary/10 rounded-full mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 text-primary"
                        >
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold">Location</h3>
                        <p className="text-muted-foreground">São Paulo - Brasil</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div className="w-full"> {/* Removi a restrição de md:w-1/2 para ocupar toda a coluna */}
                <Card> {/* Adicionei o Card para combinar com o estilo */}
                  <CardContent className="p-6">
                    <div className="bg-white rounded-2xl h-full">
                      <div id="hubspotForm" className="w-full"></div> {/* Adicionei w-full para garantir largura total */}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-4 ">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img className="w-32" src="/images/julia-name.png" alt="logo Julia" />
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              <a href="https://www.instagram.com/hello.juliabr/">Instagram</a> | 
              <a href="https://www.linkedin.com/company/hellojulia/">LinkedIn</a> |
              <a href="mailto:ola@hellojulia.com.br">Mail</a> |
              <a href="https://wa.me/5519993297037">WhatsApp</a>
            </div>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} JulIA. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Summit;