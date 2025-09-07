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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-semibold mb-6">
            <Target className="w-4 h-4 mr-2" />
            Our Programs
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Two Paths to Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're seeking opportunity or ready to invest in elite
            development, we have a program designed to unlock your football
            potential.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              {/* Program Image */}
              <div className="relative overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                {/* Program Badge */}
                <div className="absolute top-6 left-6">
                  <div
                    className={`flex items-center space-x-2 px-4 py-2 bg-gradient-to-r ${program.color} rounded-full text-white shadow-lg`}
                  >
                    <program.icon className="w-5 h-5" />
                    <span className="font-semibold">{program.title}</span>
                  </div>
                </div>
              </div>

              {/* Program Content */}
              <div className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {program.title}
                  </h3>
                  <h4 className="text-lg font-semibold text-primary-600 mb-4">
                    {program.subtitle}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {program.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Eligibility */}
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <div className="flex items-center space-x-2 mb-2">
                    <Users className="w-5 h-5 text-primary-600" />
                    <span className="font-semibold text-gray-900">
                      Eligibility
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{program.eligibility}</p>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <Link to="/register">
                    <Button
                      className={`w-full bg-gradient-to-r ${program.color} hover:shadow-lg`}
                      size="lg"
                      icon={<ArrowRight className="w-5 h-5" />}
                    >
                      Apply for {program.title}
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default AcademyPrograms;
