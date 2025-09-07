import OwnerProfile from "../components/about/OwnerProfile";
import CompleteBiography from "../components/about/CompleteBiography";
import VisionAndLegacy from "../components/about/VisionAndLegacy";
import SocialMediaLinks from "../components/common/SocialMediaLinks";
import { motion } from "framer-motion";
import { AcademyInfo, Owner } from "../utils/contents";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      <OwnerProfile />
      <CompleteBiography />
      <VisionAndLegacy />

      {/* Achievements Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Career Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive list of honors and recognition earned throughout a
              legendary career
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Owner.achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">
                    {achievement}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white space-y-8"
          >
            <h2 className="text-4xl font-bold mb-4">
              Connect with Nosa Igiebor
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Follow the journey and get insights from a football legend. Stay
              updated with academy news, training tips, and career highlights.
            </p>

            <div className="flex justify-center pt-8">
              <SocialMediaLinks links={Owner.socialLinks} size="xl" />
            </div>

            <p className="text-lg opacity-80 mt-8">
              Join millions of followers across all platforms for exclusive
              content and behind-the-scenes access
            </p>
          </motion.div>
        </div>
      </section>

      {/* Academy Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Training Philosophy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in developing complete players through a holistic
              approach to football education
            </p>
          </motion.div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(TRAINING_PHILOSOPHY).map(([key, value], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 capitalize">
                  {key}
                </h3>
                <p className="text-gray-600">{value}</p>
              </motion.div>
            ))}
          </div> */}
        </div>
      </section>

      {/* Academy Stats */}
      {/* <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-16">
              Academy by the Numbers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  number: `${new Date().getFullYear() - AcademyInfo.foundedYear}+`,
                  label: "Years of Excellence",
                },
                { number: "500+", label: "Active Players" },
                { number: "50+", label: "Professional Graduates" },
                { number: "95%", label: "Success Rate" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-white"
                >
                  <div className="text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
                    {stat.number}
                  </div>
                  <div className="text-xl opacity-90">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default About;
