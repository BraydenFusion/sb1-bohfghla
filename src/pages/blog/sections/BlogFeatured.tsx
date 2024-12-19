import React from 'react';
import { featuredPosts } from '../data/posts';
import { FeaturedPostCard } from '../components/FeaturedPostCard';

export const BlogFeatured = () => {
  return (
    <section className="py-12 bg-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-8">Featured Posts</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {featuredPosts.map(post => (
            <FeaturedPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};