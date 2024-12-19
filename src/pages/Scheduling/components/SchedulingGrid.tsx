import React from 'react';
import { SchedulingCalendar } from './SchedulingCalendar';
import { SchedulingSidebar } from './SchedulingSidebar';

export const SchedulingGrid = () => {
  return (
    <div className="mt-8 grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <SchedulingCalendar />
      </div>
      <div className="lg:col-span-1">
        <SchedulingSidebar />
      </div>
    </div>
  );
};