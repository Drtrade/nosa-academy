import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Eye, ArrowRight } from 'lucide-react';

const BlogCard = ({ post, index, onReadMore }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      {/* Post Image */}
      <div className="relative overflow-hidden">
        <img 
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-primary-600 text-white rounded-full text-xs font-semibold">
            {post.category}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-black/50 text-white rounded-full text-xs font-semibold">
            {post.club}
          </span>
        </div>
      </div>

      {/* Post Content */}
      <div className="p-6 space-y-4">
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(post.date)}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Eye className="w-4 h-4" />
            <span>{Math.floor(Math.random() * 500) + 100} views</span>
          </div>
        </div>

        <h2 className="text-xl font-bold text-gray-900 leading-tight line-clamp-2">
          {post.title}
        </h2>

        <p className="text-sm text-primary-600 font-medium">
          {post.match}
        </p>

        <p className="text-gray-600 line-clamp-3">
          {post.excerpt}
        </p>

        <button
          onClick={() => onReadMore(post)}
          className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors duration-200"
        >
          <span>Read Full Story</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.article>
  );
};

export default BlogCard;