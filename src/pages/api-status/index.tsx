import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { ApiStatusHero } from './sections/ApiStatusHero';
import { ApiStatusMetrics } from './sections/ApiStatusMetrics';
import { ApiEndpoints } from './sections/ApiEndpoints';
import { ApiLimits } from './sections/ApiLimits';

export const ApiStatusPage = () => {
  return (
    <PageLayout>
      <ApiStatusHero />
      <ApiStatusMetrics />
      <ApiEndpoints />
      <ApiLimits />
    </PageLayout>
  );
};