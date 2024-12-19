import React from 'react';
import { Brain, Zap, BarChart3 } from 'lucide-react';

export const HeroVisual = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto retro-container">
      <div className="absolute inset-0 retro-grid opacity-20" />
      <div className="scanline" />
      <div className="relative grid grid-cols-3 gap-4 p-8">
        <IconCard Icon={Brain} label="AI Analysis" delay="0" />
        <IconCard Icon={Zap} label="Instant Insights" delay="150" />
        <IconCard Icon={BarChart3} label="Growth Metrics" delay="300" />
      </div>
    </div>
  );
};

const IconCard = ({ 
  Icon, 
  label, 
  delay 
}: { 
  Icon: React.ElementType; 
  label: string; 
  delay: string;
}) => (
  <div 
    className="flex flex-col items-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent-neon/50 transition-all animate-float"
    style={{ 
      animation: `float 3s ease-in-out ${delay}ms infinite`,
      boxShadow: '0 0 20px var(--accent-neon)'
    }}
  >
    <Icon className="w-8 h-8 text-accent-neon mb-2" />
    <span className="text-sm text-text-muted text-center">{label}</span>
  </div>
);