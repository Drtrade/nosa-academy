import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Trophy, Award, Globe, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import { Owner } from '../../utils/contents';

const FounderIntro = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const { president } = Owner;

  const playHighlights = () => {
    setIsVideoPlaying(true);
    
  };

  const quickFactIcons = [Trophy, Award, Globe, Users];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Founder Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-semibold">
                <Trophy className="w-4 h-4 mr-2" />
                Meet Our Founder
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                {president.name}
                <span className="block text-2xl md:text-3xl text-primary-600 font-semibold mt-2">
                  "{president.nickname}"
                </span>
              </h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              {president.shortBio}
            </p>

            {/* Quick Facts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {president.quickFacts.map((fact, index) => {
                const IconComponent = quickFactIcons[index];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-medium text-gray-900">{fact}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/about">
                <Button size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                  Read Complete Story
                </Button>
              </Link>
              
              <Button
                variant="outline"
                size="lg"
                onClick={playHighlights}
                icon={<Play className="w-5 h-5" />}
              >
                Watch Career Highlights
              </Button>
            </div>
          </motion.div>

          {/* Founder Image & Video Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt={president.name}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Video Play Button Overlay */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={playHighlights}
                className="absolute inset-0 flex items-center justify-center group"
              >
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30 group-hover:bg-white/30 transition-all duration-300">
                  <Play className="w-10 h-10 text-white ml-1" />
                </div>
              </motion.button>

              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-white mb-2">Career Highlights</h3>
                <p className="text-white/90">Watch iconic goals and memorable moments</p>
              </div>
            </div>
            
            {/* Floating Achievement Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl max-w-xs border border-gray-100"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">AFCON winner</div>
                  <div className="text-sm text-gray-600">Nigeria 2013</div>
                </div>
              </div>
            </motion.div>

            {/* Video Modal would go here in a real implementation */}
            {isVideoPlaying && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                onClick={() => setIsVideoPlaying(false)}
              >
                <div className="relative w-full max-w-4xl aspect-video">
                  <video
                    className="w-full h-full rounded-xl"
                    controls
                    autoPlay
                  >
                    <source src={president.highlightVideo} type="video/mp4" />
                  </video>
                  <button
                    onClick={() => setIsVideoPlaying(false)}
                    className="absolute -top-12 right-0 text-white hover:text-gray-300 text-xl font-bold"
                  >
                    ✕ Close
                  </button>
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