import React from 'react';

export const PricingHeading = () => {
  return (
    <div className="text-center space-y-4 mb-16">
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
        Simple Pricing for
        <span className="bg-gradient-to-r from-accent-neon to-primary bg-clip-text text-transparent block mt-2">
          Growing Businesses
        </span>
      </h2>
      <p className="text-xl text-text-muted max-w-2xl mx-auto">
        Start free, scale as you grow. No hidden fees or long-term commitments.
      </p>
    </div>
  );
};