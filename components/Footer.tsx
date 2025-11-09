
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/20 border-t border-white/10 text-[var(--color-text-secondary)] py-12">
      <div className="container mx-auto px-6 text-center">
        <p className="text-2xl font-bold tracking-widest font-cinzel text-[var(--color-text-primary)] mb-4">clothex</p>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="hover:text-[var(--color-text-primary)] transition-colors">Facebook</a>
          <a href="#" className="hover:text-[var(--color-text-primary)] transition-colors">Instagram</a>
          <a href="#" className="hover:text-[var(--color-text-primary)] transition-colors">Twitter</a>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} clothex Apparel. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
