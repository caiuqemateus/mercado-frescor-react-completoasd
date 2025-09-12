import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Login = ({ onClose, onShowToast }) => {
  const [formData, setFormData] = useState({
    email: '',
    senha: ''
  });
  const [tipoLogin, setTipoLogin] = useState('cliente'); // 'cliente' ou 'admin'
  
  const { login } = useAuth();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.senha) {
      onShowToast('Por favor, preencha todos os campos!');
      return;
    }

    const resultado = login(formData.email, formData.senha);
    
    if (resultado.sucesso) {
      onShowToast(`Bem-vindo, ${resultado.usuario.nome}!`);
      onClose();
    } else {
      onShowToast(resultado.erro);
    }
  };

  const preencherDadosDemo = (tipo) => {
    if (tipo === 'cliente') {
      setFormData({
        email: 'cliente@teste.com',
        senha: '123456'
      });
    } else {
      setFormData({
        email: 'admin@teste.com',
        senha: 'admin123'
      });
    }
    setTipoLogin(tipo);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Login</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>

        <div className="mb-4">
          <p className="text-sm text-gray-600 mb-2">Dados para demonstração:</p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => preencherDadosDemo('cliente')}
              className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded hover:bg-blue-200"
            >
              Cliente Demo
            </button>
            <button
              type="button"
              onClick={() => preencherDadosDemo('admin')}
              className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded hover:bg-red-200"
            >
              Admin Demo
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Digite seu email"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="senha" className="block text-gray-700 mb-2">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              value={formData.senha}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Digite sua senha"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Entrar
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Não tem uma conta?{' '}
            <button className="text-green-600 hover:text-green-800">
              Cadastre-se
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

