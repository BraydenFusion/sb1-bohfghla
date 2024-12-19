import { ClipboardCheck, BookOpen, Award, Rocket } from 'lucide-react';
import { ProcessStep } from '../types';

export const steps: ProcessStep[] = [
  {
    icon: ClipboardCheck,
    title: 'Apply',
    description: 'Submit your partnership application'
  },
  {
    icon: BookOpen,
    title: 'Train',
    description: 'Complete partner certification'
  },
  {
    icon: Award,
    title: 'Certify',
    description: 'Get certified as a partner'
  },
  {
    icon: Rocket,
    title: 'Launch',
    description: 'Start growing your business'
  }
];