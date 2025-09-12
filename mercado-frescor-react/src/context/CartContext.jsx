import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart deve ser usado dentro de um CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (nome, preco) => {
    setCarrinho(prevCarrinho => {
      const itemExistente = prevCarrinho.find(item => item.nome === nome);
      if (itemExistente) {
        return prevCarrinho.map(item =>
          item.nome === nome
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      } else {
        return [...prevCarrinho, { nome, preco, quantidade: 1 }];
      }
    });
  };

  const removerDoCarrinho = (nome) => {
    setCarrinho(prevCarrinho => prevCarrinho.filter(item => item.nome !== nome));
  };

  const limparCarrinho = () => {
    setCarrinho([]);
  };

  const obterTotalItens = () => {
    return carrinho.reduce((total, item) => total + item.quantidade, 0);
  };

  const obterTotalPreco = () => {
    return carrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0);
  };

  const value = {
    carrinho,
    adicionarAoCarrinho,
    removerDoCarrinho,
    limparCarrinho,
    obterTotalItens,
    obterTotalPreco
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

