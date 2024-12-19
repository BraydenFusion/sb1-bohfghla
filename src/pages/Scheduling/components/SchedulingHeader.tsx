import React from 'react';
import { Calendar, Clock, Users } from 'lucide-react';

export const SchedulingHeader = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold tracking-tight">
        Schedule a Meeting
      </h1>
      <p className="text-text-muted max-w-2xl">
        Book a time to discuss how Fusion AI can transform your business operations
        with intelligent automation solutions.
      </p>
      
      <div className="flex flex-wrap gap-6 mt-6">
        <div className="flex items-center gap-2 text-sm text-text-muted">
          <Clock className="w-4 h-4" />
          <span>30 Minutes</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-text-muted">
          <Calendar className="w-4 h-4" />
          <span>Available Mon-Fri</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-text-muted">
          <Users className="w-4 h-4" />
          <span>1-on-1 Meeting</span>
        </div>
      </div>
    </div>
  );
};