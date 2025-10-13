'use client';

import { MessageCircle, ShoppingBag, ThumbsUp, ExternalLink } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function CommunityCtas() {
  return (
    <section id="communaute" className="py-24 bg-gradient-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Discord CTA */}
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-xl mb-6 mx-auto">
              <MessageCircle className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-text mb-4 text-center">
              Rejoignez Discord
            </h3>
            <p className="text-slate-text/70 mb-6 text-center">
              Discutez avec la communaute, participez aux evenements, et restez informe des dernieres nouveautes.
            </p>
            <a
              href={siteConfig.urls.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Rejoindre
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Boutique CTA */}
          <div id="boutique" className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="flex items-center justify-center w-16 h-16 bg-amber-100 rounded-xl mb-6 mx-auto">
              <ShoppingBag className="w-8 h-8 text-amber" />
            </div>
            <h3 className="text-2xl font-bold text-slate-text mb-4 text-center">
              Boutique
            </h3>
            <p className="text-slate-text/70 mb-6 text-center">
              Decouvrez nos packs exclusifs pour ameliorer votre experience de jeu et soutenir le serveur.
            </p>
            <a
              href={siteConfig.urls.store}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-amber text-white font-semibold rounded-lg hover:shadow-xl transition-all"
            >
              Voir la boutique
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Vote CTA */}
          <div id="vote" className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-xl mb-6 mx-auto">
              <ThumbsUp className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-text mb-4 text-center">
              Votez pour nous
            </h3>
            <p className="text-slate-text/70 mb-6 text-center">
              Soutenez Everdawn en votant quotidiennement et recevez des recompenses exclusives en jeu.
            </p>
            <a
              href={siteConfig.urls.vote}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
            >
              Voter maintenant
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
