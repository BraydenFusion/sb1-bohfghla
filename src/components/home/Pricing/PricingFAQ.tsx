import React from 'react';

const faqs = [
  {
    question: 'How does the 14-day free trial work?',
    answer: 'Start with full access to all features. No credit card required. Cancel anytime during the trial period with no charges.'
  },
  {
    question: 'Can I change plans later?',
    answer: 'Yes, upgrade or downgrade your plan at any time. Changes take effect immediately, and we will prorate any payments.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and offer invoice payment options for enterprise customers.'
  },
  {
    question: 'Is there a long-term commitment?',
    answer: 'No, all plans are month-to-month or annual. Cancel anytime with no penalties or hidden fees.'
  }
];

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