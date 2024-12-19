import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { CaseStudy } from '../types';

interface CaseStudyCardProps {
  study: CaseStudy;
}

export const CaseStudyCard = ({ study }: CaseStudyCardProps) => {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-b from-accent-neon/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
      <div className="relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent-neon/50 transition-all space-y-6">
        <img
          src={study.logo}
          alt={study.company}
          className="h-12 w-auto"
        />
        
        <div>
          <h3 className="text-xl font-bold mb-2">{study.title}</h3>
          <p className="text-text-muted">{study.summary}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="font-semibold">{study.company}</div>
            <div className="text-sm text-text-muted">{study.industry}</div>
          </div>
          <Button
            variant="secondary"
            size="sm"
            className="group/button"
          >
            Read More
            <ArrowRight className="w-4 h-4 ml-2 group-hover/button:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};