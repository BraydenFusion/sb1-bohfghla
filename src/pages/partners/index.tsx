import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { PartnersHero } from './sections/PartnersHero';
import { PartnershipTiers } from './sections/PartnershipTiers';
import { PartnersList } from './sections/PartnersList';
import { PartnershipBenefits } from './sections/PartnershipBenefits';
import { PartnershipProcess } from './sections/PartnershipProcess';

export const PartnersPage = () => {
  return (
    <PageLayout>
      <PartnersHero />
      <PartnershipTiers />
      <PartnersList />
      <PartnershipBenefits />
      <PartnershipProcess />
    </PageLayout>
  );
};