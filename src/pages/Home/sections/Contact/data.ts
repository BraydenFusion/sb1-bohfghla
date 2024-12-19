import { Phone, Mail, MessageSquare, Clock } from 'lucide-react';
import { ContactMethod } from './types';

export const contactMethods: ContactMethod[] = [
  {
    icon: Phone,
    title: 'Phone Support',
    details: '+1 (555) 123-4567',
    availability: 'Mon-Fri, 9AM-6PM EST'
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: 'support@fusion.ai',
    availability: '24/7 Response'
  },
  {
    icon: MessageSquare,
    title: 'Live Chat',
    details: 'Available 24/7',
    availability: 'Avg. Response Time: 2 mins'
  }
];