'use client';

import { useState, useEffect } from 'react';
import { ImageOff } from 'lucide-react';

interface MediaWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  videoClassName?: string;
  priority?: boolean;
}

/**
 * Composant intelligent qui detecte le type de media (image/gif/video)
 * et affiche un placeholder elegant si le fichier est manquant
 */
export function MediaWithFallback({
  src,
  alt,
  className = '',
  videoClassName = '',
  priority = false,
}: MediaWithFallbackProps) {
  const [mediaType, setMediaType] = useState<'image' | 'video' | 'error'>('image');
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Detecter le type de media par l'extension
    const ext = src.split('.').pop()?.toLowerCase();
    if (ext && ['mp4', 'webm', 'ogg'].includes(ext)) {
      setMediaType('video');
    } else {
      setMediaType('image');
    }
  }, [src]);

  // Placeholder si le media est manquant
  if (hasError || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-sand text-slate-text ${className}`}
      >
        <ImageOff className="w-12 h-12 mb-2 text-amber opacity-60" />
        <p className="text-sm font-medium text-slate-text/70">Media manquant</p>
        <p className="text-xs text-slate-text/50 mt-1 text-center px-4">
          {alt || 'Aucune description disponible'}
        </p>
      </div>
    );
  }

  // Rendu video
  if (mediaType === 'video') {
    return (
      <video
        src={src}
        className={videoClassName || className}
        autoPlay
        loop
        muted
        playsInline
        onError={() => setHasError(true)}
      >
        <track kind="captions" />
      </video>
    );
  }

  // Rendu image ou GIF
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      onError={() => setHasError(true)}
    />
  );
}
