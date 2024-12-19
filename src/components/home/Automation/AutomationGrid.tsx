import React from 'react';
import { Bot, Brain, Zap, MessageSquare, BarChart3, Settings } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'Smart Virtual Agents',
    description: 'AI-powered agents that handle customer inquiries 24/7 with human-like responses.'
  },
  {
    icon: Brain,
    title: 'Adaptive Learning',
    description: 'Agents that continuously learn from interactions to improve accuracy and efficiency.'
  },
  {
    icon: Zap,
    title: 'Instant Processing',
    description: 'Process thousands of requests simultaneously with near-zero latency.'
  },
  {
    icon: MessageSquare,
    title: 'Multi-Channel Support',
    description: 'Deploy agents across email, chat, social media, and messaging platforms.'
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    description: 'Real-time insights into agent performance and customer interactions.'
  },
  {
    icon: Settings,
    title: 'Custom Workflows',
    description: 'Design automated workflows tailored to your specific business needs.'
  }
];

export const AutomationGrid = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {features.map(({ icon: Icon, title, description }) => (
        <div
          key={title}
          className="relative group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent-neon/50 transition-all"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-accent-neon/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
          
          <div className="relative space-y-4">
            <div className="w-12 h-12 rounded-lg bg-accent-blue/20 flex items-center justify-center">
              <Icon className="w-6 h-6 text-accent-neon" />
            </div>
            
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-text-muted">{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};