import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <i className="fas fa-shopping-basket text-2xl"></i>
              <span className="text-xl font-bold">Mercado Frescor</span>
            </div>
            <p className="text-gray-400 mt-2">© 2023 Todos os direitos reservados</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              Termos de Uso
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              FAQ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

