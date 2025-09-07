import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

const SocialMediaLinks = ({ links, size = 'md', showLabels = false }) => {
  const getSocialIcon = (platform) => {
    const icons = {
      facebook: Facebook,
      instagram: Instagram,
      linkedin: Linkedin,
      threads: ({ className }) => (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.5v-.007c.024-3.581 1.205-6.334 3.509-8.184C7.06 2.35 9.914 1.5 13 1.5h.007c3.581.024 6.334 1.205 8.184 3.509C22.65 7.06 23.5 9.914 23.5 13v.007c-.024 3.581-1.205 6.334-3.509 8.184C17.94 23.65 15.086 24.5 12 24.5h.186zm4.5-11c0-2.485-2.015-4.5-4.5-4.5s-4.5 2.015-4.5 4.5 2.015 4.5 4.5 4.5 4.5-2.015 4.5-4.5z"/>
        </svg>
      ),
      tiktok: ({ className }) => (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      ),
      twitter: Twitter,
      youtube: Youtube
    };
    return icons[platform] || Facebook;
  };

  const getSocialColor = (platform) => {
    const colors = {
      facebook: 'hover:bg-blue-600',
      instagram: 'hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500',
      linkedin: 'hover:bg-blue-700',
      threads: 'hover:bg-gray-800',
      tiktok: 'hover:bg-black',
      twitter: 'hover:bg-blue-400',
      youtube: 'hover:bg-red-600'
    };
    return colors[platform] || 'hover:bg-gray-600';
  };

  const getSocialLabel = (platform) => {
    const labels = {
      facebook: 'Facebook',
      instagram: 'Instagram',
      linkedin: 'LinkedIn',
      threads: 'Threads',
      tiktok: 'TikTok',
      twitter: 'Twitter',
      youtube: 'YouTube'
    };
    return labels[platform] || platform;
  };

  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-14 h-14'
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-7 h-7'
  };

  return (
    <div className={`flex ${showLabels ? 'flex-col space-y-3' : 'space-x-3'}`}>
      {Object.entries(links).map(([platform, url], index) => {
        const IconComponent = getSocialIcon(platform);
        const colorClass = getSocialColor(platform);
        const label = getSocialLabel(platform);
        
        return (
          <motion.div
            key={platform}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={showLabels ? 'flex items-center space-x-3' : ''}
          >
            <motion.a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`${sizes[size]} ${colorClass} bg-gray-200 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl`}
              aria-label={`Follow on ${label}`}
            >
              <IconComponent className={`${iconSizes[size]} text-gray-700 hover:text-white transition-colors duration-300`} />
            </motion.a>
            {showLabels && (
              <span className="text-gray-700 font-medium">{label}</span>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default SocialMediaLinks;