import { LucideIcon } from 'lucide-react';

export interface CommunityFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Event {
  id: number;
  title: string;
  type: 'virtual' | 'in-person';
  date: string;
  time: string;
  location?: string;
  attendees: number;
  isFree: boolean;
}

export interface Member {
  id: number;
  name: string;
  role: string;
  avatar: string;
  contribution: string;
  github?: string;
  twitter?: string;
}

export interface Resource {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
}