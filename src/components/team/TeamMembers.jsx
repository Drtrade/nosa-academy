import React from "react";
import { motion } from "framer-motion";
import { Award, BookOpen, Users, TrendingUp } from "lucide-react";
import { TEAM_DATA } from "../../utils/contents";

const TeamMembers = () => {
  const { coachingDirector, technicalAdvisor } = TEAM_DATA;

  const teamMembers = [
    {
      ...coachingDirector,
      icon: Users,
      color: "from-blue-500 to-blue-600",
    },
    // {
    //   ...technicalAdvisor,
    //   icon: TrendingUp,
    //   color: 'from-green-500 to-green-600'
    // }
  ];

  return (
    <section className="py-12 xs:py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 xs:mb-12 sm:mb-16"
        >
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 xs:mb-4 leading-tight">
            Expert Leadership Team
          </h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 max-w-xs xs:max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto px-2 xs:px-0 leading-relaxed">
            <span className="hidden sm:inline">
              Our world-class coaching staff brings decades of elite experience
              to develop the next generation of football talent
            </span>
            <span className="sm:hidden">
              World-class coaching staff with elite experience developing
              football talent
            </span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 xs:gap-10 sm:gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl xs:rounded-3xl p-6 xs:p-7 sm:p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-4 xs:space-y-5 sm:space-y-6">
                {/* Profile Image */}
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 rounded-full object-cover shadow-md xs:shadow-lg"
                  />
                  <div
                    className={`absolute -bottom-1 -right-1 xs:-bottom-2 xs:-right-2 w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${member.color} rounded-full flex items-center justify-center shadow-md xs:shadow-lg`}
                  >
                    <member.icon className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                </div>

                {/* Member Info */}
                <div className="space-y-2 xs:space-y-3">
                  <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-base xs:text-lg text-primary-600 font-semibold">
                    {member.position}
                  </p>
                  <p className="text-sm sm:text-lg xs:text-base text-gray-600">
                    {member.experience}
                  </p>
                  <p className="text-sm xs:text-base sm:text-lg text-gray-700 leading-relaxed ">
                    {member.bio}
                  </p>
                </div>

                {/* Qualifications */}
                <div className="w-full space-y-3 xs:space-y-4">
                  <div className="flex items-center justify-center space-x-2">
                    <Award className="w-4 h-4 xs:w-5 xs:h-5 text-yellow-500" />
                    <h4 className="text-base xs:text-lg font-semibold text-gray-900">
                      Qualifications
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 gap-2 xs:gap-3">
                    {member.qualifications?.map((qualification, qIndex) => (
                      <div
                        key={qIndex}
                        className="flex items-start space-x-2 xs:space-x-3 bg-white rounded-lg p-3 xs:p-3 shadow-sm"
                      >
                        <BookOpen className="w-3 h-3 xs:w-4 xs:h-4 text-primary-600 flex-shrink-0 mt-0.5" />
                        <span className="text-xs xs:text-sm  text-gray-700 font-medium leading-relaxed">
                          {qualification}
                        </span>
                      </div>
                    )) || []}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
