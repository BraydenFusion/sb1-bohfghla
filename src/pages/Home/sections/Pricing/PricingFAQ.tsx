import React from 'react';
import { faqs } from './data';

export const PricingFAQ = () => {
  return (
    <div className="mt-24">
      <h3 className="text-2xl font-bold text-center mb-12">Frequently Asked Questions</h3>
      
      <div className="grid md:grid-cols-2 gap-8">
        {faqs.map(({ question, answer }) => (
          <div
            key={question}
            className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent-neon/50 transition-all"
          >
            <h4 className="text-lg font-semibold mb-3">{question}</h4>
            <p className="text-text-muted">{answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};