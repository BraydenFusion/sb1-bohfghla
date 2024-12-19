import { Users, Clock, Award } from 'lucide-react';
import { MetricType, ClientType, TestimonialType } from './types';

export const metrics: MetricType[] = [
  {
    icon: Users,
    value: '50+',
    label: 'Businesses Transformed',
    description: 'Across various industries'
  },
  {
    icon: Clock,
    value: '10,000+',
    label: 'Hours Saved',
    description: 'Through automation'
  },
  {
    icon: Award,
    value: '95%',
    label: 'Client Retention',
    description: 'Industry-leading satisfaction'
  }
];

export const clients: ClientType[] = [
  { 
    name: 'Hilton',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Hilton_Hotels_%26_Resorts_logo.svg'
  },
  { 
    name: 'Notion',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png'
  },
  { 
    name: 'Salesforce',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg'
  },
  { 
    name: 'Slack',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg'
  }
];

export const testimonials: TestimonialType[] = [
  {
    quote: "Fusion's AI agents have revolutionized how we handle customer support. Our response times are down 85% and customer satisfaction is at an all-time high.",
    author: "Sarah Chen",
    role: "Head of Customer Success",
    company: "TechFlow Solutions",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=96&h=96"
  },
  {
    quote: "The automation capabilities have transformed our scheduling system. We've eliminated double bookings and increased our booking efficiency by 92%.",
    author: "Michael Rodriguez",
    role: "Operations Director",
    company: "InnovateX",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=96&h=96"
  },
  {
    quote: "Implementing Fusion was a game-changer for our CRM processes. What used to take hours now happens automatically in minutes.",
    author: "Emily Thompson",
    role: "CTO",
    company: "DataSync Pro",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=96&h=96"
  }
];