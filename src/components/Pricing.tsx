
import { useState } from 'react';
import { motion } from 'framer-motion';

type PricingPeriod = 'mensal' | 'semestral' | 'anual' | 'customizado';

const Pricing = () => {
  const [period, setPeriod] = useState<PricingPeriod>('mensal');

  const plans = {
    mensal: [
      {
        name: 'Startup+',
        price: '449,00',
        period: 'por mês',
        features: [
          'Inteligência Artificial',
          '7 mil interações',
          '1 Agente Autônomo',
          '5.000.000/milhão de caracteres para treinar o Cérebro',
          'Suporte 8/7'
        ],
        link: 'https://share.hsforms.com/1gfFzUCJoQjytPu_r0Z3cEQblq37'
      },
      {
        name: 'Premium',
        price: '899,00',
        period: 'por mês',
        features: [
          'Inteligência Artificial',
          '10 mil interações',
          '1 Agente Autônomo',
          '8.000.000/milhão de caracteres para treinar o Cérebro',
          'Suporte 12/7'
        ],
        featured: true,
        link: 'https://share.hsforms.com/1gfFzUCJoQjytPu_r0Z3cEQblq37'
      },
      {
        name: 'Master',
        price: '1.299,00',
        period: 'por mês',
        features: [
          'Atendimento dedicado',
          '20 mil interações',
          '1 agente autônomo',
          '12.000.000/milhão de caracteres para treinar o Cérebro',
          'Suporte 24/7'
        ],
        link: 'https://share.hsforms.com/1gfFzUCJoQjytPu_r0Z3cEQblq37'
      }
    ]
  };

  return (
    <section id="our-pricings" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">
            Nossos Planos
          </h2>
          <p className="text-gray-600 text-lg">
            As melhores opções para começar a fidelizar agora de maneira rápida, fácil e segura.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          {['mensal', 'semestral', 'anual', 'customizado'].map((p) => (
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
          {plans.mensal.map((plan, index) => (
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
                <span className="text-4xl font-bold">R$ {plan.price}</span>
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
                className={`block text-center py-3 rounded-lg transition-transform hover:scale-105 ${
                  plan.featured
                    ? 'bg-white text-julia-blue'
                    : 'bg-gradient-to-r from-julia-blue to-julia-darkBlue text-white'
                }`}
              >
                ESCOLHER
              </a>
              
              <p className="text-sm text-center mt-4 opacity-75">
                Interação extra: R$ 0,05/interação
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
