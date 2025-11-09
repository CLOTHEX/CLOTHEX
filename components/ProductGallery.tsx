import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';

const products: Product[] = [
  {
    id: 1,
    name: 'The Monarch Blazer',
    series: 'Autumn Collection',
    imageUrl: 'https://picsum.photos/seed/cloth1/800/800',
  },
  {
    id: 2,
    name: 'Coastal Linen Shirt',
    series: 'Summer Breeze',
    imageUrl: 'https://picsum.photos/seed/cloth2/800/800',
  },
  {
    id: 3,
    name: 'Metro Trench Coat',
    series: 'Urban Explorer',
    imageUrl: 'https://picsum.photos/seed/cloth3/800/800?grayscale',
  },
  {
    id: 4,
    name: 'Ascend Performance Tee',
    series: 'Active Wear',
    imageUrl: 'https://picsum.photos/seed/cloth4/800/800',
  },
  {
    id: 5,
    name: 'Nomad Cargo Pants',
    series: 'Utility Line',
    imageUrl: 'https://picsum.photos/seed/cloth5/800/800',
  },
  {
    id: 6,
    name: 'Velvet Evening Dress',
    series: 'Midnight Gala',
    imageUrl: 'https://picsum.photos/seed/cloth6/800/800',
  },
];

interface ProductGalleryProps {
  onNavigateToStore: () => void;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ onNavigateToStore }) => {
  const [bgImageUrl, setBgImageUrl] = useState('');

  useEffect(() => {
    // Use a different random seed to avoid matching other backgrounds
    const randomId = Math.floor(Math.random() * 500) + 100;
    setBgImageUrl(`https://picsum.photos/seed/${randomId}/1920/1080?blur=5`);
  }, []);

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Themed Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${bgImageUrl})` }}
      />
      {/* Color Overlay */}
      <div className="absolute inset-0 bg-[var(--color-bg)] opacity-85 transition-colors duration-1000" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 font-cinzel">Our Collection</h2>
        <p className="text-center text-[var(--color-text-secondary)] max-w-xl mx-auto mb-16">
          Each piece is a testament to our commitment to quality, contemporary design, and enduring style.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {products.map(product => (
            <ProductCard key={product.id} product={product} onNavigateToStore={onNavigateToStore} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;