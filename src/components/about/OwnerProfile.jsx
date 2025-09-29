import { motion } from "framer-motion";
import { Trophy, Award, Users, Calendar, Star } from "lucide-react";
import { Owner } from "../../utils/contents";

const OwnerProfile = () => {
  const { president } = Owner;

  const stats = [
    { icon: Calendar, label: "Years Playing", value: "15+" },
    { icon: Trophy, label: "Major Trophies", value: "12" },
    { icon: Users, label: "International Caps", value: "89" },
    {
      icon: Star,
      label: "Goals Scored",
      value: president.playingCareer.goalsScored,
    },
  ];

  return (
    <section className="py-12 xs:py-16 sm:py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50 sm:bg-gradient-to-r sm:from-primary-50 sm:to-accent-500">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-12 sm:gap-16 items-center">

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-1"
          >
            <div className="relative overflow-hidden rounded-2xl xs:rounded-3xl shadow-xl xs:shadow-2xl">
              <img
                src={president.image}
                alt={president.name}
                className="w-full h-full xs:h-80 sm:h-96 md:h-[500px] lg:h-[600px] xl:h-[700px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              
              
            </div>
          </motion.div>

          {/* Profile Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 xs:space-y-8 order-2 lg:order-2"
          >
            <div className="space-y-3 xs:space-y-4">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 xs:mb-4 leading-tight">
                {president.name}
              </h1>
              <p className="text-lg xs:text-xl sm:text-2xl text-primary-600 font-semibold mb-4 xs:mb-6">
                {president.position}
              </p>
              <p className="text-sm xs:text-base sm:text-lg text-gray-700 leading-relaxed">
                {president.introduction}
              </p>
            </div>

            {/* Career Stats - Mobile optimized grid */}
            <div className="grid grid-cols-2 gap-3 xs:gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl xs:rounded-2xl p-4 xs:p-5 sm:p-6 shadow-md xs:shadow-lg text-center"
                >
                  <stat.icon className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-primary-600 mx-auto mb-2 xs:mb-3" />
                  <div className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-900 mb-1 xs:mb-2 leading-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs xs:text-sm text-gray-600 leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Achievements - Commented out but mobile-ready */}
            {/* <div className="space-y-3 xs:space-y-4">
              <h3 className="text-xl xs:text-2xl font-bold text-gray-900">
                Honours
              </h3>
              <div className="grid grid-cols-1 gap-2 xs:gap-3">
                {Owner.achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-2 xs:space-x-3 bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg p-3 xs:p-4"
                  >
                    <Star className="w-4 h-4 xs:w-5 xs:h-5 text-yellow-500 flex-shrink-0" />
                    <span className="font-medium text-gray-900 text-sm xs:text-base leading-tight">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </div> */}

            {/* National Title - Commented out but mobile-ready */}
            {/* <div className="space-y-3 xs:space-y-4">
              <h3 className="text-xl xs:text-2xl font-bold text-gray-900">
                National Titles
              </h3>
              <div className="grid grid-cols-1 gap-2 xs:gap-3">
                {Owner.notionalTitles.map((notionalTitle, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-2 xs:space-x-3 bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg p-3 xs:p-4"
                  >
                    <Award className="w-4 h-4 xs:w-5 xs:h-5 text-yellow-500 flex-shrink-0" />
                    <span className="font-medium text-gray-900 text-sm xs:text-base leading-tight">{notionalTitle}</span>
                  </motion.div>
                ))}
              </div>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OwnerProfile;