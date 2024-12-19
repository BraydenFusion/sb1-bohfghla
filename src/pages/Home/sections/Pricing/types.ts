export interface PlanType {
  name: string;
  description: string;
  monthlyPrice?: number;
  annualPrice?: number;
  price?: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export interface FeatureItemType {
  name: string;
  starter: boolean;
  growth: boolean;
  enterprise: boolean;
}

export interface FeatureCategoryType {
  category: string;
  items: FeatureItemType[];
}

export interface FAQType {
  question: string;
  answer: string;
}