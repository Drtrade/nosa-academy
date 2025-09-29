import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Globe, Users, BookOpen, Target, Heart } from "lucide-react";
import { Owner } from "../../utils/contents";

const VisionAndLegacy = () => {
  const { president } = Owner;

  const visionPoints = [
    {
      icon: Target,
      title: "Discipline & Character",
      description:
        "Talent without discipline and the right attitude is wasted. The academy instills resilience, respect, and leadership qualities in every player.",
    },
    {
      icon: Users,
      title: "Quality Coaching & Training",
      description:
        "Led by licensed coaches, ex-professionals, and technical experts, players receive world-class football education tailored to individual growth.",
    },
    {
      icon: Globe,
      title: "Global Exposure",
      description:
        "Through international competitions, highlight reels, and global partnerships, young players gain visibility and the confidence to perform anywhere in the world.",
    },
    {
      icon: BookOpen,
      title: "Balanced Pathways",
      description:
        "The academy operates two arms: a Foundation-Funded Program that scouts and develops underprivileged talent, and a Professional, Fee-Based Academy offering structured elite training with academic balance.",
    },
  ];

  return (
    <section className="py-12 xs:py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        {/* Vision for Academy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 xs:mb-16 sm:mb-20"
        >
          <div className="text-center mb-8 xs:mb-10 sm:mb-12">
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 xs:mb-4 leading-tight">
              His Vision for the Academy
            </h2>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 max-w-xs xs:max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto px-2 xs:px-0 leading-relaxed">
              <span className="hidden sm:inline">
                Nosa believes in a three-pronged formula for developing great footballers in the near future:
              </span>
              <span className="sm:hidden">
                Nosa's formula for developing great footballers:
              </span>
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl xs:rounded-3xl p-4 xs:p-6 sm:p-8 mb-8 xs:mb-10 sm:mb-12">
            <div className="flex flex-col items-center text-center mb-4 xs:mb-6">
              <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl xs:rounded-2xl flex items-center justify-center mb-3 xs:mb-4 flex-shrink-0">
                <Lightbulb className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="w-full">
                <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-2 xs:mb-3">
                  The Vision
                </h3>
                <p className="text-sm xs:text-base sm:text-lg text-gray-700 leading-relaxed">
                  {president.visionForAcademy}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-6 sm:gap-8">
            {visionPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl xs:rounded-2xl p-4 xs:p-5 sm:p-6 shadow-md xs:shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 xs:w-12 xs:h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg xs:rounded-xl flex items-center justify-center mb-3 xs:mb-4 flex-shrink-0">
                    <point.icon className="w-5 h-5 xs:w-6 xs:h-6 text-white" />
                  </div>
                  <div className="w-full">
                    <h4 className="text-base xs:text-lg sm:text-xl font-bold text-gray-900 leading-tight mb-2 xs:mb-3">
                      {point.title}
                    </h4>
                    <p className="text-sm xs:text-base sm:text-lg text-gray-700 leading-relaxed">
                      {point.description}
                    </p>
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
          className="mb-12 xs:mb-16 sm:mb-20"
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl xs:rounded-3xl p-6 xs:p-8 sm:p-10 md:p-12 text-white">
            <div className="flex flex-col items-center text-center mb-4 xs:mb-6">
              <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-accent-500 to-primary-500 rounded-xl xs:rounded-2xl flex items-center justify-center mb-3 xs:mb-4 flex-shrink-0">
                <Heart className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="w-full">
                <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold mb-4 xs:mb-6 leading-tight">
                  Why I Started the Academy
                </h3>
                <p className="text-sm xs:text-base sm:text-lg md:text-xl leading-relaxed opacity-90">
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
          <div className="text-center mb-8 xs:mb-10 sm:mb-12">
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 xs:mb-4 leading-tight">
              Legacy & Future Vision
            </h2>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 max-w-xs xs:max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto px-2 xs:px-0 leading-relaxed">
              <span className="hidden sm:inline">
                Building upon past achievements to create lasting impact for future generations
              </span>
              <span className="sm:hidden">
                Building lasting impact for future generations
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-10 sm:gap-12">
            {/* Current Legacy */}
            <div className="space-y-4 xs:space-y-6">
              <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-900 mb-3 xs:mb-4 leading-tight">
                Current Legacy
              </h3>
              <div className="bg-blue-50 border border-blue-200 rounded-xl xs:rounded-2xl p-4 xs:p-5 sm:p-6">
                <p className="text-sm xs:text-base sm:text-lg text-blue-900 leading-relaxed">
                  {president.legacyAndVision.currentLegacy}
                </p>
              </div>
            </div>

            {/* Future Vision */}
            <div className="space-y-4 xs:space-y-6">
              <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-900 mb-3 xs:mb-4 leading-tight">
                Future Vision
              </h3>
              <div className="bg-purple-50 border border-purple-200 rounded-xl xs:rounded-2xl p-4 xs:p-5 sm:p-6">
                <p className="text-sm xs:text-base sm:text-lg text-purple-900 leading-relaxed">
                  {president.legacyAndVision.futureVision}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionAndLegacy;