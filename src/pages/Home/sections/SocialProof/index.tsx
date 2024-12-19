import React from 'react';
import { SocialProofHeading } from './SocialProofHeading';
import { SocialProofMetrics } from './SocialProofMetrics';
import { SocialProofLogos } from './SocialProofLogos';
import { SocialProofTestimonials } from './SocialProofTestimonials';

export const SocialProof = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 wave-pattern opacity-10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SocialProofHeading />
        <SocialProofMetrics />
        <SocialProofLogos />
        <SocialProofTestimonials />
      </div>
    </section>
  );
};