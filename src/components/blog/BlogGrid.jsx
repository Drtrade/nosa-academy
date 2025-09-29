import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Calendar } from 'lucide-react';
import BlogCard from './BlogCard';
import BlogModal from './BlogModal';
import { BLOG_POSTS } from '../../utils/contents';

const BlogGrid = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Sort posts by date (newest first)
  const sortedPosts = [...BLOG_POSTS].sort((a, b) => new Date(b.date) - new Date(a.date));
  
  // Get unique categories
  const categories = ['all', ...new Set(BLOG_POSTS.map(post => post.category))];

  // Filter posts
  const filteredPosts = sortedPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.club.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleReadMore = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
  };

  return (
    <section className="py-12 xs:py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 xs:mb-10 sm:mb-12"
        >
          <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 xs:mb-4 leading-tight">
            Career Highlights & Stories
          </h1>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 max-w-xs xs:max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto px-2 xs:px-0 leading-relaxed">
            <span className="hidden sm:inline">
              Relive the greatest moments from Nosa Igiebor's legendary football career
            </span>
            <span className="sm:hidden">
              Greatest moments from Nosa Igiebor's legendary career
            </span>
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl xs:rounded-2xl shadow-md xs:shadow-lg p-4 xs:p-5 sm:p-6 mb-8 xs:mb-10 sm:mb-12"
        >
          <div className="flex flex-col gap-3 xs:gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 xs:w-5 xs:h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search stories, matches..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 xs:pl-10 pr-3 xs:pr-4 py-2.5 xs:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm xs:text-base"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 xs:w-5 xs:h-5 text-gray-400 pointer-events-none" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-9 xs:pl-10 pr-8 xs:pr-10 py-2.5 xs:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white appearance-none text-sm xs:text-base"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-3 xs:mt-4 flex flex-col xs:flex-row xs:items-center xs:justify-between gap-2 text-xs xs:text-sm text-gray-600">
            <span>
              Showing <span className="font-semibold">{filteredPosts.length}</span> of {BLOG_POSTS.length} stories
            </span>
            <div className="flex items-center space-x-1.5 xs:space-x-2">
              <Calendar className="w-3 h-3 xs:w-4 xs:h-4" />
              <span>Sorted by latest</span>
            </div>
          </div>
        </motion.div>

        {/* Blog Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8">
            {filteredPosts.map((post, index) => (
              <BlogCard
                key={post.id}
                post={post}
                index={index}
                onReadMore={handleReadMore}
              />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 xs:py-16"
          >
            <div className="w-20 h-20 xs:w-24 xs:h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 xs:mb-6">
              <Search className="w-10 h-10 xs:w-12 xs:h-12 text-gray-400" />
            </div>
            <h3 className="text-lg xs:text-xl font-semibold text-gray-900 mb-2">
              No stories found
            </h3>
            <p className="text-sm xs:text-base text-gray-600 px-4">
              Try adjusting your search terms or category filter
            </p>
          </motion.div>
        )}

        {/* Load More Button */}
        {filteredPosts.length >= 6 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mt-8 xs:mt-10 sm:mt-12"
          >
            <button className="w-full xs:w-auto px-6 xs:px-8 py-3 xs:py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-lg font-semibold hover:from-primary-700 hover:to-accent-700 transition-all duration-200 text-sm xs:text-base shadow-md hover:shadow-lg">
              Load More Stories
            </button>
          </motion.div>
        )}
      </div>

      {/* Blog Modal */}
      <BlogModal
        post={selectedPost}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default BlogGrid;