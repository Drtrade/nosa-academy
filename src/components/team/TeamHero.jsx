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
    <section className="pt-[150px] pb-16 bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* President Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              
              <h1 className="text-5xl font-bold text-gray-900">
                Meet Our 
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                  President & Founder
                </span>
              </h1>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">{president.name}</h2>
              <p className="text-xl text-primary-600 font-semibold">"{president.nickname}"</p>
              <p className="text-lg text-gray-600">{president.position}</p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              {president.brief}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/about">
                <Button size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                  Read Full Story
                </Button>
              </Link>
            </div>

            {/* Social Media Links */}
            <div className="pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect with {president.name.split(' ')[0]}</h3>
              <SocialMediaLinks links={president.socialLinks} size="lg" />
            </div>
          </motion.div>

          {/* President Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img 
                src={president.image}
                alt={president.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Floating Achievement Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl max-w-xs"
            >
              <div className="text-3xl font-bold text-primary-600 mb-2">15+</div>
              <div className="text-gray-900 font-semibold">Years Professional</div>
              <div className="text-sm text-gray-600">Elite Football Experience</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamHero;