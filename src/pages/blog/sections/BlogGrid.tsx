import React from 'react';
import { PostCard } from '../components/PostCard';
import { posts } from '../data/posts';

export const BlogGrid = () => {
  return (
    <div className="space-y-12">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Latest Posts</h2>
        <select className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm">
          <option>Most Recent</option>
          <option>Most Popular</option>
          <option>Trending</option>
        </select>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};