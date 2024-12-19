import { LucideIcon } from 'lucide-react';

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
}

export interface Testimonial {
  author: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  feature: string;
  impact: {
    value: string;
    description: string;
  };
}