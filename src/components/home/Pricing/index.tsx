import React from 'react';
import { PricingHeading } from './PricingHeading';
import { PricingTiers } from './PricingTiers';
import { FeatureComparison } from './FeatureComparison';
import { PricingFAQ } from './PricingFAQ';

export const Pricing = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 wave-pattern opacity-10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PricingHeading />
        <PricingTiers />
        <FeatureComparison />
        <PricingFAQ />
      </div>
    </section>
  );
};