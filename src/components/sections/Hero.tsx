'use client';

import { useState } from 'react';
import { Copy, Check, ExternalLink } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { MediaWithFallback } from '@/components/ui/MediaWithFallback';
import { ServerStatus } from '@/components/ui/ServerStatus';

export function Hero() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.urls.serverIp);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fond media (image/gif/video) */}
      <div className="absolute inset-0 z-0">
        <MediaWithFallback
          src={siteConfig.hero.backgroundMedia}
          alt="Fond hero Everdawn"
          className="w-full h-full object-cover"
          videoClassName="w-full h-full object-cover"
          priority
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-text/60 via-slate-text/40 to-sand/90" />
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-white mb-6 animate-fade-in drop-shadow-2xl">
          {siteConfig.hero.title}
        </h1>
        
        <p className="text-xl sm:text-2xl text-ivory mb-12 max-w-3xl mx-auto animate-fade-in animation-delay-200 drop-shadow-lg">
          {siteConfig.hero.subtitle}
        </p>

        {/* Server status and IP block */}
        <div className="flex flex-col items-center gap-4 mb-8 animate-fade-in animation-delay-400">
          {/* Server status */}
          <ServerStatus />
          
          {/* Bloc adresse IP */}
          <div className="inline-flex items-center gap-3 bg-ivory/95 backdrop-blur-sm px-6 py-4 rounded-xl shadow-2xl">
            <span className="text-2xl font-mono font-bold text-slate-text">
              {siteConfig.urls.serverIp}
            </span>
            <button
              onClick={copyToClipboard}
              className="p-2 hover:bg-sand rounded-lg transition-colors"
              aria-label="Copier l'adresse IP"
            >
              {copied ? (
                <Check className="w-6 h-6 text-green-600" />
              ) : (
                <Copy className="w-6 h-6 text-amber" />
              )}
            </button>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in animation-delay-600">
          <a
            href="#fonctionnalites"
            className="px-8 py-4 bg-gradient-amber text-white text-lg font-semibold rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 w-full sm:w-auto"
          >
            {siteConfig.hero.ctaPrimary}
          </a>
          <a
            href={siteConfig.urls.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-ivory text-slate-text text-lg font-semibold rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            {siteConfig.hero.ctaSecondary}
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-ivory rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-ivory rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
