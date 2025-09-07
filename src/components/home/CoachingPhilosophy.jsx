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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-semibold mb-6">
            <Quote className="w-4 h-4 mr-2" />
            Our Philosophy
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Coaching Philosophy
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our approach to development goes beyond technical skills, focusing on building complete players 
            and exceptional human beings through three core pillars.
          </p>
        </motion.div>

        {/* Philosophy Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {philosophies.map((philosophy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Philosophy Image */}
              <div className="relative overflow-hidden h-48">
                <img 
                  src={philosophy.image}
                  alt={philosophy.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Philosophy Icon */}
                <div className="absolute top-6 left-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${philosophy.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <philosophy.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>

              {/* Philosophy Content */}
              <div className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{philosophy.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{philosophy.description}</p>
                </div>

                {/* Philosophy Points */}
                <div className="space-y-3">
                  {philosophy.points.map((point, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * idx }}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700 text-sm">{point}</span>
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
          className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-center text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 to-accent-900/20"></div>
          <div className="relative z-10">
            <Quote className="w-16 h-16 text-primary-400 mx-auto mb-6 opacity-50" />
            <blockquote className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
              "Champions are not made in the comfort zone. They are forged through discipline, 
              refined through quality coaching, and divine wisdom of God proven on the global stage."
            </blockquote>
            <div className="text-lg opacity-90">
              <span className="font-semibold">Nosa Igiebor</span>
              <span className="mx-2">•</span>
              <span>Founder & President</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoachingPhilosophy;