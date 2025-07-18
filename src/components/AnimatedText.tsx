import React, { useState, useEffect } from 'react';

const AnimatedText = () => {
  const words = ['community', 'workspace', 'team', 'startup', 'company', 'organization'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsVisible(true);
      }, 300);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <span 
      className={`inline-block bg-gradient-primary bg-clip-text text-transparent transition-all duration-300 ${
        isVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-2'
      }`}
    >
      {words[currentWordIndex]}
    </span>
  );
};

export default AnimatedText;