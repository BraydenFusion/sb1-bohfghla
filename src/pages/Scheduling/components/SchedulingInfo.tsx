import React from 'react';
import { Shield, Clock, VideoIcon } from 'lucide-react';

export const SchedulingInfo = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-4">What to Expect</h3>
        <ul className="space-y-4">
          <li className="flex gap-3">
            <Clock className="w-5 h-5 text-accent-neon shrink-0" />
            <div>
              <p className="font-medium">30-Minute Discussion</p>
              <p className="text-sm text-text-muted">
                Brief overview of your needs and how we can help
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <VideoIcon className="w-5 h-5 text-accent-neon shrink-0" />
            <div>
              <p className="font-medium">Video Conference</p>
              <p className="text-sm text-text-muted">
                Meet via Google Meet or Zoom
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <Shield className="w-5 h-5 text-accent-neon shrink-0" />
            <div>
              <p className="font-medium">No Commitment Required</p>
              <p className="text-sm text-text-muted">
                Free consultation to explore possibilities
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-4">Need Help?</h3>
        <p className="text-sm text-text-muted mb-4">
          If you're having trouble scheduling or need immediate assistance, 
          please contact our support team.
        </p>
        <a 
          href="mailto:support@fusion.ai" 
          className="text-accent-neon hover:underline text-sm"
        >
          support@fusion.ai
        </a>
      </div>
    </div>
  );
};