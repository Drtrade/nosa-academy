import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from '../common/Button';
import SocialMediaLinks from '../common/SocialMediaLinks';
import { TEAM_DATA } from '../../utils/contents';

const TeamHero = () => {
  const { president } = TEAM_DATA;

  return (
    <section className="pt-20 xs:pt-24 sm:pt-32 md:pt-36 lg:pt-[150px] pb-8 xs:pb-12 sm:pb-16 bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-10 sm:gap-12 items-center">
          {/* President Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 xs:space-y-5 sm:space-y-6 order-2 lg:order-1"
          >
            <div className="space-y-3 xs:space-y-4">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Meet Our 
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                  President & Founder
                </span>
              </h1>
            </div>

            <div className="space-y-2 xs:space-y-3 sm:space-y-4">
              <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                {president.name}
              </h2>
              <p className="text-base xs:text-lg text-gray-600">
                {president.position}
              </p>
            </div>

            <p className="text-sm xs:text-base sm:text-lg text-gray-700 leading-relaxed">
              {president.brief}
            </p>

            <div className="flex flex-col gap-3 xs:gap-4 pt-2 xs:pt-4">
              <Link to="/about" className="w-full xs:w-auto">
                <Button 
                  size="lg" 
                  className="w-full xs:w-auto min-w-[280px] xs:min-w-[200px] text-sm xs:text-base py-3 xs:py-4 font-semibold"
                >
                  <ArrowRight className="w-4 h-4 xs:w-5 xs:h-5 mr-2" />
                  Read Full Story
                </Button>
              </Link>
            </div>

            {/* Social Media Links */}
            <div className="pt-4 xs:pt-6">
              <h3 className="text-base xs:text-lg font-semibold text-gray-900 mb-3 xs:mb-4">
                Connect with {president.name.split(' ')[0]}
              </h3>
              <div className="scale-90 xs:scale-100 origin-left">
                <SocialMediaLinks links={president.socialLinks} size="lg" />
              </div>
            </div>
          </motion.div>

          {/* President Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative overflow-hidden rounded-2xl xs:rounded-3xl shadow-xl xs:shadow-2xl">
              <img 
                src={president.image}
                alt={president.name}
                className="w-full h-full xs:h-50 sm:h-96 md:h-[500px] lg:h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Floating Achievement Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-3 -left-3 xs:-bottom-4 xs:-left-4 sm:-bottom-6 sm:-left-6 bg-white rounded-xl xs:rounded-2xl p-3 xs:p-4 sm:p-6 shadow-lg xs:shadow-xl max-w-[140px] xs:max-w-[160px] sm:max-w-xs"
            >
              <div className="text-xl xs:text-2xl sm:text-3xl font-bold text-primary-600 mb-1 xs:mb-2 leading-none">
                15+
              </div>
              <div className="text-gray-900 font-semibold text-xs xs:text-sm sm:text-base leading-tight">
                Years Professional
              </div>
              <div className="text-[10px] xs:text-xs sm:text-sm text-gray-600 leading-tight">
                <span className="hidden xs:inline">Elite Football Experience</span>
                <span className="xs:hidden">Elite Experience</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamHero;