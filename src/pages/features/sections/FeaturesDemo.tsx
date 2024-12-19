import React from 'react';
import { Button } from '@/components/ui/Button';
import { Play, Pause, RotateCw } from 'lucide-react';
import { useAutomationDemo } from '@/features/automation/hooks/useAutomationDemo';
import { AutomationMessage } from '@/features/automation/components/AutomationMessage';
import { demoMessages } from '@/features/automation/data/demo-messages';

export const FeaturesDemo = () => {
  const { isPlaying, displayedMessages, togglePlay, reset } = useAutomationDemo(demoMessages);

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">See It in Action</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Watch how our AI agents handle real-world scenarios
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Live Demo</h3>
              <div className="flex gap-2">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={togglePlay}
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
                  onClick={reset}
                >
                  <RotateCw className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-4 min-h-[300px]">
              {displayedMessages.map((message, index) => (
                <AutomationMessage key={index} message={message} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};