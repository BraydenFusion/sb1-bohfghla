import React from 'react';
import { MapPin, Clock, Building } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Position } from '../types';

interface JobCardProps {
  position: Position;
}

export const JobCard = ({ position }: JobCardProps) => {
  return (
    <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent-neon/50 transition-all">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold mb-2">{position.title}</h3>
          <p className="text-text-muted">{position.department}</p>
        </div>
        <Button variant="secondary" size="sm">Apply Now</Button>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm text-text-muted">
          <MapPin className="w-4 h-4" />
          <span>{position.location}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-text-muted">
          <Clock className="w-4 h-4" />
          <span>{position.type}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-text-muted">
          <Building className="w-4 h-4" />
          <span>{position.experience}</span>
        </div>
      </div>

      <p className="text-sm text-text-muted">{position.description}</p>
    </div>
  );
};