import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { Post } from '../types';

interface FeaturedPostCardProps {
  post: Post;
}

export const FeaturedPostCard = ({ post }: FeaturedPostCardProps) => {
  return (
    <article className="relative group rounded-xl overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>
      
      <div className="relative p-6 pt-48">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.categories.map(category => (
            <span
              key={category}
              className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-sm"
            >
              {category}
            </span>
          ))}
        </div>
        
        <h3 className="text-2xl font-bold mb-4 group-hover:text-accent-neon transition-colors">
          {post.title}
        </h3>
        
        <p className="text-text-muted mb-4">{post.excerpt}</p>
        
        <div className="flex items-center gap-6 text-sm text-text-muted">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{post.readTime} min read</span>
          </div>
        </div>
      </div>
    </article>
  );
};