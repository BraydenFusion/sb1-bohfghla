import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/utils/cn';

interface ServiceBlockProps {
  title: string;
  description: string;
  metrics: string[];
  icon: LucideIcon;
  imageUrl: string;
  reversed?: boolean;
}

export const ServiceBlock = ({
  title,
  description,
  metrics,
  icon: Icon,
  imageUrl,
  reversed = false
}: ServiceBlockProps) => {
  return (
    <div className={cn(
      "flex flex-col lg:flex-row items-center gap-12 py-16",
      reversed && "lg:flex-row-reverse"
    )}>
      {/* Content */}
      <div className="flex-1 space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-accent-blue/20 flex items-center justify-center">
            <Icon className="w-6 h-6 text-accent-neon" />
          </div>
          <h3 className="text-2xl font-bold">{title}</h3>
        </div>

        <p className="text-lg text-text-muted">{description}</p>

        <div className="flex flex-wrap gap-4">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm"
            >
              {metric}
            </div>
          ))}
        </div>
      </div>

      {/* Image */}
      <div className="flex-1 relative group">
        <div className="absolute inset-0 bg-gradient-radial from-accent-neon/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <img
          src={imageUrl}
          alt={title}
          className="w-full rounded-xl shadow-2xl border border-white/10 backdrop-blur-sm"
        />
      </div>
    </div>
  );
};