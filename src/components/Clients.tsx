import { motion } from 'framer-motion';

const clients = [
  { name: 'Chevrolet', logo: '/images/Chevrolet-Logo.png', url: '#' },
  { name: 'ArtErvas', logo: '/images/Shantui-Logo.png', url: '#' },
  { name: 'Banuba', logo: '/images/Banuba-Logo.png', url: '#' },
  { name: 'Yamadiesel', logo: '/images/Yamadiesel-Logo.png', url: '#' },
  { name: 'Wehandle', logo: '/images/Wehandle-logo.png', url: '#' },
  { name: 'IcoBatatas', logo: '/images/IcoBatatas-Logo.png', url: '#' },
];

const Clients = () => {
  return (
    <section id="clients" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gradient mb-16">
          Nossos maiores cases
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6 sm:p-8 flex items-center justify-center bg-black hover:shadow-2xl transition-transform transform hover:scale-105"
            >
              <a href={client.url} target="_blank" rel="noopener noreferrer" aria-label={`Visite o site da ${client.name}`}>
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="h-48 w-auto max-w-full object-contain"
                />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
