import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Globe, Users, BookOpen, Target, Heart } from 'lucide-react';
import { Owner } from '../../utils/contents';

const VisionAndLegacy = () => {
  const { president } = Owner;

const visionPoints = [
  {
    icon: Target,
    title: "Discipline & Character",
    description:
      "Talent without discipline and the right attitude is wasted. The academy instills resilience, respect, and leadership qualities in every player."
  },
  {
    icon: Users,
    title: "Quality Coaching & Training",
    description:
      "Led by licensed coaches, ex-professionals, and technical experts, players receive world-class football education tailored to individual growth."
  },
  {
    icon: Globe,
    title: "Global Exposure",
    description:
      "Through international competitions, highlight reels, and global partnerships, young players gain visibility and the confidence to perform anywhere in the world."
  },
  {
    icon: BookOpen,
    title: "Balanced Pathways",
    description:
      "The academy operates two arms: a Foundation-Funded Program that scouts and develops underprivileged talent, and a Professional, Fee-Based Academy offering structured elite training with academic balance."
  }
];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vision for Academy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              His Vision for the Academy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nosa believes in a three-pronged formula for developing great footballers in the near future:
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-8 mb-12">
            <div className="flex items-start mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Vision</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {president.visionForAcademy}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visionPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <point.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{point.title}</h4>
                    <p className="text-gray-600">{point.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Started Academy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white">
            <div className="flex items-start mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-primary-500 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-6">Why I Started the Academy</h3>
                <p className="text-xl leading-relaxed opacity-90">
                  {president.whyStartedAcademy}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Legacy and Future Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Legacy & Future Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building upon past achievements to create lasting impact for future generations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Current Legacy */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Current Legacy</h3>
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                <p className="text-lg text-blue-900 leading-relaxed">
                  {president.legacyAndVision.currentLegacy}
                </p>
              </div>
              
              {/* <h4 className="text-xl font-bold text-gray-900 mt-8 mb-4">Philosophical Approach</h4>
              <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                <p className="text-lg text-green-900 leading-relaxed">
                  {president.legacyAndVision.philosophicalApproach}
                </p>
              </div> */}
            </div>

            {/* Future Vision */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Future Vision</h3>
              <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6">
                <p className="text-lg text-purple-900 leading-relaxed">
                  {president.legacyAndVision.futureVision}
                </p>
              </div>

              {/* <h4 className="text-xl font-bold text-gray-900 mt-8 mb-4">Personal Life</h4>
              <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                <p className="text-lg text-yellow-900 leading-relaxed">
                  {president.personalLife}
                </p>
              </div> */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionAndLegacy;