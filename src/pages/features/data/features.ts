import { Bot, Brain, Zap, MessageSquare, BarChart3, Shield } from 'lucide-react';
import { Feature } from '../types';

export const features: Feature[] = [
  {
    icon: Bot,
    title: 'Smart Virtual Agents',
    description: 'AI-powered agents that handle customer inquiries with human-like responses.',
    benefits: [
      '24/7 automated support',
      'Natural language understanding',
      'Multi-language support',
      'Contextual responses'
    ]
  },
  {
    icon: Brain,
    title: 'Adaptive Learning',
    description: 'Continuously improving AI models that learn from every interaction.',
    benefits: [
      'Pattern recognition',
      'Behavior analysis',
      'Performance optimization',
      'Custom training'
    ]
  },
  {
    icon: Zap,
    title: 'Instant Processing',
    description: 'Handle thousands of requests simultaneously with near-zero latency.',
    benefits: [
      'High-speed processing',
      'Parallel execution',
      'Auto-scaling',
      'Load balancing'
    ]
  },
  {
    icon: MessageSquare,
    title: 'Multi-Channel Support',
    description: 'Deploy AI agents across all your communication channels.',
    benefits: [
      'Email integration',
      'Chat widgets',
      'Social media',
      'SMS support'
    ]
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Gain deep insights into your automation performance.',
    benefits: [
      'Real-time monitoring',
      'Custom dashboards',
      'Trend analysis',
      'ROI tracking'
    ]
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security and compliance features.',
    benefits: [
      'End-to-end encryption',
      'Data privacy',
      'Access controls',
      'Audit logs'
    ]
  }
];