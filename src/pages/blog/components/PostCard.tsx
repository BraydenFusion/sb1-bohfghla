import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { Post } from '../types';

interface PostCardProps {
  post: Post;
}

export const PostCard = ({ post }: PostCardProps) => {
  return (
    <article className="group">
      <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {post.categories.map(category => (
            <span
              key={category}
              className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm"
            >
              {category}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-bold group-hover:text-accent-neon transition-colors">
          {post.title}
        </h3>
        
        <p className="text-text-muted">{post.excerpt}</p>
        
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