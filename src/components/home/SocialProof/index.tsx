import React from 'react';
import { SocialProofHeading } from './SocialProofHeading';
import { Metrics } from './Metrics';
import { ClientLogos } from './ClientLogos';
import { TestimonialCarousel } from './TestimonialCarousel';

export const SocialProof = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 wave-pattern opacity-10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SocialProofHeading />
        <Metrics />
        <ClientLogos />
        <TestimonialCarousel />
      </div>
    </section>
  );
};