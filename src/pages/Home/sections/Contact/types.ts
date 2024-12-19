import { LucideIcon } from 'lucide-react';

export interface FormData {
  fullName: string;
  email: string;
  businessType: string;
  message: string;
  consent: boolean;
}

export interface ContactMethod {
  icon: LucideIcon;
  title: string;
  details: string;
  availability: string;
}