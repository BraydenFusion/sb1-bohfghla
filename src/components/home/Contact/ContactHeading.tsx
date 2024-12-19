import React from 'react';

export const ContactHeading = () => {
  return (
    <div className="text-center space-y-4 mb-16">
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
        Ready to Transform Your Business?
        <span className="bg-gradient-to-r from-accent-neon to-primary bg-clip-text text-transparent block mt-2">
          Let's Start Your Success Story Today
        </span>
      </h2>
      <p className="text-xl text-text-muted max-w-2xl mx-auto">
        Schedule a free consultation and discover how AI automation can revolutionize your operations.
      </p>
    </div>
  );
};