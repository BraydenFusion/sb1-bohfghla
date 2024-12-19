import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { ContactHero } from './sections/ContactHero';
import { ContactForm } from './sections/ContactForm';
import { ContactInfo } from './sections/ContactInfo';
import { ContactOffices } from './sections/ContactOffices';

export const ContactPage = () => {
  return (
    <PageLayout>
      <ContactHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12">
          <ContactForm />
          <div className="space-y-12">
            <ContactInfo />
            <ContactOffices />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};