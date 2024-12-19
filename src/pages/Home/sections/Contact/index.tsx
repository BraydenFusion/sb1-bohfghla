import React from 'react';
import { ContactHeading } from './ContactHeading';
import { ContactForm } from './ContactForm';
import { ContactMethods } from './ContactMethods';
import { ContactTrust } from './ContactTrust';

export const Contact = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 wave-pattern opacity-10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactHeading />
        
        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          <ContactForm />
          <div className="space-y-12">
            <ContactMethods />
            <ContactTrust />
          </div>
        </div>
      </div>
    </section>
  );
};