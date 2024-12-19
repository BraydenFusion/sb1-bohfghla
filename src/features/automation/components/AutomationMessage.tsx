import React from 'react';
import { cn } from '@/utils/cn';
import { AutomationMessage as MessageType } from '../types';

interface Props {
  message: MessageType;
}

export const AutomationMessage = ({ message }: Props) => {
  const isUser = message.role === 'user';
  
  return (
    <div className={cn('flex', isUser ? 'justify-end' : 'justify-start')}>
      <div
        className={cn(
          'max-w-[80%] p-3 rounded-lg',
          isUser ? 'bg-accent-blue/20 text-white' : 'bg-white/5 text-text-muted'
        )}
      >
        {message.content}
      </div>
    </div>
  );
};