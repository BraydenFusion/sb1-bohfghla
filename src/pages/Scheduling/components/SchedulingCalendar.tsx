import React, { useEffect } from 'react';
import { useCalendarEmbed } from '../hooks/useCalendarEmbed';

export const SchedulingCalendar = () => {
  const { containerRef } = useCalendarEmbed();

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
      <div 
        ref={containerRef}
        id="my-cal-inline" 
        className="w-full h-[600px] overflow-auto"
      />
    </div>
  );
};