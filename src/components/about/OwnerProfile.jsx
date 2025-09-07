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
    <section className="py-20 bg-gradient-to-r from-primary-50 to-accent-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={president.image}
                alt={president.name}
                className="w-full h-[700px] object-cover"
              />

              <div className="absolute insert-0 bg-gradient-to-t from-black/50 to to-transparent"></div>
              <div className="absolute button-8 left-8 text-white">
                <h3 className="text-3xl font-bold mb-2">{president.name}</h3>
                <p className="text-xl opacity-90">"{president.nickname}"</p>
              </div>
            </div>
          </motion.div>

          {/* Profile Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                {president.name}
              </h1>
              <p className="text-2xl text-primary-600 font-semibold mb-6">
                {president.position}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {president.introduction}
              </p>
            </div>

            {/* Career Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, value: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg text-center"
                >
                  <stat.icon className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Achievements */}
            {/* <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                Honours
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {Owner.achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-3 bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg p-4"
                  >
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="font-medium text-gray-900">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </div> */}

            {/* National Title */}
            {/* <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                National Titles
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {Owner.notionalTitles.map((notionalTitle, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-3 bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg p-4"
                  >
                    <Award className="w-5 h-5 text-yellow-500" />
                    <span className="font-medium text-gray-900">{notionalTitle}</span>
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
