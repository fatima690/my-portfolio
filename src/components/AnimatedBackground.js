import React, { useState, useEffect, useCallback } from 'react';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
  const [particles, setParticles] = useState([]);
  const colors = ['#E3D3B6', '#D8C9A9', '#EDE0C8', '#F0E6D2', '#D9C7A7'];

  const createParticle = useCallback((x, y) => {
    const size = Math.random() * 30 + 10;
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    return {
      id: Date.now() + Math.random(),
      x,
      y,
      size,
      color,
      speedX: Math.random() * 4 - 2,
      speedY: Math.random() * -3 - 2,
      rotation: Math.random() * 360,
      rotationSpeed: Math.random() * 10 - 5,
      opacity: 1,
      shrink: 0.95 + Math.random() * 0.05
    };
  }, []);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Créer plusieurs particules au clic
    const newParticles = [];
    const particleCount = 10 + Math.floor(Math.random() * 10);
    
    for (let i = 0; i < particleCount; i++) {
      newParticles.push(createParticle(x, y));
    }
    
    setParticles(prev => [...prev, ...newParticles]);
  };

  useEffect(() => {
    let animationFrameId;
    
    const updateParticles = () => {
      setParticles(prevParticles => 
        prevParticles
          .map(particle => ({
            ...particle,
            x: particle.x + particle.speedX,
            y: particle.y + particle.speedY,
            rotation: particle.rotation + particle.rotationSpeed,
            size: particle.size * particle.shrink,
            opacity: particle.opacity * 0.98,
            speedY: particle.speedY + 0.1 // Gravité
          }))
          .filter(particle => 
            particle.opacity > 0.1 && 
            particle.size > 0.5 &&
            particle.y < window.innerHeight + 100
          )
      );
      
      animationFrameId = requestAnimationFrame(updateParticles);
    };
    
    animationFrameId = requestAnimationFrame(updateParticles);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      className="animated-background" 
      onClick={handleClick}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        backgroundColor: '#FAF3E0',
        overflow: 'hidden'
      }}
    >
      {particles.map(particle => (
        <div
          key={particle.id}
          style={{
            position: 'absolute',
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            borderRadius: '50%',
            opacity: particle.opacity,
            transform: `rotate(${particle.rotation}deg)`,
            pointerEvents: 'none',
            transition: 'all 0.1s ease-out',
            boxShadow: `0 0 10px ${particle.color}`
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
