import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Book, Award, Target, Heart, ChevronDown, ChevronUp } from 'lucide-react';
import { Owner } from '../../utils/contents';

const CompleteBiography = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const { president } = Owner;

  const biographySections = [
    {
      id: 'early-life',
      title: 'Early Life & Youth Career',
      icon: Book,
      content: `${president.completeBiography.earlyLife} ${president.completeBiography.youthCareer}`,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'professional',
      title: 'Professional Career',
      icon: Award,
      content: `${president.completeBiography.professionalBreakthrough} ${president.completeBiography.realMadridChapter} ${president.completeBiography.premierLeagueSuccess}`,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'international',
      title: 'International Career',
      icon: Target,
      content: president.completeBiography.internationalCareer,
      color: 'from-red-500 to-red-600'
    }
  ];

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <section className="py-12 xs:py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 xs:mb-12 sm:mb-16"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-900 mb-3 xs:mb-4 leading-tight">
            Complete Biography
          </h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 max-w-xs xs:max-w-lg sm:max-w-2xl md:max-w-3xl mx-auto px-2 xs:px-0 leading-relaxed">
            <span className="hidden sm:inline">
              The comprehensive story of a football legend's journey from Abuja's streets to global stardom
            </span>
            <span className="sm:hidden">
              The journey from Abuja's streets to global football stardom
            </span>
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl xs:rounded-3xl p-4 xs:p-6 sm:p-8 shadow-md xs:shadow-lg mb-6 xs:mb-8 sm:mb-12"
        >
          <div className="flex items-center mb-4 xs:mb-6">
            <div className="w-10 h-10 xs:w-12 xs:h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mr-3 xs:mr-4 flex-shrink-0">
              <Heart className="w-5 h-5 xs:w-6 xs:h-6 text-white" />
            </div>
            <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
              Introduction
            </h3>
          </div>
          <p className="text-sm xs:text-base sm:text-lg text-gray-700 leading-relaxed">
            {president.introduction}
          </p>
        </motion.div>

        {/* Biography Sections */}
        <div className="space-y-4 xs:space-y-6">
          {biographySections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl xs:rounded-3xl shadow-md xs:shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full p-4 xs:p-6 sm:p-8 text-left hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:bg-gray-50"
                aria-expanded={expandedSection === section.id}
                aria-controls={`section-${section.id}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center min-w-0 flex-1 mr-3">
                    <div className={`w-10 h-10 xs:w-12 xs:h-12 bg-gradient-to-r ${section.color} rounded-full flex items-center justify-center mr-3 xs:mr-4 flex-shrink-0`}>
                      <section.icon className="w-5 h-5 xs:w-6 xs:h-6 text-white" />
                    </div>
                    <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-tight min-w-0">
                      <span className="block xs:hidden">
                        {section.title.includes('&') ? section.title.split(' & ')[0] : section.title}
                      </span>
                      <span className="hidden xs:block">
                        {section.title}
                      </span>
                    </h3>
                  </div>
                  <div className="flex-shrink-0">
                    {expandedSection === section.id ? (
                      <ChevronUp className="w-5 h-5 xs:w-6 xs:h-6 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 xs:w-6 xs:h-6 text-gray-500" />
                    )}
                  </div>
                </div>
              </button>
              
              <motion.div
                id={`section-${section.id}`}
                initial={false}
                animate={{
                  height: expandedSection === section.id ? 'auto' : 0,
                  opacity: expandedSection === section.id ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-4 xs:px-6 sm:px-8 pb-4 xs:pb-6 sm:pb-8">
                  <div className="pt-2 xs:pt-3 sm:pt-4 border-t border-gray-100">
                    <p className="text-sm xs:text-base sm:text-lg text-gray-700 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action - Mobile friendly */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8 xs:mt-12 sm:mt-16"
        >
          <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl xs:rounded-3xl p-6 xs:p-8 text-white">
            <h3 className="text-lg xs:text-xl sm:text-2xl font-bold mb-2 xs:mb-3">
              <span className="hidden xs:inline">Want to Learn More?</span>
              <span className="xs:hidden">Learn More</span>
            </h3>
            <p className="text-sm xs:text-base opacity-90 max-w-lg mx-auto">
              <span className="hidden sm:inline">
                Discover more about our founder's incredible journey and how it shapes our academy's philosophy.
              </span>
              <span className="sm:hidden">
                Discover how our founder's journey shapes our academy.
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompleteBiography;