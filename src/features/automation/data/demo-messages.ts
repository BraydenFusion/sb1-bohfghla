import { AutomationMessage } from '../types';

export const demoMessages: AutomationMessage[] = [
  {
    role: 'user',
    content: 'I need help with my order #12345',
    timestamp: new Date()
  },
  {
    role: 'assistant',
    content: 'I can help you with that. Let me check your order status...',
    timestamp: new Date()
  },
  {
    role: 'assistant',
    content: 'Your order #12345 has been shipped and will arrive tomorrow by 5 PM.',
    timestamp: new Date()
  },
  {
    role: 'user',
    content: 'Can I change the delivery address?',
    timestamp: new Date()
  },
  {
    role: 'assistant',
    content: 'I\'ll help you update the delivery address. Please provide the new address.',
    timestamp: new Date()
  }
];