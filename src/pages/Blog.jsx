import React from 'react';
import BlogGrid from '../components/blog/BlogGrid';

const Blog = () => {
  const {post} = BlogGrid();

  return (
    <div className="min-h-screen pt-20">
      <MetaTags
        title={`${post.title} | Nosa Igiebor Sports Academy Blog`}
        description={post.excerpt}
        keywords={`${post.category}, football highlights, ${post.club}`}
        canonical={`/blog/${post.slug}`}
        ogType="article"
        ogImage={post.image}
      />
      <BlogGrid />
    </div>
  );
};

export default Blog;