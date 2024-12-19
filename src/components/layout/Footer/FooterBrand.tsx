import React from 'react';
import { Brain } from 'lucide-react';

export const FooterBrand = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Brain className="w-8 h-8 text-accent-neon" />
        <span className="text-xl font-bold bg-gradient-to-r from-accent-neon to-primary bg-clip-text text-transparent">
          Fusion
        </span>
      </div>
      
      <p className="text-sm text-text-muted leading-relaxed">
        Powering the Future of Business with AI. Transform your operations with intelligent automation solutions.
      </p>
    </div>
  );
};