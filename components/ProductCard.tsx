
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onNavigateToStore: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onNavigateToStore }) => {
  return (
    <div
      onClick={onNavigateToStore}
      className="group block overflow-hidden cursor-pointer"
    >
      <div className="relative aspect-square">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-[var(--color-bg)] bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-sm uppercase tracking-widest text-[var(--color-text-secondary)]">{product.series}</p>
        <h3 className="text-2xl font-bold mt-1 font-cinzel text-[var(--color-text-primary)] group-hover:text-[var(--color-text-secondary)] transition-colors duration-300">
          {product.name}
        </h3>
      </div>
    </div>
  );
};

export default ProductCard;
