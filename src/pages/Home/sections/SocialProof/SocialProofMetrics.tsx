import React from 'react';
import { metrics } from './data';

export const SocialProofMetrics = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8 mb-24">
      {metrics.map(({ icon: Icon, value, label, description }) => (
        <div 
          key={label}
          className="relative group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent-neon/50 transition-all"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-accent-neon/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
          <div className="relative space-y-4">
            <div className="w-12 h-12 rounded-lg bg-accent-blue/20 flex items-center justify-center">
              <Icon className="w-6 h-6 text-accent-neon" />
            </div>
            <div className="text-3xl font-bold bg-gradient-to-r from-accent-neon to-primary bg-clip-text text-transparent">
              {value}
            </div>
            <div>
              <div className="font-semibold">{label}</div>
              <div className="text-sm text-text-muted">{description}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};