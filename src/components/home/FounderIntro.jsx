import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Trophy, Award, Globe, Users, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import { Owner } from '../../utils/contents';

const FounderIntro = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const { president } = Owner;

  const playHighlights = () => {
    setIsVideoPlaying(true);
  };

  const closeVideo = () => {
    setIsVideoPlaying(false);
  };

  const quickFactIcons = [Trophy, Award, Globe, Users];

  return (
    <section className="py-12 xs:py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-12 sm:gap-16 items-center">
          
          {/* Founder Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 xs:space-y-8 order-1 lg:order-1"
          >
            <div className="space-y-4 xs:space-y-6">
              <div className="inline-flex items-center px-3 py-1.5 xs:px-4 xs:py-2 bg-primary-100 text-primary-800 rounded-full text-xs xs:text-sm font-semibold">
                <Trophy className="w-3 h-3 xs:w-4 xs:h-4 mr-1.5 xs:mr-2" />
                Meet Our Founder
              </div>
              
              <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                {president.name}
              </h2>
            </div>

            <p className="text-sm xs:text-base sm:text-lg text-gray-700 leading-relaxed">
              {president.shortBio}
            </p>

            {/* Quick Facts - Mobile optimized grid */}
            <div className="grid grid-cols-1 gap-3 xs:gap-4">
              {president.quickFacts.map((fact, index) => {
                const IconComponent = quickFactIcons[index];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-3 p-3 xs:p-4 bg-white rounded-lg xs:rounded-xl shadow-sm border border-gray-100"
                  >
                    <div className="w-8 h-8 xs:w-10 xs:h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-4 h-4 xs:w-5 xs:h-5 text-white" />
                    </div>
                    <span className="font-medium text-gray-900 text-sm xs:text-base leading-tight">
                      {fact}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Action Buttons - Mobile optimized */}
            <div className="flex flex-col gap-3 xs:gap-4 pt-2 xs:pt-4">
              <Link to="/about" className="w-full xs:w-auto">
                <Button 
                  size="lg" 
                  className="w-full xs:w-auto min-w-[280px] xs:min-w-[220px] text-sm xs:text-base py-3 xs:py-4 font-semibold"
                >
                  <ArrowRight className="w-4 h-4 xs:w-5 xs:h-5 mr-2" />
                  Read Complete Story
                </Button>
              </Link>
              
              <Button
                variant="outline"
                size="lg"
                onClick={playHighlights}
                className="w-full xs:w-auto min-w-[280px] xs:min-w-[220px] text-sm xs:text-base py-3 xs:py-4 font-semibold"
              >
                <Play className="w-4 h-4 xs:w-5 xs:h-5 mr-2" />
                <span className="hidden xs:inline">Watch Career Highlights</span>
                <span className="xs:hidden">Career Highlights</span>
              </Button>
            </div>
          </motion.div>

          {/* Founder Image & Video Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-2 lg:order-2"
          >
            <div className="relative overflow-hidden rounded-2xl xs:rounded-3xl shadow-xl xs:shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt={president.name}
                className="w-full h-64 xs:h-80 sm:h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Video Play Button Overlay - Mobile optimized */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={playHighlights}
                className="absolute inset-0 flex items-center justify-center group"
                aria-label="Play career highlights video"
              >
                <div className="w-14 h-14 xs:w-16 xs:h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30 group-hover:bg-white/30 transition-all duration-300">
                  <Play className="w-6 h-6 xs:w-7 xs:h-7 sm:w-10 sm:h-10 text-white ml-0.5 xs:ml-1" />
                </div>
              </motion.button>

              {/* Bottom overlay text - Mobile responsive */}
              <div className="absolute bottom-3 xs:bottom-4 sm:bottom-6 left-3 xs:left-4 sm:left-6 right-3 xs:right-4 sm:right-6">
                <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-white mb-1 xs:mb-2">
                  Career Highlights
                </h3>
                <p className="text-white/90 text-xs xs:text-sm sm:text-base">
                  <span className="hidden xs:inline">Watch iconic goals and memorable moments</span>
                  <span className="xs:hidden">Iconic goals & moments</span>
                </p>
              </div>
            </div>
            
            {/* Floating Achievement Card - Mobile responsive positioning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-3 -right-3 xs:-bottom-4 xs:-right-4 sm:-bottom-6 sm:-right-6 bg-white rounded-xl xs:rounded-2xl p-3 xs:p-4 sm:p-6 shadow-lg xs:shadow-xl max-w-[140px] xs:max-w-[160px] sm:max-w-xs border border-gray-100"
            >
              <div className="flex items-center space-x-2 xs:space-x-3 mb-2 xs:mb-3">
                <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-gray-900 text-xs xs:text-sm sm:text-base leading-tight">
                    AFCON Winner
                  </div>
                  <div className="text-[10px] xs:text-xs sm:text-sm text-gray-600">
                    Nigeria 2013
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Video Modal - Mobile optimized */}
            {isVideoPlaying && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-3 xs:p-4 sm:p-6"
                onClick={closeVideo}
              >
                <div className="relative w-full max-w-4xl">
                  {/* Close button - Mobile optimized */}
                  <button
                    onClick={closeVideo}
                    className="absolute -top-8 xs:-top-10 sm:-top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
                    aria-label="Close video"
                  >
                    <X className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8" />
                  </button>
                  
                  {/* Video container with aspect ratio */}
                  <div className="relative w-full aspect-video bg-black rounded-lg xs:rounded-xl overflow-hidden">
                    <video
                      className="w-full h-full"
                      controls
                      autoPlay
                      playsInline
                      onClick={(e) => e.stopPropagation()}
                    >
                      <source src={president.highlightVideo} type="video/mp4" />
                      <p className="text-white text-center p-4">
                        Your browser doesn't support video playback.
                      </p>
                    </video>
                  </div>
                  
                  {/* Mobile instruction text */}
                  <p className="text-white/70 text-center mt-3 xs:mt-4 text-xs xs:text-sm">
                    Tap outside to close
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderIntro;