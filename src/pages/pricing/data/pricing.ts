export interface PricingPlan {
  name: string;
  description: string;
  price: number | 'Custom';
  features: string[];
  cta: string;
  popular?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses getting started with AI',
    price: 49,
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
    name: 'Professional',
    description: 'Ideal for growing businesses with scaling needs',
    price: 99,
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