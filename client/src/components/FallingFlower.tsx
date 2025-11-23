import React from 'react';

// Flower component for falling animation
export default function FallingFlower({ delay, duration }: { delay: number; duration: number }) {
  const flowers = ['🌸', '🌺', '🌼', '🌻', '🌷'];
  const randomFlower = flowers[Math.floor(Math.random() * flowers.length)];
  const randomLeft = Math.random() * 100;
  const randomDuration = duration + Math.random() * 2;

  return (
    <div
      className="fixed pointer-events-none text-4xl"
      style={{
        left: `${randomLeft}%`,
        top: '-50px',
        animation: `fall ${randomDuration}s linear ${delay}s infinite`,
        opacity: 0.8,
        zIndex: 5,
      }}
    >
      {randomFlower}
    </div>
  );
}
