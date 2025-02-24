
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="ourhome" className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              ATENDIMENTO{' '}
              <span className="text-gradient">HUMANIZADO</span>
              {' '}E{' '}
              <span className="text-gradient">INTELIGENTE</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Quer ter um agente disponível 24 horas atendendo de maneira humanizada
              respondendo até os assuntos mais complexos da sua empresa?
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
              src="/images/Julia.png" 
              alt="Julia AI Assistant" 
              className="w-full max-w-md mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
