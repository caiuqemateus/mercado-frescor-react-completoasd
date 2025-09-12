import React from 'react';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <img 
              src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Mercado Frescor" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Sobre o Mercado Frescor</h2>
            <p className="text-gray-600 mb-4">
              Somos um mercado comprometido em trazer os melhores produtos diretamente do campo 
              para sua mesa, com qualidade e preços justos.
            </p>
            <p className="text-gray-600 mb-4">
              Nossos produtores são cuidadosamente selecionados para garantir que você receba 
              apenas o melhor em frutas, legumes e verduras.
            </p>
            <p className="text-gray-600">
              Visite-nos e experimente a diferença do frescor!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

