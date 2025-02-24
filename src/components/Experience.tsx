
const Experience = () => {
  return (
    <section id="experiencia" className="py-20 bg-julia-blue">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Tenha uma experiência com a Júlia
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Converse com a JulIA e pergunte tudo sobre o Grupo W7
          </p>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-2">
            <iframe 
              id="zaia-iframe"
              src="https://platform.zaia.app/embed/chat/17834"
              className="w-full h-[400px] rounded-lg border border-white/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
