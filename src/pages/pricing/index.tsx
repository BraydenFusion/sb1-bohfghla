import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { PricingHero } from './sections/PricingHero';
import { PricingTiers } from './sections/PricingTiers';
import { PricingFeatures } from './sections/PricingFeatures';
import { PricingFAQ } from './sections/PricingFAQ';

export const PricingPage = () => {
  return (
    <PageLayout>
      <PricingHero />
      <PricingTiers />
      <PricingFeatures />
      <PricingFAQ />
    </PageLayout>
  );
};