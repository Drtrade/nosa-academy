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
            className="fixed inset-0 bg-black/50 z-50 overflow-y-auto"
          >
            {/* Modal */}
            <div className="min-h-screen flex items-start justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 50 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full my-8 overflow-hidden"
              >
                {/* Header */}
                <div className="relative">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Close Button */}
                  <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  {/* Title Overlay */}
                  <div className="absolute bottom-6 left-6 right-16">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="px-3 py-1 bg-primary-600 text-white rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold">
                        {post.club}
                      </span>
                    </div>
                    <h1 className="text-3xl font-bold text-white leading-tight">
                      {post.title}
                    </h1>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-8">
                  {/* Meta Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-gray-600">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-5 h-5" />
                        <span className="font-medium">{formatDate(post.date)}</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">
                      {Math.floor(Math.random() * 500) + 100} views
                    </div>
                  </div>

                  {/* Match Info */}
                  <div className="bg-primary-50 border border-primary-200 rounded-2xl p-6">
                    <h3 className="font-semibold text-primary-900 mb-2">Match Details</h3>
                    <p className="text-primary-800">{post.match}</p>
                  </div>

                  {/* Video Embed */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 flex items-center">
                      <Play className="w-5 h-5 mr-2 text-primary-600" />
                      Match Highlights
                    </h3>
                    <div className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden shadow-lg">
                      <iframe
                        src={post.video}
                        title={`${post.title} - Match Highlights`}
                        className="absolute top-0 left-0 w-full h-full"
                        allowFullScreen
                      />
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="prose prose-lg max-w-none">
                    <div className="space-y-6">
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {post.content.paragraph1}
                      </p>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 text-center text-white">
                    <h3 className="text-2xl font-bold mb-4">Inspired by these moments?</h3>
                    <p className="text-lg mb-6 opacity-90">
                      Join Nosa Sports Academy and start your own legendary journey
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button
                        variant="secondary"
                        size="lg"
                        onClick={onClose}
                      >
                        Register Now
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        className="border-white text-white hover:bg-white hover:text-primary-600"
                        icon={<ExternalLink className="w-5 h-5" />}
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
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