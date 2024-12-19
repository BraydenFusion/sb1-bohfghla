import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { PricingButton } from './PricingButton';

const plans = [
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

export const PricingTiers = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="space-y-12">
      {/* Billing Toggle - Adjusted spacing */}
      <div className="flex justify-center items-center gap-4 mb-8">
        <span className={!isAnnual ? 'text-white' : 'text-text-muted'}>Monthly</span>
        <button
          onClick={() => setIsAnnual(!isAnnual)}
          className="relative w-14 h-7 rounded-full bg-accent-blue/20 p-1 transition-colors hover:bg-accent-blue/30"
        >
          <div
            className={`w-5 h-5 rounded-full bg-accent-neon transition-transform ${
              isAnnual ? 'translate-x-7' : ''
            }`}
          />
        </button>
        <span className={isAnnual ? 'text-white' : 'text-text-muted'}>
          Annual <span className="text-accent-neon text-sm">(20% off)</span>
        </span>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative group p-8 rounded-xl backdrop-blur-sm border transition-all ${
              plan.popular
                ? 'bg-white/10 border-accent-neon/50 scale-105'
                : 'bg-white/5 border-white/10 hover:border-accent-neon/50'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent-neon text-background text-sm font-medium">
                Most Popular
              </div>
            )}

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="text-text-muted mt-2">{plan.description}</p>
              </div>

              <div className="text-4xl font-bold">
                {typeof plan.monthlyPrice === 'number' ? (
                  <>
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    <span className="text-lg text-text-muted font-normal">/mo</span>
                  </>
                ) : (
                  plan.price
                )}
              </div>

              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent-neon shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <PricingButton 
                text={plan.cta}
                isPopular={plan.popular}
              />
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-text-muted">
        All plans include a 14-day free trial. No credit card required.
      </p>
    </div>
  );
};