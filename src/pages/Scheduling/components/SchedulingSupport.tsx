import React from 'react';

export const SchedulingSupport = () => {
  return (
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
  );
};