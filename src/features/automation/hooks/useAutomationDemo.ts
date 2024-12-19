import { useState, useEffect } from 'react';
import { AutomationMessage } from '../types';

export const useAutomationDemo = (messages: AutomationMessage[], interval = 2000) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedMessages, setDisplayedMessages] = useState<AutomationMessage[]>([]);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      if (currentIndex < messages.length) {
        setDisplayedMessages(prev => [...prev, messages[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
      } else {
        setIsPlaying(false);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isPlaying, currentIndex, messages, interval]);

  const reset = () => {
    setDisplayedMessages([]);
    setCurrentIndex(0);
    setIsPlaying(true);
  };

  return {
    isPlaying,
    displayedMessages,
    togglePlay: () => setIsPlaying(!isPlaying),
    reset
  };
};