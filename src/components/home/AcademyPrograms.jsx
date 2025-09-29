import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Trophy,
  CheckCircle,
  ArrowRight,
  Users,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import { HOME_CONTENT } from "../../utils/contents";

const AcademyPrograms = () => {
  const { academyPrograms } = HOME_CONTENT;

  const programs = [
    {
      ...academyPrograms.foundationProgram,
      icon: Heart,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      ...academyPrograms.professionalProgram,
      icon: Trophy,
      image:
        "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="py-12 xs:py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 xs:mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center px-3 py-1.5 xs:px-4 xs:py-2 bg-primary-100 text-primary-800 rounded-full text-xs xs:text-sm font-semibold mb-4 xs:mb-6">
            <Target className="w-3 h-3 xs:w-4 xs:h-4 mr-1.5 xs:mr-2" />
            Our Programs
          </div>
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 xs:mb-5 sm:mb-6 leading-tight">
            Two Paths to Excellence
          </h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 max-w-xs xs:max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto px-2 xs:px-0 leading-relaxed">
            <span className="hidden sm:inline">
              Whether you're seeking opportunity or ready to invest in elite development, we have a program designed to unlock your football potential.
            </span>
            <span className="sm:hidden">
              Whether seeking opportunity or elite development, we have a program to unlock your football potential.
            </span>
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 lg:gap-12 mb-10 xs:mb-12 sm:mb-16">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group bg-white rounded-2xl xs:rounded-3xl shadow-lg xs:shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              {/* Program Image */}
              <div className="relative overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-48 xs:h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                {/* Program Badge */}
                <div className="absolute top-3 left-3 xs:top-4 xs:left-4 sm:top-6 sm:left-6">
                  <div
                    className={`flex items-center space-x-1.5 xs:space-x-2 px-2 py-1 xs:px-3 xs:py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r ${program.color} rounded-full text-white shadow-md xs:shadow-lg`}
                  >
                    <program.icon className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
                    <span className="font-semibold text-xs xs:text-sm sm:text-base">
                      {program.title}
                    </span>
                  </div>
                </div>
              </div>

              {/* Program Content */}
              <div className="p-4 xs:p-5 sm:p-6 md:p-8 space-y-4 xs:space-y-5 sm:space-y-6">
                <div>
                  <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-900 mb-2 xs:mb-3 leading-tight">
                    {program.title}
                  </h3>
                  <h4 className="text-sm xs:text-base sm:text-lg font-semibold text-primary-600 mb-3 xs:mb-4 leading-tight">
                    {program.subtitle}
                  </h4>
                  <p className="text-sm xs:text-base text-gray-600 leading-relaxed">
                    {program.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-2 xs:space-y-3">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-2 xs:space-x-3">
                      <div className="w-5 h-5 xs:w-6 xs:h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-3 h-3 xs:w-4 xs:h-4 text-green-600" />
                      </div>
                      <span className="text-xs xs:text-sm sm:text-base text-gray-700 leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Eligibility */}
                <div className="bg-gray-50 rounded-lg xs:rounded-xl p-3 xs:p-4 border border-gray-100">
                  <div className="flex items-center space-x-2 mb-2">
                    <Users className="w-4 h-4 xs:w-5 xs:h-5 text-primary-600" />
                    <span className="font-semibold text-gray-900 text-sm xs:text-base">
                      Eligibility
                    </span>
                  </div>
                  <p className="text-gray-600 text-xs xs:text-sm leading-relaxed">
                    {program.eligibility}
                  </p>
                </div>

                {/* CTA Button */}
                <div className="pt-2 xs:pt-3 sm:pt-4 flex justify-center">
                  <Link to="/register" className="w-full">
                    <Button
                      className={`w-full bg-gradient-to-r ${program.color} hover:shadow-lg text-sm xs:text-base py-3 xs:py-4 font-semibold`}
                      size="md"
                    >
                      <ArrowRight className="w-4 h-4 xs:w-5 xs:h-5 mr-2" />
                      <span className="hidden xs:inline">Apply for {program.title}</span>
                      <span className="xs:hidden">Apply Now</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optional: Mobile-specific call-to-action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center xs:hidden"
        >
          <p className="text-xs text-gray-500 px-4">
            Have questions about which program is right for you? 
            <Link to="/contact" className="font-medium text-primary-600 hover:text-primary-700 ml-1">
              Contact us
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AcademyPrograms;