import React from 'react';
import { SchedulingLayout } from './layouts/SchedulingLayout';
import { SchedulingContent } from './components/SchedulingContent';

export const SchedulingPage = () => {
  return (
    <SchedulingLayout>
      <SchedulingContent />
    </SchedulingLayout>
  );
};