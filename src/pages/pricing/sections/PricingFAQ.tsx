import React from 'react';
import { faqItems } from '../data/faq';

export const PricingFAQ = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {faqItems.map((item) => (
            <div
              key={item.question}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent-neon/50 transition-all"
            >
              <h3 className="text-lg font-semibold mb-3">{item.question}</h3>
              <p className="text-text-muted">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};