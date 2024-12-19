import React from 'react';
import { LucideIcon } from 'lucide-react';

interface PainPointCardProps {
  icon: LucideIcon;
  title: string;
  problem: string;
  solution: string;
  metric: string;
}

export const PainPointCard = ({ icon: Icon, title, problem, solution, metric }: PainPointCardProps) => {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-b from-accent-neon/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
      <div className="relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent-neon/50 transition-all space-y-4">
        <div className="w-12 h-12 rounded-lg bg-accent-blue/20 flex items-center justify-center">
          <Icon className="w-6 h-6 text-accent-neon" />
        </div>
        
        <h3 className="text-xl font-semibold">{title}</h3>
        
        <div className="space-y-2">
          <p className="text-text-muted">{problem}</p>
          <p className="text-white">{solution}</p>
        </div>
        
        <div className="text-2xl font-bold bg-gradient-to-r from-accent-neon to-primary bg-clip-text text-transparent">
          {metric}
        </div>
      </div>
    </div>
  );
};