import React from 'react';
import { Button } from '@/components/ui/Button';
import { ArrowRight, MessageCircle } from 'lucide-react';

export const ServicesActions = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-16">
      <Button size="lg" hasGlow className="group">
        Explore All Features
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </Button>
      <Button variant="secondary" size="lg" className="gap-2">
        <MessageCircle className="w-5 h-5" />
        Talk to Our Experts
      </Button>
    </div>
  );
};