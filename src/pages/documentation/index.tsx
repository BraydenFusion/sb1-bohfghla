import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { DocHero } from './sections/DocHero';
import { DocContent } from './sections/DocContent';

export const DocumentationPage = () => {
  return (
    <PageLayout>
      <DocHero />
      <DocContent />
    </PageLayout>
  );
};