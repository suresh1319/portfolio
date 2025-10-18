import React from 'react';

const ParticlesBackground = () => {
  return (
    <div className="global-particles">
      {Array.from({ length: 50 }, (_, i) => {
        const size = Math.random() * 4 + 2;
        const isSpecial = Math.random() > 0.8;
        const direction = Math.random() > 0.5 ? 1 : -1;
        return (
          <div 
            key={i} 
            className={`global-particle ${isSpecial ? 'special' : ''}`}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
              width: `${size}px`,
              height: `${size}px`,
              '--direction': direction
            }} 
          />
        );
      })}
    </div>
  );
};

export default ParticlesBackground;