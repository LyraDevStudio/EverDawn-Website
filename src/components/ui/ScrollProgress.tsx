'use client';

import { useEffect, useState } from 'react';

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / scrollHeight) * 100;
      setProgress(progress);
    };

    window.addEventListener('scroll', updateProgress);
    updateProgress(); // Initial call

    return () => {
      window.removeEventListener('scroll', updateProgress);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-sand/20 z-50">
      <div
        className="h-full bg-gradient-to-r from-amber to-amber-bright transition-all duration-150 ease-out shadow-lg shadow-amber/50"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
