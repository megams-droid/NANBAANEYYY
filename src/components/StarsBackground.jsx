import React, { useMemo } from 'react';

export default function StarsBackground() {
  // Generate static random star positions for performance
  const stars = useMemo(() => {
    return Array.from({ length: 70 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 1,
      opacity: Math.random() * 0.7 + 0.3,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep cosmic ambient background gradients */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[140px] animate-pulse-glow" />
      <div className="absolute bottom-1/3 right-10 w-[500px] h-[500px] bg-indigo-900/15 rounded-full blur-[160px]" />
      <div className="absolute top-1/2 left-10 w-[450px] h-[450px] bg-rose-900/10 rounded-full blur-[150px]" />

      {/* Floating Star Dots */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-amber-100"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            boxShadow: star.size > 2 ? '0 0 8px rgba(253, 224, 71, 0.8)' : 'none',
            animation: `floatSlow ${star.duration}s ease-in-out infinite alternate`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
