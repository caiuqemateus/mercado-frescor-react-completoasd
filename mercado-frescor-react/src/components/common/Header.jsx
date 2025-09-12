import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';

const Header = ({ onOpenCart, onOpenLogin }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { obterTotalItens } = useCart();
  const { usuarioLogado, logout, isAdmin } = useAuth();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-green-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <i className="fas fa-shopping-basket text-3xl"></i>
            <h1 className="text-2xl font-bold">Mercado Frescor</h1>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <button 
              onClick={() => scrollToSection('inicio')} 
              className="hover:text-green-200 transition"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('produtos')} 
              className="hover:text-green-200 transition"
            >
              Produtos
            </button>
            <button 
              onClick={() => scrollToSection('sobre')} 
              className="hover:text-green-200 transition"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('contato')} 
              className="hover:text-green-200 transition"
            >
              Contato
            </button>
            {isAdmin() && (
              <button 
                onClick={() => scrollToSection('admin')} 
                className="hover:text-green-200 transition bg-green-700 px-3 py-1 rounded"
              >
                Admin
              </button>
            )}
          </nav>
          
          <div className="flex items-center space-x-4">
            {usuarioLogado ? (
              <div className="hidden md:flex items-center space-x-2">
                <span className="text-sm">Olá, {usuarioLogado.nome}</span>
                <button
                  onClick={handleLogout}
                  className="text-sm bg-green-700 px-3 py-1 rounded hover:bg-green-800 transition"
                >
                  Sair
                </button>
              </div>
            ) : (
              <button
                onClick={onOpenLogin}
                className="hidden md:block text-sm bg-green-700 px-3 py-1 rounded hover:bg-green-800 transition"
              >
                Login
              </button>
            )}
            
            <button 
              onClick={onOpenCart}
              className="carrinho-btn relative"
            >
              <i className="fas fa-shopping-cart text-2xl"></i>
              <span className="badge absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center transition">
                {obterTotalItens()}
              </span>
            </button>
            <button 
              className="md:hidden" 
              onClick={toggleMobileMenu}
            >
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      <div className={`md:hidden bg-green-700 px-4 py-2 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <button 
          onClick={() => scrollToSection('inicio')} 
          className="block py-2 hover:text-green-200 transition w-full text-left"
        >
          Início
        </button>
        <button 
          onClick={() => scrollToSection('produtos')} 
          className="block py-2 hover:text-green-200 transition w-full text-left"
        >
          Produtos
        </button>
        <button 
          onClick={() => scrollToSection('sobre')} 
          className="block py-2 hover:text-green-200 transition w-full text-left"
        >
          Sobre
        </button>
        <button 
          onClick={() => scrollToSection('contato')} 
          className="block py-2 hover:text-green-200 transition w-full text-left"
        >
          Contato
        </button>
        {isAdmin() && (
          <button 
            onClick={() => scrollToSection('admin')} 
            className="block py-2 hover:text-green-200 transition w-full text-left"
          >
            Admin
          </button>
        )}
        {usuarioLogado ? (
          <div className="border-t border-green-600 pt-2 mt-2">
            <p className="py-1 text-sm">Olá, {usuarioLogado.nome}</p>
            <button
              onClick={handleLogout}
              className="block py-2 hover:text-green-200 transition w-full text-left"
            >
              Sair
            </button>
          </div>
        ) : (
          <button
            onClick={onOpenLogin}
            className="block py-2 hover:text-green-200 transition w-full text-left border-t border-green-600 mt-2 pt-2"
          >
            Login
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;

