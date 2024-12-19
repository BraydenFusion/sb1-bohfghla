import { PlanType, FeatureCategoryType, FAQType } from './types';

export const plans: PlanType[] = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses getting started with AI automation',
    monthlyPrice: 49,
    annualPrice: 39,
    features: [
      'Up to 1,000 AI interactions/month',
      '24/7 AI customer support',
      'Basic analytics dashboard',
      'Email support',
      'Community access'
    ],
    cta: 'Start Free Trial'
  },
  {
    name: 'Growth',
    description: 'Ideal for growing businesses with scaling automation needs',
    monthlyPrice: 99,
    annualPrice: 79,
    features: [
      'Up to 5,000 AI interactions/month',
      'Advanced AI customization',
      'Priority support',
      'API access',
      'Custom integrations',
      'Team collaboration tools'
    ],
    cta: 'Start Free Trial',
    popular: true
  },
  {
    name: 'Enterprise',
    description: 'Custom solutions for large organizations',
    price: 'Custom',
    features: [
      'Unlimited AI interactions',
      'Dedicated success manager',
      'Custom AI model training',
      'SLA guarantees',
      'Advanced security features',
      'Priority feature access'
    ],
    cta: 'Contact Sales'
  }
];

export const features: FeatureCategoryType[] = [
  {
    category: 'AI Capabilities',
    items: [
      { name: 'AI Customer Support', starter: true, growth: true, enterprise: true },
      { name: 'Custom AI Training', starter: false, growth: true, enterprise: true },
      { name: 'Multi-language Support', starter: false, growth: true, enterprise: true },
      { name: 'Advanced AI Analytics', starter: false, growth: false, enterprise: true }
    ]
  },
  {
    category: 'Integration & API',
    items: [
      { name: 'Basic Integrations', starter: true, growth: true, enterprise: true },
      { name: 'API Access', starter: false, growth: true, enterprise: true },
      { name: 'Custom Webhooks', starter: false, growth: true, enterprise: true },
      { name: 'SSO Integration', starter: false, growth: false, enterprise: true }
    ]
  }
];

export const faqs: FAQType[] = [
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