
import { motion } from 'framer-motion';

const clients = [
  { name: 'Chevrolet', logo: '/images/Chevrolet-Logo.png' },
  { name: 'ArtErvas', logo: '/images/ArtErvas-Logo.png' },
  { name: 'Banuba', logo: '/images/Banuba-Logo.png' },
  { name: 'Yamadiesel', logo: '/images/Yamadiesel-Logo.png' },
  { name: 'Wehandle', logo: '/images/Wehandle-logo.png' },
  { name: 'IcoBatatas', logo: '/images/IcoBatatas-Logo.png' },
];

const Clients = () => {
  return (
    <section id="clients" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gradient mb-16">
          Nossos Principais Clientes
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-8 flex items-center justify-center hover:shadow-lg transition-shadow"
            >
              <img 
                src={client.logo} 
                alt={client.name} 
                className="h-16 object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
