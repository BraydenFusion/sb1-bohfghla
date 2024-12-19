import React from 'react';
import { ThreeDElement } from '@/components/ui/ThreeDElement';

export const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      {/* Animated gradient */}
      <div className="absolute inset-0 bg-gradient opacity-30" />
      
      {/* Interactive 3D element */}
      <ThreeDElement className="opacity-40" />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-background" />
    </div>
  );
};