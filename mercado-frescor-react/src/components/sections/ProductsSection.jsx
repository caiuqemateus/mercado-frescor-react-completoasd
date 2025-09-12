import React from 'react';
import ProductCard from '../products/ProductCard';
import { useProducts } from '../../context/ProductsContext';

const ProductsSection = ({ onShowToast }) => {
  const { produtos } = useProducts();

  return (
    <section id="produtos" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Conheça nossa lista de Produtos
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {produtos.map((produto) => (
            <ProductCard
              key={produto.id}
              produto={produto}
              onShowToast={onShowToast}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

