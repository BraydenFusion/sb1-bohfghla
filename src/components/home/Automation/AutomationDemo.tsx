import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { Play, Pause, RotateCw } from 'lucide-react';

const demoMessages = [
  { role: 'user', content: 'I need help with my order #12345' },
  { role: 'assistant', content: 'I can help you with that. Let me check your order status...' },
  { role: 'assistant', content: 'Your order #12345 has been shipped and will arrive tomorrow by 5 PM.' },
  { role: 'user', content: 'Can I change the delivery address?' },
  { role: 'assistant', content: 'I\'ll help you update the delivery address. Please provide the new address.' }
];

export const AutomationDemo = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayedMessages, setDisplayedMessages] = useState<typeof demoMessages>([]);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      if (currentMessageIndex < demoMessages.length) {
        setDisplayedMessages(prev => [...prev, demoMessages[currentMessageIndex]]);
        setCurrentMessageIndex(prev => prev + 1);
      } else {
        setIsPlaying(false);
      }
    }, 2000);

    return () => clearInterval(timer);
  }, [isPlaying, currentMessageIndex]);

  const resetDemo = () => {
    setDisplayedMessages([]);
    setCurrentMessageIndex(0);
    setIsPlaying(true);
  };

  return (
    <div className="relative max-w-2xl mx-auto mb-16">
      <div className="absolute inset-0 bg-gradient-radial from-accent-neon/20 to-transparent opacity-50" />
      
      <div className="relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Live Agent Demo</h3>
          <div className="flex gap-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4" />
              )}
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={resetDemo}
            >
              <RotateCw className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="space-y-4 min-h-[300px]">
          {displayedMessages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.role === 'user'
                    ? 'bg-accent-blue/20 text-white'
                    : 'bg-white/5 text-text-muted'
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};