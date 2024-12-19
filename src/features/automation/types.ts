export interface AutomationMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp?: Date;
}

export interface AutomationFeature {
  icon: React.ElementType;
  title: string;
  description: string;
  category: 'core' | 'analytics' | 'integration';
}

export interface AutomationMetric {
  icon: React.ElementType;
  value: string;
  label: string;
  description: string;
  trend?: number;
}