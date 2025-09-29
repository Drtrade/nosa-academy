import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Play, ExternalLink } from 'lucide-react';
import Button from '../common/Button';

const BlogModal = ({ post, isOpen, onClose }) => {
  if (!post) return null;

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-50 overflow-y-auto"
          >
            {/* Modal */}
            <div className="min-h-screen flex items-start justify-center p-2 xs:p-3 sm:p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 50 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl xs:rounded-3xl shadow-2xl max-w-4xl w-full my-4 xs:my-6 sm:my-8 overflow-hidden"
              >
                {/* Header */}
                <div className="relative">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 xs:h-56 sm:h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Close Button */}
                  <button
                    onClick={onClose}
                    className="absolute top-2 right-2 xs:top-3 xs:right-3 sm:top-4 sm:right-4 w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200 z-10"
                    aria-label="Close modal"
                  >
                    <X className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
                  </button>

                  {/* Title Overlay */}
                  <div className="absolute bottom-3 xs:bottom-4 sm:bottom-6 left-3 xs:left-4 sm:left-6 right-12 xs:right-14 sm:right-16">
                    <div className="flex flex-wrap items-center gap-2 xs:gap-2.5 sm:gap-3 mb-2 xs:mb-2.5 sm:mb-3">
                      <span className="px-2 py-0.5 xs:px-2.5 xs:py-1 sm:px-3 sm:py-1 bg-primary-600 text-white rounded-full text-[10px] xs:text-xs sm:text-sm font-semibold">
                        {post.category}
                      </span>
                      <span className="px-2 py-0.5 xs:px-2.5 xs:py-1 sm:px-3 sm:py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-[10px] xs:text-xs sm:text-sm font-semibold">
                        {post.club}
                      </span>
                    </div>
                    <h1 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight line-clamp-2">
                      {post.title}
                    </h1>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 xs:p-5 sm:p-6 md:p-8 space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-8">
                  {/* Meta Info */}
                  <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-2 xs:gap-4">
                    <div className="flex items-center space-x-2 xs:space-x-3 sm:space-x-4 text-gray-600">
                      <div className="flex items-center space-x-1.5 xs:space-x-2">
                        <Calendar className="w-4 h-4 xs:w-5 xs:h-5 flex-shrink-0" />
                        <span className="font-medium text-xs xs:text-sm sm:text-base">{formatDate(post.date)}</span>
                      </div>
                    </div>
                    <div className="text-xs xs:text-sm text-gray-600">
                      {Math.floor(Math.random() * 500) + 100} views
                    </div>
                  </div>

                  {/* Match Info */}
                  <div className="bg-primary-50 border border-primary-200 rounded-xl xs:rounded-2xl p-4 xs:p-5 sm:p-6">
                    <h3 className="font-semibold text-primary-900 mb-2 text-sm xs:text-base">Match Details</h3>
                    <p className="text-primary-800 text-xs xs:text-sm sm:text-base leading-relaxed">{post.match}</p>
                  </div>

                  {/* Video Embed */}
                  <div className="space-y-3 xs:space-y-4">
                    <h3 className="text-base xs:text-lg sm:text-xl font-bold text-gray-900 flex items-center">
                      <Play className="w-4 h-4 xs:w-5 xs:h-5 mr-2 text-primary-600 flex-shrink-0" />
                      Match Highlights
                    </h3>
                    <div className="relative pb-[56.25%] h-0 rounded-lg xs:rounded-xl overflow-hidden shadow-md xs:shadow-lg">
                      <iframe
                        src={post.video}
                        title={`${post.title} - Match Highlights`}
                        className="absolute top-0 left-0 w-full h-full"
                        allowFullScreen
                      />
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="prose prose-sm xs:prose-base sm:prose-lg max-w-none">
                    <div className="space-y-4 xs:space-y-5 sm:space-y-6">
                      <p className="text-sm xs:text-base sm:text-lg text-gray-700 leading-relaxed">
                        {post.content.paragraph1}
                      </p>
                      <p className="text-sm xs:text-base sm:text-lg text-gray-700 leading-relaxed">
                        {post.content.paragraph2}
                      </p>
                      <p className="text-sm xs:text-base sm:text-lg text-gray-700 leading-relaxed">
                        {post.content.paragraph3}
                      </p>
                    </div>
                  </div>

                  {/* Call to Action (commented out but mobile-ready) */}
                  {/* <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl xs:rounded-2xl p-5 xs:p-6 sm:p-8 text-center text-white">
                    <h3 className="text-lg xs:text-xl sm:text-2xl font-bold mb-3 xs:mb-4">Inspired by these moments?</h3>
                    <p className="text-sm xs:text-base sm:text-lg mb-4 xs:mb-5 sm:mb-6 opacity-90">
                      Join Nosa Sports Academy and start your own legendary journey
                    </p>
                    <div className="flex flex-col gap-3 xs:gap-4 justify-center">
                      <Button
                        variant="secondary"
                        size="lg"
                        onClick={onClose}
                        className="w-full xs:w-auto text-sm xs:text-base"
                      >
                        Register Now
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        className="w-full xs:w-auto border-white text-white hover:bg-white hover:text-primary-600 text-sm xs:text-base"
                      >
                        <ExternalLink className="w-4 h-4 xs:w-5 xs:h-5 mr-2" />
                        Learn More
                      </Button>
                    </div>
                  </div> */}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BlogModal;