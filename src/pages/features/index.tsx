import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { FeaturesHero } from './sections/FeaturesHero';
import { FeaturesList } from './sections/FeaturesList';
import { FeaturesTestimonials } from './sections/FeaturesTestimonials';

export const FeaturesPage = () => {
  return (
    <PageLayout>
      <FeaturesHero />
      <FeaturesList />
      <FeaturesTestimonials />
    </PageLayout>
  );
};