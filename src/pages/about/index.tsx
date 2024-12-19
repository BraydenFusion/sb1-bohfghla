import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { AboutHero } from './sections/AboutHero';
import { AboutMission } from './sections/AboutMission';
import { AboutTeam } from './sections/AboutTeam';
import { AboutValues } from './sections/AboutValues';
import { AboutAwards } from './sections/AboutAwards';

export const AboutPage = () => {
  return (
    <PageLayout>
      <AboutHero />
      <AboutMission />
      <AboutValues />
      <AboutTeam />
      <AboutAwards />
    </PageLayout>
  );
};