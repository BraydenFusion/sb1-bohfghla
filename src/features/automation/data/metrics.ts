import { Clock, Users, TrendingUp } from 'lucide-react';
import { AutomationMetric } from '../types';

export const automationMetrics: AutomationMetric[] = [
  {
    icon: Clock,
    value: '90%',
    label: 'Time Saved',
    description: 'Average reduction in response time',
    trend: 15
  },
  {
    icon: Users,
    value: '24/7',
    label: 'Availability',
    description: 'Round-the-clock customer support'
  },
  {
    icon: TrendingUp,
    value: '85%',
    label: 'Accuracy',
    description: 'In automated responses and actions',
    trend: 10
  }
];