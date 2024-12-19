import { LucideIcon } from 'lucide-react';

export interface MetricType {
  icon: LucideIcon;
  value: string;
  label: string;
  description: string;
}

export interface ClientType {
  name: string;
  logo: string;
}

export interface TestimonialType {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
}