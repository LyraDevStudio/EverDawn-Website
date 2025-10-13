'use client';

import { siteConfig } from '@/config/site';

export function Footer() {
  return (
    <footer className="bg-gradient-amber text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Logo et description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={siteConfig.media.logo}
                alt={`Logo ${siteConfig.name}`}
                className="h-12 w-auto"
              />
              <span className="text-2xl font-display font-bold">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-white/90 leading-relaxed max-w-md">
              {siteConfig.footer.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {siteConfig.footer.links.navigation.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Communauté */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Communaute</h3>
            <ul className="space-y-2">
              {siteConfig.footer.links.social.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Barre de séparation */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/80 text-sm">
              {siteConfig.footer.copyright}
            </p>
            <div className="flex items-center gap-6">
              {siteConfig.footer.links.legal.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
