import React from 'react';
import { clients } from './data';

export const SocialProofLogos = () => {
  return (
    <div className="py-16 border-y border-white/10">
      <p className="text-center text-sm text-text-muted mb-8">TRUSTED BY INDUSTRY LEADERS</p>
      <div className="flex flex-wrap justify-center items-center gap-12">
        {clients.map(({ name, logo }) => (
          <div 
            key={name}
            className="w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all"
          >
            <img
              src={logo}
              alt={name}
              className="max-w-full max-h-full object-contain opacity-50 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>
    </div>
  );
};