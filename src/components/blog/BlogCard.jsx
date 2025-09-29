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
      className="bg-white rounded-xl xs:rounded-2xl shadow-md xs:shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      {/* Post Image */}
      <div className="relative overflow-hidden">
        <img 
          src={post.image}
          alt={post.title}
          className="w-full h-40 xs:h-44 sm:h-48 object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 left-2 xs:top-3 xs:left-3 sm:top-4 sm:left-4">
          <span className="px-2 py-0.5 xs:px-2.5 xs:py-1 sm:px-3 sm:py-1 bg-primary-600 text-white rounded-full text-[10px] xs:text-xs font-semibold">
            {post.category}
          </span>
        </div>
        <div className="absolute top-2 right-2 xs:top-3 xs:right-3 sm:top-4 sm:right-4">
          <span className="px-2 py-0.5 xs:px-2.5 xs:py-1 sm:px-3 sm:py-1 bg-black/50 backdrop-blur-sm text-white rounded-full text-[10px] xs:text-xs font-semibold">
            {post.club}
          </span>
        </div>
      </div>

      {/* Post Content */}
      <div className="p-4 xs:p-5 sm:p-6 space-y-3 xs:space-y-4">
        <div className="flex flex-col xs:flex-row xs:items-center gap-2 xs:gap-3 sm:gap-4 text-xs xs:text-sm text-gray-600">
          <div className="flex items-center space-x-1.5 xs:space-x-2">
            <Calendar className="w-3 h-3 xs:w-4 xs:h-4 flex-shrink-0" />
            <span className="truncate">{formatDate(post.date)}</span>
          </div>
          <div className="flex items-center space-x-1.5 xs:space-x-2">
            <Eye className="w-3 h-3 xs:w-4 xs:h-4 flex-shrink-0" />
            <span>{Math.floor(Math.random() * 500) + 100} views</span>
          </div>
        </div>

        <h2 className="text-base xs:text-lg sm:text-xl font-bold text-gray-900 leading-tight line-clamp-2">
          {post.title}
        </h2>

        <p className="text-xs xs:text-sm text-primary-600 font-medium line-clamp-1">
          {post.match}
        </p>

        <p className="text-sm xs:text-base text-gray-600 line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>

        <button
          onClick={() => onReadMore(post)}
          className="flex items-center space-x-1.5 xs:space-x-2 text-primary-600 hover:text-primary-700 font-medium text-xs xs:text-sm transition-colors duration-200 group"
        >
          <span>Read Full Story</span>
          <ArrowRight className="w-3 h-3 xs:w-4 xs:h-4 group-hover:translate-x-1 transition-transform duration-200" />
        </button>
      </div>
    </motion.article>
  );
};

export default BlogCard;