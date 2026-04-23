'use client';

import { useState, useEffect } from 'react';
import { siteConfig } from '@/lib/config';

export default function UIExtensions() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackTop, setShowBackTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / total) * 100;
      setScrollProgress(isNaN(progress) ? 0 : progress);
      setShowBackTop(scrolled > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div 
        id="scroll-progress" 
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Progresso de leitura"
        style={{ width: `${scrollProgress}%` }} 
      />
      
      <button 
        id="back-top" 
        className={showBackTop ? 'visible' : ''} 
        onClick={scrollToTop}
        aria-label="Voltar para o topo da página"
        title="Voltar ao topo"
      >
        <span aria-hidden="true">↑</span>
      </button>

      <a 
        id="whats-float" 
        href={`https://wa.me/${siteConfig.contact.whatsapp}`}
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Falar conosco pelo WhatsApp"
        title="WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.469 2.027 7.77L0 32l8.466-2.001A15.94 15.94 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.28 13.28 0 0 1-6.771-1.849l-.485-.288-5.025 1.187 1.234-4.9-.318-.504A13.266 13.266 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333z"/>
        </svg>
      </a>
    </>
  );
}
