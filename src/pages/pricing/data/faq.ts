interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
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