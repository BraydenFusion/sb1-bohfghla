import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { PricingPlan } from '../data/pricing';

interface PricingCardProps {
  plan: PricingPlan;
}

export const PricingCard = ({ plan }: PricingCardProps) => {
  return (
    <div
      className={`relative p-8 rounded-xl backdrop-blur-sm border transition-all ${
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
          {typeof plan.price === 'number' ? (
            <>
              ${plan.price}
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

        <Button
          variant={plan.popular ? 'primary' : 'secondary'}
          size="lg"
          hasGlow={plan.popular}
          className="w-full"
        >
          {plan.cta}
        </Button>
      </div>
    </div>
  );
};