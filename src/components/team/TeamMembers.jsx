import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Users, TrendingUp } from 'lucide-react';
import { TEAM_DATA } from '../../utils/contents';

const TeamMembers = () => {
  const { coachingDirector, technicalAdvisor } = TEAM_DATA;

  const teamMembers = [
    {
      ...coachingDirector,
      icon: Users,
      color: 'from-blue-500 to-blue-600'
    },
    // {
    //   ...technicalAdvisor, 
    //   icon: TrendingUp,
    //   color: 'from-green-500 to-green-600'
    // }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Expert Leadership Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our world-class coaching staff brings decades of elite experience to develop the next generation of football talent
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-6">
                {/* Profile Image */}
                <div className="relative">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover shadow-lg"
                  />
                  <div className={`absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r ${member.color} rounded-full flex items-center justify-center shadow-lg`}>
                    <member.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Member Info */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-lg text-primary-600 font-semibold">{member.position}</p>
                  <p className="text-gray-600">{member.experience}</p>
                  <p className="text-gray-700 leading-relaxed">{member.bio}</p>
                </div>

                {/* Qualifications */}
                <div className="w-full space-y-4">
                  <div className="flex items-center justify-center space-x-2">
                    <Award className="w-5 h-5 text-yellow-500" />
                    <h4 className="text-lg font-semibold text-gray-900">Qualifications</h4>
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    {Object.values(member.qualifications.map((qualification, qIndex) => (
                      <div 
                        key={qIndex}
                        className="flex items-center space-x-3 bg-white rounded-lg p-3 shadow-sm"
                      >
                        <BookOpen className="w-4 h-4 text-primary-600" />
                        <span className="text-sm text-gray-700 font-medium">{qualification}</span>
                      </div>
                    )))}
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