import React from 'react';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

interface PricingButtonProps {
  text: string;
  isPopular?: boolean;
}

export const PricingButton = ({ text, isPopular }: PricingButtonProps) => {
  return (
    <Button
      variant={isPopular ? 'primary' : 'secondary'}
      size="sm"
      hasGlow={isPopular}
      className="w-full group transition-all hover:scale-[1.02] whitespace-nowrap text-xs font-medium leading-none"
    >
      {text}
      <ArrowRight className="w-3 h-3 ml-1.5 group-hover:translate-x-1 transition-transform" />
    </Button>
  );
};