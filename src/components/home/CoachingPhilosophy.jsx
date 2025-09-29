import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Globe, CheckCircle, Quote } from 'lucide-react';
import { HOME_CONTENT } from '../../utils/contents';

const CoachingPhilosophy = () => {
  const { coachingPhilosophy } = HOME_CONTENT;

  const philosophies = [
    {
      ...coachingPhilosophy.discipline,
      icon: Shield,
      color: 'from-blue-500 to-blue-600',
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      ...coachingPhilosophy.coaching,
      icon: Award,
      color: 'from-green-500 to-green-600',
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      ...coachingPhilosophy.exposure,
      icon: Globe,
      color: 'from-purple-500 to-purple-600',
      image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section className="py-12 xs:py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 xs:mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center px-3 py-1.5 xs:px-4 xs:py-2 bg-primary-100 text-primary-800 rounded-full text-xs xs:text-sm font-semibold mb-4 xs:mb-6">
            <Quote className="w-3 h-3 xs:w-4 xs:h-4 mr-1.5 xs:mr-2" />
            Our Philosophy
          </div>
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 xs:mb-5 sm:mb-6 leading-tight">
            Coaching Philosophy
          </h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 max-w-xs xs:max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto px-2 xs:px-0 leading-relaxed">
            <span className="hidden sm:inline">
              Our approach to development goes beyond technical skills, focusing on building complete players and exceptional human beings through three core pillars.
            </span>
            <span className="sm:hidden">
              Building complete players and exceptional human beings through three core pillars.
            </span>
          </p>
        </motion.div>

        {/* Philosophy Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xs:gap-8 mb-10 xs:mb-12 sm:mb-16">
          {philosophies.map((philosophy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-2xl xs:rounded-3xl shadow-md xs:shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Philosophy Image */}
              <div className="relative overflow-hidden h-40 xs:h-44 sm:h-48">
                <img 
                  src={philosophy.image}
                  alt={philosophy.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Philosophy Icon */}
                <div className="absolute top-3 left-3 xs:top-4 xs:left-4 sm:top-6 sm:left-6">
                  <div className={`w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 bg-gradient-to-r ${philosophy.color} rounded-xl xs:rounded-2xl flex items-center justify-center shadow-md xs:shadow-lg`}>
                    <philosophy.icon className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                </div>
              </div>

              {/* Philosophy Content */}
              <div className="p-4 xs:p-5 sm:p-6 md:p-8 space-y-4 xs:space-y-5 sm:space-y-6">
                <div>
                  <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-900 mb-3 xs:mb-4 leading-tight">
                    {philosophy.title}
                  </h3>
                  <p className="text-sm xs:text-base text-gray-600 leading-relaxed">
                    {philosophy.description}
                  </p>
                </div>

                {/* Philosophy Points */}
                <div className="space-y-2 xs:space-y-3">
                  {philosophy.points.map((point, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * idx }}
                      className="flex items-start space-x-2 xs:space-x-3"
                    >
                      <div className="w-5 h-5 xs:w-6 xs:h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-3 h-3 xs:w-4 xs:h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700 text-xs xs:text-sm leading-relaxed">
                        {point}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Philosophy Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl xs:rounded-3xl p-6 xs:p-8 sm:p-10 md:p-12 text-center text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 to-accent-900/20"></div>
          <div className="relative z-10">
            <Quote className="w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 text-primary-400 mx-auto mb-4 xs:mb-5 sm:mb-6 opacity-50" />
            <blockquote className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 xs:mb-5 sm:mb-6 leading-tight px-2 xs:px-0">
              <span className="hidden sm:inline">
                "Champions are not made in the comfort zone. They are forged through discipline, refined through quality coaching, and divine wisdom of God proven on the global stage."
              </span>
              <span className="sm:hidden">
                "Champions are forged through discipline, refined through quality coaching, and proven on the global stage."
              </span>
            </blockquote>
            <div className="text-sm xs:text-base sm:text-lg opacity-90">
              <span className="font-semibold">Nosa Igiebor</span>
              <span className="mx-1 xs:mx-2">•</span>
              <span className="hidden xs:inline">Founder & President</span>
              <span className="xs:hidden">Founder</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoachingPhilosophy;