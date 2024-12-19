import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { FAQCategory } from './components/FAQCategory';
import { faqCategories } from './data/faqs';

export const FAQPage = () => {
  return (
    <PageLayout>
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-text-muted max-w-2xl mx-auto">
              Find answers to common questions about Fusion AI's features, pricing, and support
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-16">
            {faqCategories.map((category, index) => (
              <FAQCategory key={index} category={category} />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};