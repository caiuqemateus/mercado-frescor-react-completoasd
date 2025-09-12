import React, { useState } from 'react';

const ContactSection = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nome || !formData.email || !formData.mensagem) {
      onShowToast('Por favor, preencha todos os campos!');
      return;
    }
    onShowToast('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ nome: '', email: '', mensagem: '' });
  };

  return (
    <section id="contato" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Entre em Contato</h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <label htmlFor="nome" className="block text-gray-700 mb-2">Nome</label>
                <input
                  type="text"
                  id="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="mensagem" className="block text-gray-700 mb-2">Mensagem</label>
                <textarea
                  id="mensagem"
                  rows="4"
                  value={formData.mensagem}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-white p-6 rounded-lg shadow-md h-full">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="fas fa-map-marker-alt text-green-600 mt-1 mr-3"></i>
                  <p className="text-gray-600">Rua das Frutas, 123 - Centro, Cidade - Estado</p>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-phone-alt text-green-600 mr-3"></i>
                  <p className="text-gray-600">(00) 1234-5678</p>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-envelope text-green-600 mr-3"></i>
                  <p className="text-gray-600">contato@mercadofrescor.com</p>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-clock text-green-600 mr-3"></i>
                  <p className="text-gray-600">Seg-Sex: 8h-18h | Sáb: 8h-12h</p>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-3 text-gray-800">Siga-nos</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-green-600 hover:text-green-800 text-2xl">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="#" className="text-green-600 hover:text-green-800 text-2xl">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="text-green-600 hover:text-green-800 text-2xl">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

