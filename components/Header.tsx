import React, { useState, useEffect } from 'react';

interface HeaderProps {
  showStore: boolean;
  onGoHome: () => void;
}

const Header: React.FC<HeaderProps> = ({ showStore, onGoHome }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close mobile menu if store view is activated
  useEffect(() => {
    if (showStore) {
        setIsMenuOpen(false);
    }
  }, [showStore]);

  // Prevent body from scrolling when mobile menu is open, coordinating with App.tsx
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      // Only restore scroll if the main store view is not active
      if (!showStore) {
        document.body.style.overflow = 'auto';
      }
    }
  }, [isMenuOpen, showStore]);


  return (
    <header className="absolute top-0 left-0 right-0 z-30 p-6 md:p-8 bg-opacity-20 backdrop-blur-sm transition-colors duration-1000">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Brand Name is a button to go home */}
        <button onClick={onGoHome} className="text-3xl md:text-4xl font-bold tracking-widest font-cinzel text-[var(--color-text-primary)] relative z-20">
          clothex
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden md:block">
          {showStore ? (
            <button onClick={onGoHome} className="bg-[var(--color-accent)] text-[var(--color-accent-text)] font-bold py-2 px-6 rounded-sm hover:opacity-90 transition-all duration-300 font-cinzel tracking-widest text-sm">
              Back to Home
            </button>
          ) : (
            <nav className="flex space-x-8">
              <a href="#" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-300">Collections</a>
              <a href="#" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-300">Our Story</a>
              <a href="#" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-300">Contact</a>
            </nav>
          )}
        </div>
        
        {/* Mobile: Hamburger or Back Button */}
        <div className="md:hidden">
           {showStore ? (
            <button onClick={onGoHome} className="bg-[var(--color-accent)] text-[var(--color-accent-text)] font-bold py-2 px-4 rounded-sm hover:opacity-90 transition-all duration-300 text-sm">
              Back to Home
            </button>
           ) : (
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[var(--color-text-primary)] relative z-20">
              {isMenuOpen ? (
                // Close Icon (X)
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger Icon
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
           )}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed top-0 left-0 w-full h-screen bg-[var(--color-bg)] flex flex-col items-center justify-center z-10 transition-opacity duration-300 ease-in-out ${isMenuOpen && !showStore ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <nav className="flex flex-col space-y-8 text-center">
              <a href="#" onClick={() => setIsMenuOpen(false)} className="text-2xl text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-300">Collections</a>
              <a href="#" onClick={() => setIsMenuOpen(false)} className="text-2xl text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-300">Our Story</a>
              <a href="#" onClick={() => setIsMenuOpen(false)} className="text-2xl text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-300">Contact</a>
          </nav>
      </div>
    </header>
  );
};

export default Header;