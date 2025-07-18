import React from 'react';

const AnimatedDots = () => {
  // Generate different types of dots with various animations
  const smallDots = Array.from({ length: 25 }, (_, i) => ({
    id: `small-${i}`,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 4,
    size: Math.random() * 3 + 1,
    animation: 'drift-1',
    color: `hsl(${263 + Math.random() * 30} ${60 + Math.random() * 30}% ${40 + Math.random() * 30}% / ${0.2 + Math.random() * 0.3})`,
  }));

  const mediumDots = Array.from({ length: 15 }, (_, i) => ({
    id: `medium-${i}`,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 6,
    size: Math.random() * 6 + 4,
    animation: 'drift-2',
    color: `hsl(${195 + Math.random() * 20} ${70 + Math.random() * 20}% ${50 + Math.random() * 20}% / ${0.3 + Math.random() * 0.3})`,
  }));

  const largeDots = Array.from({ length: 8 }, (_, i) => ({
    id: `large-${i}`,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 8,
    size: Math.random() * 12 + 8,
    animation: 'zoom-pulse',
    color: `hsl(${263 + Math.random() * 40} ${80 + Math.random() * 20}% ${60 + Math.random() * 20}% / ${0.1 + Math.random() * 0.2})`,
  }));

  const spiralDots = Array.from({ length: 6 }, (_, i) => ({
    id: `spiral-${i}`,
    left: 20 + (i * 15),
    top: 20 + (i * 10),
    delay: i * 0.5,
    size: 6,
    animation: 'spiral',
    color: `hsl(${142 + Math.random() * 20} ${60 + Math.random() * 20}% ${45 + Math.random() * 15}% / ${0.4 + Math.random() * 0.3})`,
  }));

  const allDots = [...smallDots, ...mediumDots, ...largeDots, ...spiralDots];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {allDots.map((dot) => (
        <div
          key={dot.id}
          className={`absolute rounded-full animate-${dot.animation}`}
          style={{
            left: `${dot.left}%`,
            top: `${dot.top}%`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            background: dot.color,
            animationDelay: `${dot.delay}s`,
            filter: 'blur(0.5px)',
          }}
        />
      ))}
      
      {/* Add some gradient overlay dots for extra drama */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-primary/20 to-transparent rounded-full animate-zoom-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-to-l from-blue-500/15 to-transparent rounded-full animate-drift-3" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-gradient-to-t from-purple-400/20 to-transparent rounded-full animate-drift-1" style={{ animationDelay: '3s' }} />
    </div>
  );
};

export default AnimatedDots;