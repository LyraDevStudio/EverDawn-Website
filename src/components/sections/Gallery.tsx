'use client';

import { useState } from 'react';
import { MediaWithFallback } from '@/components/ui/MediaWithFallback';
import { siteConfig } from '@/config/site';

export function Gallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const galleryItems = [
    { src: '/assets/media/gallery/img1.jpg', alt: 'Spawn principal d\'Everdawn' },
    { src: '/assets/media/gallery/img2.gif', alt: 'Animation magique' },
    { src: '/assets/media/gallery/img3.mp4', alt: 'Cinematique d\'introduction' },
    { src: '/assets/media/gallery/img4.jpg', alt: 'Ile de joueur' },
    { src: '/assets/media/gallery/img5.jpg', alt: 'Donjon mystique' },
    { src: '/assets/media/gallery/img6.gif', alt: 'Effet de rang' },
  ];

  return (
    <section className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-slate-text mb-4">
            Galerie
          </h2>
          <p className="text-lg text-slate-text/70">
            Decouvrez l\'univers magique d\'Everdawn en images
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="relative aspect-video rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <MediaWithFallback
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover"
                videoClassName="w-full h-full object-cover"
              />
              
              {/* Overlay au survol */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-text/80 via-slate-text/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold text-lg">{item.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
