import { LucideIcon } from 'lucide-react';

export interface PartnershipTier {
  name: string;
  description: string;
  benefits: string[];
  icon: LucideIcon;
}

export interface Partner {
  name: string;
  logo: string;
  type: string;
  description: string;
}

export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ProcessStep {
  icon: LucideIcon;
  title: string;
  description: string;
}