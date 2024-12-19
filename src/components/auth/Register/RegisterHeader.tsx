import React from 'react';
import { Brain } from 'lucide-react';

export const RegisterHeader = () => {
  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center gap-2 mb-6">
        <Brain className="w-8 h-8 text-accent-neon" />
        <span className="text-xl font-bold bg-gradient-to-r from-accent-neon to-primary bg-clip-text text-transparent">
          Fusion
        </span>
      </div>
      
      <h2 className="text-2xl font-bold tracking-tight mb-2">
        Create Your Account
      </h2>
      <p className="text-text-muted">
        Join thousands of businesses automating their operations
      </p>
    </div>
  );
};