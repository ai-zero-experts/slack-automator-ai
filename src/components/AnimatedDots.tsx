import React from 'react';

const AnimatedDots = () => {
  // Generate random positions for dots
  const dots = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 2,
    size: Math.random() * 4 + 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="absolute rounded-full bg-primary/20 animate-pulse-slow"
          style={{
            left: `${dot.left}%`,
            top: `${dot.top}%`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            animationDelay: `${dot.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedDots;