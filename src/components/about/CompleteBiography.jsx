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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Complete Biography
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The comprehensive story of a football legend's journey from Barcelona's streets to global stardom
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 shadow-lg mb-12"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mr-4">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Introduction</h3>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            {president.introduction}
          </p>
        </motion.div>

        {/* Biography Sections */}
        <div className="space-y-6">
          {biographySections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full p-8 text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 bg-gradient-to-r ${section.color} rounded-full flex items-center justify-center mr-4`}>
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
                  </div>
                  {expandedSection === section.id ? (
                    <ChevronUp className="w-6 h-6 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-500" />
                  )}
                </div>
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: expandedSection === section.id ? 'auto' : 0,
                  opacity: expandedSection === section.id ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-8">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompleteBiography;