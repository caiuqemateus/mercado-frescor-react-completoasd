import React from 'react';
import { useCart } from '../../context/CartContext';

const CartModal = ({ isOpen, onClose, onShowToast }) => {
  const { carrinho, removerDoCarrinho, limparCarrinho, obterTotalPreco } = useCart();

  const finalizarCompra = () => {
    if (carrinho.length === 0) {
      onShowToast('Adicione itens ao carrinho primeiro!');
      return;
    }
    onShowToast('Compra finalizada com sucesso! Obrigado!');
    limparCarrinho();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4 max-h-96 overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-800">Carrinho de Compras</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>
        
        <div className="mb-4">
          {carrinho.length === 0 ? (
            <p className="text-gray-500 text-center py-4">Seu carrinho está vazio</p>
          ) : (
            carrinho.map((item, index) => {
              const subtotal = item.preco * item.quantidade;
              return (
                <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200">
                  <div>
                    <h4 className="font-medium">{item.nome}</h4>
                    <p className="text-sm text-gray-500">
                      {item.quantidade} x R$ {item.preco.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium mr-4">R$ {subtotal.toFixed(2)}</span>
                    <button
                      onClick={() => removerDoCarrinho(item.nome)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
        
        <div className="border-t pt-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-bold">Total:</span>
            <span className="text-lg font-bold text-green-600">
              R$ {obterTotalPreco().toFixed(2)}
            </span>
          </div>
          
          <button
            onClick={finalizarCompra}
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;

