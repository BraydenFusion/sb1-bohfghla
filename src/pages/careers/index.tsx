import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { CareersHero } from './sections/CareersHero';
import { CareersList } from './sections/CareersList';
import { CareersPerks } from './sections/CareersPerks';
import { CareersValues } from './sections/CareersValues';
import { CareersTestimonials } from './sections/CareersTestimonials';

export const CareersPage = () => {
  return (
    <PageLayout>
      <CareersHero />
      <CareersList />
      <CareersPerks />
      <CareersValues />
      <CareersTestimonials />
    </PageLayout>
  );
};