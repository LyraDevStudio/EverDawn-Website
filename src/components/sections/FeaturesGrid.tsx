'use client';

import * as Icons from 'lucide-react';
import { siteConfig } from '@/config/site';

export function FeaturesGrid() {
  return (
    <section id="fonctionnalites" className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-slate-text mb-4">
            Fonctionnalités Uniques
          </h2>
          <p className="text-lg text-slate-text/70 max-w-2xl mx-auto">
            Découvrez toutes les fonctionnalités qui rendent Everdawn exceptionnel
          </p>
        </div>

        {/* Grille responsive identique à oneblock.fr */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {siteConfig.features.map((feature) => {
            const IconComponent = Icons[feature.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
            
            return (
              <div
                key={feature.id}
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-amber"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-sand rounded-lg mb-4 group-hover:scale-110 transition-transform">
                  {IconComponent && <IconComponent className="w-7 h-7 text-amber" />}
                </div>
                <h3 className="text-xl font-semibold text-slate-text mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-text/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
