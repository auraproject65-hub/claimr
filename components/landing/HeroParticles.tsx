'use client';

import { useEffect, useRef } from 'react';

const symbols = ['$', '€', '¥', '₿'];

export function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrame = 0;
    let particles: Array<{ x: number; y: number; vx: number; vy: number; char: string; size: number }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = Array.from({ length: 80 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        char: symbols[Math.floor(Math.random() * symbols.length)],
        size: 14 + Math.random() * 10
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        if (particle.x < -40) particle.x = canvas.width + 40;
        if (particle.x > canvas.width + 40) particle.x = -40;
        if (particle.y < -40) particle.y = canvas.height + 40;
        if (particle.y > canvas.height + 40) particle.y = -40;

        ctx.font = `${particle.size}px 'Space Grotesk', sans-serif`;
        ctx.fillStyle = 'rgba(0, 245, 76, 0.24)';
        ctx.fillText(particle.char, particle.x, particle.y);
      });
      animationFrame = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    animationFrame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 h-full w-full opacity-60" />;
}
