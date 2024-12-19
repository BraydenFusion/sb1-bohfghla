import React from 'react';
import { categories } from '../data/categories';

export const BlogCategories = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Categories</h2>
      <div className="space-y-2">
        {categories.map(category => (
          <button
            key={category.name}
            className="flex items-center justify-between w-full p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent-neon/50 transition-all text-left"
          >
            <span>{category.name}</span>
            <span className="text-sm text-text-muted">{category.count}</span>
          </button>
        ))}
      </div>
    </div>
  );
};