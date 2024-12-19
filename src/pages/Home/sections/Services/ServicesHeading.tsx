import React from 'react';

export const ServicesHeading = () => {
  return (
    <div className="text-center space-y-4 mb-16">
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
        What We Do
        <span className="bg-gradient-to-r from-accent-neon to-primary bg-clip-text text-transparent block mt-2">
          Best
        </span>
      </h2>
      <p className="text-xl text-text-muted max-w-2xl mx-auto">
        Powerful AI solutions that transform how you engage with customers and manage your business.
      </p>
    </div>
  );
};