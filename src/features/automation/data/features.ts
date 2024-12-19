import { Bot, Brain, Zap, MessageSquare, BarChart3, Settings } from 'lucide-react';
import { AutomationFeature } from '../types';

export const automationFeatures: AutomationFeature[] = [
  {
    icon: Bot,
    title: 'Smart Virtual Agents',
    description: 'AI-powered agents that handle customer inquiries 24/7 with human-like responses.',
    category: 'core'
  },
  {
    icon: Brain,
    title: 'Adaptive Learning',
    description: 'Agents that continuously learn from interactions to improve accuracy and efficiency.',
    category: 'core'
  },
  {
    icon: Zap,
    title: 'Instant Processing',
    description: 'Process thousands of requests simultaneously with near-zero latency.',
    category: 'core'
  },
  {
    icon: MessageSquare,
    title: 'Multi-Channel Support',
    description: 'Deploy agents across email, chat, social media, and messaging platforms.',
    category: 'integration'
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    description: 'Real-time insights into agent performance and customer interactions.',
    category: 'analytics'
  },
  {
    icon: Settings,
    title: 'Custom Workflows',
    description: 'Design automated workflows tailored to your specific business needs.',
    category: 'integration'
  }
];