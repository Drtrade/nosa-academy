import React from 'react';
import { motion } from 'framer-motion';
import { PARTNERS } from '../../utils/contents';

const Partners = () => {
  return (
    <section className="py-12 xs:py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 xs:mb-12 sm:mb-16"
        >
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 xs:mb-4 leading-tight">
            Our Trusted Partners
          </h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 max-w-xs xs:max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto px-2 xs:px-0 leading-relaxed">
            <span className="hidden sm:inline">
              We collaborate with leading sports brands and organizations to provide the best training experience
            </span>
            <span className="sm:hidden">
              We collaborate with leading sports brands for the best training experience
            </span>
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 xs:gap-4 sm:gap-6 md:gap-8">
          {PARTNERS.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg xs:rounded-xl sm:rounded-2xl p-3 xs:p-4 sm:p-5 md:p-6 shadow-md xs:shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center space-y-2 xs:space-y-3 sm:space-y-4"
            >
              <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 flex items-center justify-center">
                <img 
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="text-center min-h-[32px] xs:min-h-[36px] sm:min-h-[40px] flex flex-col justify-center">
                <h3 className="font-bold text-gray-900 text-xs xs:text-sm leading-tight mb-0.5 xs:mb-1">
                  {partner.name}
                </h3>
                <p className="text-[10px] xs:text-xs text-gray-600 leading-tight">
                  {partner.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optional: Add a call-to-action for mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8 xs:mt-10 sm:mt-12"
        >
          <p className="text-xs xs:text-sm text-gray-500">
            <span className="hidden xs:inline">
              Interested in partnering with us? 
            </span>
            <span className="font-medium text-primary-600 hover:text-primary-700 cursor-pointer">
              Get in touch
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;