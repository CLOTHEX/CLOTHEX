
import React from 'react';

interface HeroProps {
  onNavigateToStore: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigateToStore }) => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2&random=1')" }}
      >
        <div className="absolute inset-0 bg-[var(--color-bg)] opacity-60 transition-colors duration-1000"></div>
      </div>
      <div className="relative z-10 p-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 tracking-wider font-cinzel text-[var(--color-text-primary)]">
          Define Your Style
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto text-[var(--color-text-secondary)]">
          Curated collections that express your unique identity. Discover your next favorite piece.
        </p>
        <button
          onClick={onNavigateToStore}
          className="bg-[var(--color-accent)] text-[var(--color-accent-text)] font-bold py-3 px-8 text-lg rounded-sm hover:opacity-90 transition-all duration-300 transform hover:scale-105 font-cinzel tracking-widest"
        >
          Explore Collection
        </button>
      </div>
    </section>
  );
};

export default Hero;
