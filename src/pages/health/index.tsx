import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { HealthHero } from './sections/HealthHero';
import { HealthMetrics } from './sections/HealthMetrics';
import { HealthIncidents } from './sections/HealthIncidents';
import { HealthSubscribe } from './sections/HealthSubscribe';

export const HealthPage = () => {
  return (
    <PageLayout>
      <HealthHero />
      <HealthMetrics />
      <HealthIncidents />
      <HealthSubscribe />
    </PageLayout>
  );
};