import React from 'react';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ produto, onShowToast }) => {
  const { adicionarAoCarrinho } = useCart();

  const handleComprar = () => {
    adicionarAoCarrinho(produto.nome, produto.preco);
    onShowToast(`${produto.nome} adicionado ao carrinho!`);
  };

  return (
    <div className="produto bg-white rounded-lg overflow-hidden shadow-md transition duration-300">
      <img 
        src={produto.imagem} 
        alt={produto.nome} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{produto.nome}</h3>
        <p className="text-gray-600 mb-3">{produto.descricao}</p>
        <p className="text-green-600 font-bold text-lg mb-4">R$ {produto.preco.toFixed(2)}</p>
        <button
          onClick={handleComprar}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Comprar
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

