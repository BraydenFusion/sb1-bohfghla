import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  metrics: string[];
  imageUrl: string;
}

export const ServiceCard = ({
  icon: Icon,
  title,
  description,
  metrics,
  imageUrl
}: ServiceCardProps) => {
  return (
    <div className="relative group h-full">
      <div className="absolute inset-0 bg-gradient-to-b from-accent-neon/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
      
      <div className="relative h-full p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent-neon/50 transition-all space-y-6">
        {/* Icon and Title */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-accent-blue/20 flex items-center justify-center">
            <Icon className="w-6 h-6 text-accent-neon" />
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>

        {/* Image */}
        <div className="relative aspect-video rounded-lg overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>

        {/* Description */}
        <p className="text-text-muted">{description}</p>

        {/* Metrics */}
        <div className="flex flex-wrap gap-2">
          {metrics.map((metric, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm"
            >
              {metric}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <Button
          variant="secondary"
          size="sm"
          className="w-full group/button"
        >
          Learn More
          <ArrowRight className="w-4 h-4 ml-2 group-hover/button:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
};