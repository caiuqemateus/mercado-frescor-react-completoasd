import React from 'react';

const HeroSection = () => {
  const scrollToProdutos = () => {
    const element = document.getElementById('produtos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="bg-gradient-to-r from-green-500 to-green-700 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Produtos Frescos Direto do Campo</h2>
        <p className="text-xl mb-8">Qualidade e preço baixo todos os dias!</p>
        <button
          onClick={scrollToProdutos}
          className="bg-white text-green-700 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition"
        >
          Ver Produtos
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

