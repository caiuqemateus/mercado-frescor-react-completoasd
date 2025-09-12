import React, { createContext, useContext, useState } from 'react';
import { initialProducts } from '../types/index';

const ProductsContext = createContext();

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error('useProducts deve ser usado dentro de um ProductsProvider');
  }
  return context;
};

export const ProductsProvider = ({ children }) => {
  const [produtos, setProdutos] = useState(initialProducts);

  const adicionarProduto = (novoProduto) => {
    const id = (produtos.length + 1).toString();
    const produtoComId = { ...novoProduto, id };
    setProdutos(prev => [...prev, produtoComId]);
  };

  const editarProduto = (id, produtoEditado) => {
    setProdutos(prev => 
      prev.map(produto => 
        produto.id === id ? { ...produtoEditado, id } : produto
      )
    );
  };

  const removerProduto = (id) => {
    setProdutos(prev => prev.filter(produto => produto.id !== id));
  };

  const obterProdutoPorId = (id) => {
    return produtos.find(produto => produto.id === id);
  };

  const value = {
    produtos,
    adicionarProduto,
    editarProduto,
    removerProduto,
    obterProdutoPorId
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

