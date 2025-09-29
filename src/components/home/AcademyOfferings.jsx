import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Heart,
  Building,
  Globe,
  BookOpen,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import { HOME_CONTENT } from "../../utils/contents";

const AcademyOfferings = () => {
  const { whatWeOffer, playerGains } = HOME_CONTENT;

  const getIcon = (iconName) => {
    const icons = {
      Users,
      Heart,
      Building,
      Globe,
      BookOpen,
      TrendingUp,
    };
    return icons[iconName] || Users;
  };

  return (
    <section className="py-12 xs:py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        {/* What We Offer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 xs:mb-12 sm:mb-16"
        >
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 xs:mb-5 sm:mb-6 leading-tight">
            What We Offer
          </h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 max-w-xs xs:max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto px-2 xs:px-0 leading-relaxed">
            <span className="hidden sm:inline">
              Comprehensive development programs designed to nurture every aspect of your football journey
            </span>
            <span className="sm:hidden">
              Development programs designed to nurture every aspect of your football journey
            </span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8 mb-12 xs:mb-16 sm:mb-20">
          {whatWeOffer.map((offering, index) => {
            const IconComponent = getIcon(offering.icon);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl xs:rounded-2xl p-5 xs:p-6 sm:p-8 shadow-md xs:shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl xs:rounded-2xl flex items-center justify-center mb-4 xs:mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-base xs:text-lg sm:text-xl font-bold text-gray-900 mb-3 xs:mb-4 leading-tight">
                  {offering.title}
                </h3>
                <p className="text-sm xs:text-base text-gray-600 leading-relaxed">
                  {offering.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* What Players Gain */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 xs:mb-12 sm:mb-16"
        >
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 xs:mb-5 sm:mb-6 leading-tight">
            What Our Players Gain
          </h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 max-w-xs xs:max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto px-2 xs:px-0 leading-relaxed">
            <span className="hidden sm:inline">
              Four key areas of development that create well-rounded athletes and exceptional individuals
            </span>
            <span className="sm:hidden">
              Key areas of development creating well-rounded athletes and exceptional individuals
            </span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 mb-10 xs:mb-12 sm:mb-16">
          {playerGains.map((gain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl xs:rounded-3xl p-5 xs:p-6 sm:p-8 shadow-md xs:shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-900 mb-3 xs:mb-4 leading-tight">
                {gain.title}
              </h3>
              <p className="text-sm xs:text-base text-gray-600 mb-4 xs:mb-5 sm:mb-6 leading-relaxed">
                {gain.description}
              </p>

              <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 xs:gap-3">
                {gain.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex-shrink-0 mt-1.5 xs:mt-2"></div>
                    <span className="text-xs xs:text-sm text-gray-700 leading-relaxed">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl xs:rounded-3xl p-6 xs:p-8 sm:p-10 md:p-12 text-center text-white"
        >
          <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold mb-3 xs:mb-4 leading-tight">
            Ready to Begin Your Journey?
          </h3>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl mb-6 xs:mb-8 opacity-90 max-w-xs xs:max-w-sm sm:max-w-lg md:max-w-2xl mx-auto px-2 xs:px-0 leading-relaxed">
            <span className="hidden sm:inline">
              Join hundreds of players who have transformed their passion into excellence at Elite Football Academy
            </span>
            <span className="sm:hidden">
              Join players who have transformed their passion into excellence at our academy
            </span>
          </p>
          <div className="flex flex-col gap-3 xs:gap-4 justify-center">
            <Link to="/register" className="w-full xs:w-auto">
              <Button
                variant="secondary"
                size="lg"
                className="w-full xs:w-auto min-w-[280px] xs:min-w-[200px] text-sm xs:text-base py-3 xs:py-4 font-semibold"
              >
                <ArrowRight className="w-4 h-4 xs:w-5 xs:h-5 mr-2" />
                Register Now
              </Button>
            </Link>
            <Link to="/contact" className="w-full xs:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full xs:w-auto min-w-[280px] xs:min-w-[200px] border-white text-white hover:bg-white hover:text-primary-600 text-sm xs:text-base py-3 xs:py-4 font-semibold"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AcademyOfferings;