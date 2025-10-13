'use client';

import * as Icons from 'lucide-react';
import { siteConfig } from '@/config/site';

export function StepList() {
  return (
    <section className="py-24 bg-gradient-sand">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-slate-text mb-4">
            Comment rejoindre ?
          </h2>
          <p className="text-lg text-slate-text/70">
            Suivez ces étapes simples pour commencer votre aventure sur Everdawn
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.steps.map((step, index) => {
            const IconComponent = Icons[step.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
            
            return (
              <div
                key={step.number}
                className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Numéro de l'étape */}
                <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-amber rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  {step.number}
                </div>
                
                {/* Icone */}
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-sand rounded-xl mb-6 mt-4 mx-auto">
                  {IconComponent && <IconComponent className="w-8 h-8 text-amber" />}
                </div>

                <h3 className="text-2xl font-semibold text-slate-text mb-3 text-center">
                  {step.title}
                </h3>
                <p className="text-slate-text/70 text-center leading-relaxed">
                  {step.description}
                </p>

                {/* Flèche de connexion (sauf dernière étape) */}
                {index < siteConfig.steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-amber">
                    <Icons.ArrowRight className="w-8 h-8" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
