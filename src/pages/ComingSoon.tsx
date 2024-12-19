import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, ArrowLeft, Construction } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const ComingSoonPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute inset-0 bg-gradient opacity-30" />
      </div>

      <div className="relative max-w-lg mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Brain className="w-12 h-12 text-accent-neon" />
          <span className="text-2xl font-bold bg-gradient-to-r from-accent-neon to-primary bg-clip-text text-transparent">
            Fusion
          </span>
        </div>

        <Construction className="w-16 h-16 text-accent-neon mx-auto mb-6 animate-float" />
        
        <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
        <p className="text-text-muted text-lg mb-8">
          We're working hard to bring you something amazing. Stay tuned!
        </p>

        <Button
          variant="ghost"
          size="lg"
          onClick={() => navigate('/')}
          className="gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Button>
      </div>
    </div>
  );
};