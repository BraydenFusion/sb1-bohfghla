import React from 'react';
import { Search } from 'lucide-react';

export const DocSearch = () => {
  return (
    <div className="max-w-2xl mx-auto relative">
      <input
        type="search"
        placeholder="Search documentation..."
        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-accent-neon/50 focus:ring-1 focus:ring-accent-neon/50 transition-all text-white pl-12"
      />
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted w-5 h-5" />
    </div>
  );
};