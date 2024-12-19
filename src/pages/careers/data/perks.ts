import { Laptop, Globe, GraduationCap, Heart, Zap, Users } from 'lucide-react';
import { Perk } from '../types';

export const perks: Perk[] = [
  {
    icon: Laptop,
    title: 'Remote-First',
    description: 'Work from anywhere in the world with our flexible remote policy.'
  },
  {
    icon: Globe,
    title: 'Global Team',
    description: 'Join a diverse team of talented individuals from over 20 countries.'
  },
  {
    icon: GraduationCap,
    title: 'Learning Budget',
    description: '$2,500 annual budget for courses, conferences, and books.'
  },
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive health coverage and wellness programs.'
  },
  {
    icon: Zap,
    title: 'Latest Tech',
    description: 'Access to cutting-edge AI tools and technologies.'
  },
  {
    icon: Users,
    title: 'Team Events',
    description: 'Regular virtual and in-person team gatherings and retreats.'
  }
];