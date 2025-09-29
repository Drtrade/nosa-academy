import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Award, Users, Calendar, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import { HOME_CONTENT } from '../../utils/contents';

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const { hero } = HOME_CONTENT;

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const getStatIcon = (iconName) => {
    const icons = { Users, Award, Calendar, Globe };
    return icons[iconName] || Users;
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          poster="/path-to-poster-image.jpg" // Add poster for better loading
        >
          <source src={hero.videoUrl} type="video/mp4" />
          {/* Fallback image */}
          <div className="w-full h-full bg-gradient-to-r from-primary-900 to-accent-900"></div>
        </video>
        
        {/* Video Overlay - Enhanced for mobile readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 sm:bg-gradient-to-r sm:from-black/70 sm:to-black/50 z-10"></div>
        
        {/* Video Controls - Mobile optimized positioning */}
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 flex space-x-2 sm:space-x-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={togglePlay}
            className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200 border border-white/10"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? <Pause className="w-4 h-4 sm:w-6 sm:h-6" /> : <Play className="w-4 h-4 sm:w-6 sm:h-6 ml-0.5" />}
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleMute}
            className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200 border border-white/10"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? <VolumeX className="w-4 h-4 sm:w-6 sm:h-6" /> : <Volume2 className="w-4 h-4 sm:w-6 sm:h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Hero Content - Fully responsive */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 text-center py-8 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 xs:space-y-6 sm:space-y-8"
        >
          {/* Badge - Mobile optimized */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-3 py-2 xs:px-4 xs:py-2.5 sm:px-6 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs xs:text-sm sm:text-base max-w-xs xs:max-w-sm sm:max-w-none mx-auto"
          >
            <Award className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 mr-1.5 xs:mr-2 flex-shrink-0" />
            <span className="font-medium xs:font-semibold leading-tight">
              <span className="hidden xs:inline">Founded by </span>
              <span className="xs:hidden">By </span>
              African Nation Cup Winner
            </span>
          </motion.div>

          {/* Main Title - Responsive typography */}
          <div className="space-y-2 xs:space-y-3 sm:space-y-4">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight xs:leading-tight sm:leading-tight">
              <span className="block">{hero.title}</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 mt-1 xs:mt-2">
                {hero.subtitle}
              </span>
            </h1>
          </div>
          
          {/* Description - Mobile optimized */}
          <div className="px-2 xs:px-4 sm:px-0">
            <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-gray-200 max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-4xl mx-auto leading-relaxed xs:leading-relaxed sm:leading-relaxed">
              {hero.description}
            </p>
          </div>

          {/* CTA Buttons - Fully responsive */}
          <div className="flex flex-col space-y-3 xs:space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center items-center pt-2 xs:pt-4 sm:pt-6">
            <Link to="/register" className="w-full xs:w-auto">
              <Button 
                size="lg" 
                className="w-full xs:w-auto min-w-[280px] xs:min-w-[200px] sm:min-w-[200px] bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-sm xs:text-base py-3 xs:py-3 sm:py-4 font-semibold"
              >
                <ArrowRight className="w-4 h-4 xs:w-5 xs:h-5 mr-2" />
                Start Your Journey
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full xs:w-auto min-w-[280px] xs:min-w-[200px] sm:min-w-[200px] text-white border-white hover:bg-white hover:text-gray-900 text-sm xs:text-base py-3 xs:py-3 sm:py-4 font-semibold transition-all duration-200"
              onClick={togglePlay}
            >
              <Play className="w-4 h-4 xs:w-5 xs:h-5 mr-2" />
              {isPlaying ? 'Pause Video' : 'Play Video'}
            </Button>
          </div>

        
        </motion.div>
      </div>

      {/* Scroll Indicator - Mobile optimized */}
      <motion.div 
        className="absolute bottom-4 xs:bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-5 h-8 xs:w-6 xs:h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-0.5 xs:w-1 h-2 xs:h-3 bg-white/50 rounded-full mt-1.5 xs:mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;