import React, { useEffect, useRef } from 'react';
import { cn } from '@/utils/cn';

interface ThreeDElementProps {
  className?: string;
}

export const ThreeDElement = ({ className }: ThreeDElementProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const frameRef = useRef<number>();

  class Particle {
    x: number;
    y: number;
    z: number;
    baseX: number;
    baseY: number;
    baseZ: number;
    speed: number;
    
    constructor(x: number, y: number, z: number) {
      this.x = x;
      this.y = y;
      this.z = z;
      this.baseX = x;
      this.baseY = y;
      this.baseZ = z;
      this.speed = Math.random() * 0.5 + 0.2;
    }

    update(mouseX: number, mouseY: number) {
      const dx = mouseX - this.x;
      const dy = mouseY - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const maxDist = 100;

      if (dist < maxDist) {
        const force = (maxDist - dist) / maxDist;
        this.x -= (dx / dist) * force * this.speed;
        this.y -= (dy / dist) * force * this.speed;
      }

      this.x += (this.baseX - this.x) * 0.05;
      this.y += (this.baseY - this.y) * 0.05;
      this.z = this.baseZ + Math.sin(Date.now() * 0.001 + this.x * 0.01) * 20;
    }

    draw(ctx: CanvasRenderingContext2D) {
      const scale = (1000 + this.z) / 1000;
      const x = this.x * scale;
      const y = this.y * scale;
      const r = 2 * scale;

      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 242, 254, ${scale * 0.5})`;
      ctx.fill();
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const init = () => {
      particlesRef.current = [];
      const numParticles = 100;
      const spacing = canvas.offsetWidth / 10;

      for (let i = 0; i < numParticles; i++) {
        const x = (i % 10) * spacing;
        const y = Math.floor(i / 10) * spacing;
        const z = Math.random() * 200 - 100;
        particlesRef.current.push(new Particle(x, y, z));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      particlesRef.current.forEach(particle => {
        particle.update(mouseRef.current.x, mouseRef.current.y);
        particle.draw(ctx);
      });

      frameRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    resize();
    init();
    animate();

    window.addEventListener('resize', resize);
    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={cn(
        'absolute inset-0 w-full h-full',
        'transition-opacity duration-1000',
        'pointer-events-none',
        className
      )}
    />
  );
};