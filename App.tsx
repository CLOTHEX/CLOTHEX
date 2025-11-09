import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGallery from './components/ProductGallery';
import Footer from './components/Footer';
import StoreView from './components/StoreView';

const themes = [
  {
    name: 'Obsidian Gold',
    bg: '#121212',
    textPrimary: '#E0E0E0',
    textSecondary: '#a0a0a0',
    accent: '#D4AF37',
    accentText: '#121212',
  },
  {
    name: 'Midnight',
    bg: '#0B1C33',
    textPrimary: '#F0F4F8',
    textSecondary: '#AAB8C5',
    accent: '#89DDFF',
    accentText: '#0B1C33',
  },
  {
    name: 'Evergreen',
    bg: '#1A2F25',
    textPrimary: '#EAE7DC',
    textSecondary: '#C3BFB4',
    accent: '#E85A4F',
    accentText: '#EAE7DC',
  },
  {
    name: 'Regal',
    bg: '#2C2A4A',
    textPrimary: '#F5F5F5',
    textSecondary: '#BDBDBD',
    accent: '#DCD6F7',
    accentText: '#2C2A4A',
  },
   {
    name: 'Crimson',
    bg: '#2B0B0B',
    textPrimary: '#FDF6F6',
    textSecondary: '#D7C2C2',
    accent: '#FF4747',
    accentText: '#FDF6F6',
  }
];


const App: React.FC = () => {
  const [showStore, setShowStore] = useState(false);

  useEffect(() => {
    const randomTheme = themes[Math.floor(Math.random() * themes.length)];
    const root = document.documentElement;
    root.style.setProperty('--color-bg', randomTheme.bg);
    root.style.setProperty('--color-text-primary', randomTheme.textPrimary);
    root.style.setProperty('--color-text-secondary', randomTheme.textSecondary);
    root.style.setProperty('--color-accent', randomTheme.accent);
    root.style.setProperty('--color-accent-text', randomTheme.accentText);
  }, []);

  // Prevent body from scrolling when store is active
  useEffect(() => {
    if (showStore) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup on component unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showStore]);


  const handleNavigateToStore = () => setShowStore(true);
  const handleGoHome = () => setShowStore(false);

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-primary)] transition-colors duration-1000 ease-in-out">
      <Header showStore={showStore} onGoHome={handleGoHome} />
      
      {/* Homepage content with fade transition */}
      <div className={`transition-opacity duration-500 ${showStore ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <main>
          <Hero onNavigateToStore={handleNavigateToStore} />
          <ProductGallery onNavigateToStore={handleNavigateToStore} />
        </main>
        <Footer />
      </div>

      {/* Store view is always rendered for preloading, visibility is controlled by isActive prop */}
      <StoreView isActive={showStore} />
    </div>
  );
};

export default App;