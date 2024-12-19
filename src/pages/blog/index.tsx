import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { BlogHero } from './sections/BlogHero';
import { BlogFeatured } from './sections/BlogFeatured';
import { BlogGrid } from './sections/BlogGrid';
import { BlogCategories } from './sections/BlogCategories';
import { BlogNewsletter } from './sections/BlogNewsletter';

export const BlogPage = () => {
  return (
    <PageLayout>
      <BlogHero />
      <BlogFeatured />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-4 gap-12">
          <div className="lg:col-span-3">
            <BlogGrid />
          </div>
          <div className="space-y-12">
            <BlogCategories />
            <BlogNewsletter />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};