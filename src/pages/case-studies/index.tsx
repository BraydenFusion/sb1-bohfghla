import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { CaseStudiesHero } from './sections/CaseStudiesHero';
import { CaseStudiesList } from './sections/CaseStudiesList';
import { CaseStudiesFilter } from './sections/CaseStudiesFilter';
import { CaseStudiesTestimonials } from './sections/CaseStudiesTestimonials';

export const CaseStudiesPage = () => {
  return (
    <PageLayout>
      <CaseStudiesHero />
      <CaseStudiesFilter />
      <CaseStudiesList />
      <CaseStudiesTestimonials />
    </PageLayout>
  );
};