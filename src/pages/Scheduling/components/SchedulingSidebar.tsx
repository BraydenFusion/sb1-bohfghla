import React from 'react';
import { SchedulingInfo } from './SchedulingInfo';
import { SchedulingSupport } from './SchedulingSupport';

export const SchedulingSidebar = () => {
  return (
    <div className="space-y-6">
      <SchedulingInfo />
      <SchedulingSupport />
    </div>
  );
};