import React, { createContext, useContext, useState } from 'react';

const LightboxContext = createContext(null);

export function LightboxProvider({ children }) {
  const [item, setItem] = useState(null);

  const open = ({ src, alt = '', caption = '' }) => {
    if (!src) return;
    setItem({ src, alt, caption });
  };

  const close = () => setItem(null);

  return (
    <LightboxContext.Provider value={{ open }}>
      {children}
      {item && (
        <div className="lightbox-overlay" onClick={close} role="dialog" aria-modal="true">
          <button type="button" className="lightbox-close" onClick={close} aria-label="Close image">×</button>
          <img src={item.src} alt={item.alt} />
          {item.caption && <p>{item.caption}</p>}
        </div>
      )}
    </LightboxContext.Provider>
  );
}

export function useLightbox() {
  const ctx = useContext(LightboxContext);
  if (!ctx) {
    throw new Error('useLightbox must be used within a LightboxProvider');
  }
  return ctx.open;
}
