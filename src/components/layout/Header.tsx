'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Bloquer le scroll quand le menu mobile est ouvert
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-ivory/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#accueil" className="flex items-center space-x-3 group">
              <img
                src={siteConfig.media.logo}
                alt={`Logo ${siteConfig.name}`}
                className="h-12 w-auto transition-transform group-hover:scale-105"
              />
              <span className="text-2xl font-display font-bold text-slate-text hidden sm:block">
                {siteConfig.name}
              </span>
            </a>

            {/* Navigation desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              {siteConfig.navigation.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-text hover:text-amber transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA Button desktop */}
            <a
              href={siteConfig.urls.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block px-6 py-2.5 bg-gradient-amber text-white font-semibold rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Rejoindre Discord
            </a>

            {/* Burger menu mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-slate-text hover:text-amber transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Menu mobile */}
      <div
        className={`fixed inset-0 z-40 bg-ivory transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-8">
          {siteConfig.navigation.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl font-display font-bold text-slate-text hover:text-amber transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={siteConfig.urls.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 px-8 py-4 bg-gradient-amber text-white text-xl font-semibold rounded-lg hover:shadow-xl transition-all"
          >
            Rejoindre Discord
          </a>
        </div>
      </div>
    </>
  );
}
