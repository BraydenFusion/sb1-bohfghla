import { useEffect, useRef } from 'react';
import { initializeCalendar } from '../utils/calendar';

export const useCalendarEmbed = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    initializeCalendar();
  }, []);

  return { containerRef };
};