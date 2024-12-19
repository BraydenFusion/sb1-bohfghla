import { Award, Zap, Star } from 'lucide-react';
import { PartnershipTier } from '../types';

export const tiers: PartnershipTier[] = [
  {
    name: 'Solution Partner',
    description: 'For consultants and system integrators',
    icon: Award,
    benefits: [
      'Access to partner portal',
      'Sales enablement resources',
      'Technical documentation',
      'Partner support',
      'Co-marketing opportunities'
    ]
  },
  {
    name: 'Technology Partner',
    description: 'For software vendors and platforms',
    icon: Zap,
    benefits: [
      'API integration support',
      'Joint solution development',
      'Product roadmap access',
      'Partner certification',
      'Joint go-to-market'
    ]
  },
  {
    name: 'Strategic Partner',
    description: 'For enterprise-level partnerships',
    icon: Star,
    benefits: [
      'Dedicated partner manager',
      'Custom integration support',
      'Early access to features',
      'Executive sponsorship',
      'Revenue sharing options'
    ]
  }
];