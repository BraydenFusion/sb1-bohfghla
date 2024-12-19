import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { CommunityHero } from './sections/CommunityHero';
import { CommunityFeatures } from './sections/CommunityFeatures';
import { CommunityEvents } from './sections/CommunityEvents';
import { CommunitySpotlight } from './sections/CommunitySpotlight';
import { CommunityResources } from './sections/CommunityResources';

export const CommunityPage = () => {
  return (
    <PageLayout>
      <CommunityHero />
      <CommunityFeatures />
      <CommunityEvents />
      <CommunitySpotlight />
      <CommunityResources />
    </PageLayout>
  );
};