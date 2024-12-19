import React from 'react';
import { Button } from '../ui/Button';

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 wave-pattern"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
            Join Over 22,000 AI Agency Owners
            <br />
            <span className="text-primary">Building on Agentive</span>
          </h1>
          <p className="mt-6 text-xl text-text-muted max-w-3xl mx-auto">
            Select your foundational model, personalize it with your custom knowledge and tools, and effortlessly deploy your Agent across websites and social platforms.
          </p>
          <div className="mt-10">
            <Button size="lg">Register Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};