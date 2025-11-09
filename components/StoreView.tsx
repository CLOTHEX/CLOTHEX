import React, { useState, useEffect } from 'react';

const STORE_URL = "https://my-store-10d39a9.creator-spring.com/";

interface StoreViewProps {
  isActive: boolean;
}

const StoreView: React.FC<StoreViewProps> = ({ isActive }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [bgImageUrl, setBgImageUrl] = useState('');

  useEffect(() => {
    // When the component becomes active, trigger loading and fetch a new background
    if (isActive) {
      setIsLoading(true);
      const randomId = Math.floor(Math.random() * 500);
      setBgImageUrl(`https://picsum.photos/seed/${randomId}/1920/1080?blur=8`);
    }
  }, [isActive]);

  return (
    <div
      className={`fixed inset-0 z-20 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      aria-hidden={!isActive}
    >
      {/* Themed Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${bgImageUrl})` }}
      />
      {/* Color Overlay */}
      <div className="absolute inset-0 bg-[var(--color-bg)] opacity-75" />

      {/* Content wrapper */}
      <div className="relative z-10 w-full h-full">
        {/* Loading indicator */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="flex flex-col items-center">
              <svg className="animate-spin h-10 w-10 text-[var(--color-accent)]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <p className="mt-4 text-[var(--color-text-secondary)]">Connecting to the store...</p>
            </div>
          </div>
        )}

        {/* iframe container with padding for header */}
        <div className="w-full h-full pt-[88px]">
          <iframe
            src={STORE_URL}
            title="clothex Store"
            className={`w-full h-full border-0 transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            onLoad={() => setIsLoading(false)}
            loading="eager"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default StoreView;